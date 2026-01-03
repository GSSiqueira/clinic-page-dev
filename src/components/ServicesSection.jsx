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

                <div className="flex flex-wrap justify-center gap-8">
                    {SERVICES_DATA.map((service) => (
                        <div
                            key={service.id}
                            className={`relative p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 overflow-hidden h-auto flex flex-col min-h-[400px] w-full md:w-[calc(50%-1rem)] ${!service.cardImage ? 'bg-white' : ''}`}
                        >
                            {service.cardImage && (
                                <>
                                    <div
                                        className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${service.cardImage})`,
                                            backgroundPosition: service.backgroundPosition || 'center'
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/70" />
                                </>
                            )}

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {React.cloneElement(service.icon, {
                                        style: { color: service.cardImage ? '#F8B319' : 'rgb(248, 179, 25)' }
                                    })}
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${service.cardImage ? 'text-white' : 'text-gray-800'}`}>
                                    {service.title}
                                </h3>
                                <p className={`mb-6 leading-relaxed flex-grow ${service.cardImage ? 'text-gray-200' : 'text-gray-600'}`}>
                                    {service.shortDesc}
                                </p>
                                <Link
                                    to={`/servicos/${service.id}`}
                                    className="inline-flex items-center text-amber-600 font-semibold hover:gap-2 transition-all mt-auto"
                                    aria-label={`Saiba mais sobre ${service.title}`}
                                >
                                    Saiba mais <ArrowRight size={20} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
