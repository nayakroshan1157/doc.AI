import streamlit as st
import pandas as pd
import pickle
import numpy as np
import os
from datetime import datetime

# PDF Libraries
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle, Spacer, Image
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

# ================== CONFIG ==================
st.set_page_config(page_title="MEDIFLO", layout="centered")

# ================== LOAD MODEL ==================
@st.cache_resource
def load_model():
    try:
        with open("diabetes_model.pkl", "rb") as f:
            package = pickle.load(f)
            # Check if the file is the dictionary package from the training script
            if isinstance(package, dict):
                return package["model"], package["features"]
            # Fallback if it's just the raw model
            return package, None
    except FileNotFoundError:
        return None, None

# Unpack the model and the feature list separately
model_object, saved_feature_names = load_model()

# ================== CSV DOWNLOAD ==================
def get_csv_download(df):
    csv = df.to_csv(index=False).encode()
    return csv

# ================== PDF FUNCTION ==================
def generate_custom_pdf(df, prediction, risk, name, age, gender):
    filename = f"{name}_Diabetes_Report.pdf"
    pdf = SimpleDocTemplate(filename, pagesize=A4, rightMargin=30, leftMargin=30, topMargin=30, bottomMargin=30)
    styles = getSampleStyleSheet()
    elements = []

    title_style = ParagraphStyle("TitleStyle", fontSize=18, textColor=colors.darkblue, alignment=1, spaceAfter=20)
    section_style = ParagraphStyle("SectionStyle", fontSize=12, fontName="Helvetica-Bold", spaceAfter=10, textColor=colors.black)
    label_style = styles["Normal"]

    elements.append(Paragraph("MEDIFLO – Diabetes Prediction Report", title_style))
    
    info_data = [
        [f"Patient Name: {name}", f"Date: {datetime.now().strftime('%d-%m-%Y %H:%M')}"],
        [f"Age: {age}", f"Gender: {gender}"]
    ]
    info_table = Table(info_data, colWidths=[250, 250])
    info_table.setStyle(TableStyle([('TEXTCOLOR', (0,0), (-1,-1), colors.grey), ('FONTSIZE', (0,0), (-1,-1), 10)]))
    elements.append(info_table)
    elements.append(Spacer(1, 20))

    elements.append(Paragraph("Clinical Parameter Details", section_style))
    display_df = df.iloc[0].to_frame().reset_index()
    display_df.columns = ["Parameter", "Value"]
    
    table_data = [["Clinical Parameter", "Result"]] + display_df.values.tolist()
    table = Table(table_data, colWidths=[200, 150]) 
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.darkblue),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
        ("FONTSIZE", (0, 0), (-1, -1), 10),
    ]))
    
    elements.append(table)
    elements.append(Spacer(1, 20))

    result_text = "DIABETES DETECTED" if prediction == 1 else "NO DIABETES DETECTED"
    result_color = colors.red if prediction == 1 else colors.green

    summary_data = [
        [Paragraph(f"<b>Final Diagnosis:</b>", label_style), Paragraph(f"<font color={result_color}><b>{result_text}</b></font>", label_style)],
        [Paragraph(f"<b>Calculated Risk Score:</b>", label_style), f"{risk:.2f}%"]
    ]
    
    summary_table = Table(summary_data, colWidths=[200, 150])
    summary_table.setStyle(TableStyle([('BOX', (0,0), (-1,-1), 1, colors.black), ('BACKGROUND', (0,0), (0,-1), colors.whitesmoke)]))
    elements.append(summary_table)
    
    pdf.build(elements)
    return filename

# ================== UI ==================
st.title("🧬 Blood Sugar Detection System")
tab1, tab2, tab3 = st.tabs(['🩺 Predict', '📂 Bulk Predict', '📊 Model Info'])

with tab1:
    st.subheader("🧑‍⚕️ Patient Details")
    col1, col2 = st.columns(2)
    with col1:
        name = st.text_input("Full Name")
        age = st.number_input("Age", 1, 120, 25)
        gender = st.selectbox("Gender", ["Select", "Male", "Female", "Other"])
    with col2:
        hypertension = st.selectbox("Hypertension", ["Select", "Yes", "No"])
        heart_disease = st.selectbox("Heart Disease", ["Yes", "No"])
        smoking = st.selectbox("Smoking", ["Current", "Never", "No Info"])

    st.divider()
    st.subheader("🧪 Clinical Parameters")
    col3, col4, col5 = st.columns(3)
    with col3: bmi = st.number_input("BMI", 10.0, 60.0, 22.0)
    with col4: hba1c = st.number_input("HbA1c (%)", 3.0, 15.0, 5.0)
    with col5: glucose = st.number_input("Glucose (mg/dL)", 50, 400, 100)

    if st.button("🚀 Analyze Health Risk", use_container_width=True):
        if not name or gender == "Select" or model_object is None:
            st.warning("⚠️ Fill required fields / Load model.")
            st.stop()

        gender_map = {"Male": 1, "Female": 0, "Other": 2}
        smoke_map = {"Current": 0, "Never": 1, "No Info": 2}

        input_data = pd.DataFrame([{
            'age': age, 'gender': gender_map[gender],
            'hypertension': 1 if hypertension == "Yes" else 0,
            'heart_disease': 1 if heart_disease == "Yes" else 0,
            'smoking_history': smoke_map[smoking],
            'bmi': bmi, 'HbA1c_level': hba1c, 'blood_glucose_level': glucose
        }])

        # --- FIX FOR DICT ERROR ---
        if saved_feature_names:
            input_data = input_data[saved_feature_names]
        
        prediction = model_object.predict(input_data)[0]
        prob = model_object.predict_proba(input_data)[0][1]

        st.subheader("📊 Result")
        if prediction == 1:
            st.error(f"🔴 Diabetes Detected ({prob*100:.2f}%)")
        else:
            st.success(f"🟢 No Diabetes ({prob*100:.2f}%)")

        input_data['Prediction'] = prediction
        st.download_button("⬇ Download CSV", get_csv_download(input_data), "prediction.csv")

        try:
            pdf_file = generate_custom_pdf(input_data.drop(columns=['Prediction']), prediction, prob*100, name, age, gender)
            with open(pdf_file, "rb") as f:
                st.download_button("📄 Download PDF Report", f, file_name=f"{name}_report.pdf", mime="application/pdf")
        except Exception as e:
            st.error(f"PDF Error: {e}")

with tab2: st.subheader("📂 Bulk Predict feature coming soon.")
with tab3: st.subheader("📊 Model Information.")