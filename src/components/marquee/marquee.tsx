'use client'

import { useEffect, useRef } from 'react'
import type { IconType } from 'react-icons'
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript,
  SiTypescript, SiTailwindcss, SiNextdotjs, SiGit, SiHtml5,
} from 'react-icons/si'
import { TbApi, TbStack2 } from 'react-icons/tb'
import { MdOutlineArchitecture } from 'react-icons/md'
import { BsLayoutTextWindowReverse } from 'react-icons/bs'

/* ── Types ─────────────────────────────── */
type MarqueeItem = { label: string; Icon: IconType; color?: string }

/* ── Data with authentic brand colors ──── */
const row1: MarqueeItem[] = [
  { label: 'React',      Icon: SiReact,       color: '#61DAFB' },
  { label: 'Node.js',    Icon: SiNodedotjs,   color: '#68A063' },
  { label: 'MongoDB',    Icon: SiMongodb,     color: '#47A248' },
  { label: 'Express.js', Icon: SiExpress,     color: '#ffffff' },
  { label: 'JavaScript', Icon: SiJavascript,  color: '#F7DF1E' },
  { label: 'TypeScript', Icon: SiTypescript,  color: '#3178C6' },
  { label: 'Next.js',    Icon: SiNextdotjs,   color: '#ffffff' },
  { label: 'Tailwind',   Icon: SiTailwindcss, color: '#06B6D4' },
  { label: 'Git',        Icon: SiGit,         color: '#F05032' },
  { label: 'HTML5',      Icon: SiHtml5,       color: '#E34F26' },
]

const row2: MarqueeItem[] = [
  { label: 'Full-Stack Dev', Icon: TbStack2,                 color: '#38bdf8' },
  { label: 'Frontend Dev',   Icon: BsLayoutTextWindowReverse, color: '#61DAFB' },
  { label: 'Backend Eng',    Icon: SiNodedotjs,               color: '#68A063' },
  { label: 'REST APIs',      Icon: TbApi,                     color: '#F59E0B' },
  { label: 'Architecture',   Icon: MdOutlineArchitecture,     color: '#A855F7' },
  { label: 'MERN Stack',     Icon: SiMongodb,                 color: '#47A248' },
  { label: 'TypeScript',     Icon: SiTypescript,              color: '#3178C6' },
  { label: 'JavaScript',     Icon: SiJavascript,              color: '#F7DF1E' },
  { label: 'Clean Code',     Icon: TbStack2,                 color: '#38bdf8' },
  { label: 'React.js',       Icon: SiReact,                   color: '#61DAFB' },
]

/* ── Track ─────────────────────────────── */
// Renders 4 copies so content always fills even ultra-wide screens.
// CSS animation translates by exactly -50% (2 copies) → seamless.
function Track({
  items,
  dir = 'left',
  duration = '34s',
}: {
  items: MarqueeItem[]
  dir?: 'left' | 'right'
  duration?: string
}) {
  // 4 copies: animate shifts by 2 copies (-50%), so it's always filled
  const copies = [...items, ...items, ...items, ...items]

  return (
    <div className="mq-row">
      <div
        className="mq-track"
        style={{
          animationName: dir === 'left' ? 'mq-left' : 'mq-right',
          animationDuration: duration,
        }}
      >
        {copies.map(({ label, Icon, color }, i) => (
          <span className="mq-item" key={i} style={{ '--item-color': color } as React.CSSProperties}>
            <Icon className="mq-icon" style={{ color }} aria-hidden />
            <span className="mq-label">{label}</span>
            <span className="mq-dot" style={{ backgroundColor: color || 'var(--accent)' }} aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Marquee ────────────────────────────── */
export default function Marquee() {
  return (
    <div className="marquee-bar" aria-hidden="true">
      <Track items={row1} dir="left"  duration="38s" />
      <Track items={row2} dir="right" duration="30s" />
    </div>
  )
}