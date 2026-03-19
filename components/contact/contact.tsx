'use client'

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { IoArrowForward } from 'react-icons/io5'

const links = [
  {
    Icon: HiOutlineMail,
    label: 'Email',
    value: 'yogesh@example.com',
    href: 'mailto:yogesh@example.com',
    hint: 'Best way to reach me',
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    value: '/in/yogeshmeena',
    href: 'https://linkedin.com/in/yogeshmeena',
    hint: "Let's connect professionally",
  },
  {
    Icon: FaGithub,
    label: 'GitHub',
    value: '@yogeshmeena',
    href: 'https://github.com/yogeshmeena',
    hint: 'See my code & projects',
  },
  {
    Icon: FaTwitter,
    label: 'Twitter / X',
    value: '@yogeshmeena',
    href: 'https://twitter.com/yogeshmeena',
    hint: 'Say hello anytime',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="label">Get In Touch</div>

        {/* ── Big headline row ── */}
        <div className="ct-hero">
          <h2 className="ct-h">
            <span className="ct-h-line">
              <span className="ct-h-dim">Let&apos;s</span>
              <span className="ct-h-accent"> Work</span>
            </span>
            <span className="ct-h-solid">Together.</span>
          </h2>

          <div className="ct-hero-right">
            <p className="ct-desc">
              I&apos;m a fresher Full-Stack Developer actively looking for
              <strong> full-time, freelance &amp; internship</strong> opportunities.
              Reach out — I reply within 24 hours.
            </p>
            <div className="ct-avail">
              <span className="ct-avail-dot" />
              <span>Open to work · Available now · Remote-friendly</span>
            </div>
          </div>
        </div>

        <div className="ct-divider" />

        {/* ── Contact links ── */}
        <div className="ct-links">
          {links.map(({ Icon, label, value, href, hint }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="ct-link"
              style={{ '--i': i } as React.CSSProperties}
            >
              <span className="ct-link-num">0{i + 1}</span>

              <span className="ct-link-icon">
                <Icon />
              </span>

              <div className="ct-link-body">
                <span className="ct-link-label">{label}</span>
                <span className="ct-link-value">{value}</span>
              </div>

              <span className="ct-link-hint">{hint}</span>

              <span className="ct-link-arrow">
                <IoArrowForward />
              </span>
            </a>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="ct-bottom">
          <span className="ct-bottom-copy">
            Prefer a direct line?{' '}
            <a href="mailto:yogesh@example.com" className="ct-bottom-link">
              Drop me an email →
            </a>
          </span>
          <span className="ct-bottom-loc">📍 Kota, India</span>
        </div>
      </div>
    </section>
  )
}