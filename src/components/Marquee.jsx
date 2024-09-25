import React from 'react'

function Marquee() {
  return (
    <div className='w-full h-[60vh] bg-[#004D43] rounded-t-2xl pt-1'>
        <div className="marquee-animation-container border-t-2 border-b-[1px] border-[#4D837C] gap-10 mt-24 flex whitespace-nowrap">
            <h1 className="marquee-title">WE are Ochi</h1>
            <h1 className="marquee-title">WE are Ochi</h1>
            <h1 className="marquee-title">WE are Ochi</h1>
            <h1 className="marquee-title">WE are Ochi</h1>
        </div>
    </div>
  )
}

export default Marquee