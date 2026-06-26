export default function Ornament({ flip = false }) {
  return (
    <svg
      viewBox="0 0 90 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      className={flip ? 'flip' : undefined}
      aria-hidden="true"
    >
      <path d="M2,14 C18,14 22,4 34,4 C42,4 44,11 38,13 C33,15 30,10 35,8" />
      <path d="M38,13 C50,13 58,14 88,14" />
      <circle cx="35" cy="8.2" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}