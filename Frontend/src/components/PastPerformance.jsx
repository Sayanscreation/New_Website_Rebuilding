import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PastPerformance = () => {
    const logos = [
        { id: 1, image: "/Awardlogo.jpg" },
        { id: 2, image: "/Awardlogo.jpg" },
        { id: 3, image: "/Awardlogo.jpg" },
        { id: 4, image: "/Awardlogo.jpg" },
        { id: 5, image: "/Awardlogo.jpg" },
        { id: 6, image: "/Awardlogo.jpg" },
        { id: 7, image: "/Awardlogo.jpg" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Adjust this for testing
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="mt-6 mb-6 md:px-20">
            <div className="flex justify-center mt-4 text-blue-600">
                <h1 className="text-2xl md:text-3xl font-bold">Past Performances</h1>
            </div>
            <div>
                <p className="p-2 md:p-6">
                    BENGAL’s professional engineers and technicians have extensive professional experience and have worked for both regional and national-sized firms. We ensure that our work product and deliverables meet all engineering design and inspection standards and practices.

                    Our staff has previously provided services to many government agencies and private clients.
                </p>
            </div>
            <div className="mt-6">
                <Slider {...settings} className="custom-slider">
                    {logos.map((logo) => (
                        <div key={logo.id} className="p-4">
                            <img
                                src={logo.image}
                                alt={`Logo ${logo.id}`}
                                className="h-30 w-30 mx-auto rounded-full object-cover border border-gray-300 shadow-sm"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default PastPerformance;
