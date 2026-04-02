import pandas as pd
import numpy as np

# Set seed for reproducibility
np.random.seed(42)
n_samples = 100000

# 1. Gender: 0 for Female, 1 for Male (approx 50/50 split)
gender = np.random.choice(['Female', 'Male'], size=n_samples)

# 2. Age: 0 to 80 years
age = np.random.randint(0, 81, size=n_samples)

# 3. Hypertension: 0 or 1 (approx 15% prevalence)
hypertension = np.random.choice([0, 1], size=n_samples, p=[0.85, 0.15])

# 4. Heart Disease: 0 or 1 (approx 5% prevalence)
heart_disease = np.random.choice([0, 1], size=n_samples, p=[0.95, 0.05])

# 5. Smoking History: Random distribution of common statuses
smoking_choices = ['never', 'No Info', 'current', 'former', 'ever', 'not current']
smoking_history = np.random.choice(smoking_choices, size=n_samples)

# 6. BMI: Normal distribution centered around 27
bmi = np.random.normal(27.3, 6.7, size=n_samples).clip(10, 60)

# 7. HbA1c Level: Range 3.5 to 9.0
hba1c_level = np.random.uniform(3.5, 9.0, size=n_samples)

# 8. Blood Glucose Level: Range 80 to 300
blood_glucose_level = np.random.randint(80, 301, size=n_samples)

# 9. Diabetes (Target): Logic-based assignment to make it realistic
# We'll calculate a probability score based on the indicators
prob = (
    (age / 100) * 0.2 + 
    (hypertension * 0.2) + 
    (heart_disease * 0.2) + 
    ((bmi > 30) * 0.1) + 
    ((hba1c_level > 6.5) * 0.4) + 
    ((blood_glucose_level > 200) * 0.3)
)
# Normalize and convert to binary (1 if prob > threshold)
diabetes = (prob + np.random.normal(0, 0.1, n_samples) > 0.8).astype(int)

# Create DataFrame
df = pd.DataFrame({
    'gender': gender,
    'age': age,
    'hypertension': hypertension,
    'heart_disease': heart_disease,
    'smoking_history': smoking_history,
    'bmi': bmi.round(2),
    'HbA1c_level': hba1c_level.round(1),
    'blood_glucose_level': blood_glucose_level,
    'diabetes': diabetes
})

# Save to CSV
df.to_csv('diabetes_prediction_dataset.csv', index=False)
print(f"Successfully generated {n_samples} records and saved to 'diabetes_prediction_dataset.csv'")