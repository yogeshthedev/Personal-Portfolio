'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'projects', 'about', 'contact']

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      let current = 'home'
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) current = id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
  }, [drawerOpen])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setDrawerOpen(false)
  }

  return (
    <>
      <nav className={`main-nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#home" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('home') }}>
          Yogesh<div className="nav-logo-dot"></div>
        </a>

        <div className="nav-pill">
          {['home', 'projects', 'about', 'contact'].map(sec => (
            <a
              key={sec}
              href={`#${sec}`}
              className={activeSection === sec ? 'active' : ''}
              data-nav={sec}
              onClick={e => { e.preventDefault(); scrollTo(sec) }}
            >
              {sec === 'home' ? 'Home' : sec === 'projects' ? 'Work' : sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a href="#contact" className="nav-hire" onClick={e => { e.preventDefault(); scrollTo('contact') }}>
            Hire Me →
          </a>
          <button
            className={`nav-burger${drawerOpen ? ' open' : ''}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div
        className={`nav-drawer${drawerOpen ? ' open' : ''}`}
      >
        <button className="nav-drawer-close" onClick={() => setDrawerOpen(false)}>✕</button>
        {['home', 'projects', 'about', 'contact'].map(sec => (
          <a key={sec} href={`#${sec}`} onClick={e => { e.preventDefault(); scrollTo(sec) }}>
            {sec === 'home' ? 'Home' : sec === 'projects' ? 'Work' : sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
        <div className="nd-sub">Yogesh Meena · Full-Stack Developer</div>
      </div>
    </>
  )
}
