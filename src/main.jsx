import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted fonts (latin subset only — see src/fonts.css)
import './fonts.css'
import './styles.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
