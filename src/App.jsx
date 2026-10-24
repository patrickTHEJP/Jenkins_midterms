
import { useState } from "react";
import { add, subtract } from "./calculator";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("10");
  const [secondNumber, setSecondNumber] = useState("5");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("");

  const handleAdd = () => {
    const answer = add(firstNumber, secondNumber);
    setResult(answer);
    setOperation("Addition");
  };

  const handleSubtract = () => {
    const answer = subtract(firstNumber, secondNumber);
    setResult(answer);
    setOperation("Subtraction");
  };

  const handleClear = () => {
    setFirstNumber("10");
    setSecondNumber("5");
    setResult(null);
    setOperation("");
  };

  return (
    <main className="app-container">
      <section className="calculator-card">
        <header className="app-header">
          <h1>React Calculator</h1>
          <p className="app-version">Application Version: 2.0</p>
          <p className="app-description">
            A simple calculator built with React.
          </p>
        </header>

        <div className="calculator-form">
          <div className="input-group">
            <label htmlFor="first-number">First Number</label>
            <input
              id="first-number"
              type="number"
              value={firstNumber}
              onChange={(event) => setFirstNumber(event.target.value)}
              placeholder="Enter first number"
            />
          </div>

          <div className="input-group">
            <label htmlFor="second-number">Second Number</label>
            <input
              id="second-number"
              type="number"
              value={secondNumber}
              onChange={(event) => setSecondNumber(event.target.value)}
              placeholder="Enter second number"
            />
          </div>

          <div className="button-group">
            <button
              type="button"
              className="add-button"
              onClick={handleAdd}
            >
              Add Numbers
            </button>

            <button
              type="button"
              className="subtract-button"
              onClick={handleSubtract}
            >
              Subtract Numbers
            </button>
          </div>

          {result !== null && (
            <section className="result-panel" aria-live="polite">
              <p className="result-operation">{operation} Result</p>
              <p className="result-value">{result}</p>
            </section>
          )}

          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>

        <footer className="app-footer">
          <p>React Calculator &copy; 2026</p>
        </footer>
      </section>
    </main>
  );
}

export default App;
