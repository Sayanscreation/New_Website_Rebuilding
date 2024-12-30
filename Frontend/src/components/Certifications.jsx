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
        <div className="bg-blue-600 overflow-x-hidden mt-6">
            <div className="flex justify-center mt-4 text-base-100">
                <h1 className="text-2xl md:text-3xl">Active Certifications</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 md:p-6 mx-auto max-w-screen-xl">
                <div className="bg-blue-800 text-base-100 hover:bg-blue-700 p-4 rounded shadow" data-aos="fade-right">
                    <h2 className="text-lg font-semibold text-center">Certification 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                </div>
                <div className="bg-blue-800 text-base-100 hover:bg-blue-700 p-4 rounded shadow" data-aos="fade-left">
                    <h2 className="text-lg font-semibold">Certification 2</h2>
                    <p>Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh.</p>
                </div>
                <div className="bg-blue-800 text-base-100 hover:bg-blue-700 p-4 rounded shadow" data-aos="fade-right">
                    <h2 className="text-lg font-semibold">Certification 3</h2>
                    <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
                <div className="bg-blue-800 text-base-100 hover:bg-blue-700 p-4 rounded shadow" data-aos="fade-left">
                    <h2 className="text-lg font-semibold">Certification 4</h2>
                    <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
                </div>
                <div className="bg-blue-800 text-base-100 hover:bg-blue-700 p-4 rounded shadow" data-aos="fade-right">
                    <h2 className="text-lg font-semibold">Certification 3</h2>
                    <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
                <div className="bg-blue-800 text-base-100 hover:bg-blue-700 p-4 rounded shadow" data-aos="fade-left">
                    <h2 className="text-lg font-semibold">Certification 4</h2>
                    <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
                </div>
            </div>
        </div>
    );
}

export default Certifications;
