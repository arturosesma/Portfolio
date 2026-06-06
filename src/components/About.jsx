export default function About({ data }) {
  return (
    <section className="about">
      <p className="section-label">About</p>
      <p style={{fontSize: '15px'}}>{data.about}</p>
    </section>
  )
}
