
import MarqueeComponent from "../../components/MarqueComponent/MarqueeComponent";
import Mountain from "../../components/Mountain-design/Mountain";
import "./Hero.modules.scss";

const Hero = () => {
  return (
    <div className="hero-section">

      <MarqueeComponent />
      <div className="main-section">
        <div className="center-hero-img">
          <img src="/hero-img.jpg" alt="Hero Image"></img>

          <div className="tag">
            <span className="mark-icon"></span>
            <span className="mark-text">Aavailable for Work</span>
          </div>
        </div>

        <div className="info-container">
          <div className="info-text">
            <p>Hey! I'm Yogesh Meena.</p>
            <p>I'm a Frontend Developer</p>
            <p>based in Kota, India.</p>
          </div>

          <div className="info-tag">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">React</span>
            <span className="tag">GSAP</span>
            <span className="tag">SCSS</span>
          </div>
        </div>

        <div className="skill-tag">
          <span className="tag">Interactive Design</span>
          <span className="tag">UI/UX</span>
          <span className="tag">Web Experience</span>
          <span className="tag">Responsive Design</span>
          <span className="tag">Branding</span>
          <span className="tag">Portfolio</span>
        </div>
      </div>

      <Mountain />
    </div>
  );
};

export default Hero;
