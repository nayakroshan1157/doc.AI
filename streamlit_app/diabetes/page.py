import streamlit as st
import pandas as pd
import pickle
import base64
from datetime import datetime

# # PDF
# from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle, Spacer, Image
# from reportlab.lib.pagesizes import A4
# from reportlab.lib import colors
# from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

# # ================== CONFIG ==================
# st.set_page_config(page_title="DOC.AI", layout="centered")

# # ================== LOAD MODEL ==================
# @st.cache_resource
# def load_model():
#     with open("diabetes_model.pkl", "rb") as f:
#         return pickle.load(f)

# model = load_model()

# # ================== CSV DOWNLOAD ==================
# def get_csv_download(df):
#     csv = df.to_csv(index=False).encode()
#     return csv

# # ================== PDF FUNCTION ==================
# def generate_custom_pdf(df, prediction, risk, name, age, gender):
#     filename = "Diabetes_Report.pdf"
#     pdf = SimpleDocTemplate(filename, pagesize=A4)
#     styles = getSampleStyleSheet()
#     elements = []

#     title_style = ParagraphStyle(
#         "TitleStyle",
#         fontSize=18,
#         textColor=colors.darkblue,
#         alignment=1
#     )

#     section_style = ParagraphStyle(
#         "SectionStyle",
#         fontSize=12,
#         fontName="Helvetica-Bold",
#         spaceAfter=10
#     )

#     # ✅ Safe logo loading
#     try:
#         elements.append(Image("logo.png", width=60, height=60))
#     except:
#         pass

#     elements.append(Paragraph("DOC.AI – Diabetes Prediction Report", title_style))
#     elements.append(Spacer(1, 12))

#     # Patient info
#     elements.append(Paragraph(
#         f"<b>Name:</b> {name} &nbsp;&nbsp; <b>Age:</b> {age} &nbsp;&nbsp; <b>Gender:</b> {gender}",
#         styles["Normal"]
#     ))

#     elements.append(Paragraph(
#         f"Date: {datetime.now().strftime('%d-%m-%Y %H:%M')}",
#         styles["Normal"]
#     ))

#     elements.append(Spacer(1, 12))

#     # Table
#     elements.append(Paragraph("Clinical Parameters", section_style))

#     table_data = [df.columns.tolist()] + df.values.tolist()
#     table = Table(table_data)

#     table.setStyle(TableStyle([
#         ("BACKGROUND", (0,0), (-1,0), colors.lightgrey),
#         ("GRID", (0,0), (-1,-1), 1, colors.black),
#         ("ALIGN", (0,0), (-1,-1), "CENTER"),
#         ("FONT", (0,0), (-1,0), "Helvetica-Bold")
#     ]))

#     elements.append(table)
#     elements.append(Spacer(1, 12))

#     # Result
#     result_text = "Diabetes Detected" if prediction == 1 else "No Diabetes"

#     elements.append(Paragraph("Prediction Summary", section_style))
#     elements.append(Paragraph(
#         f"<b>Result:</b> {result_text}<br/><b>Risk:</b> {risk:.2f}%",
#         styles["Normal"]
#     ))

#     elements.append(Spacer(1, 12))

#     elements.append(Paragraph(
#         "HbA1c reflects average glucose levels over 2–3 months. "
#         "Values ≥ 6.5% indicate diabetes.",
#         styles["Normal"]
#     ))

#     elements.append(Spacer(1, 20))

#     elements.append(Paragraph(
#         "Doctor's Note: Further clinical validation is recommended.",
#         styles["Normal"]
#     ))

#     pdf.build(elements)
#     return filename

# import streamlit as st
# import pandas as pd
# import pickle
# import base64
# from datetime import datetime

# PDF
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle, Spacer, Image
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

# ================== CONFIG ==================
st.set_page_config(page_title="MEDIFLO", layout="centered")

# ================== LOAD MODEL ==================
@st.cache_resource
def load_model():
    with open("diabetes_model.pkl", "rb") as f:
        return pickle.load(f)

model = load_model()

# ================== CSV DOWNLOAD ==================
def get_csv_download(df):
    csv = df.to_csv(index=False).encode()
    return csv

# ================== PDF FUNCTION ==================
def generate_custom_pdf(df, prediction, risk, name, age, gender):
    filename = "Diabetes_Report.pdf"
    pdf = SimpleDocTemplate(filename, pagesize=A4)
    styles = getSampleStyleSheet()
    elements = []

    title_style = ParagraphStyle(
        "TitleStyle",
        fontSize=18,
        textColor=colors.darkblue,
        alignment=1
    )

    section_style = ParagraphStyle(
        "SectionStyle",
        fontSize=12,
        fontName="Helvetica-Bold",
        spaceAfter=10
    )

    # ✅ Safe logo loading
    try:
        elements.append(Image("logo.png", width=60, height=60))
    except:
        pass

    elements.append(Paragraph("MEDIFLO – Diabetes Prediction Report", title_style))
    elements.append(Spacer(1, 12))

    # Patient info
    elements.append(Paragraph(
        f"<b>Name:</b> {name} &nbsp;&nbsp; <b>Age:</b> {age} &nbsp;&nbsp; <b>Gender:</b> {gender}",
        styles["Normal"]
    ))

    elements.append(Paragraph(
        f"Date: {datetime.now().strftime('%d-%m-%Y %H:%M')}",
        styles["Normal"]
    ))

    elements.append(Spacer(1, 12))

    # Table
    elements.append(Paragraph("Clinical Parameters", section_style))

    table_data = [df.columns.tolist()] + df.values.tolist()
    table = Table(table_data)

    table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), colors.lightgrey),
        ("GRID", (0,0), (-1,-1), 1, colors.black),
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
        ("FONT", (0,0), (-1,0), "Helvetica-Bold")
    ]))

    elements.append(table)
    elements.append(Spacer(1, 12))

    # Result
    result_text = "Diabetes Detected" if prediction == 1 else "No Diabetes"

    elements.append(Paragraph("Prediction Summary", section_style))
    elements.append(Paragraph(
        f"<b>Result:</b> {result_text}<br/><b>Risk:</b> {risk:.2f}%",
        styles["Normal"]
    ))

    elements.append(Spacer(1, 12))

    elements.append(Paragraph(
        "HbA1c reflects average glucose levels over 2–3 months. "
        "Values ≥ 6.5% indicate diabetes.",
        styles["Normal"]
    ))

    elements.append(Spacer(1, 20))

    elements.append(Paragraph(
        "Doctor's Note: Further clinical validation is recommended.",
        styles["Normal"]
    ))

    pdf.build(elements)
    return filename

# ================== UI ==================
st.title("🧬 Blood Sugar Detection System")

tab1, tab2, tab3 = st.tabs(['🩺 Predict', '📂 Bulk Predict', '📊 Model Info'])

# ================== TAB 1 ==================
with tab1:

    st.subheader("🧑‍⚕️ Patient Details")

    col1, col2 = st.columns(2)

    with col1:
        name = st.text_input("Full Name")
        age = st.number_input("Age", 1, 120)
        gender = st.selectbox("Gender", ["Select", "Male", "Female", "Other"])

    with col2:
        hypertension = st.selectbox("Hypertension", ["Select", "Yes", "No"])
        heart_disease = st.selectbox("Heart Disease", ["Yes", "No"])
        smoking = st.selectbox("Smoking", ["Current", "Never", "No Info"])

    st.divider()

    st.subheader("🧪 Clinical Parameters")

    col3, col4, col5 = st.columns(3)

    with col3:
        bmi = st.number_input("BMI", 10.0, 60.0)

    with col4:
        hba1c = st.number_input("HbA1c (%)", 3.0, 15.0)

    with col5:
        glucose = st.number_input("Glucose (mg/dL)", 50, 400)

    st.divider()

    if st.button("🚀 Analyze Health Risk", use_container_width=True):

        # Validation
        if name == "" or gender == "Select" or hypertension == "Select":
            st.warning("⚠️ Please fill all required fields")
            st.stop()

        # Encoding
        gender_map = {"Male": 1, "Female": 0, "Other": 2}
        smoke_map = {"Current": 0, "Never": 1, "No Info": 2}

        input_data = pd.DataFrame([{
            'age': age,
            'gender': gender_map[gender],
            'hypertension': 1 if hypertension == "Yes" else 0,
            'heart_disease': 1 if heart_disease == "Yes" else 0,
            'smoking_history': smoke_map[smoking],
            'bmi': bmi,
            'HbA1c_level': hba1c,
            'blood_glucose_level': glucose
        }])

        input_data = input_data[model.feature_names_in_]

        prediction = model.predict(input_data)[0]
        prob = model.predict_proba(input_data)[0][1]

        st.subheader("📊 Result")

        if prediction == 1:
            st.error(f"🔴 Diabetes Detected ({prob*100:.2f}%)")
        else:
            st.success(f"🟢 No Diabetes ({prob*100:.2f}%)")

        # CSV download
        input_data['Prediction'] = prediction
        st.download_button("⬇ Download CSV", get_csv_download(input_data), "prediction.csv")

        # PDF
        try:
            pdf_file = generate_custom_pdf(
                input_data, prediction, prob*100, name, age, gender
            )

            with open(pdf_file, "rb") as f:
                st.download_button(
                    "📄 Download PDF Report",
                    f,
                    file_name=f"{name}_report.pdf",
                    mime="application/pdf"
                )
        except Exception as e:
            st.error(f"PDF Error: {e}")

