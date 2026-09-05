'use client'
import Logo from '@/components/common/Logo'

import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="px-[var(--pad)] py-6 sm:py-9 2xl:py-10 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between flex-wrap gap-3 md:gap-4 text-center md:text-left">
      <div className="flex items-center gap-2.5">
        <Logo size={28} className="shrink-0" />
        <div className="font-heading text-base font-bold -tracking-[0.02em] text-white">
          <span>Yogesh Meena</span>
        </div>
      </div>
      <div className="font-['JetBrains_Mono',monospace] text-[11px] text-[var(--sub)]">
        © 2025 Yogesh Meena · All rights reserved.
      </div>
      <nav className="flex items-center justify-center gap-5 flex-wrap">
        {['home', 'projects', 'about', 'contact'].map(sec => (
          <a
            key={sec}
            href={`#${sec}`}
            className="font-['JetBrains_Mono',monospace] text-[11px] text-[var(--sub)] no-underline uppercase tracking-[0.1em] transition-colors duration-200 hover:text-white"
            onClick={e => { e.preventDefault(); document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            {sec === 'projects' ? 'Work' : sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
        <button
          type="button"
          className="inline-flex items-center gap-1.5 bg-transparent border border-[var(--border)] py-1 px-2.5 rounded-[var(--r1)] text-[var(--sub)] font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-[0.1em] cursor-pointer transition-all duration-200 hover:text-white hover:border-[var(--bhi)] hover:bg-[var(--bg-elevated)]"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span>Top</span>
          <FiArrowUp className="text-[11px]" />
        </button>
      </nav>
    </footer>
  )
}
