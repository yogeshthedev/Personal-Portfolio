import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globals.css'
import './components/cursor/cursor.css'
import './components/navbar/navbar.css'
import './components/hero/hero.css'
import './components/marquee/marquee.css'
import './components/projects/projects.css'
import './components/about/about.css'
import './components/contact/contact.css'
import './components/footer/footer.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
