from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("heart-disease_rf.pkl")

class Patient(BaseModel):
    age: int
    sex: int
    cp: int
    trestbps: int
    chol: int
    fbs: int
    restecg: int
    thalach: int
    exang: int
    oldpeak: float
    slope: int
    ca: int
    thal: int
@app.get("/")
def home():
    return {"message":"App is running"}

@app.post("/predict")
def predict(patient: Patient):

    features = [[
        patient.age,
        patient.sex,
        patient.cp,
        patient.trestbps,
        patient.chol,
        patient.fbs,
        patient.restecg,
        patient.thalach,
        patient.exang,
        patient.oldpeak,
        patient.slope,
        patient.ca,
        patient.thal
    ]]

    prediction = model.predict(features)[0]

    confidence = max(
        model.predict_proba(features)[0]
    )

    return {
        "prediction": int(prediction),
        "confidence": round(float(confidence) * 100, 2)
    }