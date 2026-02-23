import React, { useEffect, useState } from "react";
import "./Navbar.modules.scss";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <div className="max-header">
          <div className="max-logo">
            <div className="logo">Yogesh</div>
          </div>

          <div className="max-right-items">
            <div className="theme">
              <img src="/sun-theme.svg" />
            </div>
            <Button
              text="Say Hello"
              icon="/arrow-up-right.svg"
              onClick={onclick}
            />
          </div>
        </div>
        <div
          className={`max-hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
        </div>
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
