import React from "react";

import "./Button.css";

const Button = ({ text, width, height, backgroundColor, link }) => {
  return (
    <a href={link}>
      <button
        type="button"
        style={{
          width,
          height,
          backgroundColor,
        }}
        className="custom-btn"
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
