import React from 'react'

interface LogoProps {
  size?: number
  className?: string
}

/**
 * Custom geometric monogram logo for Yogesh Meena.
 * Features an interlocking architectural monogram combining 'Y' and 'M'
 * with a subtle gold ochre accent vertex.
 */
export default function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <div
      className={`brand-logo-mark ${className}`}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        {/* Architectural bounding frame */}
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="8"
          fill="#121216"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1.2"
        />

        {/* Subtle grid corner dots */}
        <circle cx="6" cy="6" r="1" fill="rgba(255,255,255,0.2)" />
        <circle cx="34" cy="6" r="1" fill="rgba(255,255,255,0.2)" />
        <circle cx="6" cy="34" r="1" fill="rgba(255,255,255,0.2)" />
        <circle cx="34" cy="34" r="1" fill="rgba(255,255,255,0.2)" />

        {/* Outer M structure (clean lines) */}
        <path
          d="M10 29V15L20 23L30 15V29"
          stroke="#f4f4f5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner geometric Y stem with accent color */}
        <path
          d="M14 13L20 19L26 13"
          stroke="var(--accent, #e5a93c)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 19V27"
          stroke="var(--accent, #e5a93c)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Central intersection focal vertex dot */}
        <circle cx="20" cy="19" r="2" fill="var(--accent, #e5a93c)" />
      </svg>
    </div>
  )
}
