export default function TechStack({ data }) {
  return (
    <section className="tech-stack">
      <p className="section-label">Tech Stack</p>
      <div className="tags">
        {data.techStack.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </section>
  )
}
