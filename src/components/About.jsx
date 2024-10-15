import React from 'react'

function about() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full bg-[#CDEA68] rounded-2xl text-[#212121]'>
            <div className="about-wrapper px-12">
                <p className='about-title '>
                    Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds sell products, explain complex ideas</span>, and <span className="underline">hire great peo<br />ple.</span>
                </p>
                <div className="section-container">
                    <div className="column what-to-expect">
                        <p>What you can expect:</p>
                    </div>
                    <div className="column content">
                        <p className='about-p-1'>
                            We create tailored presentations to help you persuade your colleagues,
                            clients, or investors. Whether it’s live or digital, delivered for one or
                            a hundred people.
                        </p>
                        <p className='mt-7 about-p-2'>
                            We believe the mix of strategy and design (with a bit of coffee) is what
                            makes your message clear, convincing, and captivating.
                        </p>
                    </div>
                    <div className="column social flex items-end justify-evenly">
                        <ul>
                            <p>S:</p>
                            <li><a href="https://instagram.com/oliverfelix.dev">Instagram</a></li>
                            <li><a href="https://behance.com">Behance</a></li>
                            <li><a href="https://facebook.com">Facebook</a></li>
                            <li><a href="https://linkedin.com">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-[#2121216e] border-t-[.5px] mt-10"></div>
                <div className="flex justify-between items-start pt-24 pb-14 rounded-lg ">
                    <div className="w-1/2">
                        <h2 className="text-6xl mb-4">Our approach:</h2>
                        <button className="cta-bdy hover:scale-95 transition-transform duration-500">
                            READ MORE
                            <span className="ml-2 w-2.5 h-2.5 bg-white rounded-full inline-block"></span>
                        </button>
                    </div>
                    <div className="w-1/2 about-image-con hover:scale-95 transition-transform duration-500">
                        <img
                            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" // Example placeholder image URL
                            alt="Team"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about