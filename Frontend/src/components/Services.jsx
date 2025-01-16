import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Services() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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

    const cards = [
        {
            id: 1,
            title: "Site/Civil Engineering Services",
            image: "/Banner.jpg",
            link: "#",
        },
        {
            id: 2,
            title: "Land Surveying Services",
            image: "/Banner.jpg",
            link: "#",
        },
        {
            id: 3,
            title: "Environmental and Water Resources Engineering",
            image: "/Banner.jpg",
            link: "#",
        },
        {
            id: 4,
            title: "Utility Engineering Services",
            image: "/Banner.jpg",
            link: "#",
        },
        {
            id: 5,
            title: "Traffic Engineering Services",
            image: "/Banner.jpg",
            link: "#",
        },
        {
            id: 6,
            title: "Structural Engineering Services",
            image: "/Banner.jpg",
            link: "#",
        },
        {
            id: 7,
            title: "Alternative Delivery - Design-Build",
            image: "/Banner.jpg",
            link: "#",
        },
    ];

    return (
        <div>
            <div className=' mb-10'>
                {/* Header */}
                <div className='flex justify-center mt-10 pt-6'>
                    <h1 className='text-3xl'>Service Offerings</h1>
                </div>

                {/* Slider with Cards */}
                <div className="mt-6">
                    <Slider {...settings} className="custom-slider">
                        {cards.map((card) => (
                            <div key={card.id} className="card-container">
                            <div className="card bg-base-100 w-64 h-80 shadow-xl">
                                {/* Add overflow-hidden to crop zoomed images */}
                                <figure className="overflow-hidden">
                                    <a href={card.link}>
                                        {/* Add Tailwind classes for zoom and transitions */}
                                        <img 
                                            src={card.image} 
                                            alt={card.title} 
                                            className="transform transition-transform duration-300 hover:scale-110"
                                        />
                                    </a>
                                </figure>
                                <div className="card-body">
                                    <a href={card.link} className="hover:underline text-xl font-semibold">
                                        {card.title}
                                    </a>
                                    <a href={card.link} className="text-blue-700 hover:underline">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                        

                        ))}
                    </Slider>
                </div>

                {/* Custom Styles */}

            </div>
        </div>
    );
}

export default Services;