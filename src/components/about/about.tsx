'use client'
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiHtml5, SiSass, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiGithub, SiVite, SiPostman,
} from 'react-icons/si'
import { FaCss3 } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'
import { FiMapPin, FiCpu, FiLayers, FiShield, FiCode, FiArrowUpRight } from 'react-icons/fi'

/* ── Tech Categories with their authentic brand colors ─────────── */
const techCategories = [
  {
    name: 'Frontend',
    items: [
      { label: 'React',      Icon: SiReact,       color: '#61DAFB' },
      { label: 'Next.js',    Icon: SiNextdotjs,   color: '#ffffff' },
      { label: 'JavaScript', Icon: SiJavascript,  color: '#F7DF1E' },
      { label: 'TypeScript', Icon: SiTypescript,  color: '#3178C6' },
      { label: 'Redux',      Icon: SiRedux,       color: '#764ABC' },
      { label: 'HTML5',      Icon: SiHtml5,       color: '#E34F26' },
      { label: 'CSS3',       Icon: FaCss3,        color: '#1572B6' },
      { label: 'SCSS',       Icon: SiSass,        color: '#CC6699' },
      { label: 'Tailwind',   Icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { label: 'Node.js',    Icon: SiNodedotjs,   color: '#68A063' },
      { label: 'Express.js', Icon: SiExpress,     color: '#ffffff' },
      { label: 'REST APIs',  Icon: TbApi,         color: '#e5a93c' },
    ],
  },
  {
    name: 'Database',
    items: [
      { label: 'MongoDB',    Icon: SiMongodb,     color: '#47A248' },
      { label: 'MySQL',      Icon: SiMysql,       color: '#4479A1' },
      { label: 'PostgreSQL', Icon: SiPostgresql,  color: '#4169E1' },
    ],
  },
  {
    name: 'Tooling',
    items: [
      { label: 'Git',     Icon: SiGit,     color: '#F05032' },
      { label: 'GitHub',  Icon: SiGithub,  color: '#ffffff' },
      { label: 'Vite',    Icon: SiVite,    color: '#646CFF' },
      { label: 'Postman', Icon: SiPostman, color: '#FF6C37' },
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Simple & clear section header */}
        <div className="about-header">
          <span className="label">03 // Profile</span>
          <h2 className="section-h about-title">
            About <em>Me</em>
          </h2>
          <p className="about-subtitle">
            A quick overview of my background, technical skills, and how I build web products.
          </p>
        </div>

        {/* ── Modern Architectural Bento Grid ── */}
        <div className="about-bento-grid">
          {/* Bento Cell 1: Bio Narrative & Engineering Philosophy (Large) */}
          <div className="bento-card bento-hero-card">
            <div className="bento-badge">
              <span className="bento-dot" />
              <span>Developer Statement</span>
            </div>
            <h3 className="bento-hero-heading">
              Building robust web applications from polished UIs to scalable APIs.
            </h3>
            <p className="bento-hero-desc">
              I am <strong>Yogesh Meena</strong>, a Full-Stack Web Developer. I build end-to-end web products
              focusing on clean code architecture, type safety, and seamless responsive design across both client and server.
            </p>
            <div className="bento-hero-tags">
              <span className="bento-tag">Component-Driven</span>
              <span className="bento-tag">RESTful Architecture</span>
              <span className="bento-tag">Modular Systems</span>
            </div>
          </div>

          {/* Bento Cell 2: Live Status & Location Card */}
          <div className="bento-card bento-status-card">
            <div className="bento-card-header">
              <span className="bento-cell-label">Current Availability</span>
              <span className="status-indicator-live" />
            </div>
            <div className="status-headline">Open for Work</div>
            <p className="status-sub">Available for Full-time roles, contracts &amp; freelance projects.</p>
            <div className="location-chip">
              <FiMapPin className="loc-icon" />
              <div>
                <strong>Kota, Rajasthan</strong>
                <span>India · UTC +05:30</span>
              </div>
            </div>
          </div>

          {/* Bento Cell 3: Technical Skills Directory with Authentic Brand Colors */}
          <div className="bento-card bento-skills-card">
            <div className="bento-card-header">
              <span className="bento-cell-label">Technical Ecosystem</span>
              <span className="bento-meta-pill">Brand Colors // Categorized</span>
            </div>

            <div className="bento-stack-categories">
              {techCategories.map(cat => (
                <div key={cat.name} className="bento-cat-row">
                  <span className="bento-cat-name">
                    <span className="cat-slash">/</span> {cat.name}
                  </span>
                  <div className="bento-icons-flow">
                    {cat.items.map(({ label, Icon, color }) => (
                      <div
                        key={label}
                        className="bento-tech-pill"
                        style={{ '--brand-color': color } as React.CSSProperties}
                        title={label}
                      >
                        <Icon className="bento-tech-icon" style={{ color }} />
                        <span className="bento-tech-name">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Cell 4: Core Specialization Pillar */}
          <div className="bento-card bento-pillar-card">
            <div className="pillar-icon-box">
              <FiCpu className="pillar-svg" />
            </div>
            <h4 className="pillar-title">Full-Stack Cohesion</h4>
            <p className="pillar-text">
              Unifying React/TypeScript client frontends with secure Node.js &amp; Express REST backends.
            </p>
          </div>

          {/* Bento Cell 5: Data & Schema Pillar */}
          <div className="bento-card bento-pillar-card">
            <div className="pillar-icon-box">
              <FiLayers className="pillar-svg" />
            </div>
            <h4 className="pillar-title">Data Architecture</h4>
            <p className="pillar-text">
              Designing scalable NoSQL &amp; relational data schemas with MongoDB, PostgreSQL, and MySQL.
            </p>
          </div>

          {/* Bento Cell 6: Engineering Discipline Pillar */}
          <div className="bento-card bento-pillar-card">
            <div className="pillar-icon-box">
              <FiShield className="pillar-svg" />
            </div>
            <h4 className="pillar-title">Reliability &amp; Safety</h4>
            <p className="pillar-text">
              Strict typing, clean modular hierarchy, and optimized asset delivery for minimal latency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}