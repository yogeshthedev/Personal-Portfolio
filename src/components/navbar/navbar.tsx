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
      <nav
        className={`fixed top-0 left-0 right-0 z-[900] h-[var(--nav-h)] transition-all duration-200 ${
          scrolled
            ? 'bg-[#09090b]/95 border-b border-[var(--border-strong)] backdrop-blur-md'
            : 'bg-[#09090b]/80 border-b border-[var(--border)] backdrop-blur-md'
        }`}
      >
        <div className="container h-full flex items-center justify-between gap-8">
          {/* Brand Mark with Unique Geometric Monogram Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 no-underline cursor-pointer"
            onClick={e => { e.preventDefault(); scrollTo('home') }}
          >
            <Logo size={34} className="shrink-0 transition-transform duration-200 group-hover:scale-105" />
            <div className="flex flex-col gap-0.5">
              <span className="font-heading text-[15px] font-bold tracking-[-0.3px] text-white transition-colors duration-150">
                Yogesh Meena
              </span>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--faint)]">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Clean Index Navigation */}
          <div className="hidden min-[901px]:flex items-center gap-7">
            {navLinks.map(({ id, label }, idx) => {
              const isActive = activeSection === id
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`group relative inline-flex items-center gap-1.5 py-1.5 no-underline font-mono text-[11.5px] tracking-[0.04em] transition-colors duration-150 ${
                    isActive ? 'text-white' : 'text-[var(--sub)] hover:text-white'
                  }`}
                  onClick={e => { e.preventDefault(); scrollTo(id) }}
                >
                  <span className={`text-[9.5px] tracking-[0.08em] transition-colors ${isActive ? 'text-[var(--accent)]' : 'text-[var(--faint)]'}`}>
                    0{idx + 1}
                  </span>
                  <span>{label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          {/* Right Action & Mono Links */}
          <div className="flex items-center gap-4">
            <div className="hidden min-[901px]:flex items-center gap-2">
              <a
                href="https://github.com/yogeshthedev"
                target="_blank"
                rel="noreferrer"
                className="w-[34px] h-[34px] rounded-[var(--r1)] border border-[var(--border)] bg-transparent text-[var(--sub)] inline-flex items-center justify-center text-[14px] no-underline transition-all duration-150 hover:text-white hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yogeshthedev"
                target="_blank"
                rel="noreferrer"
                className="w-[34px] h-[34px] rounded-[var(--r1)] border border-[var(--border)] bg-transparent text-[var(--sub)] inline-flex items-center justify-center text-[14px] no-underline transition-all duration-150 hover:text-white hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </div>

            <a
              href="#contact"
              className="group hidden min-[901px]:inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--r1)] border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--text)] font-heading text-[12px] font-medium no-underline transition-all duration-200 hover:border-[var(--bhi)] hover:bg-[#18181d] hover:text-white"
              onClick={e => { e.preventDefault(); scrollTo('contact') }}
            >
              <span>Get in Touch</span>
              <FiArrowUpRight className="text-[13px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              className="min-[901px]:hidden w-9 h-9 bg-transparent border border-[var(--border)] rounded-[var(--r1)] flex flex-col items-center justify-center gap-1.5 cursor-pointer p-0"
              onClick={() => setDrawerOpen(v => !v)}
              aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block w-4 h-[1.5px] bg-[var(--text)] transition-transform duration-200 origin-center ${
                  drawerOpen ? 'translate-y-[3.75px] rotate-45' : ''
                }`}
              />
              <span
                className={`block w-4 h-[1.5px] bg-[var(--text)] transition-transform duration-200 origin-center ${
                  drawerOpen ? '-translate-y-[3.75px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-[var(--nav-h)] left-0 right-0 bottom-0 bg-[#09090b] border-t border-[var(--border)] z-[850] p-8 md:px-[var(--pad)] flex flex-col ${
          drawerOpen ? 'flex' : 'hidden'
        }`}
        aria-hidden={!drawerOpen}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-5">
            {navLinks.map(({ id, label }, idx) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-baseline gap-3 no-underline text-white text-2xl font-bold tracking-[-0.5px] border-b border-[var(--border)] pb-3.5"
                onClick={e => { e.preventDefault(); scrollTo(id) }}
              >
                <span className="font-mono text-xs text-[var(--accent)]">0{idx + 1}</span>
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3.5 pt-6 border-t border-[var(--border)]">
            <div className="flex gap-4">
              <a
                href="https://github.com/yogeshthedev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[13px] text-[var(--sub)] no-underline"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/yogeshthedev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[13px] text-[var(--sub)] no-underline"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
            <p className="font-mono text-[11px] text-[var(--faint)]">Available for full-time &amp; freelance opportunities</p>
          </div>
        </div>
      </div>
    </>
  )
}