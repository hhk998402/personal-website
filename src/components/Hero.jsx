import Divider from './Divider.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">PLEASE JOIN US FOR OUR</p>
      <h1 className="hero-title">Wedding Reception</h1>

      <Divider maxWidth={220} />

      <div className="names">
        <span className="name">Kathy</span>
        <span className="amp">&amp;</span>
        <span className="name">Hemant</span>
      </div>

      <Divider maxWidth={220} />

      <p className="hero-date">SATURDAY, OCTOBER 17&nbsp;&nbsp;|&nbsp;&nbsp;2:00 PM</p>

      <Divider maxWidth={170} glyph="•" />

      <p className="hero-location-label">LOCATION</p>
      <p className="hero-sub">Street, City, State</p>

      <Divider maxWidth={170} glyph="•" />

      <p className="hero-formal">FORMAL INVITATION DETAILS TO FOLLOW</p>
    </section>
  )
}