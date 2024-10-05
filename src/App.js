import { useState } from "react";
import "./App.css";

function App() {
  let [weight, setWeight] = useState();
  let [height, setHeight] = useState();
  let [bmi, setBmi] = useState("");
  let [message, setMessage] = useState("");

  let calBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter value ");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are healthy weight");
      } else {
        setMessage("you are unhealthy weight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI calculaator</h2>

        <form onSubmit={calBmi}>
          <div>
            <label>weight</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>height</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div className="btn">
            <button type="submit" className="btn-submit">
              submit
            </button>
            <button type="sunmit" className="button-42" onClick={reload}>
              reload
            </button>
          </div>

          <div>
            <h3>your bmi is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
