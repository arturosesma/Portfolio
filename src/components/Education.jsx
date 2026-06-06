export default function Education({ data }) {
  return (
    <section className="education">
      <p className="section-label">Education &amp; Certifications</p>

      <div className="edu-entries">
        {data.education.map((edu) => (
          <div key={edu.institution} className="edu-entry">
            <p className="edu-institution">{edu.institution}</p>
            <p className="edu-degree">{edu.degree}</p>
            <p className="edu-period">{edu.period}</p>
          </div>
        ))}
      </div>

      <ul className="cert-list">
        {data.certifications.map((cert) => (
          <li key={cert.name}>
            <span>{cert.name}</span>
            <span className="cert-year">{cert.year}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
