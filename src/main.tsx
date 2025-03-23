import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.css'
import App from './App.tsx'
import { OnRender } from './Application/core/Render.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnRender>
      <App />
    </OnRender>
  </StrictMode>,
)
