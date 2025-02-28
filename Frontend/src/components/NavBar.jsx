import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import services from '../servicesData';

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
                        <ul className="absolute left-0 bg-customBlue text-white p-2 shadow-md z-20 min-w-max">
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/home#About">Why Bengal Engineers</HashLink>
                            </li>
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/home#Services">Service Offerings</HashLink>
                            </li>
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/home#Certifications">Active Certifications</HashLink>
                            </li>
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/home#PastPerformances">Past Performances</HashLink>
                            </li>
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
                        <ul className="absolute left-0 bg-customBlue text-white p-2 shadow-md z-20 min-w-max">
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/about-us#firm-overview">Firm Overview</HashLink>
                            </li>
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/about-us#meet-subra">Meet Subra</HashLink>
                            </li>
                            <li className="hover:customHvrBlue p-1">
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
                        Services
                    </summary>
                    {openMenu === 'services' && (
                        <ul className="absolute left-0 bg-customBlue text-white p-2 shadow-md z-20 min-w-max">
                            {services.map((service) => (
                                <li key={service.name} className="hover:customHvrBlue p-1">
                                    <Link to={`/services/${service.name}`}>{service.displayName}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </details>
            </li>
            {/* <li>
                <details className="relative" open={openMenu === 'services'}>
                    <summary
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu('services');
                        }}
                    >
                        <HashLink to="/services#">Services</HashLink>
                    </summary>
                    {openMenu === 'services' && (
                        <ul className="absolute left-0 bg-customBlue text-white p-2 shadow-md z-20 min-w-max">
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/services/site-civil">Site/Civil Engineering Services</HashLink>
                            </li>
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/services/land-surveying">Land Surveying Services</HashLink>
                            </li>
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/services/environmental">Environmental and Water Resources</HashLink>
                            </li>
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/services/utility">Utility Engineering Services</HashLink>
                            </li>
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/services/traffic">Traffic Engineering Services</HashLink>
                            </li>
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/services/structural">Structural Engineering Services</HashLink>
                            </li>
                            <li className="hover:customHvrBlue p-1">
                                <HashLink to="/services/design-build">Alternative Delivery - Design-Build</HashLink>
                            </li>
                        </ul>
                    )}
                </details>
            </li> */}

            <li>
                <details className='relative' open={openMenu === 'markets'}>
                    <summary
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu('markets');
                        }}
                    >
                        <Link to="/Market">Market</Link>
                    </summary>
                    {openMenu === 'markets' && (
                        <ul className='absolute left-0 bg-customBlue text-white p-2 shadow-md z-20 min-w-max'>
                            <li className='hover:customHvrBlue p-1'><a>Commercial</a></li>
                            <li className='hover:customHvrBlue p-1'><a>Education</a></li>
                            <li className='hover:customHvrBlue p-1'><a>Energy</a></li>
                            <li className='hover:customHvrBlue p-1'><a>Religious</a></li>
                            <li className='hover:customHvrBlue p-1'><a>Residential</a></li>
                            <li className='hover:customHvrBlue p-1'><a>Transportation</a></li>
                            <li className='hover:customHvrBlue p-1'><a>Water Resources</a></li>
                        </ul>
                    )}
                </details>
            </li>


            <li><Link to="/Projects">Projects</Link></li>
            <li> <Link to="/Career">Careers</Link></li>
        </>
    );

    return (
        <div className="relative z-10" ref={navRef}>
            <div
                className={`navbar shadow-md fixed top-0 left-0 w-full md:px-20 pr-2 transition-colors duration-300 
  ${isScrolled ? 'bg-white text-blue-500' : 'bg-white bg-opacity-60 text-blue-500'
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
                        <a className="btn sm:text-sm md:text-base sm:whitespace-normal md:whitespace-nowrap text-center bg-base text-customGreen border border-customBlue hover:bg-customGreen hover:text-white px-4 py-2 rounded" href='/ContactUs'>
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
