import streamlit as st

st.set_page_config(page_title="DOC.AI", layout="wide")

# ----- Session simulation -----
if "logged_in" not in st.session_state:
    st.session_state.logged_in = False
if "user_email" not in st.session_state:
    st.session_state.user_email = "user@example.com"

# ----- NAVBAR -----
with st.container():
    col1, col2, col3 = st.columns([2, 4, 3])

    # Logo + Title
    with col1:
        st.image("logo.png", width=50)
        st.markdown("### DOC.<span style='color:#38bdf8'>AI</span>", unsafe_allow_html=True)

    # Menu
    with col2:
        c1, c2, c3 = st.columns(3)
        c1.markdown("**Home**")
        c2.markdown("**About Us**")
        c3.markdown("**Services**")

    # Auth Section
    with col3:
        if st.session_state.logged_in:
            st.markdown(f"👋 Welcome **{st.session_state.user_email}**")

            with st.expander("Menu"):
                st.button("Profile")
                st.button("Your Pages")
                st.button("Earnings")

            if st.button("Logout"):
                st.session_state.logged_in = False
                st.experimental_rerun()
        else:
            if st.button("Login"):
                st.session_state.logged_in = True
                st.experimental_rerun()

st.divider()

st.write("Main Content Area")
