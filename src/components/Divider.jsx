export default function Divider({ maxWidth = 340, glyph = '✦' }) {
  return (
    <div className="divider" style={{ maxWidth }}>
      <span className="ln"></span>
      <span className={`sp${glyph === '•' ? ' dot' : ''}`}>{glyph}</span>
      <span className="ln"></span>
    </div>
  )
}