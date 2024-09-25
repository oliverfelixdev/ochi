import React from 'react'
import Navigation from './components/Navigation'
import "./main.css"
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
function App() {
  return (
    <div className='web-screen'>
      <Navigation />
      <LandingPage />
      <Marquee />
    </div>
  )
}

export default App