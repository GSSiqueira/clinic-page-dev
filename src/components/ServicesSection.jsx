import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

const PRIMARY_COLOR = 'rgb(248, 179, 25)';

const ServicesSection = ({ onNavigate }) => {
    return (
        <section id="services" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossas Especialidades</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Tecnologia e humanização unidas para oferecer os melhores resultados.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_DATA.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 group cursor-pointer flex flex-col h-full"
                            onClick={() => onNavigate(service.id)}
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-orange-50 w-fit group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{service.shortDesc}</p>
                            <div className="flex items-center font-semibold mt-auto" style={{ color: PRIMARY_COLOR }}>
                                Saiba mais <ChevronRight size={20} className="ml-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
