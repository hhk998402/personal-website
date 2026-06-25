import Divider from './Divider.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">PLEASE JOIN US FOR OUR</p>
      <h1 className="hero-title">Wedding Reception</h1>

      <Divider maxWidth={220} />

      <div className="names">
        <span className="name">Kathy</span>
        <span className="and script">and</span>
        <span className="name">Hemant</span>
      </div>

      <Divider maxWidth={220} />

      <p className="hero-date">SATURDAY, OCTOBER 17&nbsp;&nbsp;|&nbsp;&nbsp;2:00 PM</p>
      <p className="hero-sub">Street, City, State</p>

      <p className="scroll-cue">SCROLL FOR DETAILS</p>
    </section>
  )
}
