import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const container = document.getElementById('root')

if (!container) throw new Error("L'élément #root est introuvable dans le DOM")

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
