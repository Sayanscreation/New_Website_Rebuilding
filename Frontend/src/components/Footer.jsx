import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col space-y-8 md:space-y-4">

                {/* Row 1: Logo, Contact Details & Social Media */}
                <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left items-center md:items-start">
                    {/* Company Logo & Name */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src="/Color---JPG.jpg" alt="Company Logo" className="h-12 mb-2" />
                        <h2 className="text-lg font-bold">BENGAL ENGINEERS</h2>
                    </div>

                    {/* Address, Email, Phone, Social Media */}
                    <div className="mt-4 md:mt-0 space-y-2">
                        <p className="flex items-center justify-center md:justify-start">
                            <FaMapMarkerAlt className="text-yellow-500 mr-2" /> 8101 Sandy Spring Rd., Suite 300, Laurel, MD 20707, US
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <FaEnvelope className="text-yellow-500 mr-2" /> info@bengalengineers.com
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <FaPhone className="text-yellow-500 mr-2" /> +91 XXXXX-XXXXX
                        </p>
                        {/* Social Media Links */}
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-xl hover:text-gray-400" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-xl hover:text-gray-400" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-xl hover:text-gray-400" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-xl hover:text-gray-400" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Row 2: Quick Links */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
                        <li><a href="/about-us" className="hover:text-gray-400">About Us</a></li>
                        <li><a href="/Services" className="hover:text-gray-400">Services</a></li>
                        <li><a href="/Market" className="hover:text-gray-400">Market</a></li>
                        <li><a href="/Projects" className="hover:text-gray-400">Projects</a></li>
                        <li><a href="/Career" className="hover:text-gray-400">Careers</a></li>
                        <li><a href="/ContactUs" className="hover:text-gray-400">Contact Us</a></li>
                    </ul>
                </div>

                {/* Row 3: Services Offering */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2"> {/* Added space-y-2 for proper spacing between rows */}
                        <li><a href="/services/site-engineering" className="hover:text-gray-400">Site/Civil Engineering</a></li>
                        <li><a href="/services/structural-engineering" className="hover:text-gray-400">Land Surveying</a></li>
                        <li><a href="/services/architectural-design" className="hover:text-gray-400">Environmental and Water Resources</a></li>
                        <li><a href="/services/project-management" className="hover:text-gray-400">Utility Engineering Services</a></li>
                        <li><a href="/services/construction-management" className="hover:text-gray-400">Traffic Engineering Services</a></li>
                        <li><a href="/services/urban-planning" className="hover:text-gray-400">Structural Engineering Services</a></li>
                        <li><a href="/services/sustainable-design" className="hover:text-gray-400">Alternative Delivery-Design-Build</a></li>
                    </ul>
                </div>


                {/* Copyright Section */}
                <div className="text-center border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-400">© 2024 Bengal Engineers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
