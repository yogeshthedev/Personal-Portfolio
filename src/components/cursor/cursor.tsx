import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const isTouch = window.matchMedia('(hover:none)').matches || 'ontouchstart' in window
    if (isTouch) return

    document.body.classList.add('has-cursor')
    const cur = document.getElementById('cur')
    const curR = document.getElementById('curR')
    if (!cur || !curR) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number
    let moving = false

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cur.style.transform = 'translate3d(' + mx + 'px, ' + my + 'px, 0) translate(-50%, -50%)'
      if (!moving) {
        moving = true
        rafId = requestAnimationFrame(loop)
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const loop = () => {
      const dx = mx - rx
      const dy = my - ry
      rx += dx * 0.15
      ry += dy * 0.15
      curR.style.transform = 'translate3d(' + rx + 'px, ' + ry + 'px, 0) translate(-50%, -50%)'

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        rafId = requestAnimationFrame(loop)
      } else {
        moving = false
      }
    }

    const onHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target && target.closest('a, button, .project-unified-card')) {
        cur.classList.add('cur-hover')
        curR.classList.add('curR-hover')
      } else {
        cur.classList.remove('cur-hover')
        curR.classList.remove('curR-hover')
      }
    }
    window.addEventListener('mouseover', onHover, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onHover)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div id="cur" />
      <div id="curR" />
    </>
  )
}
