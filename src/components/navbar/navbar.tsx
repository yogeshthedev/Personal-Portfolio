import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

import Logo from '@/components/common/Logo'

const navLinks = [
  { id: 'home',     label: 'Index'    },
  { id: 'projects', label: 'Selected Work' },
  { id: 'about',    label: 'Profile'  },
  { id: 'contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      let current = 'home'
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45)
          current = id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setDrawerOpen(false)
  }

  return (
    <>
      <nav className={`main-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          {/* Brand Mark with Unique Geometric Monogram Logo */}
          <a
            href="#home"
            className="nav-brand"
            onClick={e => { e.preventDefault(); scrollTo('home') }}
          >
            <Logo size={34} className="nav-logo" />
            <div className="brand-text-col">
              <span className="brand-name">Yogesh Meena</span>
              <span className="brand-title">Full-Stack Engineer</span>
            </div>
          </a>

          {/* Clean Index Navigation */}
          <div className="nav-links-list">
            {navLinks.map(({ id, label }, idx) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-item ${activeSection === id ? 'active' : ''}`}
                onClick={e => { e.preventDefault(); scrollTo(id) }}
              >
                <span className="nav-idx">0{idx + 1}</span>
                <span className="nav-txt">{label}</span>
              </a>
            ))}
          </div>

          {/* Right Action & Mono Links */}
          <div className="nav-meta-col">
            <div className="nav-mono-icons">
              <a
                href="https://github.com/yogeshthedev"
                target="_blank"
                rel="noreferrer"
                className="nav-mono-icon"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yogeshthedev"
                target="_blank"
                rel="noreferrer"
                className="nav-mono-icon"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </div>

            <a
              href="#contact"
              className="nav-cta-btn"
              onClick={e => { e.preventDefault(); scrollTo('contact') }}
            >
              <span>Get in Touch</span>
              <FiArrowUpRight className="cta-icon" />
            </a>

            {/* Mobile Hamburger */}
            <button
              className={`nav-burger${drawerOpen ? ' open' : ''}`}
              onClick={() => setDrawerOpen(v => !v)}
              aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav-drawer${drawerOpen ? ' open' : ''}`} aria-hidden={!drawerOpen}>
        <div className="drawer-inner">
          <div className="drawer-links">
            {navLinks.map(({ id, label }, idx) => (
              <a
                key={id}
                href={`#${id}`}
                className="drawer-link-item"
                onClick={e => { e.preventDefault(); scrollTo(id) }}
              >
                <span className="drawer-idx">0{idx + 1}</span>
                <span className="drawer-label">{label}</span>
              </a>
            ))}
          </div>

          <div className="drawer-footer">
            <div className="drawer-socials">
              <a href="https://github.com/yogeshthedev" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="https://linkedin.com/in/yogeshthedev" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
            <p className="drawer-status">Available for full-time &amp; freelance opportunities</p>
          </div>
        </div>
      </div>
    </>
  )
}