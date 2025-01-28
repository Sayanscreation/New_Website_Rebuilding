import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProjectDetails2() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    '/Commercial1.jpg',
    '/Commercial2.jpg',
    '/Commercial3.jpg',
    '/Commercial4.jpg',
  ];

  return (
    <div>
      <div className="mt-20 mb-20 px-4 md:px-40">
        <h1 className="font-bold text-3xl md:text-5xl text-customGreen mb-10">
          Modern Office Complexes
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Slider Section */}
          <div className="md:w-2/3 w-full h-[75vh] overflow-hidden">
            <Slider {...sliderSettings}>
              {images.map((src, index) => (
                <div key={index} className="h-[75vh]">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Parameter Section */}
          <div className="md:w-1/3 w-full border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6 text-customBlue">
              Project Details
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="font-semibold">Year Completed:</span>
                <span>2024</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Place:</span>
                <span>Kolkata</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Client:</span>
                <span>ABC Corp</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Architect:</span>
                <span>XYZ Designs</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Project Type:</span>
                <span>Commercial</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Description Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-customBlue mb-4">
            Project Overview
          </h2>
          <p className="text-gray-700">
            This modern office complex was designed to blend functionality with aesthetic appeal,
            offering state-of-the-art facilities for businesses. Located in the bustling city of
            Kolkata, the project features an eco-friendly design, ample workspace, and advanced
            technological integration. Each aspect of the construction was meticulously planned
            to ensure durability, sustainability, and optimal utilization of space. With a focus
            on innovation and client satisfaction, this project represents the future of
            commercial architecture.
          </p>
          <p className='text-grey-700'>
          At Bengal Engineers, we bring innovation and precision to your property search experience. Our projects reflect a blend of modern design, functionality, and environmental consciousness. This initiative connects potential property seekers with trusted resources to find their dream spaces efficiently.

          </p>
          <p className='text-grey-700'>
          With a strong emphasis on user-friendly tools, we provide tailored solutions for residential, commercial, and industrial properties. Our intuitive platform ensures seamless navigation, allowing users to explore diverse listings, compare options, and make informed decisions.
          </p>
          

        </div>
      </div>


      <div className='flex flex-col md:flex-row w-full mt-10 gap-6 bg-base-200'>
        <div className='md:w-1/2 w-full h-[60vh] overflow-hidden'>
          <img
            alt='image'
            src='/Banner.jpg'
            className='h-full w-full object-cover rounded-none'
          />

        </div>
        <div className='md:w-1/2 w-full  justify-center py-10 px-4 md:px-10'>
          <h2 className='text-customGreen mb-4'> GET IN TOUCH </h2>
          <h1 className='text-customBlue font-bold text-2xl md:text-4xl mb-6'>Start Your Property
            Search with Bengal Engineers</h1>
          <h3>One of the Bengal Engineers representatives will get back to you shortly.</h3>
          <div>
            <a className="btn sm:text-sm md:text-base sm:whitespace-normal md:whitespace-nowrap text-center bg-base text-customGreen border border-customBlue hover:bg-customGreen hover:text-white px-4 py-2 rounded mt-6">
              Contact us
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectDetails2;
