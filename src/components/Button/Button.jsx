import React from "react";

const Button = ({ text = "Click Me", icon, onClick }) => {
  return (
    <button className="say-hello-btn" onClick={onClick}>
      <span>{text}</span>
      {icon && <img src={icon} alt="button-icon" loading="lazy" decoding="async" />}
    </button>
  );
};

export default Button;
