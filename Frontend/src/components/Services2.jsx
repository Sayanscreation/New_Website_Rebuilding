import React from 'react';

function Services2() {
    const cards = [
        { id: 1, title: "Environmental and Water Resources Engineering", image: "/Banner.jpg", link: "#" },
        { id: 2, title: "Land Surveying Services", image: "/Banner.jpg", link: "#" },
        { id: 3, title: "Site/Civil Engineering Services", image: "/Banner.jpg", link: "#" },
        { id: 4, title: "Structural Engineering Services", image: "/Banner.jpg", link: "#" },
        { id: 5, title: "Traffic Engineering Services", image: "/Banner.jpg", link: "#" },
        { id: 6, title: "Utility Engineering Services", image: "/Banner.jpg", link: "#" },
        { id: 7, title: "Alternative Delivery - Design-Build", image: "/Banner.jpg", link: "#" },
    ];

    return (
        <div className='px-4 md:px-10 lg:px-40'>
            <div className='flex justify-center mt-6 mb-6'>
                <h1 className='text-3xl text-blue-600 font-semibold'>Service Offerings</h1>
            </div>
            {cards.map((card, index) => (
                <div
                    key={card.id}
                    className={`card bg-base-100 shadow-xl h-auto flex flex-col ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } mb-6`}
                >
                    <figure className="w-full lg:w-1/2 h-60 lg:h-auto">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="h-full w-full object-cover transform transition-transform duration-300 hover:scale-110"
                        />
                    </figure>
                    <div className="card-body w-full lg:w-1/2 px-4 py-6 lg:px-8">
                        <h2 className="card-title text-xl lg:text-2xl">{card.title}</h2>
                        <p className="mt-2">Click the button to learn more about this service.</p>
                        <div className="card-actions justify-end mt-4">
                            <a href={card.link} className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Services2;
