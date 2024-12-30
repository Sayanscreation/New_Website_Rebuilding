import React from 'react';

function Banner() {
    return (
        <div>
            <div className="relative">
                {/* Background Image */}
                <div
                    className="min-h-[70vh] sm:min-h-[90vh] w-full bg-cover bg-center flex items-center"
                    style={{ backgroundImage: `url('/Banner.jpg')` }}>
                    {/* Transparent Text Container */}
                    <div className="bg-black bg-opacity-50 text-white p-4 sm:p-8 rounded-md mx-4 max-w-md lg:max-w-xl mt-20 sm:mt-20">
                        <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                        Engineering Success Together. 
                        </h1>
                        <p className="text-sm sm:text-base mb-4">
                        At Bengal Engineers, we leverage expertise and innovation to engineer solutions that propel your success forward.
                        </p>
                        <p>
                        Bengal Engineers delivers client-focused civil and environmental engineering solutions to public and private clients. Our integrated approach prioritizes optimization, minimizing risk and costs for our clients. Based in Central Maryland, Bengal Engineers is a small firm that ensures local expertise, swift response times, and cost-effectiveness without compromising quality. 
                        </p>

                        <a
                            href="#contact"
                            className="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
