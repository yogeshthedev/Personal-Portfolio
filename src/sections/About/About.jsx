import "./About.modules.scss";
const About = () => {
  return (
    <div className="about-section">
      <div className="about-title-container">
        <p className="about-title">About Me</p>
      </div>
      <div className="about-container">
        <div className="about-image">
          <img src="/hero-img.jpg" />
        </div>

        <div className="about-details">
          <p className="about-heading">Hello There</p>

          <p className="about-description">
            I’m <strong>Yogesh</strong> — a passionate Frontend Developer and
            fresher, skilled in HTML, CSS, JavaScript, and React. I enjoy
            building responsive, user-friendly web applications and look forward
            to learning and contributing to real-world projects.
          </p>
          <div className="about-tray">
            <div className="tray1">
              <p className="title"></p>
              <p className="value"></p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
