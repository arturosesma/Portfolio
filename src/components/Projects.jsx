export default function Projects({ data }) {
  return (
    <section className="projects">
      <p className="section-label">Projects</p>
      <div className="project-cards">
        {data.projects.map((project) => (
          <article key={project.name} className="card">
            <h3 className="card-title">{project.name}</h3>
            <p className="card-desc">{project.description}</p>
            {project.url && (
              <a
                className="card-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View project <span aria-hidden="true">→</span>
              </a>
            )}
            <div className="card-footer">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
