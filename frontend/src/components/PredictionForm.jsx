
import { useState } from "react";
import axios from "axios";

export default function PredictionForm() {
  const [result, setResult] = useState(null);

  const [formData, setFormData] = useState({
    age: "",
    sex: 1,
    cp: 0,
    trestbps: "",
    chol: "",
    fbs: 0,
    restecg: 0,
    thalach: "",
    exang: 0,
    oldpeak: "",
    slope: 1,
    ca: 0,
    thal: 2,
  });

const handleChange = (e) => {
  const value = e.target.value;

  setFormData({
    ...formData,
    [e.target.name]: value === "" ? "" : Number(value),
  });
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/predict",
        formData
      );

      setResult(response.data);
    } catch (err) {
      console.error(err);
      alert("Prediction failed.");
    }
  };

  const Info = ({ text }) => (
    <span
      title={text}
      style={{
        marginLeft: "6px",
        cursor: "help",
        color: "#2563eb",
        fontWeight: "bold",
      }}
    >
      ⓘ
    </span>
  );

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <h2>Patient Information</h2>

        <div>
          <label>
            Age
            <Info text="Patient age in years." />
          </label>
          <input
            type="number"
            name="age"
            min="20"
            max="100"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            Sex
            <Info text="Biological sex of the patient." />
          </label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
          >
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>

        <hr />

        <h2>Heart Symptoms</h2>

        <div>
          <label>
            Chest Pain Type
            <Info text="Type of chest pain experienced by the patient." />
          </label>

          <select
            name="cp"
            value={formData.cp}
            onChange={handleChange}
          >
            <option value="0">Typical Angina</option>
            <option value="1">Atypical Angina</option>
            <option value="2">Non-anginal Pain</option>
            <option value="3">Asymptomatic</option>
          </select>
        </div>

        <div>
          <label>
            Exercise-Induced Angina
            <Info text="Chest pain triggered during exercise." />
          </label>

          <select
            name="exang"
            value={formData.exang}
            onChange={handleChange}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        <hr />

        <h2>Clinical Measurements</h2>

        <div>
          <label>
            Resting Blood Pressure (mmHg)
            <Info text="Blood pressure measured while resting." />
          </label>

          <input
            type="number"
            name="trestbps"
            placeholder="120"
            value={formData.trestbps}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            Cholesterol (mg/dL)
            <Info text="Serum cholesterol level." />
          </label>

          <input
            type="number"
            name="chol"
            placeholder="200"
            value={formData.chol}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            Fasting Blood Sugar
            <Info text="1 means blood sugar > 120 mg/dL." />
          </label>

          <select
            name="fbs"
            value={formData.fbs}
            onChange={handleChange}
          >
            <option value="0">≤ 120 mg/dL</option>
            <option value="1">&gt; 120 mg/dL</option>
          </select>
        </div>

        <div>
          <label>
            Maximum Heart Rate Achieved
            <Info text="Maximum heart rate reached during testing." />
          </label>

          <input
            type="number"
            name="thalach"
            placeholder="150"
            value={formData.thalach}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            ST Depression (Oldpeak)
            <Info text="ST depression induced by exercise relative to rest." />
          </label>

          <input
            type="number"
            step="0.1"
            name="oldpeak"
            placeholder="1.5"
            value={formData.oldpeak}
            onChange={handleChange}
          />
        </div>

        <hr />

        <h2>Diagnostic Results</h2>

        <div>
          <label>
            Resting ECG Result
            <Info text="Electrocardiogram findings at rest." />
          </label>

          <select
            name="restecg"
            value={formData.restecg}
            onChange={handleChange}
          >
            <option value="0">Normal</option>
            <option value="1">ST-T Wave Abnormality</option>
            <option value="2">Left Ventricular Hypertrophy</option>
          </select>
        </div>

        <div>
          <label>
            ST Segment Slope
            <Info text="Slope of peak exercise ST segment." />
          </label>

          <select
            name="slope"
            value={formData.slope}
            onChange={handleChange}
          >
            <option value="0">Upsloping</option>
            <option value="1">Flat</option>
            <option value="2">Downsloping</option>
          </select>
        </div>

        <div>
          <label>
            Number of Major Vessels
            <Info text="Number of major vessels colored by fluoroscopy." />
          </label>

          <select
            name="ca"
            value={formData.ca}
            onChange={handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div>
          <label>
            Thalassemia Type
            <Info text="Blood disorder classification used in diagnosis." />
          </label>

          <select
            name="thal"
            value={formData.thal}
            onChange={handleChange}
          >
            <option value="1">Normal</option>
            <option value="2">Fixed Defect</option>
            <option value="3">Reversible Defect</option>
          </select>
        </div>

        <br />

        <button type="submit">
          Predict Heart Disease Risk
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>
            {result.prediction === 0
              ? "Heart Disease Detected"
              : "No Heart Disease Detected"}
          </h2>

          <h3>
            Confidence: {result.confidence}%
          </h3>
        </div>
      )}
    </div>
  );
}

