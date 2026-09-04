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
  isSecondRow = false,
}: {
  items: MarqueeItem[]
  dir?: 'left' | 'right'
  duration?: string
  isSecondRow?: boolean
}) {
  const copies = [...items, ...items, ...items, ...items]

  return (
    <div className={`overflow-hidden py-2.5 sm:py-3 ${isSecondRow ? 'border-t border-white/[0.04]' : ''}`}>
      <div
        className="flex w-max items-center will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          animationName: dir === 'left' ? 'mq-left' : 'mq-right',
          animationDuration: duration,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {copies.map(({ label, Icon, color }, i) => (
          <span
            className="group/item inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 md:px-6 whitespace-nowrap cursor-default transition-opacity duration-200"
            key={i}
          >
            <Icon
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 opacity-90 transition-all duration-200 ease-out group-hover/item:scale-125 group-hover/item:-rotate-6 group-hover/item:opacity-100"
              style={{ color }}
              aria-hidden
            />
            <span
              className={`font-heading text-[10px] sm:text-[11px] uppercase transition-colors duration-200 group-hover/item:!text-white ${
                isSecondRow
                  ? 'text-white/30 font-semibold tracking-[0.1em]'
                  : 'text-white/60 font-bold tracking-[0.13em]'
              }`}
            >
              {label}
            </span>
            <span
              className="w-[3px] h-[3px] rounded-full shrink-0 ml-1.5 sm:ml-2"
              style={{ backgroundColor: color || 'var(--accent)' }}
              aria-hidden
            />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Marquee ────────────────────────────── */
export default function Marquee() {
  return (
    <div
      className="group relative border-y border-[var(--border)] overflow-hidden p-0 [mask-image:linear-gradient(90deg,transparent_0%,black_4%,black_96%,transparent_100%)]"
      aria-hidden="true"
    >
      <Track items={row1} dir="left" duration="38s" />
      <Track items={row2} dir="right" duration="30s" isSecondRow />
    </div>
  )
}