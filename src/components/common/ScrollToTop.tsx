import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Reveal button once scrolled past 400px
      if (window.scrollY > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      className={`group fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[99] inline-flex items-center gap-1.5 py-2.5 px-3 md:px-3.5 bg-[#121216]/85 backdrop-blur-[14px] border border-white/10 rounded-full text-white cursor-pointer shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)] outline-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:text-[#090a0f] hover:border-white hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_14px_30px_-4px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.2)] ${
        visible
          ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 invisible translate-y-4 scale-[0.94] pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title="Back to top"
    >
      <FiArrowUp className="text-[15px] transition-transform duration-250 ease-out group-hover:-translate-y-0.5" />
      <span className="font-mono text-[10.5px] font-semibold tracking-[0.1em]">TOP</span>
    </button>
  )
}
