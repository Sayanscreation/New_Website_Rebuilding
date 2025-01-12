import React from 'react'

function AboutUs() {




    return (
        <div>
            <div className="relative">
                <div
                    className="min-h-[60vh] sm:min-h-[70vh] w-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url('/Banner.jpg')` }}
                >
                    <div className="bg-black bg-opacity-50 text-white p-4 sm:p-8 rounded-md text-center max-w-md lg:max-w-xl">
                        <h1 className="text-2xl sm:text-5xl font-bold mb-4">
                            About us
                        </h1>
                    </div>
                </div>

                <div id="firm-overview" className="mt-6 pb-6 md:px-20 px-4">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Firm Overview</h1>
                    </div>
                    <div className="flex flex-col md:flex-row mt-6 gap-6">
                        {/* Image Section (30%) */}
                        <div className="md:w-3/10 w-full flex items-center py-4 justify-center order-1 md:order-none">
                            <img
                                src="/Banner.jpg"
                                alt="Subra Das"
                                className="w-full h-auto max-w-sm rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Text Section (70%) */}
                        <div className="md:w-7/10 w-full text-justify order-none md:order-1">
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
                        <div className="text-center mt-6 md:px-20">
                            <h1 className="text-2xl sm:text-3xl font-bold">Meet Subra</h1>
                        </div>
                        <div className="flex flex-col md:flex-row mt-6 gap-6 px-6 md:px-20 pb-6">
                            {/* Image Section (30%) */}

                            {/* Text Section (70%) */}
                            <div className="md:w-7/10 w-full text-justify order-one md:order-none">
                                <p>
                                    Subra Das, PE, is the visionary founder and president of Bengal Engineers, renowned for his unwavering dedication to delivering technical expertise and engineering solutions to his private and public clients. With over two decades of experience in project management, client relations, and contract administration, Subra's leadership is marked by a relentless commitment to excellence.
                                </p>
                                <p>
                                    As a registered professional civil engineer, Subra has led the design and management of numerous high-profile projects across Maryland and neighboring states, including iconic developments such as the Inter-County Connector and Port Covington. His extensive background in civil engineering and surveying, coupled with his exceptional leadership and management abilities, has solidified his reputation as a driving force in the consulting engineering industry.
                                </p>
                                <p>
                                    Having held senior leadership roles within Engineering News Record (ENR) Top 500 design firms in the Mid-Atlantic region, Subra brings a wealth of expertise and insight to Bengal Engineers, ensuring the highest standards of innovation, efficiency, and client satisfaction.
                                </p>
                                <p>
                                    Subra earned his bachelor's degree in civil engineering from MNNIT India in 1999 and master’s degree in civil engineering from Texas Tech University in 2004. He is a registered professional engineer in Maryland, Virginia, and Washington, DC. Subra is active with numerous professional associations and has served on various committees of American Council of Engineering Companies Maryland.
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


                    <div id="mbe-certifications" className="text-center mt-6">
                        <h1 className="text-2xl sm:text-3xl font-bold">MBE Certifications</h1>
                    </div>
                    <div className="md:px-20 ">
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
