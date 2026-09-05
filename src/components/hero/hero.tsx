import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      className="min-h-[88vh] relative flex flex-col justify-center pt-[calc(var(--nav-h)+24px)] md:pt-[calc(var(--nav-h)+40px)] pb-15 md:pb-20 border-b border-[var(--border)]"
      id="home"
    >
      <div className="container flex flex-col gap-7 md:gap-9">
        {/* Top Status & Classification Line */}
        <div className="flex justify-between items-center pb-4 md:pb-5 border-b border-[var(--border)] flex-wrap gap-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-green)] shadow-[0_0_0_3px_rgba(34,197,94,0.15)]" />
            <span className="font-mono text-[11.5px] tracking-[0.06em] text-[var(--sub)]">
              Available for full-time &amp; freelance projects
            </span>
          </div>
          <div className="hidden sm:flex font-mono text-[11.5px] text-[var(--faint)] tracking-[0.08em] items-center gap-2">
            <span>Kota, IN</span>
          </div>
        </div>

        {/* Balanced Split Grid: Headline + Narrative + Actions on Left | Aligned Visual Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_400px] gap-11 lg:gap-14 items-start">
          {/* Left Column: Headline, Bio Narrative, Actions & Stack */}
          <div className="flex flex-col gap-6">
            <div className="max-w-full">
              <h1 className="font-heading text-[clamp(32px,4.8vw,68px)] font-extrabold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.05] text-white m-0 flex flex-col gap-2.5">
                Full-Stack Developer
                <span className="font-serif italic font-normal text-[0.58em] tracking-[-0.5px] text-[var(--sub)] leading-[1.35] max-w-[720px]">
                  crafting robust web applications &amp; resilient systems.
                </span>
              </h1>
            </div>

            <p className="text-[15.5px] text-[var(--sub)] leading-[1.8] m-0 max-w-[640px]">
              I am <strong className="text-white font-semibold">Yogesh Meena</strong>, a software developer specializing in modern web architecture.
              I build end-to-end products that balance high performance, clean codebases,
              and thoughtful design across React, Node.js, and MongoDB ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 flex-wrap pt-1">
              <a
                href="#projects"
                className="inline-flex items -center justify-center gap-2.5 bg-white text-[#09090b] font-heading text-[13px] font-semibold px-6 py-3 rounded-[var(--r1)] no-underline transition-all duration-200 hover:bg-white/95 hover:-translate-y-0.5"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>Explore Selected Work</span>
                <FiArrowDown className="text-[14px]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-[var(--border-strong)] font-heading text-[13px] font-medium px-5.5 py-3 rounded-[var(--r1)] no-underline transition-all duration-200 hover:border-[var(--bhi)] hover:bg-[var(--bg-elevated)] hover:-translate-y-0.5"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>Initiate Contact</span>
                <FiArrowUpRight className="text-[14px]" />
              </a>
            </div>

            {/* Quick Spec Matrix under actions */}
            <div className="flex flex-col gap-2 pt-3.5 border-t border-dashed border-[var(--border)] mt-1.5">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--faint)]">Core Stack</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {['TypeScript', 'React 18', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Next.js'].map(tech => (
                  <span key={tech} className="inline-block px-2.5 py-1 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--r1)] font-mono text-[11px] text-[var(--sub)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Modern Profile Image Card */}
          <div className="flex justify-center lg:justify-end items-start w-full order-first lg:order-last">
            <div className="group relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px] bg-[#121216]/80 backdrop-blur-[20px] border border-white/10 rounded-[var(--r2)] p-3 sm:p-4 shadow-[0_20px_48px_-12px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.03)] transition-all duration-350 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_28px_60px_-16px_rgba(0,0,0,0.75)]">
              
              <div className="relative w-full aspect-[4/4.2] sm:aspect-[4/4.5] rounded-[var(--r1)] overflow-hidden bg-[#07080b] border border-white/5 flex flex-col items-center justify-center">
                {/* Developer Portrait Artwork */}
                <img
                  src="/images/yogesh-portrait.jpg"
                  alt="Yogesh Meena - Full-Stack Developer"
                  className="w-full h-full object-cover object-top block transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Seamless architectural dark vignette */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#090a0d] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[var(--r1)]" />

                {/* Bottom Overlay Pill on Image */}
                <div className="absolute bottom-2.5 sm:bottom-3.5 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 flex items-center justify-center gap-2 bg-[#09090b]/90 backdrop-blur-md border border-[var(--border-strong)] py-1.5 sm:py-2 px-3 sm:px-3.5 rounded-full font-mono text-[10px] sm:text-[11px] text-white shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-green)] shadow-[0_0_0_2px_rgba(34,197,94,0.2)]" />
                  <span>Available · Open to Work</span>
                </div>
              </div>

              {/* Card Meta Footer: Clean Name & Title */}
              <div className="flex items-center justify-between gap-2 mt-2.5 sm:mt-3.5 pt-2.5 sm:pt-3 border-t border-[var(--border)]">
                <span className="font-heading text-[12px] sm:text-[13px] font-semibold text-white">Yogesh Meena</span>
                <span className="font-mono text-[10.5px] text-[var(--sub)]">Full-Stack Eng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }