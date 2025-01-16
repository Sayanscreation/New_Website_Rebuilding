import React, { useState } from "react";

const CareerPage = () => {
    // Job data
    const jobs = [
        {
            id: 1,
            title: "Software Engineer",
            briefDescription: "Join our team to develop scalable software solutions.",
            fullDescription: "As a Software Engineer, you will design, develop, and deploy software applications. Responsibilities include coding, testing, and collaborating with cross-functional teams. Experience in JavaScript, React, and Node.js is a plus.",
            location: "Remote",
        },
        {
            id: 2,
            title: "Project Manager",
            briefDescription: "Lead and manage projects from start to finish.",
            fullDescription: "The Project Manager role involves planning, execution, and delivery of projects. You'll coordinate teams, manage budgets, and ensure timelines are met. Experience with Agile methodologies and leadership skills are required.",
            location: "New York, USA",
        },
        {
            id: 3,
            title: "UI/UX Designer",
            briefDescription: "Design user-friendly interfaces for web and mobile platforms.",
            fullDescription: "As a UI/UX Designer, you'll create wireframes, prototypes, and user interfaces. You'll work closely with developers and stakeholders to ensure a seamless user experience. Proficiency in Figma or Adobe XD is essential.",
            location: "San Francisco, USA",
        },
    ];

    // State to track expanded job details
    const [expandedJob, setExpandedJob] = useState(null);

    const toggleReadMore = (id) => {
        setExpandedJob(expandedJob === id ? null : id);
    };

    return (
        <div className="career-page">
            {/* Banner Section */}
            <div className="relative">
                <div
                    className="min-h-[5t 0vh] sm:min-h-[70vh] w-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url('/Banner.jpg')` }}
                >
                    <div className="bg-black bg-opacity-50 text-white p-4 sm:p-8 rounded-md text-center max-w-md lg:max-w-xl">
                        <h1 className="text-2xl sm:text-5xl font-bold mb-4">
                            Join Us, Shape Your Future
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mt-6 mb-6 md:px-20 px-4">
                <div className="flex flex-col-reverse md:flex-row gap-6">

                    {/* Image Section */}
                    <div className="md:w-7/12 w-full flex flex-row gap-2 justify-center items-center">
                        {/* Image 1 */}
                        <div className="w-1/2 md:h-[40vh] relative">
                            <img
                                src="/Banner.jpg"
                                alt="Bengal Engineers"
                                className="w-full h-full rounded-lg shadow-lg object-cover"
                                data-aos="fade-up"
                            />
                        </div>
                        {/* Image 2 */}
                        <div className="w-1/2 md:h-[40vh] relative">
                            <img
                                src="/Banner.jpg"
                                alt="Engineering Excellence"
                                className="w-full h-full rounded-lg shadow-lg object-cover"
                                data-aos="fade-down"
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="md:w-5/12 w-full py-4">
                        {/* Main Heading */}
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-customGreen">
                            Elevate Your Career
                        </h1>
                        {/* Subheading */}
                        <div className="text-customBlue text-sm uppercase tracking-wide mb-2 font-semibold">
                            Achieve New Heights
                        </div>

                        {/* Brief Text */}
                        <p className="text-justify text-gray-700">
                            Bengal Engineers delivers client-focused civil and environmental engineering solutions to public and private clients. Our integrated approach prioritizes optimization, minimizing risk and costs for our clients. Based in Central Maryland, Bengal Engineers is a small firm that ensures local expertise, swift response times, and cost-effectiveness without compromising quality.
                        </p>
                    </div>




                </div>
            </div>


            <div className="w-full bg-gray-100 py-12 px-4 md:px-20">
                {/* Section Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-customBlue">Support Every Step</h1>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Facility 1 */}
                    <div className="text-center">
                        <img
                            src="/Banner.jpg"
                            alt="Health Insurance"
                            className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800">Health Insurance</h3>
                        <p className="text-gray-600">Comprehensive medical, dental, and vision insurance for employees and their families to ensure well-being.</p>
                    </div>

                    {/* Facility 2 */}
                    <div className="text-center">
                        <img
                            src="/Banner.jpg"
                            alt="Flexible Work Hours"
                            className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800">Flexible Work Hours</h3>
                        <p className="text-gray-600">Maintain a healthy work-life balance with our flexible working hours and hybrid work options.</p>
                    </div>

                    {/* Facility 3 */}
                    <div className="text-center">
                        <img
                            src="/Banner.jpg"
                            alt="Professional Growth"
                            className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800">Professional Growth</h3>
                        <p className="text-gray-600">Access to training programs and workshops to enhance skills and advance your career.</p>
                    </div>
                </div>
            </div>



            <div className="text-center mt-6 mb-6">
                <h1 className="text-3xl md:text-5xl font-bold text-customBlue">Open Positions</h1>
            </div>
            {/* Job Listings Section */}
            <div className="job-container max-w-screen-xl mx-auto my-10 px-4">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="job-card bg-white shadow-md rounded-lg p-6 w-full"
                        >
                            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                            <p className="text-gray-500 mb-2">{job.location}</p>
                            <p className="text-gray-700">
                                {expandedJob === job.id
                                    ? job.fullDescription
                                    : job.briefDescription}
                            </p>
                            {/* Buttons */}
                            <div className="mt-4 flex justify-between items-center">
                                <button
                                    onClick={() => toggleReadMore(job.id)}
                                    className="text-blue-600 hover:underline"
                                >
                                    {expandedJob === job.id ? "Read Less" : "Read More"}
                                </button>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Apply
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerPage;
