import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import AppRouter from './components/Router/index.jsx'
import './styles/style.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
