import data from './data.js'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import TechStack from './components/TechStack.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Languages from './components/Languages.jsx'

export default function App() {
  return (
    <main className="page">
      <Header data={data} />
      <hr className="divider" />
      <About data={data} />
      <hr className="divider" />
      <TechStack data={data} />
      <hr className="divider" />
      <Experience data={data} />
      <hr className="divider" />
      <Projects data={data} />
      <hr className="divider" />
      <div className="bottom-row">
        <Education data={data} />
        <Languages data={data} />
      </div>
    </main>
  )
}
