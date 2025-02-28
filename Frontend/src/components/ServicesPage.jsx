import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../servicesData.json"; // Import JSON data

function ServicesPage() {
    const { serviceName } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const foundService = servicesData.find(
            (service) => service.name === serviceName
        );

        if (foundService) {
            setService(foundService);
            setLoading(false);
        } else {
            setError("Service not found");
            setLoading(false);
        }
    }, [serviceName]);

    if (loading) return <div className="text-center py-10 text-xl">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
    if (!service) return <div className="text-center py-10 text-gray-500">No service data available.</div>;

    return (
        <div>
            <div className="relative">
                <div
                    className="min-h-[60vh] sm:min-h-[70vh] w-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${service.image_url || "/default-image.jpg"})` }}
                >
                    <div className="bg-black bg-opacity-50 text-white p-4 sm:p-8 rounded-md text-center max-w-full">
                        <h1 className="text-2xl sm:text-5xl font-bold mb-4">{service.title}</h1>
                    </div>
                </div>
            </div>

            <div className="sm:text-2xl md:text-3xl font-bold text-center mt-6">
                {service.title}
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-6 px-6 md:px-20 mb-6">
                <div className="md:w-7/10 w-full">
                    <p>{service.description}</p>
                    <ul className="list-disc pl-6">
                        {service.points.map((point, index) => (
                            <li key={`point-${index}`}>{point}</li>
                        ))}
                    </ul>
                    <Link to="/GetBackForm">
                        <button className="bg-customBlue text-white px-4 py-2 rounded hover:bg-blue-700 mt-5">
                            Request Survey
                        </button>
                    </Link>
                </div>

                <div className="md:w-3/10">
                    <img
                        src={service.image_url || "/default-image.jpg"}
                        alt={service.title}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Stats Section */}
            <section className="w-full bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-4">
                            <h2 className="text-6xl font-bold text-blue-600">250+</h2>
                            <p className="text-gray-700 mt-2 text-lg font-semibold">Projects Completed</p>
                        </div>
                        <div className="p-4">
                            <h2 className="text-6xl font-bold text-green-600">150+</h2>
                            <p className="text-gray-700 mt-2 text-lg font-semibold">Happy Clients</p>
                        </div>
                        <div className="p-4">
                            <h2 className="text-6xl font-bold text-red-600">10+</h2>
                            <p className="text-gray-700 mt-2 text-lg font-semibold">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicesPage;
