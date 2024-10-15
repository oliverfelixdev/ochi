import React from 'react'

function Clutch() {
  return (
    <div className='w-full h-[80vh] select-none'>
        <div className="con-wrap flex items-center justify-center px-12 gap-4 h-full w-full">
            <div className="card1 relative w-1/2 bg-[#004D43] h-96 rounded-xl flex items-center justify-center flex-col">
                <img src="./src/assets/img/ochi-green.svg" alt="not found" className='h-20'/>
                <div className="card1-badge-bottom text-[#CDEA68] py-1 px-4 rounded-full border-[1px] border-[#CDEA68] absolute bottom-6 left-6">&copy;2019-2022</div>
            </div>
            <div className="card2 w-1/4 flex items-center justify-center h-96 bg-[#212121] rounded-xl flex-col relative">
                <img src="./src/assets/img/clutch-star.svg" alt="not found" className='h-20'/>
                <div className="card1-badge-bottom text-[#f1f1f1] py-1 px-4 rounded-full border-[1px] border-[#f1f1f1] absolute bottom-6 left-6">RATING 5.0 ON CLUTCH</div>
            </div>
            <div className="card3 w-1/4 flex items-center justify-center h-96 bg-[#212121] rounded-xl flex-col relative">
                <img src="./src/assets/img/logo003.png" alt="not found" className='h-24'/>
                <div className="card1-badge-bottom text-[#f1f1f1] py-1 px-4 rounded-full border-[1px] border-[#f1f1f1] absolute bottom-6 left-6">RATING 5.0 ON CLUTCH</div>
            </div>
        </div>
    </div>
  )
}

export default Clutch