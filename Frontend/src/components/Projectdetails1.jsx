import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

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
                    <h1 className="text-2xl sm:text-5xl font-bold mb-4 text-customBlue">
                        Empowering Businesses with World-Class Spaces
                    </h1>
                </div>
                <div className="text-center mb-10">
                    <p className="text-gray-700">
                        At our core, we specialize in crafting dynamic commercial spaces that inspire innovation, collaboration, and growth. Each project reflects our dedication to superior design, functionality, and sustainability, tailored to meet diverse industry needs. From state-of-the-art office complexes to vibrant retail spaces, our solutions are built to empower businesses to thrive. We prioritize quality, efficiency, and adaptability to ensure every commercial project meets the highest standards and delivers exceptional value. Trust us to transform your vision into a reality that drives success and elevates your brand.
                    </p>
                </div>

                {/* Image Grid Section */}
                <div className="px-4 md:pt-15 grid grid-cols-3 gap-6 md:gap-8">
                    {images.slice(0, 6).map((image, index) => (
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

                {/* Centered Image */}

            </div>
        </div>
    );
}

export default Projectdetails1
