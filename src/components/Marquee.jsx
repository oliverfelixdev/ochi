import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".01" className='w-full h-[70vh] bg-[#004D43] rounded-t-2xl pt-1 overflow-hidden'>
        <div className="marquee-animation-container border-t-2 border-b-[1px] border-[#4D837C] gap-10 mt-24 pb-5 flex overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 12}} className="marquee-title">WE are Ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 12}} className="marquee-title">WE are Ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 12}} className="marquee-title">WE are Ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 12}} className="marquee-title">WE are Ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 12}} className="marquee-title">WE are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee