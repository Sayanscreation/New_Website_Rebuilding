import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projectdetails1() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const images = [
        { src: "/Commercialmain1.jpg", title: "Modern Office Complexes", subtitle: "Fostering Innovation and Productivity", link: "/ProjectDetails" },
        { src: "/Commercialmain2.jpg", title: "Retail Destinations", subtitle: "Crafting Spaces for Memorable Shopping Experiences", link: "#" },
        { src: "/Commercialmain3.jpg", title: "Mixed-Use Developments", subtitle: "Seamlessly Integrating Work, Play, and Living", link: "#" },
        { src: "/Commercialmain4.jpg", title: "Business Parks", subtitle: "Expanding Opportunities with Advanced Infrastructure", link: "#" },
        { src: "/Commercialmain5.jpg", title: "Hospitality Venues", subtitle: "Elevating Guest Experiences with Thoughtful Design", link: "#" },
        { src: "/Commercialmain6.jpg", title: "Industrial Facilities", subtitle: "Optimizing Functionality for Operational Excellence", link: "#" }
    ];

    const testimonials = [
        { text: "Excellent service and support. Highly recommended!", name: "John Doe", location: "New York, USA" },
        { text: "Professional and reliable team. Great experience!", name: "Emily Smith", location: "London, UK" },
        { text: "Very satisfied with the results. Thank you!", name: "Rajesh Kumar", location: "Mumbai, India" },
        { text: "Top-notch service. Will definitely work again!", name: "Sophia Lee", location: "Sydney, Australia" },
        { text: "Amazing work, exceeded expectations!", name: "Carlos Mendoza", location: "Mexico City, Mexico" },
        { text: "Truly professional and trustworthy!", name: "Aisha Ahmed", location: "Dubai, UAE" }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div>
            {/* Banner Section */}
            <div className="relative">
                <div
                    className="min-h-[60vh] sm:min-h-[70vh] w-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url('/Banner.jpg')` }}
                >
                    <div
                        className="bg-black bg-opacity-50 text-white p-4 sm:p-8 rounded-md text-center max-w-md lg:max-w-xl"
                        data-aos="fade-right"
                    >
                        <h1 className="text-2xl sm:text-5xl font-bold mb-4">
                            Shaping Skylines, Defining Success
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mt-6 px-4 md:px-20 mb-6">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-5xl font-bold mb-10 text-customBlue">
                        Empowering Businesses with World-Class Spaces
                    </h1>
                </div>
                <div className="text-center mb-20">
                    <p className="text-gray-700">
                        At our core, we specialize in crafting dynamic commercial spaces that inspire innovation, collaboration, and growth. Each project reflects our dedication to superior design, functionality, and sustainability, tailored to meet diverse industry needs. From state-of-the-art office complexes to vibrant retail spaces, our solutions are built to empower businesses to thrive. We prioritize quality, efficiency, and adaptability to ensure every commercial project meets the highest standards and delivers exceptional value. Trust us to transform your vision into a reality that drives success and elevates your brand.
                    </p>
                </div>

                {/* Image Grid Section */}
                <div className="px-4 md:pt-15 grid grid-cols-3 gap-6 md:gap-8 mb-20">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group"
                            data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
                        >
                            <a href={image.link}>
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                                />
                            </a>
                            <a
                                href={image.link}
                                className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline"
                            >
                                {image.title}
                            </a>
                            <p className="text-gray-700 text-sm">{image.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Statistics Section */}
            <section className="relative bg-gray-100 py-16 pt-30">
                <div className="relative  max-w-6xl mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4">
                            <h2 className="text-6xl font-bold text-blue-600">250+</h2>
                            <p className="text-gray-700 mt-2 text-lg font-semibold">Projects Completed</p>
                        </div>
                        <div className="p-4">
                            <h2 className="text-6xl font-bold text-green-600">150+</h2>
                            <p className="text-gray-700 mt-2 text-lg font-semibold">Happy Clients</p>
                        </div>
                        <div className="p-4">
                            <h2 className="text-6xl font-bold text-red-600">10+</h2>
                            <p className="text-gray-700 mt-2 text-lg font-semibold">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <div className="py-12 bg-base mt-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-customBlue mb-8">OUR CLIENTS</h1>
                    <Slider {...sliderSettings} className="px-4">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-4">
                                <div className="bg-base-200 shadow-md rounded-lg p-6 text-center">
                                    <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Projectdetails1;
