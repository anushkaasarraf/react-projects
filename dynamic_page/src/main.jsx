import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Main from './components/Main'
import './index.css'


createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Main />
  </>
 
)
