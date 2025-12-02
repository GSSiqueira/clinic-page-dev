
import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle, Calendar, Clock } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { SERVICES_DATA } from '../data/services';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = SERVICES_DATA.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Serviço não encontrado</h2>
                <Button onClick={() => navigate('/')}>Voltar para Início</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-44 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 bg-white border-2 border-[rgb(248,179,25)] text-[rgb(248,179,25)] mb-8 mt-8"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Voltar para Início
                </Link>

                <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-orange-50 p-12 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative z-10">
                            <div className="inline-flex p-6 rounded-full bg-white shadow-lg mb-8 text-[rgb(248,179,25)]">
                                {service.icon}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{service.title}</h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{service.shortDesc}</p>
                        </div>
                    </div>

                    <div className="p-8 md:p-16">
                        <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Sobre o Tratamento</h3>
                            <p className="leading-relaxed mb-8">{service.fullDesc}</p>

                            {service.image && (
                                <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Principais Benefícios</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                        <CheckCircle className="text-[rgb(248,179,25)] mr-4 flex-shrink-0 mt-1" size={24} />
                                        <span className="font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[rgb(248,179,25)]/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Agende sua avaliação</h3>
                                <p className="text-gray-600">Dê o primeiro passo para sua transformação.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <Button className="w-full md:w-auto shadow-lg shadow-orange-200" onClick={() => window.open('https://wa.me/5512996729851', '_blank')}>
                                    Agendar Agora
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
