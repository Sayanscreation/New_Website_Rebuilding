import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../servicesData";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ServicesPage = () => {
    const { serviceName } = useParams(); // Get the dynamic service name from the URL
    const service = services.find((s) => s.name === serviceName); // Find matching service

    if (!service) {
        return <h2 className="text-center text-red-500">Service Not Found</h2>;
    }

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
        <div className="Services Page">
            <div className="relative">
                <div className='min-h-[50vh] sm:min-h-[70vh] bg-cover bg-center flex items-center justify-center'
                    style={{ backgroundImage: `url('/Banner.jpg')` }}
                >
                    <div className="bg-black bg-opacity-50 text-white p-4 sm:p-8 rounded-md text-center max-w-md lg:max-w-xl" data-aos="fade-right">
                        <h1 className="text-2xl sm:text-5xl font-bold mb-4">
                            Services Offerings
                        </h1>
                    </div>

                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row items-top gap-10">
                    {/* Image on the right for desktop, top for mobile */}
                    <div className="w-full md:w-1/2 h-[50vh]">
                        <img
                            src={service.image}
                            alt={service.displayName}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{service.displayName}</h1>
                        <p className="text-lg text-gray-600 mb-4">{service.description}</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {service.services.map((item, index) => (
                                <li key={index} className="text-base">{item}</li>
                            ))}
                        </ul>

                        <Link to="/GetBackForm">
                            <button className="bg-customBlue text-white px-4 py-2 rounded hover:bg-blue-700 mt-5">
                                Request Survey
                            </button>
                        </Link>
                    </div>
                </div>


            </div>

            {/* Stats Section */}
            <section className="w-full bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
};

export default ServicesPage;
