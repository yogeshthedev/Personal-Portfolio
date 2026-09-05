import { projectData, type ProjectItem } from '@/data/projectData'
import { FiArrowUpRight, FiGithub, FiCheckCircle, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-[100px] border-b border-[var(--border)]">
      <div className="container">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-14 flex-wrap gap-5 pb-6 border-b border-[var(--border)]">
          <div>
            <span className="label">Selected Archive</span>
            <h2 className="section-h mb-0">
              Featured <em>Works</em>
            </h2>
          </div>
          <div className="flex items-baseline gap-2 font-mono">
            <span className="text-base font-bold text-white">{projectData.length.toString().padStart(2, '0')}</span>
            <span className="text-[11px] tracking-[0.1em] uppercase text-[var(--faint)]">Documented Projects</span>
          </div>
        </div>

        {/* Project Case Studies List */}
        <div className="flex flex-col gap-14 sm:gap-20">
          {projectData.map((project: ProjectItem) => {
            const hasLive = Boolean(project.liveUrl && project.liveUrl !== '#')
            const mainLink = hasLive ? project.liveUrl : project.githubUrl

            return (
              <article
                key={project.id}
                className="group/item grid grid-cols-1 min-[961px]:grid-cols-[1.25fr_1fr] gap-8 min-[961px]:gap-12 items-center pb-14 min-[961px]:pb-20 border-b border-[var(--border)] last:border-b-0 last:pb-0"
                id={project.id}
              >
                {/* Left Live Interactive Iframe Display */}
                <div className="relative w-full">
                  <div className="relative bg-[#0d0f14] border border-[var(--border)] rounded-[var(--r2)] overflow-hidden shadow-2xl transition-all duration-300 group-hover/item:border-[var(--border-strong)]">
                    
                    {/* Minimal Top Header Bar */}
                    <div className="bg-[#11131a] border-b border-[var(--border)] px-3.5 py-2.5 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
                      </div>


                      <div className="truncate font-mono text-[11px] text-[var(--sub)] bg-[#08090d] border border-[var(--border)] rounded px-3 py-1 text-center max-w-[320px] flex-1 mx-2">
                        {project.liveUrl.replace(/^https?:\/\//, '')}
                      </div>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--sub)] hover:text-white transition-colors shrink-0 p-1 rounded hover:bg-white/5"
                        title="Open project in new tab"
                      >
                        <FiExternalLink className="text-sm" />
                      </a>
                    </div>

                    {/* Live Preview Iframe (Acting as a live visual snapshot, non-interactive) */}
                    <div className="relative w-full h-[360px] sm:h-[420px] bg-[#07080c] select-none overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                      <iframe
                        src={project.liveUrl}
                        title={project.title}
                        scrolling="no"
                        className="w-full h-full border-0 block bg-[#0a0a0a] pointer-events-none select-none overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        loading="lazy"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ overflow: 'hidden' }}
                      />
                      {/* Transparent overlay block to guarantee zero interaction / hijacking */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10 cursor-pointer block"
                        title={`Open ${project.title} live deployment`}
                        aria-label={`Open ${project.title} live deployment`}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Structural Info Block */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] uppercase">
                    <span className="text-[var(--accent)]">{project.category}</span>
                    <span className="text-[var(--faint)]">/</span>
                    <span className="text-[var(--faint)]">{project.metricsBadge}</span>
                  </div>


                  <h3 className="font-heading text-[clamp(24px,2.4vw,32px)] font-extrabold tracking-[-0.8px] leading-[1.15] m-0">
                    <a
                      href={mainLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link text-white no-underline inline-flex items-center gap-2 transition-colors duration-200 hover:text-white"
                    >
                      <span>{project.title}</span>
                      <FiArrowUpRight className="text-[0.8em] text-[var(--faint)] transition-all duration-200 group-hover/link:text-[var(--accent)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </h3>


                  <p className="text-[14.5px] text-[var(--sub)] leading-[1.8] m-0 max-w-[540px]">{project.desc}</p>

                  {/* Bullet Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="flex flex-col gap-2 my-1 pl-0 list-none text-[13px] text-[var(--sub)]">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <FiCheckCircle className="text-[var(--accent)] text-sm mt-1 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technical Stack Tags */}
                  <div className="flex flex-wrap gap-2 py-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-[var(--sub)] bg-[var(--bg-elevated)] border border-[var(--borderY] py-1 px-2.5 rounded-v[var(--r1)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>


                  {/* External Links */}
                  <div className="flex items-center gap-3 pt-2 flex-wrap">
                    {hasLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-heading text-[12.5px] font-semibold text-[#09090b] bg-white no-underline py-2 px-4 rounded-[var(--r1)] transition-all duration-200 hover:bg-white/95 hover:-translate-y-0.5 shadow-sm"
                      >
                        <span>Live Deployment</span>
                        <FiArrowUpRight />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-heading text-[12.5px] font-medium text-[var(--sub)] bg-transparent border border-[var(--border)] no-underline py-2 px-4 rounded-[var(--r1)] transition-all duration-200 hover:text-white hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)] hover:-translate-y-0.5"
                      >
                        <FiGithub />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
