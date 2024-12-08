import { useState } from 'react'
import '../App.css'

const BMIcalculator = () => {
    const [bmiValue, setBmiValue] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    const handleWeightInputChange = (e) => {
        let value = e.target.value;
        setWeight(value);
    }
    const handleHeightInputchange = (e) => {
        let value = e.target.value;
        setHeight(value);
    }
    const calculateBMI = () => {
        if (!height || !weight ) return;
        let heightVal = (height / 100) * (height / 100);
        let bmiRes = weight/ (heightVal);
        setBmiValue(bmiRes.toFixed(2))
    }
  return (
    <div className="container">
      <div className="row">
        <p>Height (cm):</p>
        <input type="number" min={0} 
        value={height}
        onChange={handleHeightInputchange} />
      </div>
      <div className="row">
        <p>Weight (kg):</p>
        <input type="number" min={0} 
        value={weight}
        onChange={handleWeightInputChange} />
      </div>
      <div className="row">
        <button onClick={() => calculateBMI()}>Calculate BMI</button>
        <h1>Your BMI:</h1>
        <p>{bmiValue}</p>
      </div>
    </div>
  )
}

export default BMIcalculator
