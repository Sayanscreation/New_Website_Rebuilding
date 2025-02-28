import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Certifications() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    return (
        <div id='Certifications' className="bg-customBlue overflow-x-hidden mt-6">
            <div className="flex justify-center mt-4 text-white">
                <h1 className="text-2xl md:text-5xl">Active Certifications</h1>
            </div>

            <div className="flex justify-center mt-4 text-white md:px-20 px-6 pb-6">
                <p> Our Active Certification program ensures that professionals stay updated with industry standards and best practices. By maintaining current certifications, individuals demonstrate their commitment to excellence, enhance their expertise, and gain a competitive edge in their careers. Active certification reflects a proactive approach to learning, ensuring skills remain relevant in a fast-evolving professional landscape. This program is essential for those aiming to build credibility, trust, and reliability in their respective fields. Regular assessments and updates ensure that the certification remains valid and aligned with the latest industry developments, promoting continuous professional growth and value to employers and clients </p>
            </div>
             
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 md:p-6 mx-auto max-w-screen-xl">
                <div className="bg-white text-customBlue hover:bg-base-200 p-4 rounded shadow" data-aos="fade-right">
                    <h2 className="text-lg font-semibold">Certification 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                </div>
                <div className="bg-white text-customBlue hover:bg-base-200 p-4 rounded shadow" data-aos="fade-left">
                    <h2 className="text-lg font-semibold">Certification 2</h2>
                    <p>Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh.</p>
                </div>
                <div className="bg-white text-customBlue hover:bg-base-200 p-4 rounded shadow" data-aos="fade-right">
                    <h2 className="text-lg font-semibold">Certification 3</h2>
                    <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
                <div className="bg-white text-customBlue hover:bg-base-200 p-4 rounded shadow" data-aos="fade-left">
                    <h2 className="text-lg font-semibold">Certification 4</h2>
                    <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
                </div>
                <div className="bg-white text-customBlue hover:bg-base-200 p-4 rounded shadow" data-aos="fade-right">
                    <h2 className="text-lg font-semibold">Certification 3</h2>
                    <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
                <div className="bg-white text-customBlue hover:bg-base-200 p-4 rounded shadow" data-aos="fade-left">
                    <h2 className="text-lg font-semibold">Certification 4</h2>
                    <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
                </div>
            </div>
        </div>
    );
}

export default Certifications;
