import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        {/* Top Status & Classification Line */}
        <div className="hero-meta-bar">
          <div className="hero-status">
            <span className="status-indicator" />
            <span className="status-text">Available for full-time &amp; freelance projects</span>
          </div>
          <div className="hero-location-index">
            <span>Kota, IN</span>
          </div>
        </div>

        {/* Balanced Split Grid: Headline + Narrative + Actions on Left | Aligned Visual Card on Right */}
        <div className="hero-details-grid">
          {/* Left Column: Headline, Bio Narrative, Actions & Stack */}
          <div className="hero-narrative-col">
            <div className="hero-headline-block">
              <h1 className="hero-title">
                Full-Stack Developer
                <span className="hero-title-sub">crafting robust web applications &amp; resilient systems.</span>
              </h1>
            </div>

            <p className="hero-narrative-lead">
              I am <strong>Yogesh Meena</strong>, a software developer specializing in modern web architecture.
              I build end-to-end products that balance high performance, clean codebases,
              and thoughtful design across React, Node.js, and MongoDB ecosystems.
            </p>

            <div className="hero-actions-row">
              <a
                href="#projects"
                className="hero-action-primary"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>Explore Selected Work</span>
                <FiArrowDown className="action-icon" />
              </a>

              <a
                href="#contact"
                className="hero-action-secondary"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>Initiate Contact</span>
                <FiArrowUpRight className="action-icon" />
              </a>

             
            </div>

            {/* Quick Spec Matrix under actions */}
            <div className="hero-spec-item">
              <span className="spec-label">Core Stack</span>
              <div className="spec-tags-flow">
                {['TypeScript', 'React 18', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Next.js'].map(tech => (
                  <span key={tech} className="spec-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Profile Image Frame — Perfectly Aligned */}
          <div className="hero-visual-col">
            <div className="hero-photo-card">
              {/* Subtle Corner Markers */}
              <span className="frame-corner fc-tl" />
              <span className="frame-corner fc-tr" />
              <span className="frame-corner fc-bl" />
              <span className="frame-corner fc-br" />

              <div className="hero-photo-viewport">
                {/* Developer Portrait Artwork */}
                <img
                  src="/images/developer-portrait.svg"
                  alt="Yogesh Meena - Full-Stack Developer"
                  className="hero-developer-img"
                  loading="eager"
                />

                {/* Bottom Overlay Pill on Image */}
                <div className="hero-photo-status-pill">
                  <span className="pill-pulse-dot" />
                  <span>Available · Open to Work</span>
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="hero-photo-footer">
                <div className="hp-footer-item">
                  <span className="hp-label">Focus</span>
                  <span className="hp-val">Frontend &amp; Backend Systems</span>
                </div>
                <div className="hp-footer-sep">/</div>
                <div className="hp-footer-item">
                  <span className="hp-label">Discipline</span>
                  <span className="hp-val">Clean Architecture &amp; Type Safety</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }