import React from "react";

function ContactUs() {
    return (
        <section className="py-12 px-4 md:px-20 mt-6 bg-gray-100">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-Customblue mb-8">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side - Contact Form */}
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">First Name</label>
                                <input type="text" className="w-full p-3 border rounded-lg focus:outline-blue-500" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                                <input type="text" className="w-full p-3 border rounded-lg focus:outline-blue-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input type="email" className="w-full p-3 border rounded-lg focus:outline-blue-500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                            <input type="text" className="w-full p-3 border rounded-lg focus:outline-blue-500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea className="w-full p-3 border rounded-lg focus:outline-blue-500 h-32"></textarea>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Send Message</button>
                    </form>
                </div>

                {/* Right Side - Address & Google Map */}
                <div>
                    <div className="bg-white p-8 shadow-lg rounded-lg mb-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h3>
                        <p className="text-gray-600">
                        8101 Sandy Spring Rd., <br />
                        Suite 300 <br/>
                        Laurel, MD 20707, US
                        </p>
                        <p className="text-gray-600 mt-2">
                        info@bengalengineers.com <br />
                            Phone: +91 98765 43210
                        </p>
                    </div>

                    {/* Google Map */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="Google Map"
                            className="w-full h-60"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.2130030600976!2d88.36389237475172!3d22.579147531725385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771567e8c9e1%3A0x8e2b1c1f67f6b8a5!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
