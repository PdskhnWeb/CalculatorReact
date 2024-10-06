import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const maxLength = 12; // Максимальное количество символов на экране

  // Функция для обновления значения на экране
  const handleClick = (value) => {
    if (input.length < maxLength) {
      setInput((prevInput) => prevInput + value);
    }
  };

  // Функция для вычисления результата
  const calculate = () => {
    try {
      setResult(eval(input)); // Используем eval для простоты
    } catch (error) {
      setResult("Ошибка");
    }
  };

  // Функция для сброса ввода
  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  return (
    <div className="App">
      <h1>Калькулятор</h1>
      <div className="calculator">
        <div className="display">
          <div className="input">{input || "0"}</div>
          {result !== null && <div className="result">= {result}</div>}
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={calculate}>=</button>
          <button onClick={() => handleClick("/")}>/</button>

          <button onClick={clearInput}>С</button>
        </div>
      </div>
    </div>
  );
}

export default App;
