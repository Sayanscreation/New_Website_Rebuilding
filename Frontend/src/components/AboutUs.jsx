import React from 'react'

function AboutUs() {
    return (
        <div>
            <div className="relative">
                <div
                    className="min-h-[60vh] sm:min-h-[70vh] w-full bg-cover bg-center flex items-center"
                    style={{ backgroundImage: `url('/Banner.jpg')` }}>
                    <div className="bg-black bg-opacity-50 text-white p-4 sm:p-8 rounded-md mx-4 max-w-md lg:max-w-xl mt-20 sm:mt-20">
                        <h1 className="text-2xl sm:text-5xl font-bold mb-4">
                            About us
                        </h1>
                        {/* <p className="text-sm sm:text-base mb-4">
                            At Bengal Engineers, we leverage expertise and innovation to engineer solutions that propel your success forward.
                        </p>
                        <p>
                            Bengal Engineers delivers client-focused civil and environmental engineering solutions to public and private clients. Our integrated approach prioritizes optimization, minimizing risk and costs for our clients. Based in Central Maryland, Bengal Engineers is a small firm that ensures local expertise, swift response times, and cost-effectiveness without compromising quality.
                        </p>

                        <a
                            href="#contact"
                            className="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3">
                            Learn More
                        </a> */}
                    </div>
                </div>

                <div className="mt-6 mb-6 md:px-20">
                    <div id="firm-overview" className='text-center'>
                        <h1 h1 className="text-2xl sm:text-4xl font-bold mb-4 ">Firm Overview</h1>
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

                        {/* <p>
                        Bengal Engineers (BENGAL) is a Maryland based civil engineering firm with the mission to help our clients and teaming partners improve their communities by facilitating sustainability in engineering one project at a time.
                    </p>
                    <p>
                        The word “bengal” refers to the Bengal tiger, which represents strength against all odds and adversity. The tiger represents the values our company embodies:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Quality above all else</li>
                        <li>Determination to achieve our goals</li>
                        <li>Confidence in our vision</li>
                        <li>Ethical business practices</li>
                        <li>Proactive in addressing issues</li>
                        <li>Providing strong partnership</li>
                    </ul>


                    BENGAL offers comprehensive civil engineering services in environmental and water resources engineering, site engineering, and utility engineering for both public and private clients. Our staff includes experienced professional engineers and technicians who have honed their technical expertise through their experience working for large engineering and construction firms in the Mid-Atlantic region.

                    BENGAL is headquartered in Laurel, Maryland. We take pride in building strong relationships with our clients by delivering quality products that are on time and within budget to win their trust. Not only do we offer a unique skill set, industry knowledge, and staff diversity but also a persistent mindset and energy level to go the extra mile and get things done.
 */}
                        <div  className="md:w-7/10 w-full text-justify order-none md:order-1">
                            <p>
                                Bengal Engineers, an MBE firm based in Maryland, is dedicated to enhancing communities through sustainable engineering solutions. Drawing inspiration from the Bengal tiger, our company embodies strength, quality, determination, and ethical practices.



                                Specializing in environmental and water resources engineering, site engineering, and utility engineering, Bengal Engineers serves public and private clients with comprehensive civil engineering services. Our team, composed of seasoned professionals with experience in leading engineering and construction firms, ensures top-tier expertise.



                                Headquartered in Laurel, Maryland, we prioritize building strong client relationships by delivering quality, timely, and budget-friendly solutions. With our unique skill set, industry knowledge, and unwavering commitment, we consistently exceed our clients’ expectations and get the job done.
                            </p>
                        </div>
                    </div>




                    <div id="meet-subra" className=' bg-base-200'>
                        <div className="text-center mt-6">
                            <h1 className="text-2xl sm:text-3xl font-bold">Meet Subra</h1>
                        </div>
                        <div className="flex flex-col md:flex-row mt-6 gap-6">
                            {/* Image Section (30%) */}

                            {/* Text Section (70%) */}
                            <div className="md:w-7/10 w-full text-justify order-none md:order-none">
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
                    <div className=" ">
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
