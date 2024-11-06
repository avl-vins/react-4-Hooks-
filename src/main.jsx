import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Hooks } from './Hooks'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hooks />
  </StrictMode>,
)
