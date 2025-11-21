import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Button from './Button';

const PRIMARY_COLOR = 'rgb(248, 179, 25)';

const ServiceDetail = ({ service, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) return null;

    return (
        <div className="min-h-screen bg-orange-50 pt-32 pb-12 px-4 animate-fade-in">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={onBack}
                    className="flex items-center text-gray-600 mb-8 hover:text-orange-500 transition-colors"
                >
                    <ArrowLeft className="mr-2" size={20} /> Voltar para Início
                </button>

                <div className="bg-white rounded-[2.5rem] shadow-xl p-6 md:p-12 overflow-hidden relative">
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-100 opacity-50 -mr-20 -mt-20 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-start md:items-center mb-8 gap-6">
                            <div className="p-6 rounded-3xl bg-orange-50 shadow-inner">
                                {service.icon}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">{service.title}</h1>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {service.fullDesc}
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Benefícios do Tratamento</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {service.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center bg-orange-50 p-4 rounded-2xl">
                                    <CheckCircle className="mr-3 flex-shrink-0" size={24} style={{ color: PRIMARY_COLOR }} />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 bg-gray-50 rounded-3xl text-center">
                            <h4 className="text-xl font-semibold mb-4">Gostaria de saber mais sobre este tratamento?</h4>
                            <Button onClick={() => {
                                onBack();
                                setTimeout(() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}>
                                Agendar Avaliação
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
