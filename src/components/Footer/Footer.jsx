import "./Footer.modules.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
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

        <div className="footer-bottom">
          <p>© 2026 Yogesh Meena</p>
          <a href="#navbar">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;