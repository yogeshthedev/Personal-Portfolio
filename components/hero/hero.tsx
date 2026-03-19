'use client'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-1" />
      <div className="hero-glow glow-2" />
      <div className="hero-glow glow-3" />

      <div className="hero-body">
        {/* ── Left text ── */}
        <div className="hero-left">
          <div className="hero-eyebrow fu">
            <div className="hero-avail">
              <div className="dot-live" />
              Available for Work
            </div>
            {/* <div className="hero-loc">Kota, India</div> */}
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
            <a
              href="#projects"
              className="btn-p"
              onClick={e => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-o"
              onClick={e => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Let&apos;s Talk
            </a>
          </div>

          <div className="hero-stack fu d5">
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'TypeScript'].map(t => (
              <span key={t} className={`s-pill${['React', 'Node.js'].includes(t) ? ' hi' : ''}`}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Photo frame ── */}
        <div className="hero-right fu d2">
          {/* Decorative corner accents */}
          <span className="frame-corner fc-tl" />
          <span className="frame-corner fc-tr" />
          <span className="frame-corner fc-bl" />
          <span className="frame-corner fc-br" />

          {/* Photo placeholder — swap <div.photo-placeholder> for <img> when ready */}
          <div className="photo-wrap">
            <div className="photo-placeholder">
              <svg className="ph-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
                <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="ph-label">Add your photo here</span>
            </div>
          </div>

          {/* Name badge — floats bottom-left of the photo */}
          <div className="photo-badge">
            <div className="pb-dot" />
            <div>
              <div className="pb-name">Yogesh Meena</div>
              <div className="pb-title">Full-Stack Developer</div>
            </div>
          </div>

          {/* Floating tag: Learning */}
          <div className="float-tag ft-top">
            <span className="ft-icon">🚀</span>
            <div>
              <div className="ft-main">Always Learning</div>
              <div className="ft-sub">Open to opportunities</div>
            </div>
          </div>

          {/* Floating tag: Stack */}
          <div className="float-tag ft-bottom">
            <span className="ft-icon">💻</span>
            <div>
              <div className="ft-main">MERN Stack</div>
              <div className="ft-sub">Frontend &amp; Backend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}