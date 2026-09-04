'use client'
import Logo from '@/components/common/Logo'

import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
        <button type="button" className="f-top-btn" onClick={scrollToTop} aria-label="Back to top">
          <span>Top</span>
          <FiArrowUp className="f-top-icon" />
        </button>
      </nav>
    </footer>
  )
}
