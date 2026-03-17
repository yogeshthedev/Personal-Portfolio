'use client'
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
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      cur.style.left = mx + 'px'; cur.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const loop = () => {
      rx += (mx - rx) * 0.11; ry += (my - ry) * 0.11
      curR.style.left = rx + 'px'; curR.style.top = ry + 'px'
      requestAnimationFrame(loop)
    }
    loop()

    const hoverEls = document.querySelectorAll('a,button,.proj-card,.hs-item')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => { cur.style.width = '20px'; cur.style.height = '20px'; curR.style.width = '52px'; curR.style.height = '52px' })
      el.addEventListener('mouseleave', () => { cur.style.width = '8px'; cur.style.height = '8px'; curR.style.width = '32px'; curR.style.height = '32px' })
    })

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div id="cur" />
      <div id="curR" />
    </>
  )
}
