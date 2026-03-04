"use client";

import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const footerElement = footerRef.current;
    if (!footerElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToTop(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(footerElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section" ref={footerRef}>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-kicker">Portfolio</p>
            <h2>Yogesh Meena</h2>
            <p className="footer-copy">
              Full-stack web developer building modern frontend experiences with reliable backend systems.
            </p>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <p className="col-title">Navigation</p>
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-col">
              <p className="col-title">Connect</p>
              <a href="mailto:yogeshmee4@gmail.com">yogeshmee4@gmail.com</a>
              <a href="https://github.com/yogeshthedev" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

      
      </div>

      <button
        type="button"
        className={`back-to-top-floating ${showBackToTop ? "visible" : ""}`}
        onClick={handleBackToTop}
        aria-label="Back to top"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className="back-to-top-icon"
        >
          <path d="M12 5l-6 6h4v8h4v-8h4z" fill="currentColor" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;