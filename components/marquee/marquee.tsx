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
type MarqueeItem = { label: string; Icon: IconType }

/* ── Data ──────────────────────────────── */
const row1: MarqueeItem[] = [
  { label: 'React',      Icon: SiReact },
  { label: 'Node.js',    Icon: SiNodedotjs },
  { label: 'MongoDB',    Icon: SiMongodb },
  { label: 'Express.js', Icon: SiExpress },
  { label: 'JavaScript', Icon: SiJavascript },
  { label: 'TypeScript', Icon: SiTypescript },
  { label: 'Next.js',    Icon: SiNextdotjs },
  { label: 'Tailwind',   Icon: SiTailwindcss },
  { label: 'Git',        Icon: SiGit },
  { label: 'HTML5',      Icon: SiHtml5 },
]

const row2: MarqueeItem[] = [
  { label: 'Full-Stack Dev', Icon: TbStack2 },
  { label: 'Frontend Dev',   Icon: BsLayoutTextWindowReverse },
  { label: 'Backend Eng',    Icon: SiNodedotjs },
  { label: 'REST APIs',      Icon: TbApi },
  { label: 'Architecture',   Icon: MdOutlineArchitecture },
  { label: 'MERN Stack',     Icon: SiMongodb },
  { label: 'Open to Work',   Icon: SiReact },
  { label: 'JavaScript',     Icon: SiJavascript },
  { label: 'Full-Stack Dev', Icon: TbStack2 },
  { label: 'Frontend Dev',   Icon: BsLayoutTextWindowReverse },
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
        {copies.map(({ label, Icon }, i) => (
          <span className="mq-item" key={i}>
            <Icon className="mq-icon" aria-hidden />
            <span className="mq-label">{label}</span>
            <span className="mq-dot" aria-hidden />
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