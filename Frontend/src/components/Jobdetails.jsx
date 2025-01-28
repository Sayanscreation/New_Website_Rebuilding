import React from 'react'
import { Link } from 'react-router-dom'

function Jobdetails() {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20 mt-20">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                {/* Job Title Section */}
                <div className="bg-customBlue text-white px-6 py-4">
                    <h1 className="text-2xl font-bold">Software Developer</h1>
                    <p className="text-sm mt-1">Location: Remote</p>
                </div>

                {/* Job Details Section */}
                <div className="px-6 py-6">
                    {/* Job Description */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-customBlue">Job Description</h2>
                        <p className="text-gray-700 mt-2">
                            We are seeking a skilled Software Developer to join our dynamic team. You will be responsible for designing, developing, and maintaining software applications, ensuring they meet the highest quality standards.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-customBlue">Skills</h2>
                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                            <li>Proficiency in JavaScript, HTML, and CSS</li>
                            <li>Experience with React and Node.js</li>
                            <li>Strong problem-solving skills</li>
                            <li>Familiarity with version control systems like Git</li>
                        </ul>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-customBlue">Requirements</h2>
                        <ul className="list-disc pl-5 mt-2 text-gray-700">
                            <li>Bachelor's degree in Computer Science or a related field</li>
                            <li>2+ years of experience in software development</li>
                            <li>Ability to work collaboratively in a team environment</li>
                            <li>Excellent communication skills</li>
                        </ul>
                    </div>

                    {/* Salary Details */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-customBlue">Salary Details</h2>
                        <p className="text-gray-700 mt-2">$70,000 - $90,000 per year, depending on experience</p>
                    </div>

                    {/* Apply Button */}
                    <div className="text-center mt-6">
                        <button className="bg-customBlue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                            <Link to={`/ApplicationForm `}>
                            Apply Now
                            </Link>
                           
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobdetails
