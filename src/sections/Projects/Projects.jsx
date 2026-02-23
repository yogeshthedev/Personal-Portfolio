import "./Projects.modules.scss";
import projects from "../../data/Projects";

const Projects = () => {
  return (
    <section className="project-section" id="projects">
      <div className="project-container">
        <h2 className="project-title">Projects</h2>

        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
     
              <div
                className="project-preview project-image"
                data-live-link={project.liveLink}
              >
                <img src={project.image} alt={project.title} />
              </div>

              {/* RIGHT: Details */}
              <div className="project-info">
                <h3>{project.title}</h3>

                <p className="description">{project.description}</p>

                <div className="tech-stack">
                  {project.skills.map((skill, index) => (
                    <span key={index}>{skill}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="live"
                    >
                      View Project →
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="github"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
