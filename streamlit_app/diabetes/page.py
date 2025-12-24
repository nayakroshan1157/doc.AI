import streamlit as st
import pandas as pd
import pickle
import base64

@st.cache_resource
def load_model():
    with open("diabetes_model.pkl", "rb") as f:
        return pickle.load(f)

model = load_model()

from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Table, TableStyle, Spacer
)
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from datetime import datetime
from reportlab.platypus import Image

def generate_custom_pdf(df, prediction, risk):
    filename = "Diabetes_Report.pdf"
    pdf = SimpleDocTemplate(filename, pagesize=A4)
    styles = getSampleStyleSheet()
    elements = []

    # Custom styles
    title_style = ParagraphStyle(
        "TitleStyle",
        fontSize=18,
        textColor=colors.darkblue,
        alignment=1
    )

    section_style = ParagraphStyle(
        "SectionStyle",
        fontSize=12,
        textColor=colors.black,
        spaceAfter=10,
        fontName="Helvetica-Bold"
    )

    # Title
    elements.insert(0, Image("logo.png", width=80, height=80))
    elements.append(Paragraph("DOC.AI – Diabetes Prediction Report", title_style))
    elements.append(Spacer(1, 12))


    # Prediction summary
    # elements.append(Paragraph("Prediction Summary", section_style))
    names = name
    ages = age
    sex = gender
    # result_text = "Diabetes Detected" if prediction == 1 else "No Diabetes Detected"
    elements.append(Paragraph(
        f"<b>Patient Name:</b> {names}<b> Age:</b> {ages}<b> Sex:</b> {sex}", 
        styles["Normal"]
    ))
    # Date
    elements.append(Paragraph(
        f"Date: {datetime.now().strftime('%d-%m-%Y %H:%M')}",
        styles["Normal"]
    ))
    elements.append(Spacer(1, 12))
    elements.append(Spacer(1, 12))

    # Table
    elements.append(Paragraph("Clinical Parameters", section_style))
    table_data = [df.columns.tolist()] + df.values.tolist()

    table = Table(table_data, colWidths=[120]*len(df.columns))
    table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), colors.lightgrey),
        ("GRID", (0,0), (-1,-1), 1, colors.black),
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
        ("FONT", (0,0), (-1,0), "Helvetica-Bold")
    ]))

    elements.append(table)
    elements.append(Spacer(1, 12))

    # Prediction summary
    elements.append(Paragraph("Prediction Summary", section_style))
    
    result_text = "🔴 Diabetes Detected" if prediction == 1 else " 🟢 No Diabetes Detected"
    elements.append(Paragraph(
        f"<b>Result:</b> {result_text}<br/><b>Risk:</b> {risk:.2f}%",
        styles["Normal"]
    ))
    elements.append(Spacer(1, 12))

    # HbA1c interpretation
    elements.append(Paragraph("HbA1c Interpretation", section_style))
    elements.append(Paragraph(
        "HbA1c reflects average blood glucose over the past 2–3 months. "
        "Values ≥ 6.5% are diagnostic of diabetes.",
        styles["Normal"]
    ))

    # Doctor note
    elements.append(Spacer(1, 20))
    elements.append(Paragraph(
        "Doctor's Conclusion:<br/>"
        "Based on the provided clinical parameters, further evaluation is advised.",
        styles["Normal"]
    ))

    # Doctor signature
    elements.append(Spacer(1, 20))
    elements.append(Paragraph(
        "Dr. AI Consultant\nMBBS, MD",
         styles["Normal"]
    ))


    pdf.build(elements)
    return filename



def get_binary_file_downloader_html(df):
    csv = df.to_csv(index=False)
    b64 = base64.b64encode(csv.encode()).decode()
    return f'<a href="data:file/csv;base64,{b64}" download="Prediction.csv">Download Predictions CSV</a>'

st.title("Blood Sugar Detection")

tab1, tab2, tab3 = st.tabs(['Predict', 'Bulk Predict', 'Model Information'])

with tab1:
    name = st.text_input("Enter your name")
    gender = st.selectbox("Sex", ["-select your gender-","Male", "Female", "Other"])
    age = st.number_input("Age (years)", 0, 150)
    hypertension = st.selectbox("Hypertension", ["","yes", "no"])
    heart_disease = st.selectbox("Heart Disease", ["yes", "no"],index=0)
    smoking_history = st.selectbox("Smoking History", ["current", "never", "no info"],index=0)
    bmi = st.number_input("Body Mass Index", 0.0, 150.0)
    HbA1c_level = st.number_input("HbA1c Level", 0.0, 10.0)
    blood_glucose_level = st.number_input("Blood Glucose Level", 0, 350)

    # Encoding
    gender = 0 if gender == "Female" else 1 if gender == "Male" else 2
    hypertension = 1 if hypertension == "yes" else 0
    
    heart_disease = 1 if heart_disease == "yes" else 0
    smoking_history = 0 if smoking_history == "current" else 1 if smoking_history == "never" else 2

    input_data = pd.DataFrame([{
        'age': age,
        'gender': gender,
        'hypertension': hypertension,
        'heart_disease': heart_disease,
        'smoking_history': smoking_history,
        'bmi': bmi,
        'HbA1c_level': HbA1c_level,
        'blood_glucose_level': blood_glucose_level
    }])


    # 🔥 FORCE FEATURE ORDER (VERY IMPORTANT)
    input_data = input_data[model.feature_names_in_]
    safe_name = name.strip().replace(" ", "_")

    if st.button("Submit"):
     prediction = model.predict(input_data)[0]
     probability = model.predict_proba(input_data)[0][1]

     st.subheader("Result")
     if prediction == 1:
        st.error(f"🔴 Diabetes Detected (Risk: {probability*100:.2f}%)")
     else:
        st.success(f"🟢 No Diabetes (Risk: {probability*100:.2f}%)")

     # Add prediction column
     input_data['Prediction'] = prediction

     st.markdown(
        get_binary_file_downloader_html(input_data),
        unsafe_allow_html=True
     )

    # ✅ Generate PDF
     pdf_file = generate_custom_pdf(
        input_data,
        prediction=prediction,
        risk=probability * 100
     )

     # ✅ Download PDF
     with open(pdf_file, "rb") as f:
        st.download_button(
            "📄 Download Medical Report (PDF)",
            f,
            file_name=f"{safe_name}_Diabetes_Report.pdf",
            mime="application/pdf"
        )
