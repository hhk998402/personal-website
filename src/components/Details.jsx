import useReveal from './useReveal.js'

export default function Details() {
  const { ref, isIn } = useReveal()

  return (
    <section id="details" ref={ref} className={`reveal${isIn ? ' in' : ''}`}>
      <div className="section-head">
        <p className="eyebrow">THE CELEBRATION</p>
        <h2>Details</h2>
      </div>

      <div className="details-grid">
        <div className="card">
          <span className="glyph">✦</span>
          <h3>DATE &amp; TIME</h3>
          <p className="cap">Saturday, October 17</p>
          <p className="muted">Ceremony &amp; reception begin at 2:00 PM</p>
        </div>

        <div className="card">
          <span className="glyph">✦</span>
          <h3>LOCATION</h3>
          <p className="cap">Venue Name</p>
          <p className="muted">Street, City, State</p>
        </div>

        <div className="card">
          <span className="glyph">✦</span>
          <h3>ATTIRE</h3>
          <p className="cap">Formal</p>
          <p className="muted">Navy, gold &amp; dusty blue welcome</p>
        </div>

        <div className="card">
          <span className="glyph">✦</span>
          <h3>FORMAL INVITATION</h3>
          <p className="cap">To Follow</p>
          <p className="muted">By mail in the coming months</p>
        </div>

        <div className="card full-card">
          <span className="glyph">✦</span>
          <h3>GIFTS</h3>
          <p style={{ fontStyle: 'italic', fontSize: '18px' }}>
            We don&apos;t have a registry — your presence at our celebration is the only gift we need.
          </p>
        </div>
      </div>
    </section>
  )
}
