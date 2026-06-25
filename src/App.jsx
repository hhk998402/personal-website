import Background from './components/Background.jsx'
import Hero from './components/Hero.jsx'
import Details from './components/Details.jsx'
import RSVP from './components/RSVP.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Background />
      <main>
        <Hero />
        <Details />
        <RSVP />
        <Footer />
      </main>
    </>
  )
}
