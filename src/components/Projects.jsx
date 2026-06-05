export default function Projects({ data }) {
  return (
    <section className="projects">
      <p className="section-label">Projects</p>
      {data.projects.map((project) => (
        <div key={project.name} className="project-entry">
          <div className="project-name-row">
            <span className="project-name">{project.name}</span>
            {project.url && (
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ View
              </a>
            )}
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="project-stack">
            {project.stack.map((tech) => (
              <span key={tech} className="project-tag">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
