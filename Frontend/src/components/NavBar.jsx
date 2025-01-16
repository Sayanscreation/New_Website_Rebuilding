import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const navRef = useRef(null);

    // Handle scrolling to toggle the navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Detect clicks outside the navigation menu to close submenus
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenMenu(null); // Close any open menus
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMenu = (menu) => {
        setOpenMenu((prev) => (prev === menu ? null : menu));
    };

    const navItems = (
        <>
            <li>
                <details className="relative" open={openMenu === 'home'}>
                    <summary
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu('home');
                        }}
                    >
                        <HashLink to="/home">Home</HashLink>
                    </summary>
                    {openMenu === 'home' && (
                        <ul className="absolute left-0 bg-blue-700 text-white p-2 shadow-md z-20 min-w-max">
                            <li className="hover:bg-blue-800 p-1"><a>Marketing Heading & Subheading</a></li>
                            <li className="hover:bg-blue-800 p-1"><a>Discover more</a></li>
                            <li className="hover:bg-blue-800 p-1"><a>Why Bengal Engineers</a></li>
                            <li className="hover:bg-blue-800 p-1"><a>Service Offerings</a></li>
                        </ul>
                    )}
                </details>
            </li>
            <li>
                <details className="relative" open={openMenu === 'about'}>
                    <summary
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu('about');
                        }}
                    >
                        <HashLink to="/about-us#">About us</HashLink>
                    </summary>
                    {openMenu === 'about' && (
                        <ul className="absolute left-0 bg-blue-700 text-white p-2 shadow-md z-20 min-w-max">
                            <li className="hover:bg-blue-800 p-1">
                                <HashLink to="/about-us#firm-overview">Firm Overview</HashLink>
                            </li>
                            <li className="hover:bg-blue-800 p-1">
                                <HashLink to="/about-us#meet-subra">Meet Subra</HashLink>
                            </li>
                            <li className="hover:bg-blue-800 p-1">
                                <HashLink to="/about-us#mbe-certifications">MBE Certifications</HashLink>
                            </li>
                        </ul>
                    )}
                </details>
            </li>
            <li>
                <details className="relative" open={openMenu === 'services'}>
                    <summary
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu('services');
                        }}
                    >
                        <Link to="/Services">Services</Link>
                    </summary>
                    {openMenu === 'services' && (
                        <ul className="absolute left-0 bg-blue-700 text-white p-2 shadow-md z-20 min-w-max">
                            <li className="hover:bg-blue-800 p-1"><a>Site/Civil Engineering Services</a></li>
                            <li className="hover:bg-blue-800 p-1"><a>Land Surveying Services</a></li>
                            <li className="hover:bg-blue-800 p-1"><a>Environmental and Water Resources</a></li>
                            <li className="hover:bg-blue-800 p-1"><a>Utility Engineering Services</a></li>
                            <li className="hover:bg-blue-800 p-1"><a>Traffic Engineering Services</a></li>
                            <li className="hover:bg-blue-800 p-1"><a>Structural Engineering Services</a></li>
                            <li className="hover:bg-blue-800 p-1"><a>Alternative Delivery - Design-Build</a></li>
                        </ul>
                    )}
                </details>
            </li>
            <li>
                <details className='relative' open={openMenu === 'markets'}>
                    <summary
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu('markets');
                        }}
                    >
                        Markets
                    </summary>
                    {openMenu === 'markets' && (
                        <ul className='absolute left-0 bg-blue-700 text-white p-2 shadow-md z-20 min-w-max'>
                            <li className='hover:bg-blue-800 p-1'><a>Commercial</a></li>
                            <li className='hover:bg-blue-800 p-1'><a>Education</a></li>
                            <li className='hover:bg-blue-800 p-1'><a>Energy</a></li>
                            <li className='hover:bg-blue-800 p-1'><a>Religious</a></li>
                            <li className='hover:bg-blue-800 p-1'><a>Residential</a></li>
                            <li className='hover:bg-blue-800 p-1'><a>Transportation</a></li>
                            <li className='hover:bg-blue-800 p-1'><a>Water Resources</a></li>
                        </ul>
                    )}
                </details>
            </li>


            <li><a>Projects</a></li>
            <li> <Link to="/Career">Careers</Link></li>
        </>
    );

    return (
        <div className="relative z-10" ref={navRef}>
            <div
               className={`navbar shadow-md fixed top-0 left-0 w-full md:px-20 pr-2 transition-colors duration-300 
  ${isScrolled ? 'bg-white text-blue-500' : 'bg-white bg-opacity-50 text-blue-500'
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
                            className="menu menu-sm dropdown-content bg-customBlue text-white rounded-none z-[1] mt-3 w-auto p-2 shadow ml-5"
                        >
                            {navItems}
                        </ul>
                    </div>
                    <img src="/Color---JPG.jpg" alt="logo" className="h-8 w-auto md:h-12" />
                </div>
                <div className="navbar-end md:pr-20 mr-5">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{navItems}</ul>
                    </div>
                    <div>
                    <a className="btn sm:text-sm md:text-base sm:whitespace-normal md:whitespace-nowrap text-center bg-base text-customGreen border border-customBlue hover:bg-customGreen hover:text-white px-4 py-2 rounded">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
