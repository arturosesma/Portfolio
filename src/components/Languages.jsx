export default function Languages({ data }) {
  return (
    <section className="languages card">
      <p className="section-label">Languages &amp; Soft Skills</p>

      <ul className="lang-list">
        {data.languages.map((l) => (
          <li key={l.language}>
            <span className="lang-name">{l.language}</span>
            <span>{l.level}</span>
          </li>
        ))}
      </ul>

      <p className="sub-label">Soft Skills</p>
      <ul className="soft-skills">
        {data.softSkills.map((skill) => (
          <li key={skill} className="soft-skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  )
}
