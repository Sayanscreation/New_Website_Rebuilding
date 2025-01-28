import React, { useState } from "react";

const JobApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        cv: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, cv: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., API call)
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold text-center text-customBlue mb-6">
                    Apply for the Job
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
                        />
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
                        />
                    </div>

                    {/* Cover Letter Field */}
                    <div>
                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                            Cover Letter
                        </label>
                        <textarea
                            id="coverLetter"
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
                        ></textarea>
                    </div>

                    {/* CV Upload Field */}
                    <div>
                        <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                            Upload Your CV
                        </label>
                        <input
                            type="file"
                            id="cv"
                            name="cv"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                            className="mt-1 block w-full text-gray-700 bg-gray-50 rounded-md border border-gray-300 shadow-sm sm:text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-customBlue file:text-white hover:file:bg-customGreen"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-customGreen text-white font-bold py-2 px-4 rounded-md shadow hover:bg-customBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue"
                        >
                            Apply Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApplicationForm;
