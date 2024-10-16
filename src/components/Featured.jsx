import { motion } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React, { useState } from 'react'

function Featured() {
  const [hoverCard, setHoverCard] = useState(null);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0" className='w-full min-h-screen rounded-t-2xl bg-[#f4f4f4]'>
      <div className="wrap px-12">
        <h1 className="title-featured text-5xl pt-20">Featured projects</h1>
      </div>
      <hr className='h-[2px] w-full bg-[#D2D2D2] mt-10' />
      <div className="card-wrap px-12 w-full mt-16 flex justify-between gap-4">
        {/* FYDE Card */}
        <div className="card w-1/2 relative"
          onMouseEnter={() => setHoverCard('FYDE')}
          onMouseLeave={() => setHoverCard(null)}
        >
          <h1 className="vise-title absolute flex overflow-hidden z-10 top-1/2 left-full -translate-x-1/2 -translate-y-1/2">
            {"FYDE".split('').map((item, index) =>
              <motion.span
                initial={{ y: "100%" }} animate={hoverCard === 'FYDE' ? { y: "0%" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .07 }}
                key={index}
                className='inline-block text-[#CDEA68] font-bold font-[GRO] translate-y-full text-[9vw]'>
                {item}
              </motion.span>
            )}
          </h1>
          <div className="top-badge flex items-center gap-2">
            <div className="dot-badge h-2 w-2 rounded-full bg-black"></div>
            <span className='text-sm'>FYDE</span>
          </div>
          <div className="card-body mt-4 rounded-xl overflow-hidden w-full">
            <div className="h-full w-full">
              <img src="./src/assets/img/Fyde_Illustration.png" alt="" className='object-cover h-full w-full card-image' />
            </div>
          </div>
          <div className="card-narrative flex items-center gap-5 py-4">
            {["Audit", "Copywriting", "sales deck", "slides Design"].map((item, index) => (
              <a key={index} href='#' className='animated-btn uppercase px-4 py-2 text-sm rounded-full border-[1px] border-[#212121]'>{item}</a>
            ))}
          </div>
        </div>

        {/* VISE Card */}
        <div className="card w-1/2 relative"
          onMouseEnter={() => setHoverCard('VISE')}
          onMouseLeave={() => setHoverCard(null)}
        >
          <h1 className="vise-title absolute flex z-10 top-1/2 right-full translate-x-1/2 -translate-y-1/2 overflow-hidden">
            {"VISE".split('').map((item, index) =>
              <motion.span
                initial={{ y: "100%" }} animate={hoverCard === 'VISE' ? { y: "0%" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .07 }}
                key={index}
                className='inline-block text-[#CDEA68] font-bold font-[GRO] translate-y-full text-[9vw]'>
                {item}
              </motion.span>)}
          </h1>
          <div className="top-badge flex items-center gap-2">
            <div className="dot-badge h-2 w-2 rounded-full bg-black"></div>
            <span className='text-sm'>VISE</span>
          </div>
          <div className="card-body mt-4 rounded-xl overflow-hidden w-full">
            <div className="h-full w-full">
              <img src="./src/assets/img/Vise_front.jpg" alt="" className='object-cover h-full w-full card-image' />
            </div>
          </div>
          <div className="card-narrative flex items-center gap-5 py-4">
            {["Agency", "Company Presentation"].map((item, index) => (
              <a key={index} href='#' className='animated-btn uppercase px-4 py-2 text-sm rounded-full border-[1px] border-[#212121]'>{item}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="view-all w-full flex justify-center items-center pb-20 pt-10">
        <button className='animated-btn py-2 px-5 border-[1.5px] border-black rounded-full uppercase'>View All case studies ↗</button>
      </div>
    </div>
  )
}

export default Featured;