# ================== UI ==================
st.title("🧬 Blood Sugar Detection System")

tab1, tab2, tab3 = st.tabs(['🩺 Predict', '📂 Bulk Predict', '📊 Model Info'])

# ================== TAB 1 ==================
with tab1:

    st.subheader("🧑‍⚕️ Patient Details")

    col1, col2 = st.columns(2)

    with col1:
        name = st.text_input("Full Name")
        age = st.number_input("Age", 1, 120)
        gender = st.selectbox("Gender", ["Select", "Male", "Female", "Other"])

    with col2:
        hypertension = st.selectbox("Hypertension", ["Select", "Yes", "No"])
        heart_disease = st.selectbox("Heart Disease", ["Yes", "No"])
        smoking = st.selectbox("Smoking", ["Current", "Never", "No Info"])

    st.divider()

    st.subheader("🧪 Clinical Parameters")

    col3, col4, col5 = st.columns(3)

    with col3:
        bmi = st.number_input("BMI", 10.0, 60.0)

    with col4:
        hba1c = st.number_input("HbA1c (%)", 3.0, 15.0)

    with col5:
        glucose = st.number_input("Glucose (mg/dL)", 50, 400)

    st.divider()

    if st.button("🚀 Analyze Health Risk", use_container_width=True):

        # Validation
        if name == "" or gender == "Select" or hypertension == "Select":
            st.warning("⚠️ Please fill all required fields")
            st.stop()

        # Encoding
        gender_map = {"Male": 1, "Female": 0, "Other": 2}
        smoke_map = {"Current": 0, "Never": 1, "No Info": 2}

        input_data = pd.DataFrame([{
            'age': age,
            'gender': gender_map[gender],
            'hypertension': 1 if hypertension == "Yes" else 0,
            'heart_disease': 1 if heart_disease == "Yes" else 0,
            'smoking_history': smoke_map[smoking],
            'bmi': bmi,
            'HbA1c_level': hba1c,
            'blood_glucose_level': glucose
        }])

        input_data = input_data[model.feature_names_in_]

        prediction = model.predict(input_data)[0]
        prob = model.predict_proba(input_data)[0][1]

        st.subheader("📊 Result")

        if prediction == 1:
            st.error(f"🔴 Diabetes Detected ({prob*100:.2f}%)")
        else:
            st.success(f"🟢 No Diabetes ({prob*100:.2f}%)")

        # CSV download
        input_data['Prediction'] = prediction
        st.download_button("⬇ Download CSV", get_csv_download(input_data), "prediction.csv")

        # PDF
        try:
            pdf_file = generate_custom_pdf(
                input_data, prediction, prob*100, name, age, gender
            )

            with open(pdf_file, "rb") as f:
                st.download_button(
                    "📄 Download PDF Report",
                    f,
                    file_name=f"{name}_report.pdf",
                    mime="application/pdf"
                )
        except Exception as e:
            st.error(f"PDF Error: {e}")