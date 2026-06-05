export default function About({ data }) {
  return (
    <section className="about">
      <p className="section-label">About</p>
      <p>{data.about}</p>
    </section>
  )
}
