import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/services';

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tratamentos Especializados</h2>
                    <p className="text-gray-600 text-lg">Abordagens modernas e baseadas em evidências para sua saúde mental.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_DATA.map((service) => (
                        <div key={service.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{service.shortDesc}</p>
                            <Link
                                to={`/servicos/${service.id}`}
                                className="inline-flex items-center text-[rgb(248,179,25)] font-semibold hover:gap-2 transition-all"
                            >
                                Saiba mais <ArrowRight size={20} className="ml-2" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
