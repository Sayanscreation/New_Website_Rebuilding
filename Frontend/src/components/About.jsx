import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {




    return (
        <div>
            <div id="About" className="md:px-20 mt-6 pb-6 px-4">
                <div className="flex flex-col-reverse md:flex-row gap-6">
                    {/* Text Section */}
                    <div className="md:w-5/12 w-full py-4">
                        {/* Subheading */}
                        <div className="text-customGreen text-sm uppercase tracking-wide mb-2">
                            Empowering Engineering Solutions
                        </div>
                        {/* Main Heading */}
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-customBlue">
                            Why Bengal Engineers 
                        </h1>
                        {/* Brief Text */}
                        <p className="text-justify text-gray-700">
                            Bengal Engineers delivers client-focused civil and environmental engineering solutions to public and private clients. Our integrated approach prioritizes optimization, minimizing risk and costs for our clients. Based in Central Maryland, Bengal Engineers is a small firm that ensures local expertise, swift response times, and cost-effectiveness without compromising quality.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-7/12 w-full flex flex-row gap-2 justify-center items-center">
                        {/* Image 1 */}
                        <div className="w-1/2 md:h-[40vh] relative">
                            <img
                                src="/Banner.jpg"
                                alt="Bengal Engineers"
                                className="w-full h-full rounded-lg shadow-lg object-cover"
                                data-aos="fade-up"
                            />
                        </div>
                        {/* Image 2 */}
                        <div className="w-1/2 md:h-[40vh] relative">
                            <img
                                src="/Banner.jpg"
                                alt="Engineering Excellence"
                                className="w-full h-full rounded-lg shadow-lg object-cover"
                                data-aos="fade-down"
                            />
                        </div>
                    </div>


                </div>
            </div>



        </div>

    );
}

export default About;


/* transform translate-y-10 transition-transform duration-500 ease-in-out md:hover:translate-y-20 */