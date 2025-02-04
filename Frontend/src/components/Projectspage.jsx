import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Projectspage() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const images = [
        { src: "/Commercial4.jpg", title: "Commercial", subtitle: "Subtitle 1", link: "/Allprojects" },
        { src: "/School.jpg", title: "Education", subtitle: "Subtitle 2", link: "#" },
        { src: "/Energy.jpg", title: "Energy", subtitle: "Subtitle 3", link: "#" },
        { src: "/Religious.jpg", title: "Religious", subtitle: "Subtitle 4", link: "#" },
        { src: "/Residential.jpg", title: "Residential", subtitle: "Subtitle 5", link: "#" },
        { src: "/Transport.jpg", title: "Transportation", subtitle: "Subtitle 6", link: "#" },
        { src: "/Water.jpg", title: "Water Resources", subtitle: "Subtitle 7", link: "#" },
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
                            Innovative Solutions, Timeless Projects
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mt-6 px-4 md:px-40 mb-6">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-5xl font-bold mb-4 text-customBlue">
                        Innovation in Every Blueprint
                    </h1>
                </div>
                <div className="text-center mb-10">
                    <p className="text-gray-700">
                        Our projects embody innovation, excellence, and sustainability, driving meaningful impact across industries. From infrastructure development to groundbreaking architectural designs, we deliver tailored solutions that meet diverse client needs. Each project is a testament to our commitment to quality, precision, and timely execution. Leveraging cutting-edge technology and expertise, we ensure exceptional outcomes that not only meet but exceed expectations. By prioritizing collaboration and adaptability, we craft projects that shape communities and build the future. Explore our portfolio to witness how we turn visionary concepts into enduring achievements, creating a lasting legacy of success.
                    </p>
                </div>

                {/* Image Grid Section */}
                <div className="md:pt-15 grid grid-cols-3 gap-6 md:gap-8">
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
                                className="block mt-2 text-lg font-bold text-gray-800 group-hover:underline"
                            >
                                {image.title}
                            </a>
                            <p className="text-customGreen text-sm">{image.subtitle}</p>
                        </div>
                    ))}
                </div>

                {/* Centered Image */}
                {/* Centered Image */}
                <div className="flex justify-center mt-6" data-aos="fade-up">
                    <div className="relative group w-full md:w-1/3">
                        <a href={images[6].link}>
                            <img
                                src={images[6].src}
                                alt={images[6].title}
                                className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href={images[6].link}
                            className="block mt-2 text-lg font-bold text-gray-800 group-hover:underline text-center"
                        >
                            {images[6].title}
                        </a>
                        <p className="text-gray-500 text-sm text-center">{images[6].subtitle}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projectspage;
