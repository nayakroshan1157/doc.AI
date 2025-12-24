import streamlit as st
from streamlit_lottie import st_lottie
import json

# ------------------ PAGE CONFIG ------------------
st.set_page_config(
    page_title="DOC.AI",
    layout="wide"
)

# ------------------ LOAD LOTTIE ------------------
def load_lottie(path):
    with open(path, "r") as f:
        return json.load(f)

lottie_ai = load_lottie("AI bot.json")

# ------------------ GLOBAL STYLE ------------------
st.markdown("""
<style>
.hero-title {
    font-size: 48px;
    font-weight: 800;
}
.hero-sub {
    font-size: 18px;
    color: #475569;
}
.section {
    padding: 60px 0;
}
.card {
    background-color: white;
    padding: 24px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
}
.center {
    text-align: center;
}
</style>
""", unsafe_allow_html=True)

# ------------------ HERO SECTION ------------------
col1, col2 = st.columns(2)

with col1:
    st.markdown("""
    <div class="hero-title">
        Intelligent Healthcare <span style="color:#4f46e5">Powered by AI</span>
    </div>
    <p class="hero-sub">
        Doc.AI blends clinical expertise with data science to deliver ethical,
        patient-first solutions for modern healthcare.
    </p>
    """, unsafe_allow_html=True)

    c1, c2 = st.columns(2)
    with c1:
        st.button("For Doctors")
    with c2:
        st.button("For Patients")

with col2:
    st.markdown("""
    <div style="background:#cbd5e1;padding:20px;border-radius:24px;">
        <p style="color:#4f46e5;font-weight:600;">
        “Delivering reliable medical support anytime, anywhere using artificial intelligence.”
        </p>
        <p>by:- Vikramaditya Dash</p>
    </div>
    """, unsafe_allow_html=True)

    st_lottie(lottie_ai, height=250)

# ------------------ DOCTORS SECTION ------------------
st.markdown("<div class='section'>", unsafe_allow_html=True)
st.markdown("<h2 class='center'>For Doctors</h2>", unsafe_allow_html=True)
st.markdown("""
<p class='center hero-sub'>
Tools designed to support clinical decisions, reduce workload,
and improve patient outcomes.
</p>
""", unsafe_allow_html=True)

d1, d2, d3 = st.columns(3)

with d1:
    st.markdown("<div class='card'><h4>AI Diagnosis Support</h4><p>Data-driven insights for faster and accurate diagnosis.</p></div>", unsafe_allow_html=True)
with d2:
    st.markdown("<div class='card'><h4>Clinical Reports Analysis</h4><p>Smart interpretation of lab reports and history.</p></div>", unsafe_allow_html=True)
with d3:
    st.markdown("<div class='card'><h4>Workflow Automation</h4><p>Reduce paperwork and focus on patient care.</p></div>", unsafe_allow_html=True)

st.markdown("</div>", unsafe_allow_html=True)

# ------------------ PATIENTS SECTION ------------------
st.markdown("<div class='section'>", unsafe_allow_html=True)
st.markdown("<h2 class='center'>For Patients</h2>", unsafe_allow_html=True)
st.markdown("""
<p class='center hero-sub'>
Simple, secure, and intelligent tools to help patients manage their health.
</p>
""", unsafe_allow_html=True)

p1, p2, p3 = st.columns(3)

with p1:
    st.markdown("<div class='card'><h4>Health Report Insights</h4><p>Easy-to-understand medical reports.</p></div>", unsafe_allow_html=True)
with p2:
    st.markdown("<div class='card'><h4>Early Risk Prediction</h4><p>AI-driven health risk alerts.</p></div>", unsafe_allow_html=True)
with p3:
    st.markdown("<div class='card'><h4>Doctor Consultation</h4><p>Seamless connection with doctors.</p></div>", unsafe_allow_html=True)

st.markdown("</div>", unsafe_allow_html=True)
