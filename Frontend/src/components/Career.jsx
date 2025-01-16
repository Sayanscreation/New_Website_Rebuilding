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
                    className="min-h-[60vh] sm:min-h-[70vh] w-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url('/Banner.jpg')` }}
                >
                    <div className="bg-black bg-opacity-50 text-white p-4 sm:p-8 rounded-md text-center max-w-md lg:max-w-xl">
                        <h1 className="text-2xl sm:text-5xl font-bold mb-4">
                            Careers
                        </h1>
                    </div>
                </div>
            </div>

            {/* Job Listings Section */}
            <div className="job-container max-w-screen-xl mx-auto my-10 px-4">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="job-card bg-white shadow-md rounded-lg p-6"
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