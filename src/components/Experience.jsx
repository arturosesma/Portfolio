export default function Experience({ data }) {
  return (
    <section className="experience">
      <p className="section-label">Experience</p>
      {data.experience.map((job) => (
        <div key={job.company + job.period} className="experience-entry">
          <div className="exp-header">
            <span className="exp-company">{job.company}</span>
            <span className="exp-period">{job.period}</span>
          </div>
          <p className="exp-role">{job.role} · {job.location}</p>
          <ul className="exp-bullets" style={{fontSize: '20px'}}>
            {job.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
