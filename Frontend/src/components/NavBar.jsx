import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Add scroll listener to toggle `isScrolled`
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = (
        <>
            <li>
                <details className="relative group">
                    <summary className="cursor-pointer">Home</summary>
                    <ul className="absolute left-0 bg-blue-700 text-white p-2 shadow-md group-open:block hidden z-20 min-w-max">
                        <li className="hover:bg-blue-800 p-1"><a>Marketing Heading & Subheading </a></li>
                        <li className="hover:bg-blue-800 p-1"><a>Discover more</a></li>
                        <li className="hover:bg-blue-800 p-1"><a>Why Bengal Engineers</a></li>
                        <li className="hover:bg-blue-800 p-1"><a>Service Offerings</a></li>

                    </ul>
                </details>
            </li>
            <li>
                <details className="relative group">
                    <summary className="cursor-pointer">
                        <Link to="/about-us">About us</Link>
                    </summary>
                    <ul className="absolute left-0 bg-blue-700 text-white p-2 shadow-md group-open:block hidden z-20 min-w-max">
                        <li className="hover:bg-blue-800 p-1"><Link to="/about-us#firm-overview">Firm Overview</Link></li>
                        <li className="hover:bg-blue-800 p-1"><Link to="/about-us#meet-subra">Meet Subra</Link></li>
                        <li className="hover:bg-blue-800 p-1"><Link to="/about-us#mbe-certifications">MBE Certifications</Link></li>
                    </ul>
                </details>
            </li>
            <li>
                <details className="relative group">
                    <summary className="cursor-pointer">Services</summary>
                    <ul className="absolute left-0 bg-blue-700 text-white p-2 shadow-md group-open:block hidden z-20 min-w-max">
                        <li className="hover:bg-blue-800 p-1"><a>Site/Civil Engineering Services</a></li>
                        <li className="hover:bg-blue-800 p-1"><a>Land Surveying Services</a></li>
                        <li className="hover:bg-blue-800 p-1"><a>Environmental and Water Resources</a></li>
                        <li className="hover:bg-blue-800 p-1"><a>Utility Engineering Services</a></li>
                        <li className="hover:bg-blue-800 p-1"><a>Traffic Engineering Services</a></li>
                        <li className="hover:bg-blue-800 p-1"><a>Structural Engineering Services</a></li>
                        <li className="hover:bg-blue-800 p-1"><a>Alternative Delivery - Design-Build</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <details className='relative group'>
                    <summary className='cursor-pointer'>Markets </summary>
                    <ul className='absolute left-0 bg-blue-700 text-white p-2 shadow-md group-open:block hidden z-20 min-w-max'>
                        <li className='hover:bg-blue-800 p-1'><a>Commercial</a></li>
                        <li className='hover:bg-blue-800 p-1'><a>Education</a></li>
                        <li className='hover:bg-blue-800 p-1'><a>Energy</a></li>
                        <li className='hover:bg-blue-800 p-1'><a>Religious</a></li>
                        <li className='hover:bg-blue-800 p-1'><a>Residential</a></li>
                        <li className='hover:bg-blue-800 p-1'><a>Transportation</a></li>
                        <li className='hover:bg-blue-800 p-1'><a>Water Resources</a></li>

                    </ul>

                </details>
            </li>
            <li><a>Projects</a></li>
            <li><a>Careers</a></li>

        </>
    );

    return (
        <div className="relative z-10">
            <div
                className={`navbar shadow-md text-white fixed top-0 left-0 w-full md:px-20 pr-2 transition-colors duration-300 ${isScrolled ? "bg-blue-600" : "bg-blue-900 bg-opacity-60"
                    }`}
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-blue-700 text-white rounded-none z-[1] mt-3 w-auto p-2 shadow ml-5"
                        >
                            {navItems}
                        </ul>
                    </div>
                    <img
                        src='/Color PNG.png'
                        alt='logo'
                        className="h-8 w-auto md:h-12"
                    />
                </div>

                <div className="navbar-end md:pr-20 mr-5">
                    {/* Desktop version */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div>
                        <a className="btn sm:text-sm md:text-base sm:whitespace-normal md:whitespace-nowrap text-center">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
