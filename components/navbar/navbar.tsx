'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'home',     label: 'Home'    },
  { id: 'projects', label: 'Work'    },
  { id: 'about',    label: 'About'   },
  { id: 'contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [drawerOpen,     setDrawerOpen]     = useState(false)
  const [activeSection,  setActiveSection]  = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
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

  // Lock body scroll when drawer is open
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
        {/* Logo */}
        <a
          href="#home"
          className="nav-logo"
          onClick={e => { e.preventDefault(); scrollTo('home') }}
        >
          Yogesh<div className="nav-logo-dot" />
        </a>

        {/* Centre pill — desktop only */}
        <div className="nav-pill">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={e => { e.preventDefault(); scrollTo(id) }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="nav-right">
          {/* Hire Me — desktop only */}
          <a
            href="#contact"
            className="nav-hire"
            onClick={e => { e.preventDefault(); scrollTo('contact') }}
          >
            Hire Me →
          </a>

          {/*
            Burger — mobile only.
            It transforms into an ✕ via CSS when open.
            The separate nav-drawer-close button is REMOVED to avoid duplication.
          */}
          <button
            className={`nav-burger${drawerOpen ? ' open' : ''}`}
            onClick={() => setDrawerOpen(v => !v)}
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer — no close button inside, burger handles it */}
      <div className={`nav-drawer${drawerOpen ? ' open' : ''}`} aria-hidden={!drawerOpen}>
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={e => { e.preventDefault(); scrollTo(id) }}
          >
            {label}
          </a>
        ))}
        <p className="nd-sub">Yogesh Meena · Full-Stack Developer</p>
      </div>
    </>
  )
}