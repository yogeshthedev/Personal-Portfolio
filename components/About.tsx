'use client'
import { useEffect, useRef } from 'react'

const techStack = ['React', 'Node.js', 'JavaScript', 'Express.js', 'MongoDB', 'REST APIs', 'Redux', 'HTML5', 'CSS3', 'SCSS', 'Git', 'Responsive Design']

const ghPalette = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
const weights = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3]

function randomCell() {
  return ghPalette[weights[Math.floor(Math.random() * weights.length)]]
}

export default function About() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    gridRef.current.innerHTML = ''
    for (let w = 0; w < 52; w++) {
      for (let d = 0; d < 7; d++) {
        const c = document.createElement('div')
        c.className = 'cc'
        c.style.background = randomCell()
        gridRef.current.appendChild(c)
      }
    }
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
          {/* Photo column */}
          <div className="about-photo">
            <div className="about-photo-frame">
              <div className="about-photo-placeholder">
                <div className="about-photo-emoji">🎌</div>
                <p className="about-photo-caption">
                  Replace with photo
                </p>
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

          {/* Content column */}
          <div className="about-content">
            <div className="about-bio">
              <h3>I&apos;m <em>Yogesh Meena</em>,<br />a Full-Stack Developer</h3>
              <p>
                I work across both frontend and backend to build modern user interfaces with{' '}
                <strong>React</strong> and robust server-side applications with{' '}
                <strong>Node.js, Express.js, and MongoDB</strong>.
              </p>
              <p>
                My goal is complete, scalable web solutions — from polished UIs to production-ready APIs.
                Open to <strong>freelance and full-time</strong> opportunities.
              </p>
            </div>

            <div className="stats-row">
              <div className="stat-card"><div className="stat-n">15<b>+</b></div><div className="stat-l">Projects</div></div>
              <div className="stat-card"><div className="stat-n">2<b>+</b></div><div className="stat-l">Yrs Exp.</div></div>
              <div className="stat-card"><div className="stat-n">322</div><div className="stat-l">Contributions</div></div>
            </div>

            <div className="about-div" />

            <div>
              <div className="stack-label">Tech Stack</div>
              <div className="stack-pills">
                {techStack.map((t, i) => (
                  <span key={t} className={`pill${i < 2 ? ' hi' : ''}`}>{t}</span>
                ))}
              </div>
            </div>

            <div className="about-div" />

            <div className="gh-block">
              <div className="gh-head">
                <span className="gh-title">GitHub Activity</span>
                <a href="https://github.com/yogeshthedev" className="gh-link" target="_blank" rel="noreferrer">
                  @yogeshthedev →
                </a>
              </div>
              <div className="gh-sub">322 contributions in the last year</div>
              <div className="contrib-outer">
                <div className="contrib-grid" ref={gridRef} />
              </div>
              <div className="gh-legend">
                <span>Less</span>
                <div className="gh-legend-cells">
                  {ghPalette.map(c => <div key={c} className="cc" style={{ background: c }} />)}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
