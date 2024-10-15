import React from 'react'

function Footer() {
    return (
        <div className='h-screen w-full rounded-t-2xl'>
            <div className="footer-wrap px-12 pt-20 flex h-full w-full items-start justify-start">
                <div className="ft-left w-1/2 h-full flex items-start flex-col justify-between pb-10">
                    <h1 className="footer-title">eye- <br />opening</h1>
                    <img src="./src/assets/img/logo-main.svg" alt="bot found" />
                </div>
                <div className="ft-right w-1/2">
                    <h1 className="footer-title">presentations</h1>
                    <div className="ft-links">
                        <div className="ft-link-con1 mt-10">
                            {["S:", "Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => <a key={index} href='#' className={`duration-300 hover:opacity-65 w-fit ft-links text-md block ${index === 1 ? "mt-4" : "mt-0"}`}>{item}</a>)}
                        </div>

                        <div className="ft-link-con2 mt-10 flex items-start justify-between">
                            <div className="part1">
                                <span className='text-md'>L:</span>
                                <a href="#" className='text-md ft-links block mt-4'>202-1965 W 4th Ave<br />Vancouver, Canada</a>
                                <a href="#" className='text-md ft-links block mt-5'>30 Chukarina St<br />Lviv, Ukraine</a>
                            </div>
                            <div className="part2 pr-20">
                            <span className='text-md'>M:</span>
                                <a href="#" className='text-md duration-300 hover:opacity-65 ft-links block mt-4'>Home</a>
                                <a href="#" className='text-md duration-300 hover:opacity-65 ft-links block'>Services</a>
                                <a href="#" className='text-md duration-300 hover:opacity-65 ft-links block'>Our work</a>
                                <a href="#" className='text-md duration-300 hover:opacity-65 ft-links block'>About us</a>
                                <a href="#" className='text-md duration-300 hover:opacity-65 ft-links block'>Insights</a>
                                <a href="#" className='text-md duration-300 hover:opacity-65 ft-links block'>Contact us</a>
                            </div>
                        </div>

                        <div className="ft-link-con3 mt-10">
                            <span className='text-md'>E:</span>
                            <a href="mailto:oliverfelix.dev@gmail.com" className='block mt-4 w-fit duration-300 hover:opacity-65'>oliverfelix.dev@gmail.com</a>
                        </div>
                        <div className="legal-con flex items-center justify-between mt-8">
                            <span className='text-[#00000044] text-md'>&copy; Ochi Design Replica 2024. Legal Terms</span>
                            <a className='text-[#00000044] text-md relative' href="https://instagram.com/oliverfelix.dev">Replica by <span className='text-xl font-[black-K] text-[#0009] font-semibold'>Oliver Felix</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer