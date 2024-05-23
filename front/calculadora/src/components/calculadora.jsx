import { useState } from 'react';
import '../App.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (number) => {
    if (displayValue === '0') {
      setDisplayValue(number);
      setCurrentValue(number);
    } else {
      setDisplayValue(displayValue + number);
      setCurrentValue(currentValue + number);
    }
  };

  const handleOperatorClick = (op) => {
    if (operator !== '') {
      handleCalculate();
    }
    setCurrentValue('');
    setOperator(op);
    setDisplayValue(displayValue + ' ' + op + ' ');
  };

  const handleCalculate = () => {
    const num1 = parseFloat(displayValue.split(operator)[0]);
    const num2 = parseFloat(currentValue);
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }
    setDisplayValue(result.toString());
    setCurrentValue('');
    setOperator('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setCurrentValue('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={() => handleCalculate()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
