import numpy as np
import pandas as pd 
import pickle
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import warnings
warnings.filterwarnings('ignore')

# Load data
diabetes = pd.read_csv(
    "C:\\Users\\nayak\\OneDrive\\Desktop\\doc.ai\\app\\datasets\\diabetes_prediction_dataset.csv"
)

# Encode categorical columns
cat_col = diabetes.select_dtypes(include='object').columns
for col in cat_col:
    diabetes[col] = diabetes[col].astype('category').cat.codes

# Split
X = diabetes.drop('diabetes', axis=1)
y = diabetes['diabetes']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Train
lr = LogisticRegression(max_iter=1000)
lr.fit(X_train, y_train)

# Evaluate
pred = lr.predict(X_test)
print("Accuracy:", accuracy_score(y_test, pred))

# 🔥 SAVE MODEL
pickle.dump(lr, open("diabetes_model.pkl", "wb"))
