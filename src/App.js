import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    if (input.trim() === "") {
      setResult("Error");
      return;
    }
    try {
      const evalResult = eval(input);
      setResult(evalResult);
    } catch {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",  // full viewport height
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ width: "220px" }}>
        <h2 style={{ textAlign: "center" }}>React Calculator</h2>
        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "100%",
            height: "35px",
            marginBottom: "10px",
            padding: "5px",
            fontSize: "16px",
            textAlign: "right",
            boxSizing: "border-box",
          }}
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "5px"
        }}>
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === "C") handleClear();
                else if (btn === "=") handleEqual();
                else handleClick(btn);
              }}
              style={{
                padding: "15px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              {btn}
            </button>
          ))}
        </div>
        <div style={{
          marginTop: "10px",
          minHeight: "25px",
          fontWeight: "bold",
          textAlign: "right",
          fontSize: "16px"
        }}>
          {result}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
