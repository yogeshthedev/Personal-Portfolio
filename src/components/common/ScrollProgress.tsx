'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    /* Sleek Top Ambient Progress Line Only */
    <div
      className="fixed top-0 left-0 h-[2px] z-[1000] pointer-events-none transition-all duration-100 ease-out bg-gradient-to-r from-white/30 via-white/80 to-white shadow-[0_0_8px_rgba(255,255,255,0.35)]"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}
