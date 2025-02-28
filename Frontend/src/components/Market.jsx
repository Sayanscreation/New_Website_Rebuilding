import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Market = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='career page'>
            <div className="relative">
                <div className='min-h-[50vh] sm:min-h-[70vh] bg-cover bg-center flex items-center justify-center'
                    style={{ backgroundImage: `url('/Banner.jpg')` }}
                >
                    <div className="bg-black bg-opacity-50 text-white p-4 sm:p-8 rounded-md text-center max-w-md lg:max-w-xl" data-aos="fade-right">
                        <h1 className="text-2xl sm:text-5xl font-bold mb-4">
                            Market
                        </h1>
                    </div>

                </div>
            </div>
            <div id='Commercial' className='mt-6 mb-6 md:px-20 px-4'>
                <h1 className='mb-6 text-3xl sm:text-5xl text-customBlue font-bold text-center'>Commercial Projects</h1>
                <p className='text-grey-800'>
                    Elevate your commercial projects with Bengal Engineers. From groundbreaking designs to meticulous planning, our team specializes in delivering innovative solutions for a wide range of commercial developments. We're dedicated to exceeding expectations and maximizing the success of your project. Partner with us to unlock the full potential of your commercial ventures.
                </p>

                <div className='mt-10 px-6 md:px-20 grid grid-cols-2 gap-6 md:gap-20'>
                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                </div>
                <div className='mt-6 mb-4 text-right flex justify-end'>
                    <a className='text-customGreen hover:text-customBlue font-semibold text-xl flex items-center' href='/Allprojects'>
                        View more <FaArrowRight className="ml-2" />
                    </a>
                </div>

                <hr className="border-2 border-grey-700 my-6"></hr>
            </div>

            <div id='Commercial' className='mt-6 mb-6 md:px-20 px-4'>
                <h1 className='mb-6 text-3xl sm:text-5xl text-customBlue font-bold text-center'>Education Projects</h1>
                <p className='text-grey-800'>
                    Elevate your commercial projects with Bengal Engineers. From groundbreaking designs to meticulous planning, our team specializes in delivering innovative solutions for a wide range of commercial developments. We're dedicated to exceeding expectations and maximizing the success of your project. Partner with us to unlock the full potential of your commercial ventures.
                </p>

                <div className='mt-10 px-6 md:px-20 grid grid-cols-2 gap-6 md:gap-20'>
                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                </div>
                <div className='mt-6 mb-4 text-right flex justify-end'>
                    <a className='text-customGreen hover:text-customBlue font-semibold text-xl flex items-center' href='#'>
                        View more <FaArrowRight className="ml-2" />
                    </a>
                </div>

                <hr className="border-2 border-grey-700 my-6"></hr>
            </div>


            <div id='Commercial' className='mt-6 mb-6 md:px-20 px-4'>
                <h1 className='mb-6 text-3xl sm:text-5xl text-customBlue font-bold text-center'>Energy Projects</h1>
                <p className='text-grey-800'>
                    Elevate your commercial projects with Bengal Engineers. From groundbreaking designs to meticulous planning, our team specializes in delivering innovative solutions for a wide range of commercial developments. We're dedicated to exceeding expectations and maximizing the success of your project. Partner with us to unlock the full potential of your commercial ventures.
                </p>

                <div className='mt-10 px-6 md:px-20 grid grid-cols-2 gap-6 md:gap-20'>
                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                </div>
                <div className='mt-6 mb-4 text-right flex justify-end'>
                    <a className='text-customGreen hover:text-customBlue font-semibold text-xl flex items-center' href='#'>
                        View more <FaArrowRight className="ml-2" />
                    </a>
                </div>

                <hr className="border-2 border-grey-700 my-6"></hr>
            </div>

            <div id='Commercial' className='mt-6 mb-6 md:px-20 px-4'>
                <h1 className='mb-6 text-3xl sm:text-5xl text-customBlue font-bold text-center'>Religious Projects</h1>
                <p className='text-grey-800'>
                    Elevate your commercial projects with Bengal Engineers. From groundbreaking designs to meticulous planning, our team specializes in delivering innovative solutions for a wide range of commercial developments. We're dedicated to exceeding expectations and maximizing the success of your project. Partner with us to unlock the full potential of your commercial ventures.
                </p>

                <div className='mt-10 px-6 md:px-20 grid grid-cols-2 gap-6 md:gap-20'>
                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                </div>
                <div className='mt-6 mb-4 text-right flex justify-end'>
                    <a className='text-customGreen hover:text-customBlue font-semibold text-xl flex items-center' href='#'>
                        View more <FaArrowRight className="ml-2" />
                    </a>
                </div>

                <hr className="border-2 border-grey-700 my-6"></hr>
            </div>

            <div id='Commercial' className='mt-6 mb-6 md:px-20 px-4'>
                <h1 className='mb-6 text-3xl sm:text-5xl text-customBlue font-bold text-center'>Residential Projects</h1>
                <p className='text-grey-800'>
                    Elevate your commercial projects with Bengal Engineers. From groundbreaking designs to meticulous planning, our team specializes in delivering innovative solutions for a wide range of commercial developments. We're dedicated to exceeding expectations and maximizing the success of your project. Partner with us to unlock the full potential of your commercial ventures.
                </p>

                <div className='mt-10 px-6 md:px-20 grid grid-cols-2 gap-6 md:gap-20'>
                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                </div>
                <div className='mt-6 mb-4 text-right flex justify-end'>
                    <a className='text-customGreen hover:text-customBlue font-semibold text-xl flex items-center' href='#'>
                        View more <FaArrowRight className="ml-2" />
                    </a>
                </div>

                <hr className="border-2 border-grey-700 my-6"></hr>
            </div>

            <div id='Commercial' className='mt-6 mb-6 md:px-20 px-4'>
                <h1 className='mb-6 text-3xl sm:text-5xl text-customBlue font-bold text-center'>Transportation Projects</h1>
                <p className='text-grey-800'>
                    Elevate your commercial projects with Bengal Engineers. From groundbreaking designs to meticulous planning, our team specializes in delivering innovative solutions for a wide range of commercial developments. We're dedicated to exceeding expectations and maximizing the success of your project. Partner with us to unlock the full potential of your commercial ventures.
                </p>

                <div className='mt-10 px-6 md:px-20 grid grid-cols-2 gap-6 md:gap-20'>
                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                </div>
                <div className='mt-6 mb-4 text-right flex justify-end'>
                    <a className='text-customGreen hover:text-customBlue font-semibold text-xl flex items-center' href='#'>
                        View more <FaArrowRight className="ml-2" />
                    </a>
                </div>

                <hr className="border-2 border-grey-700 my-6"></hr>
            </div>

            <div id='Commercial' className='mt-6 mb-6 md:px-20 px-4'>
                <h1 className='mb-6 text-3xl sm:text-5xl text-customBlue font-bold text-center'>Water Resources Projects</h1>
                <p className='text-grey-800'>
                    Elevate your commercial projects with Bengal Engineers. From groundbreaking designs to meticulous planning, our team specializes in delivering innovative solutions for a wide range of commercial developments. We're dedicated to exceeding expectations and maximizing the success of your project. Partner with us to unlock the full potential of your commercial ventures.
                </p>

                <div className='mt-10 px-6 md:px-20 grid grid-cols-2 gap-6 md:gap-20'>
                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                    <div className='relative group' data-aos="fade-up">
                        <a href="#">
                            <img
                                src='/Banner.jpg'
                                alt='commercial'
                                className="w-full md:h-[50vh] h-[25vh] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <a
                            href='#'
                            className="block mt-2 text-lg sm:text-xl md:text-lg font-bold text-customBlue group-hover:underline text-center"
                        >
                            Hello
                        </a>
                        <p className="text-gray-700 text-sm text-center">Hello2</p>
                    </div>

                </div>
                <div className='mt-6 mb-4 text-right flex justify-end'>
                    <a className='text-customGreen hover:text-customBlue font-semibold md:text-xl flex items-center' href='#'>
                        View more <FaArrowRight className="ml-2" />
                    </a>
                </div>

                <hr className="border-2 border-grey-700 my-6"></hr>
            </div>


        </div>
    )
}

export default Market
