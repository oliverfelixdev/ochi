import React, { useEffect, useRef, useState } from 'react'

function Startproject() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180)
        })
    })
    return (
        <div className='min-h-screen w-full bg-[#CDEA68] flex items-center justify-center relative rounded-t-2xl'>
            <div className="eyes-wrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                <div className="eye-main h-44 w-44">
                    <div className="w-2/3 h-2/3 rounded-full bg-[#212121] relative overflow-hidden">
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-[96%] h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                            <div className="h-5 w-5 rounded-full bg-[#f1f1f1] flex items-center justify-center"></div>
                        </div>
                    </div>
                </div>
                <div className="eye-main h-44 w-44">
                    <div className="w-2/3 h-2/3 rounded-full bg-[#212121] relative overflow-hidden">
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-[96%] h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                            <div className="h-5 w-5 rounded-full bg-[#f1f1f1] flex items-center justify-center"></div>
                        </div>
                    </div>
                </div>

            </div>
            <h1 className="project-title">Ready<br />to start <br />the project?</h1>
        </div>
    )
}

export default Startproject