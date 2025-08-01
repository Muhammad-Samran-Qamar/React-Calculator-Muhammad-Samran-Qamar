// Calculator.js
import React, { useState } from "react";
import Button from "./Button";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
    
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="calculator">
      <input type="text" value={input}   readOnly className="display" />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button key={index} label={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
