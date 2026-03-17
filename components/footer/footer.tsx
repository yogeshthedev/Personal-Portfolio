'use client'

export default function Footer() {
  return (
    <footer>
      <div className="f-logo">
        Yogesh<div className="f-logo-dot" />
      </div>
      <div className="f-copy">© 2024 Yogesh Meena · All rights reserved.</div>
      <nav className="f-links">
        {['home', 'projects', 'about', 'contact'].map(sec => (
          <a
            key={sec}
            href={`#${sec}`}
            className="f-link"
            onClick={e => { e.preventDefault(); document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            {sec === 'projects' ? 'Work' : sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
      </nav>
    </footer>
  )
}
