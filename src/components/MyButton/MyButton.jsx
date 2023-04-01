import React from "react";
import "./my-button.css";

const MyButton = ({ title, bg, color }) => {
  return (
    <button
      style={{
        background: bg,
        color: color,
      }}
      className="btn"
    >
      {title}
    </button>
  );
};

export default MyButton;
