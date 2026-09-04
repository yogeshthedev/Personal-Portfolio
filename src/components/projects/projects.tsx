import { projectData, type ProjectItem } from '@/data/projectData'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

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
            const hasLive = project.liveUrl && project.liveUrl !== '#'
            const mainLink = hasLive ? project.liveUrl : project.githubUrl

            return (
              <article
                key={project.id}
                className="group/item grid grid-cols-1 min-[961px]:grid-cols-[1.15fr_1fr] gap-8 min-[961px]:gap-13 items-center pb-14 min-[961px]:pb-20 border-b border-[var(--border)] last:border-b-0 last:pb-0"
                id={project.id}
              >
                {/* Left Media Block */}
                <div className="relative">
                  <div className="relative bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--r2)] overflow-hidden aspect-[16/10] transition-colors duration-200 group-hover/item:border-[var(--border-strong)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top block filter grayscale-[20%] contrast-[102%] transition-all duration-250 ease-out group-hover/item:grayscale-0 group-hover/item:contrast-100 group-hover/item:scale-[1.015]"
                      loading="lazy"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-[#09090b]/85 border border-[var(--border)] py-1 px-2.5 rounded-[var(--r1)] font-mono text-[11px] tracking-[0.08em] text-[var(--sub)] flex items-center gap-1.5 backdrop-blur-md">
                      <span>Index 0{project.num}</span>
                      <span className="opacity-35">/</span>
                      <span>{project.year}</span>
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

                  <h3 className="font-heading text-[clamp(26px,2.5vw,34px)] font-extrabold tracking-[-0.8px] leading-[1.15] m-0">
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

                  <p className="text-[14.5px] text-[var(--sub)] leading-[1.8] m-0 max-w-[520px]">{project.desc}</p>

                  {/* Technical Stack Tags */}
                  <div className="flex flex-wrap gap-2 py-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-[var(--sub)] bg-[var(--bg-elevated)] border border-[var(--border)] py-1 px-2.5 rounded-[var(--r1)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* External Links */}
                  <div className="flex items-center gap-3 pt-2.5 flex-wrap">
                    {hasLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-heading text-[12.5px] font-semibold text-[#09090b] bg-white no-underline py-2 px-4 rounded-[var(--r1)] transition-all duration-200 hover:bg-white/95 hover:-translate-y-0.5"
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

