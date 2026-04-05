import pandas as pd
import pickle
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import os

# 1. Load data
file_path = r"C:\Users\nayak\OneDrive\Desktop\doc.ai\app\datasets\diabetes_prediction_dataset.csv"
df = pd.read_csv(file_path)

# 2. Encoding Categorical Data (Gender and Smoking History)
# Using LabelEncoder to keep track of the mapping
le = LabelEncoder()
for col in df.select_dtypes(include='object').columns:
    df[col] = le.fit_transform(df[col])
    print(f"Encoded {col}: {list(le.classes_)}")

# 3. Split Data
X = df.drop('diabetes', axis=1)
y = df['diabetes']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 4. Train Model 
# Using class_weight='balanced' because diabetes datasets are usually imbalanced
model = LogisticRegression(max_iter=2000, class_weight='balanced')
model.fit(X_train, y_train)

# 5. Save Model and Feature Names
# Saving feature names ensures the Streamlit app always sends data in the right order
model_package = {
    "model": model,
    "features": list(X.columns)
}

# Save to the specific folder where your Streamlit app lives
output_path = r"C:\Users\nayak\OneDrive\Desktop\doc.ai\streamlit_app\diabetes\diabetes_model.pkl"
os.makedirs(os.path.dirname(output_path), exist_ok=True)

with open(output_path, "wb") as f:
    pickle.dump(model_package, f)

print(f"✅ Diabetes Model Saved Successfully!")
print(f"Features used: {list(X.columns)}")