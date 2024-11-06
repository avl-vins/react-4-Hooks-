import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Hooks } from './Hooks'
import { ThemeContext, ThemeProvider, UseContext } from './components'



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>
      <Hooks />
    </ThemeProvider>
  </StrictMode>,
)
