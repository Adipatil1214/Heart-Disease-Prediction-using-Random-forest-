# Heart Disease Prediction Web Application

A full-stack Machine Learning web application that predicts the likelihood of heart disease using a trained Random Forest Classifier.

The application provides a user-friendly interface where users can enter clinical information and receive an instant prediction along with the model's confidence score.

## Features

* Heart disease risk prediction
* Random Forest machine learning model
* React frontend
* FastAPI backend
* Real-time prediction results
* Confidence score display
* Medical field descriptions with tooltips
* Dropdown menus for categorical medical attributes
* REST API integration

---

## Tech Stack

### Frontend

* React
* Vite
* Axios

### Backend

* FastAPI
* Uvicorn

### Machine Learning

* Scikit-Learn
* Joblib
* Random Forest Classifier

---

## Project Structure

```text
heart-disease-predictor/

frontend/
│
├── src/
├── public/
├── package.json
└── vite.config.js

backend/
│
├── main.py
├── heart_model.pkl
└── requirements.txt

README.md
.gitignore
```

---

## How It Works

1. User enters patient information through the React interface.
2. The frontend sends the data to the FastAPI backend.
3. FastAPI loads the trained Random Forest model.
4. The model predicts whether heart disease is present.
5. The prediction and confidence score are returned to the frontend.
6. The result is displayed to the user.

---

## Input Features

The model uses the following clinical features:

* Age
* Sex
* Chest Pain Type
* Resting Blood Pressure
* Cholesterol
* Fasting Blood Sugar
* Resting ECG Result
* Maximum Heart Rate Achieved
* Exercise-Induced Angina
* ST Depression (Oldpeak)
* ST Segment Slope
* Number of Major Vessels
* Thalassemia Type

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd heart-disease-predictor
```

---

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Start the backend:

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

API Documentation:

```text
http://localhost:8000/docs
```

---

### Frontend Setup

```bash
cd frontend

npm install
```

Start the frontend:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## API Endpoint

### Predict Heart Disease

```http
POST /predict
```

Example Request:

```json
{
  "age": 63,
  "sex": 1,
  "cp": 3,
  "trestbps": 145,
  "chol": 233,
  "fbs": 1,
  "restecg": 0,
  "thalach": 150,
  "exang": 1,
  "oldpeak": 2.3,
  "slope": 1,
  "ca": 2,
  "thal": 3
}
```

Example Response:

```json
{
  "prediction": 0,
  "confidence": 92.41
}
```

---

## Model Information

The application uses a pre-trained Random Forest Classifier developed using the Heart Disease Dataset.

The model was trained, evaluated, and exported using Joblib before being integrated into the FastAPI backend for real-time predictions.

---

## Future Improvements

* User authentication
* Prediction history
* Database integration
* Cloud deployment
* Explainable AI visualizations
* Mobile-responsive dashboard

---

## Author

Aditya Patil

