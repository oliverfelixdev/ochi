import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';


function LandingPage() {
    const containerRef = useRef(null)
    useEffect(() => {
        gsap.to(containerRef.current, {
            width: '9vw',
            duration: 1.5,
            ease: 'Expo.easeInOut'
        })
    }, [])
    return (
        <div className="landing-page pt-1">
            <div className="landing-structure mt-32 pt-1 px-12">
                {["WE Create", "Eye-Opening", "Presentation"].map((item, index) => {
                    return (
                        <div className="masker" key={index}>
                            <div className="w-fit flex items-center gap-3">
                                {index === 1 && (
                                    <div ref={containerRef}
                                        className="masker-image rounded-md"
                                        style={{
                                            width: '.5vw',
                                            height: '6vw',
                                            backgroundImage: 'url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)', // Set your image URL here
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            marginTop: '1vw'
                                        }}
                                    ></div>
                                )}
                                <h1 className="landing-title flex items-center">{item}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="landing-dets-structure mt-32 px-12 py-4">
                {[
                    "For public and private companies",
                    "From the first pitch to IPO",
                ].map((item, index) => (
                    <p className="nav-links" key={index}>{item}</p>
                ))}
                <div className="cta-button flex items-center gap-2">
                    <a
                        href="#"
                        className="cta-text px-4 text-md py-1 border-[.5px] border-[#212121] rounded-full uppercase transition-all duration-300 ease-in-out"
                    >
                        Start a Project
                    </a>
                    <div className="cta-icon text-md p-[.5vw] border-[.5px] border-[#212121] rounded-full transition-all duration-300 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#212121"
                            className="size-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
