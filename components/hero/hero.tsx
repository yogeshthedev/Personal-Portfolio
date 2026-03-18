'use client'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-1" />
      <div className="hero-glow glow-2" />
      <div className="hero-glow glow-3" />

      <div className="hero-body">
        {/* Left text */}
        <div className="hero-left">
          <div className="hero-eyebrow fu">
            <div className="hero-avail">
              <div className="dot-live" />
              Available for Work
            </div>
            <div className="hero-loc">Kota, India</div>
          </div>

          <h1 className="hero-h fu d1">
            <span className="word-dim">Full</span>
            {' '}
            <span className="word-accent">Stack</span>
            <span className="word-solid">Dev.</span>
          </h1>

          <div className="hero-role fu d2">React · Node.js · MongoDB</div>

          <p className="hero-desc fu d3">
            Hey, I&apos;m <strong>Yogesh Meena</strong> — a Full-Stack Web Developer who crafts complete
            digital products. From pixel-perfect frontends to rock-solid APIs, I build things that{' '}
            <strong>work beautifully</strong>.
          </p>

          <div className="btn-row fu d4">
            <a href="#projects" className="btn-p" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View My Work
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a href="#contact" className="btn-o" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Let&apos;s Talk
            </a>
          </div>

        </div>

        {/* Right avatar */}
        <div className="hero-right fu d2">
          <div className="orbit-ring">
            <div className="orbit-dot" />
          </div>
          <div className="orbit-ring-2" />

          <div className="av-card">
            <span className="av-emoji">🎌</span>
            <span className="av-hint">Replace with your photo</span>
            <div className="av-namecard">
              <div className="av-name">Yogesh Meena</div>
              <div className="av-title">Full-Stack Developer</div>
            </div>
          </div>

          <div className="stat-chip sc-1">
            <div className="sc-val">15<b>+</b></div>
            <div className="sc-lbl">Projects Done</div>
          </div>
          <div className="stat-chip sc-2">
            <div className="sc-val">2<b>+</b></div>
            <div className="sc-lbl">Years Exp.</div>
          </div>
          <div className="stat-chip sc-3">
            <div className="sc-open-wrap">
              <span className="sc-open-dot" />
              <div>
                <div className="sc-val sc-open-title">Open to Work</div>
                <div className="sc-lbl">Full-time / Freelance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="hero-stats fu d6">
        {[
          { num: '15', sup: '+', lbl: 'Projects Completed' },
          { num: '2', sup: '+', lbl: 'Years of Experience' },
          { num: '322', sup: '', lbl: 'GitHub Contributions' },
          { num: '∞', sup: '', lbl: 'Lines of Code' },
        ].map(s => (
          <div className="hs-item" key={s.lbl}>
            <div className="hs-num">{s.num}{s.sup && <b>{s.sup}</b>}</div>
            <div className="hs-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
