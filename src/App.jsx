import React from 'react'
import Navigation from './components/Navigation'
import "./main.css"
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
function App() {
  return (
    <div className='web-screen'>
      <Navigation />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
    </div>
  )
}

export default App