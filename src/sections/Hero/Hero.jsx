
import MarqueeComponent from "../../components/MarqueComponent/MarqueeComponent";
import Mountain from "../../components/Mountain-design/Mountain";

const Hero = () => {
  return (
    <div className="hero-section" id="home">

      <MarqueeComponent />
      <div className="main-section" >
        <div className="center-hero-img">
          <img
            src="/hero-img.jpg"
            alt="Hero Image"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          ></img>

          <div className="tag">
            <span className="mark-icon"></span>
            <span className="mark-text">Aavailable for Work</span>
          </div>
        </div>

        <div className="info-container">
          <div className="info-text">
            <p>Hey! I&apos;m Yogesh Meena.</p>
            <p>I&apos;m a Full-Stack Web Developer</p>
            <p>based in Kota, India.</p>
          </div>

          <div className="info-tag">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">Express.js</span>
            <span className="tag">MongoDB</span>
          </div>
        </div>

        <div className="skill-tag">
          <span className="tag">Frontend Development</span>
          <span className="tag">Backend Development</span>
          <span className="tag">REST APIs</span>
          <span className="tag">Database Design</span>
          <span className="tag">Responsive Design</span>
          <span className="tag">Clean Architecture</span>
        </div>
      </div>

      <Mountain />
    </div>
  );
};

export default Hero;
