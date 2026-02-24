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
            <p className="about-heading">Frontend Developer crafting clean web experiences</p>

            <p className="about-description">
              I’m <strong>Yogesh Meena</strong>, a frontend developer focused on building modern,
              responsive interfaces with strong attention to detail. I enjoy creating smooth
              interactions, reusable components, and user-friendly products that feel simple and fast.
            </p>

            <div className="about-tray">
              <div className="tray-item">
                <p className="title">Experience</p>
                <p className="value">Frontend Projects</p>
              </div>
              <div className="tray-item">
                <p className="title">Location</p>
                <p className="value">Kota, India</p>
              </div>
              <div className="tray-item">
                <p className="title">Focus</p>
                <p className="value">UI, Motion, React</p>
              </div>
            </div>

            <div className="about-skills">
              <span>React</span>
              <span>JavaScript</span>
              <span>SCSS</span>
              <span>Responsive Design</span>
              <span>GSAP</span>
            </div>
          </div>
        </div>

        <GithubActivity username="yogeshthedev" />
      </div>
    </section>
  );
};

export default About;
