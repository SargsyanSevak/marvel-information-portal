import React from "react";
import "./my-button-gray.css";

const MyButtonGray = ({ title, bg, color }) => {
  return (
    <button
      style={{
        background: bg,
        color: color,
      }}
      className="btn_gray"
    >
      {title}
    </button>
  );
};

export default MyButtonGray;
