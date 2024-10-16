import React from 'react'
import Navigation from './components/Navigation'
import "./main.css"
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Clutch from './components/Clutch'
import Startproject from './components/Startproject'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll({
    smooth: true,
    lerp: 0.05,
  });

  return (
    <div className='web-screen w-full min-h-screen overflow-x-hidden bg-[#f4f4f4]'>
      <Navigation />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Clutch />
      <Startproject />
      <Footer />
    </div>
  )
}

export default App