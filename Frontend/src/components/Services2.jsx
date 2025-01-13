import React from 'react';

function Services2() {
    const cards = [
        { id: 1, title: "Environmental and Water Resources Engineering", description: "Bengal Engineers harness cutting-edge technology and decades of expertise to deliver unparalleled solutions for your environmental and water resources challenges. From innovative design to sustainable infrastructure, trust us to safeguard your environment while maximizing efficiency and resilience.", image: "/Banner.jpg", link: "/Services" },
        { id: 2, title: "Land Surveying Services", description: "Bengal Engineers delivers precise surveying services, from topographic surveys to construction staking. Count on our expertise for accurate data, timely results, and tailored solutions for your projects.", image: "/Banner.jpg", link: "/Services" },
        { id: 3, title: "Site/Civil Engineering Services", description: "Bengal Engineers excels in site design services for municipal, transportation, and energy sectors, including renovations and upgrades. Our expertise extends to residential, commercial, and mixed-use land development projects, offering comprehensive design engineering and permitting assistance in Maryland, DC, and Virginia.", image: "/Banner.jpg", link: "/Services" },
        { id: 4, title: "Structural Engineering Services", description: "Unlock the potential of your structures with Bengal Engineers. Our expert team specializes in comprehensive structural engineering solutions tailored to your project's unique needs. From meticulous inspections to innovative design and precise analysis, trust Bengal to elevate your construction to new heights of safety and efficiency. ", image: "/Banner.jpg", link: "/Services" },
        { id: 5, title: "Traffic Engineering Services", description: "Navigate the road to success with Bengal Engineers' traffic engineering solutions. From optimizing traffic flow to enhancing safety measures, our team delivers tailored strategies to meet your transportation goals.  ", image: "/Banner.jpg", link: "/Services" },
        { id: 6, title: "Utility Engineering Services", description: "Energize your projects with Bengal Engineers' utility engineering expertise. With a proven track record serving public and private sectors, we specialize in coordinating, researching, and investigating overhead and underground utilities. Count on Bengal for meticulous planning and innovative solutions to power your infrastructure forward. ", image: "/Banner.jpg", link: "/Services" },
        { id: 7, title: "Alternative Delivery - Design-Build", description: "", image: "/Banner.jpg", link: "/Services" },
    ];

    return (
        <div className='px-4 md:px-10 lg:px-40'>
            <div className='flex justify-center mt-6 mb-6'>
                <h1 className='text-3xl text-blue-600 font-semibold'>Service Offerings</h1>
            </div>
            {cards.map((card, index) => (
                <div
                    key={card.id}
                    className={`card bg-base-100 shadow-xl h-auto flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
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
                        <p className="mt-2">
                            {card.description}
                        </p>
                        <div className="card-actions justify-end mt-4">
                            <a
                                href={card.link}
                                className="btn bg-blue-700 text-white hover:bg-blue-800"
                            >
                                Learn More
                            </a>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default Services2;
