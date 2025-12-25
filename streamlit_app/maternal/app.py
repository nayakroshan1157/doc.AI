import numpy as np
import pandas as pd 
import pickle
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import warnings
warnings.filterwarnings('ignore')

# Load data
maternal = pd.read_csv(
    "C:\\Users\\nayak\\OneDrive\\Desktop\\doc.ai\\app\\datasets\\Maternal Health Risk Data Set.csv"
)

# Encode categorical columns
cat_col = maternal.select_dtypes(include='object').columns
for col in cat_col:
    maternal[col] = maternal[col].astype('category').cat.codes

# Split
X = maternal.drop('maternal', axis=1)
y = maternal['maternal']

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
pickle.dump(lr, open("maternal_model.pkl", "wb"))
