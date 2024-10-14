import React from 'react'

function Featured() {
  return (
    <div className='w-full min-h-screen'>
      <div className="wrap px-12">
        <h1 className="title-featured text-5xl pt-20">Featured projects</h1>
      </div>
      <hr className='h-[2px] w-full bg-[#D2D2D2] mt-10' />
      <div className="card-wrap px-12 w-full mt-16 flex justify-between gap-4">
        <div className="card w-1/2 relative">
          <h1 className="vise-title absolute z-10 top-1/2 left-full -translate-x-1/2 -translate-y-1/2">
              {"FYDE".split('').map((item, index) => <span key={index} className='text-[#CDEA68] font-bold font-[GRO] text-[9vw]'>{item}</span>)}
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
              <a key={index} href='javascript:void(0);' className='animated-btn uppercase px-4 py-2 text-sm rounded-full border-[1px] border-[#212121]'>{item}</a>
            ))}
          </div>
        </div>
        <div className="card w-1/2 relative">
          <h1 className="vise-title absolute z-10 top-1/2 right-full translate-x-1/2 -translate-y-1/2">
              {"VISE".split('').map((item, index) => <span key={index} className='text-[#CDEA68] font-bold font-[GRO] text-[9vw]'>{item}</span>)}
          </h1>
          <div className="top-badge flex items-center gap-2">
            <div className="dot-badge h-2 w-2 rounded-full bg-black"></div>
            <span className='text-sm'>FYDE</span>
          </div>
          <div className="card-body mt-4 rounded-xl overflow-hidden w-full">
            <div className="h-full w-full">
              <img src="./src/assets/img/Vise_front.jpg" alt="" className='object-cover h-full w-full card-image' />
            </div>
          </div>
          <div className="card-narrative flex items-center gap-5 py-4">
            {["Agency", "Company Presentation"].map((item, index) => (
              <a key={index} href='javascript:void(0);' className='animated-btn uppercase px-4 py-2 text-sm rounded-full border-[1px] border-[#212121]'>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured