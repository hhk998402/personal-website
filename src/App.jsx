import Background from './components/Background.jsx'
import Hero from './components/Hero.jsx'
import Details from './components/Details.jsx'
import RSVP from './components/RSVP.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="hero-stage">
        <div className="hero-stage-bg" aria-hidden="true">
          <div className="blob-1"></div>
          <div className="blob-2"></div>
          <div className="blob-3"></div>
        </div>
        <div className="hero-card">
          <Background />
          <Hero />
        </div>
      </div>
      <main>
        <Details />
        <RSVP />
        <Footer />
      </main>
    </>
  )
}
