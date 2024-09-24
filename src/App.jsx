import React from 'react'
import Navigation from './components/Navigation'
import "./main.css"
import LandingPage from './components/LandingPage'
function App() {
  return (
    <div className='web-screen'>
      <Navigation />
      <LandingPage />
    </div>
  )
}

export default App