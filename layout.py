import streamlit as st

# ---------------- PAGE CONFIG (metadata) ----------------
st.set_page_config(
    page_title="Doc.AI",
    page_icon="🧠",
    layout="wide"
)

# ---------------- GLOBAL CSS (globals.css replacement) ----------------
st.markdown("""
<style>
body {
    font-family: 'Inter', sans-serif;
}
.main-bg {
    background-color: #0ea5e9;
    min-height: 87vh;
    padding: 20px;
}
.footer {
    background-color: #020617;
    color: white;
    padding: 20px;
    text-align: center;
}
.navbar {
    background-color: #020617;
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-links a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
    font-weight: 500;
}
</style>
""", unsafe_allow_html=True)

# ---------------- SESSION WRAPPER (SessionWrapper) ----------------
if "logged_in" not in st.session_state:
    st.session_state.logged_in = False

# ---------------- NAVBAR COMPONENT ----------------
def navbar():
    st.markdown("""
    <div class="navbar">
        <div style="color:white;font-size:24px;font-weight:800;">
            DOC.<span style="color:#38bdf8;">AI</span>
        </div>
        <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
        </div>
    </div>
    """, unsafe_allow_html=True)

# ---------------- FOOTER COMPONENT ----------------
def footer():
    st.markdown("""
    <div class="footer">
        © 2025 DOC.AI • AI-powered healthcare solutions
    </div>
    """, unsafe_allow_html=True)

# # ---------------- ROOT LAYOUT ----------------
app()

# ----------- MAIN CONTENT AREA (children) -----------
st.markdown("<div class='main-bg'>", unsafe_allow_html=True)

st.title("Welcome to DOC.AI")
st.write(
    "AI-powered consultation and early disease prediction for smarter healthcare"
)

if not st.session_state.logged_in:
    if st.button("Login"):
        st.session_state.logged_in = True
        st.success("Logged in successfully")
else:
    st.success("You are logged in")
    if st.button("Logout"):
        st.session_state.logged_in = False

st.markdown("</div>", unsafe_allow_html=True)

footer()
