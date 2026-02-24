const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <h2 className="contact-title">Contact</h2>

        <div className="contact-layout">
          <div className="contact-intro">
            <p className="contact-heading">Let’s build something great together.</p>
            <p className="contact-description">
              Open to freelance and full-time web development opportunities. I can help with
              frontend interfaces, backend APIs using Node.js and Express.js, and MongoDB database
              integration.
            </p>

            <a href="mailto:yogeshmee4@gmail.com" className="contact-cta">
              Say Hello →
            </a>
          </div>

          <div className="contact-cards">
            <a href="mailto:yogeshmee4@gmail.com" className="contact-card">
              <p className="label">Email</p>
              <p className="value">yogeshmee4@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <p className="label">LinkedIn</p>
              <p className="value">Connect with me</p>
            </a>

            <a
              href="https://github.com/yogeshthedev"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <p className="label">GitHub</p>
              <p className="value">@yogeshthedev</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;