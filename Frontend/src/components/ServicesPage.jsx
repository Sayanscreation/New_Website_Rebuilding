import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        id: 1,
        image: "/Banner.jpg",
        name: "John Doe",
        location: "New York, USA",
        testimonial: "The services provided were exceptional. I am highly satisfied!",
    },
    {
        id: 2,
        image: "/Banner.jpg",
        name: "Jane Smith",
        location: "London, UK",
        testimonial: "Great experience! The team was professional and very helpful.",
    },
    {
        id: 3,
        image: "/Banner.jpg",
        name: "Rajesh Kumar",
        location: "Delhi, India",
        testimonial: "I would highly recommend them to anyone seeking quality services.",
    },
];

function ServicesPage() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };



    return (
        <div>
            <div className="relative">
                <div
                    className="min-h-[60vh] sm:min-h-[70vh] w-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url('/Banner.jpg')` }}
                >
                   <div className="bg-black bg-opacity-50 text-white p-4 sm:p-8 rounded-md text-center max-w-full">

                        <h1 className="text-2xl sm:text-5xl font-bold mb-4">
                        Delivering Excellence Through Expertise
                        </h1>
                    </div>
                </div>
            </div>

            <div className='sm:text-2xl md:text-3xl font-bold  text-center mt-6'>
                Environmental and Water Resources Engineering
            </div>
            <div className='flex flex-col md:flex-row gap-6 mt-6 px-6 md:px-20 mb-6'>
                <div className='md:w-7/10 w-full'>
                    <p>BENGAL engineers offer comprehensive solutions to our client’s environmental and water resources engineering needs in the following areas:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Hydrologic & hydraulics analyses</li>
                        <li>Floodplain and watershed studies</li>
                        <li>Flood risk assessments & mitigation</li>
                        <li>Culverts/bridge hydraulics</li>
                        <li>Scour analysis and countermeasure design</li>
                        <li>FEMA Flood Insurance Studies (LOMR/CLOMR)</li>
                        <li>Inundation mapping</li>
                        <li>No rise studies and certifications</li>
                        <li>Stream crossing/restoration</li>
                        <li>Streambank protection and stabilization</li>
                        <li>MD dam safety</li>
                        <li>TMDL restoration and retrofit design</li>
                        <li>SWPPP</li>
                        <li>Outfalls/BMP performance ratings</li>
                        <li>Storm drain inventory field verification</li>
                        <li>Technical plan reviews</li>
                        <li>Program management</li>
                    </ul>

                </div>
                <div className='md:w-3/10'>
                    <img
                        src='/Banner.jpg'
                        alt='Environmental and Water Resources Engineering image'
                        className=" rounded-lg shadow-lg">
                    </img>
                </div>

            </div>
            <section class="w-full bg-gray-100 py-12">
                <div class="container mx-auto text-center">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* <!-- Column 1 --> */}
                        <div class="p-4">
                            <h2 class="text-6xl font-bold text-blue-600">250+</h2>
                            <p class="text-gray-700 mt-2 text-lg font-semibold">Projects Completed</p>
                        </div>
                        {/*  <!-- Column 2 --> */}
                        <div class="p-4">
                            <h2 class="text-6xl font-bold text-green-600">150+</h2>
                            <p class="text-gray-700 mt-2 text-lg font-semibold">Happy Clients</p>
                        </div>
                        {/*  <!-- Column 3 --> */}
                        <div class="p-4">
                            <h2 class="text-6xl font-bold text-red-600">10+</h2>
                            <p class="text-gray-700 mt-2 text-lg font-semibold">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </section>



            <div className="testimonial-carousel my-10 px-6 max-w-screen-xl mx-auto">
                <h2 className="text-center text-3xl font-bold mb-8">What Our Clients Say</h2>
                <Slider {...settings}>
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="testimonial-card mx-4 h-auto w-80 max-w-sm p-6 bg-base-300 shadow-lg rounded-lg"
                        >
                            {/* Upper Section */}
                            <div className="flex items-center mb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <h3 className="text-xl font-bold">{item.name}</h3>
                                    <p className="text-gray-500">{item.location}</p>
                                </div>
                            </div>
                            {/* Testimonial Text */}
                            <p className="text-gray-700">{item.testimonial}</p>
                        </div>
                    ))}
                </Slider>
            </div>




        </div>
    )
}

export default ServicesPage
