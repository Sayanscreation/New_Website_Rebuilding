import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column 1: Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/about" className="hover:text-gray-400">About Us</a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-gray-400">Services</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-gray-400">Contact Us</a>
                        </li>
                        <li>
                            <a href="/faq" className="hover:text-gray-400">FAQs</a>
                        </li>
                    </ul>
                </div>

                {/* Column 2: Address & Social Media */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-4">Contact & Social Media</h3>
                    <p>123, Elm Street,<br />Kolkata, WB, India</p>
                    <p>Email: support@example.com</p>
                    <p>Phone: +91 98765 43210</p>
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

                {/* Column 3: Service Offerings */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Service Offerings</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/services/site-engineering" className="hover:text-gray-400">Site/Civil Engineering</a>
                        </li>
                        <li>
                            <a href="/services/structural-engineering" className="hover:text-gray-400">Structural Engineering</a>
                        </li>
                        <li>
                            <a href="/services/architectural-design" className="hover:text-gray-400">Architectural Design</a>
                        </li>
                        <li>
                            <a href="/services/project-management" className="hover:text-gray-400">Project Management</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-6 border-t border-gray-700 pt-4">
                <p className="text-sm text-gray-400">© 2024 Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
