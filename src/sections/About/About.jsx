import "./About.modules.scss";
import GithubActivity from "../../components/GithubActivity/GithubActivity";
import { GitHubCalendar } from "react-github-calendar";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <h2 className="about-title">About</h2>

        <div className="about-content">
          <div className="about-image">
            <img src="/hero-img.jpg" alt="Yogesh portrait" />
          </div>

          <div className="about-details">
            <p className="about-heading">Full-Stack Web Developer building complete digital products</p>

            <p className="about-description">
              I’m <strong>Yogesh Meena</strong>, a web developer who works across both frontend and
              backend. I build modern user interfaces with React and also develop server-side
              applications using Node.js, Express.js, and MongoDB to deliver complete, scalable web
              solutions.
            </p>

            <div className="about-tray">
              <div className="tray-item">
                <p className="title">Experience</p>
                <p className="value">Full-Stack Projects</p>
              </div>
              <div className="tray-item">
                <p className="title">Location</p>
                <p className="value">Kota, India</p>
              </div>
              <div className="tray-item">
                <p className="title">Focus</p>
                <p className="value">React, Node.js, APIs</p>
              </div>
            </div>

            <div className="about-skills">
              <span>React</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        <GithubActivity username="yogeshthedev" />
      </div>
    </section>
  );
};

export default About;
