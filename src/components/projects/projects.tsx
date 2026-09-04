import { projectData, type ProjectItem } from '@/data/projectData'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="proj-header-row">
          <div>
            <span className="label">Selected Archive</span>
            <h2 className="section-h proj-title">
              Featured <em>Works</em>
            </h2>
          </div>
          <div className="proj-index-count">
            <span className="count-num">{projectData.length.toString().padStart(2, '0')}</span>
            <span className="count-label">Documented Projects</span>
          </div>
        </div>

        {/* Project Case Studies List */}
        <div className="project-archive-list">
          {projectData.map((project: ProjectItem) => {
            const hasLive = project.liveUrl && project.liveUrl !== '#'
            const mainLink = hasLive ? project.liveUrl : project.githubUrl

            return (
              <article key={project.id} className="project-article-row" id={project.id}>
                {/* Left Media Block */}
                <div className="project-media-column">
                  <div className="project-media-viewport">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-display-img"
                      loading="lazy"
                    />
                    <div className="project-meta-pill">
                      <span>Index 0{project.num}</span>
                      <span className="pill-dot">/</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Right Structural Info Block */}
                <div className="project-content-column">
                  <div className="project-classification">
                    <span className="classification-tag">{project.category}</span>
                    <span className="meta-sep">/</span>
                    <span className="classification-badge">{project.metricsBadge}</span>
                  </div>

                  <h3 className="project-heading">
                    <a
                      href={mainLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-heading-link"
                    >
                      <span>{project.title}</span>
                      <FiArrowUpRight className="heading-arrow" />
                    </a>
                  </h3>

                  <p className="project-summary">{project.desc}</p>

                  {/* Technical Stack Tags */}
                  <div className="project-specs-list">
                    {project.tags.map(tag => (
                      <span key={tag} className="tech-spec-item">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* External Links */}
                  <div className="project-direct-actions">
                    {hasLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link primary-action"
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
                        className="project-action-link github-action"
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

