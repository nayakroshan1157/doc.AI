import pandas as pd
import pickle
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import os

# 1. Load data
csv_path = r"C:\Users\nayak\OneDrive\Desktop\doc.ai\app\datasets\Maternal Health Risk Data Set.csv"
maternal = pd.read_csv(csv_path)

# 2. Identify target (Handling 'RiskLevel' or 'maternal')
target_col = 'RiskLevel' if 'RiskLevel' in maternal.columns else 'maternal'

# 3. Encode and Split
maternal[target_col] = maternal[target_col].astype('category').cat.codes
X = maternal.drop(target_col, axis=1)
y = maternal[target_col]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Train
model = LogisticRegression(max_iter=2000)
model.fit(X_train, y_train)

# 5. Save (Simplified)
# This will save it directly in the folder where you run the script
with open("maternal_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ Model trained and saved as maternal_model.pkl")                     