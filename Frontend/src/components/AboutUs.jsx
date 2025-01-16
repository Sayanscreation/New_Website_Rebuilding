import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {




    return (
        <div>
            <div className="relative">
                <div
                    className="min-h-[60vh] sm:min-h-[70vh] w-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url('/Banner.jpg')` }}
                >
                    <div className="bg-black bg-opacity-50 text-white p-4 sm:p-8 rounded-md text-center max-w-md lg:max-w-xl" data-aos="fade-right">
                        <h1 className="text-2xl sm:text-5xl font-bold mb-4">
                        Discover Bengal Engineers
                        </h1>
                    </div>
                </div>

                <div id="firm-overview" className="mt-6 pb-6 md:px-20 px-4">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-5xl font-bold mb-4 text-customGreen">Firm Overview</h1>
                    </div>
                    <div className="flex flex-col md:flex-row mt-6 gap-3">
                        {/* Image Section (30%) */}
                        <div className="md:w-4/10 w-full flex items-center py-4 justify-center order-1 md:order-none">
                            <img
                                src="/Banner.jpg"
                                alt="Subra Das"
                                className="w-full h-auto max-w-sm rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Text Section (70%) */}
                        <div className="md:w-6/10 w-full text-justify order-none md:order-1">
                            <p>
                                Bengal Engineers, an MBE firm based in Maryland, is dedicated to enhancing communities through sustainable engineering solutions. Drawing inspiration from the Bengal tiger, our company embodies strength, quality, determination, and ethical practices.
                            </p>
                            <p>
                                Specializing in environmental and water resources engineering, site engineering, and utility engineering, Bengal Engineers serves public and private clients with comprehensive civil engineering services. Our team, composed of seasoned professionals with experience in leading engineering and construction firms, ensures top-tier expertise.
                            </p>
                            <p>
                                Headquartered in Laurel, Maryland, we prioritize building strong client relationships by delivering quality, timely, and budget-friendly solutions. With our unique skill set, industry knowledge, and unwavering commitment, we consistently exceed our clients’ expectations and get the job done.
                            </p>
                        </div>
                    </div>
                </div>



                <div>
                    <div id="meet-subra" className=' bg-base-200'>
                        <div className="flex flex-col md:flex-row mt-6 gap-6 px-6 md:px-20 pb-6">
                            {/* Image Section (30%) */}

                            {/* Text Section (70%) */}
                            <div className="md:w-7/10 w-full text-justify order-one md:order-none">
                                <div className="text-left mt-6 mb-2 text-customBlue" data-aos="fade-right">
                                    <h1 className="text-2xl sm:text-5xl font-bold">Meet Subra</h1>
                                </div>
                                <div className="text-customGreen text-sm uppercase tracking-wide mb-4 font-bold">
                                    PE,  the visionary founder and president
                                </div>

                                <p>
                                    Subra Das, PE, is the founder and president of Bengal Engineers, dedicated to delivering exceptional engineering solutions to private and public clients. With over 20 years of experience in project management and client relations, Subra's leadership ensures excellence in every project.
                                </p>
                                <p>
                                    As a registered civil engineer, Subra has managed prominent projects like the Inter-County Connector and Port Covington in Maryland and neighboring states. His expertise in civil engineering and surveying, combined with strong leadership, has established him as a key figure in the consulting engineering industry.
                                </p>
                                <p>
                                    Having held senior leadership roles within Engineering News Record (ENR) Top 500 design firms in the Mid-Atlantic region, Subra brings a wealth of expertise and insight to Bengal Engineers, ensuring the highest standards of innovation, efficiency, and client satisfaction.
                                </p>
                                <p>
                                    Subra holds a bachelor's degree from MNNIT India and a master's from Texas Tech University. He is a licensed engineer in Maryland, Virginia, and Washington, DC, and actively participates in professional associations like the American Council of Engineering Companies Maryland.
                                </p>
                            </div>
                            <div className="md:w-3/10 w-full flex items-center justify-center order-1 md:order-1">
                                <img
                                    src="/Banner.jpg"
                                    alt="Subra Das"
                                    className="w-full h-full max-w-sm rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>


                    <div id="mbe-certifications" className="text-center mt-6 mb-6">
                        <h1 className="text-2xl sm:text-5xl font-bold text-customBlue">MBE Certifications</h1>
                    </div>
                    <div className="md:px-20 mb-6">
                        <ul className='list-disc pl-6'>
                            <li>MARYLAND </li>
                            <li>MDOT MBE/DBE/SBE </li>
                            <li>Maryland Small Business Reserve </li>
                            <li>Anne Arundel County Government </li>
                            <li>Baltimore County Government </li>
                            <li>Charles County Government </li>
                        </ul>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default AboutUs
