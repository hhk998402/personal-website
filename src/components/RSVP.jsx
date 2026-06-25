import { useState } from 'react'
import useReveal from './useReveal.js'

export default function RSVP() {
  const { ref, isIn } = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    guestEmail: '',
    attending: 'joyfully accepts',
    guestCount: '1',
    notes: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Front-end only for now — no backend wired up.
    // Swap this for a fetch() call to your RSVP endpoint when ready.
    setSubmitted(true)
  }

  return (
    <section id="rsvp" ref={ref} className={`reveal${isIn ? ' in' : ''}`}>
      <div className="section-head">
        <p className="eyebrow">KINDLY RESPOND</p>
        <h2>RSVP</h2>
      </div>

      {!submitted ? (
        <form className="rsvp-card" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              placeholder="Your name, as on the invitation"
              value={form.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="guestEmail">Email</label>
            <input
              type="email"
              id="guestEmail"
              name="guestEmail"
              required
              placeholder="you@example.com"
              value={form.guestEmail}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Will you be joining us?</label>
            <div className="radio-row">
              <label>
                <input
                  type="radio"
                  name="attending"
                  value="joyfully accepts"
                  checked={form.attending === 'joyfully accepts'}
                  onChange={handleChange}
                />
                Joyfully accepts
              </label>
              <label>
                <input
                  type="radio"
                  name="attending"
                  value="regretfully declines"
                  checked={form.attending === 'regretfully declines'}
                  onChange={handleChange}
                />
                Regretfully declines
              </label>
            </div>
          </div>

          <div className="field">
            <label htmlFor="guestCount">Number in Your Party</label>
            <select id="guestCount" name="guestCount" value={form.guestCount} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="notes">Dietary Restrictions or Notes</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Optional"
              value={form.notes}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">SEND RSVP</button>
        </form>
      ) : (
        <div className="rsvp-card confirm">
          <span className="glyph">✦</span>
          <h3>Thank You</h3>
          <p>Your response has been recorded. We can&apos;t wait to celebrate with you.</p>
        </div>
      )}
    </section>
  )
}
