export default function Languages({ data }) {
  return (
    <section className="languages">
      <p className="section-label">Languages &amp; Soft Skills</p>

      <ul className="lang-list">
        {data.languages.map((l) => (
          <li key={l.language}>
            <span className="lang-name">{l.language}</span>
            <span>{l.level}</span>
          </li>
        ))}
      </ul>

      <div className="soft-skills">
        {data.softSkills.map((skill) => (
          <span key={skill} className="soft-skill-item">{skill}</span>
        ))}
      </div>
    </section>
  )
}
