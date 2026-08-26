export default function Education({ data }) {
  return (
    <section className="education card">
      <p className="section-label">Education &amp; Certifications</p>

      <div className="edu-entries">
        {data.education.map((edu) => (
          <div key={edu.institution} className="edu-entry">
            <p className="edu-institution">{edu.institution}</p>
            <p className="edu-degree">{edu.degree}</p>
            {edu.period && <p className="edu-period">{edu.period}</p>}
          </div>
        ))}
      </div>

      <div className="tags">
        {data.certifications.map((cert) => (
          <span key={cert.name} className="tag">{cert.name}</span>
        ))}
      </div>

      {data.courses?.length > 0 && (
        <>
          <p className="sub-label">Courses</p>
          <ul className="course-list">
            {data.courses.map((c) => (
              <li key={c.platform}>
                <span className="course-platform">{c.platform}</span> — {c.topics}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
