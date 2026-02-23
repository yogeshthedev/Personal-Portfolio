import React from "react";
import "./Button.modules.scss";

const Button = ({ text = "Click Me", icon, onClick }) => {
  return (
    <button className="say-hello-btn" onClick={onClick}>
      <span>{text}</span>
      {icon && <img src={icon} alt="button-icon" />}
    </button>
  );
};

export default Button;
