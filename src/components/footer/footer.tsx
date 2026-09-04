'use client'
import Logo from '@/components/common/Logo'

export default function Footer() {
  return (
    <footer>
      <div className="f-brand">
        <Logo size={28} className="f-logo-mark" />
        <div className="f-logo">
          <span>Yogesh Meena</span>
        </div>
      </div>
      <div className="f-copy">© 2025 Yogesh Meena · All rights reserved.</div>
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
