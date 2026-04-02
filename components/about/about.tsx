'use client'
import { useEffect, useState } from 'react'
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiHtml5, SiSass, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiGithub, SiVite, SiPostman,
} from 'react-icons/si'
import { FaCss3 } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb'

/* ── Brand colours for each icon ─────────── */
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
      { label: 'Node.js',    Icon: SiNodedotjs,   color: '#339933' },
      { label: 'Express.js', Icon: SiExpress,     color: '#ffffff' },
      { label: 'REST APIs',  Icon: TbApi,         color: '#FF6B35' },
    ],
  },
  {
    name: 'Database',
    items: [
      { label: 'MongoDB',    Icon: SiMongodb,    color: '#47A248' },
      { label: 'MySQL',      Icon: SiMysql,      color: '#4479A1' },
      { label: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    name: 'Tools',
    items: [
      { label: 'Git',     Icon: SiGit,     color: '#F05032' },
      { label: 'GitHub',  Icon: SiGithub,  color: '#ffffff' },
      { label: 'Vite',    Icon: SiVite,    color: '#646CFF' },
      { label: 'Postman', Icon: SiPostman, color: '#FF6C37' },
    ],
  },
]

type Day = { date: string; count: number; level: 0|1|2|3|4 }

const GH_USER = 'yogeshthedev' // ← your GitHub username

export default function About() {
  const [total, setTotal] = useState<number | null>(null)

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=last`)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(json => {
        setTotal(
          json.total?.lastYear ??
          (json.contributions as Day[]).reduce((s: number, d: Day) => s + d.count, 0)
        )
      })
      .catch(() => {})
  }, [])

  return (
    <section id="about">
      <div className="container">
        <div className="label">Who I Am</div>
        <h2 className="section-h">
          Building <em>complete</em>
          <br />digital products
        </h2>

        <div className="about-grid">
          {/* Photo */}
          <div className="about-photo">
            <div className="about-photo-frame">
              <div className="about-photo-placeholder">
                <div className="about-photo-emoji">🎌</div>
                <p className="about-photo-caption">Replace with photo</p>
              </div>
            </div>
            <div className="loc-chip">
              <div className="loc-dot" />
              <div className="loc-text">
                <strong>Kota, Rajasthan</strong>
                <span>India · Available Remotely</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="about-bio">
              <h3>I&apos;m <em>Yogesh Meena</em>,<br />a Full-Stack Developer</h3>
              <p>
                I work across both frontend and backend to build modern user interfaces with{' '}
                <strong>React</strong> and robust server-side applications with{' '}
                <strong>Node.js, Express.js, and MongoDB</strong>.
              </p>
              <p>
                My goal is complete, scalable web solutions — from polished UIs to
                production-ready APIs. Open to <strong>freelance and full-time</strong> opportunities.
              </p>
            </div>

            {/* <div className="stats-row">
              <div className="stat-card"><div className="stat-n">15<b>+</b></div><div className="stat-l">Projects</div></div>
              <div className="stat-card"><div className="stat-n">2<b>+</b></div><div className="stat-l">Yrs Exp.</div></div>
              <div className="stat-card">
                <div className="stat-n">{total ?? '—'}</div>
                <div className="stat-l">Contributions</div>
              </div>
            </div> */}

            <div className="about-div" />

            {/* ── Tech Stack ── */}
            <div className="stack-section">
              <p className="stack-heading">Tech Stack</p>
              {techCategories.map(cat => (
                <div key={cat.name} className="stack-cat-row">
                  <div className="stack-cat-label">
                    <span>{cat.name}</span>
                  </div>
                  <div className="stack-icons">
                    {cat.items.map(({ label, Icon, color }) => (
                      <div key={label} className="si-wrap">
                        <div className="si-icon" style={{ '--icon-color': color } as React.CSSProperties}>
                          <Icon />
                        </div>
                        <span className="si-tooltip">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="about-div" />

          </div>
        </div>
      </div>
    </section>
  )
}