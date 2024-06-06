import { useState } from "react";

const App = () => {
  /* Estados iniciales 
    1. Info del display
    2. Primer valor
    3. Operador utilizado
    4. Nos permite saber si ya se igualó la operación
  */

  const [display, setDisplay] = useState("0");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [newNumber, setNewNumber] = useState(false);

  const handleButtonClick = (value) => {
    // Ejecutamos clear() con "C"
    if (value === "C") {
      clear();

      // Ejecutamos calculate() con "="
    } else if (value === "=") {
      calculate();

      // Actualizamos el estado operator con el operador elegido
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (firstValue === null) {
        setFirstValue(Number(display));
      } else if (!newNumber) {
        calculate();
      }
      setOperator(value);
      setNewNumber(true);

      // Si se están ingresando más números, se encadenan y evitamos que ponga 2 puntos seguidos
    } else {
      if (newNumber) {
        setDisplay(value);
        setNewNumber(false);
      } else {
        if (value === "." && display.includes(".")) return;
        setDisplay(display === "0" ? value : display + value);
      }
    }
  };

  /* Función para resetear los estados con el botón "C" */
  const clear = () => {
    setDisplay("0");
    setFirstValue(null);
    setOperator(null);
    setNewNumber(false);
  };

  const calculate = () => {
    if (operator && firstValue !== null && !newNumber) {
      const currentValue = Number(display);
      let result = undefined;

      switch (operator) {
        case "+":
          result = firstValue + currentValue;
          break;
        case "-":
          result = firstValue - currentValue;
          break;
        case "*":
          result = firstValue * currentValue;
          break;
        case "/":
          result = firstValue / currentValue;
          break;

        default:
          return;
      }

      setDisplay(result.toString());
      setFirstValue(result);
      setOperator(null);
      setNewNumber(true);
    }
  };

  return (
    <div>
      <input type="text" value={display} readOnly />
      <div>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("C")}>C</button>
      </div>
    </div>
  );
};

export default App;
