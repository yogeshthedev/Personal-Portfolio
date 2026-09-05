'use client'
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiHtml5, SiSass, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiGithub, SiVite, SiPostman,
} from 'react-icons/si'
import { FaCss3 } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'
import { FiCpu, FiLayers, FiShield } from 'react-icons/fi'

/* ── Tech Categories with their authentic brand colors ─────────── */
const techCategories = [
  {
    name: 'Frontend',
    items: [
      { label: 'React',      Icon: SiReact,       color: '#61DAFB' },
      { label: 'Next.js',    Icon: SiNextdotjs,   color: '#ffffff' },
      { label: 'JavaScript', Icon: SiJavascript,  color: '#F7DF1E' },
      { label: 'TypeScript', Icon: SiTypescript,  color: '#3178C6' },
      { label: 'Redux',      Icon: SiRedux,       color: '#764ABC' },
      { label: 'HTML5',      Icon: SiHtml5,       color: '#E34F26' },
      { label: 'CSS3',       Icon: FaCss3,        color: '#1572B6' },
      { label: 'SCSS',       Icon: SiSass,        color: '#CC6699' },
      { label: 'Tailwind',   Icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { label: 'Node.js',    Icon: SiNodedotjs,   color: '#68A063' },
      { label: 'Express.js', Icon: SiExpress,     color: '#ffffff' },
      { label: 'REST APIs',  Icon: TbApi,         color: '#e5a93c' },
    ],
  },
  {
    name: 'Database',
    items: [
      { label: 'MongoDB',    Icon: SiMongodb,     color: '#47A248' },
      { label: 'MySQL',      Icon: SiMysql,       color: '#4479A1' },
      { label: 'PostgreSQL', Icon: SiPostgresql,  color: '#4169E1' },
    ],
  },
  {
    name: 'Tooling',
    items: [
      { label: 'Git',     Icon: SiGit,     color: '#F05032' },
      { label: 'GitHub',  Icon: SiGithub,  color: '#ffffff' },
      { label: 'Vite',    Icon: SiVite,    color: '#646CFF' },
      { label: 'Postman', Icon: SiPostman, color: '#FF6C37' },
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-[100px] pb-24 lg:pb-[120px] relative">
      <div className="container">
        {/* Simple & clear section header */}
        <div className="mb-10">
          <span className="label">03 // Profile</span>
          <h2 className="section-h mt-2.5 mb-3 text-[clamp(34px,4.5vw,54px)] leading-[1.1]">
            About <em>Me</em>
          </h2>
          <p className="text-[15px] text-[var(--sub)] max-w-[540px] leading-[1.7] m-0">
            A quick glimpse into who I am, what drives me, and the mindset behind my craft.
          </p>
        </div>

        {/* ── Personal Story / Bio Card ── */}
        <div className="mb-5 bg-[var(--card)] border border-[var(--border)] rounded-[var(--r2)] p-6 sm:p-8 relative overflow-hidden transition-all duration-200 hover:border-[var(--bhi)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
          {/* Subtle Accent Edge */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-white/50 to-transparent" />

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--accent)] font-semibold">
                Who I Am
              </span>
            </div>

            <p className="text-[15px] sm:text-[16px] text-white/90 leading-[1.85] font-normal m-0 max-w-[840px]">
              Hi, I’m <strong className="text-white font-semibold">Yogesh Meena</strong> — a full-stack developer who loves taking ideas from a blank canvas to smooth, reliable digital experiences. Beyond writing code, I care deeply about solving real-world problems, crafting interfaces that feel effortless to navigate, and writing clean, maintainable systems that scale gracefully.
            </p>

            <p className="text-[14px] sm:text-[14.5px] text-[var(--sub)] leading-[1.8] m-0 max-w-[840px]">
              When I'm not at the keyboard building apps or exploring new technologies, you'll find me learning about system design, experimenting with modern UI patterns, and collaborating with fellow creators to build meaningful products.
            </p>
          </div>
        </div>

        {/* ── Modern Architectural Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Bento Cell: Technical Skills Directory with Authentic Brand Colors & Open for Work Tag */}
          <div className="md:col-span-12 bg-[var(--card)] border border-[var(--border)] rounded-[var(--r2)] p-7 relative transition-all duration-200 hover:border-[var(--bhi)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
            <div className="flex justify-between items-center mb-4.5 flex-wrap gap-2.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--faint)]">Technical Ecosystem</span>
                <span className="inline-flex items-center gap-2 py-1 px-2.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] font-mono text-[10.5px] text-[var(--accent)] tracking-[0.05em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-green)] shadow-[0_0_0_2px_rgba(34,197,94,0.25)] animate-pulse" />
                  <span>Open for Work</span>
                </span>
              </div>
              <span className="hidden sm:inline-block font-mono text-[10.5px] tracking-[0.08em] text-[var(--faint)] uppercase">Brand Colors // Categorized</span>
            </div>

            <div className="flex flex-col gap-4 mt-1">
              {techCategories.map(cat => (
                <div
                  key={cat.name}
                  className="grid grid-cols-1 md:grid-cols-[130px_1fr] items-center gap-2.5 md:gap-5 p-3 md:py-3 md:px-3.5 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--r1)] transition-colors duration-200 hover:bg-white/[0.04]"
                >
                  <span className="font-mono text-[11.5px] tracking-[0.08em] uppercase text-[var(--sub)] font-semibold">
                    <span className="text-[var(--accent)]">/</span> {cat.name}
                  </span>
                  <div className="flex flex-wrap gap-2 items-center">
                    {cat.items.map(({ label, Icon, color }) => (
                      <div
                        key={label}
                        className="group inline-flex items-center gap-1.5 py-1.5 px-3 bg-[var(--card)] border border-[var(--border)] rounded-[var(--r1)] cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:shadow-[0_4px_14px_rgba(0,0,0,0.3)]"
                        title={label}
                      >
                        <Icon className="text-[15px] shrink-0 transition-transform duration-200 group-hover:scale-115" style={{ color }} />
                        <span className="font-mono text-[11.5px] text-white">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Cell 4: Core Specialization Pillar */}
          <div className="md:col-span-6 lg:col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-[var(--r2)] p-7 relative transition-all duration-200 hover:border-[var(--bhi)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)] flex flex-col gap-3">
            <div className="w-11 h-11 rounded-[var(--r1)] bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] mb-1">
              <FiCpu className="text-[20px]" />
            </div>
            <h4 className="font-heading text-[16px] font-bold text-white m-0">Full-Stack Cohesion</h4>
            <p className="text-[13.5px] text-[var(--sub)] leading-[1.65] m-0">
              Unifying React/TypeScript client frontends with secure Node.js &amp; Express REST backends.
            </p>
          </div>

          {/* Bento Cell 5: Data & Schema Pillar */}
          <div className="md:col-span-6 lg:col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-[var(--r2)] p-7 relative transition-all duration-200 hover:border-[var(--bhi)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)] flex flex-col gap-3">
            <div className="w-11 h-11 rounded-[var(--r1)] bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] mb-1">
              <FiLayers className="text-[20px]" />
            </div>
            <h4 className="font-heading text-[16px] font-bold text-white m-0">Data Architecture</h4>
            <p className="text-[13.5px] text-[var(--sub)] leading-[1.65] m-0">
              Designing scalable NoSQL &amp; relational data schemas with MongoDB, PostgreSQL, and MySQL.
            </p>
          </div>

          {/* Bento Cell 6: Engineering Discipline Pillar */}
          <div className="md:col-span-12 lg:col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-[var(--r2)] p-7 relative transition-all duration-200 hover:border-[var(--bhi)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)] flex flex-col gap-3">
            <div className="w-11 h-11 rounded-[var(--r1)] bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] mb-1">
              <FiShield className="text-[20px]" />
            </div>
            <h4 className="font-heading text-[16px] font-bold text-white m-0">Reliability &amp; Safety</h4>
            <p className="text-[13.5px] text-[var(--sub)] leading-[1.65] m-0">
              Strict typing, clean modular hierarchy, and optimized asset delivery for minimal latency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}