import React, { useState } from 'react';

const PastPerformance = () => {
    const logos = [
        'https://via.placeholder.com/100', // Replace with logo URLs
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const itemsPerSlide = 6; // Number of logos to show per slide
    const totalSlides = Math.ceil(logos.length / itemsPerSlide);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    const currentLogos = logos.slice(
        currentSlide * itemsPerSlide,
        currentSlide * itemsPerSlide + itemsPerSlide
    );

    return (
        <div className="mt-6 mb-6">
            <div className="flex justify-center mt-4 text-blue-600">
                <h1 className="text-2xl md:text-3xl font-bold">Past Performances</h1>
            </div>

            <div>
                <p className="p-2 md:p-6">
                    BENGAL’s professional engineers and technicians have extensive professional
                    experience and have worked for both regional and national-sized firms. We
                    ensure that our work product and deliverables meet all engineering design and
                    inspection standards and practices.
                    Our staff has previously provided services to many government agencies and
                    private clients.
                </p>
            </div>

            {/* Logo Carousel */}
            <div className="flex flex-col items-center mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-8 gap-6 ">
                    {currentLogos.map((logo, index) => (
                        <div key={index} className="p-4 bg-gray-200 rounded shadow">
                            <img src={logo} alt={`Logo ${index}`} className="h-20 mx-auto" />
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-4 gap-4">
                    <button
                        onClick={goToPreviousSlide}
                        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Previous
                    </button>
                    <button
                        onClick={goToNextSlide}
                        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PastPerformance;
