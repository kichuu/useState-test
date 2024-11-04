import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter, { ColorChanger } from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter/>
    <ColorChanger></ColorChanger>
  </StrictMode>,
)
