import React from 'react';
import Button from './Button';

import clinicaImg from '../assets/clinica.png';

const PRIMARY_COLOR = 'rgb(248, 179, 25)';

const HeroSection = ({ onScrollTo }) => {
    return (
        <section className="relative pt-44 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50 rounded-l-[100px] -z-10 hidden lg:block"></div>
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-6">
                        <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm">
                            Bem-vindo à Brain Works
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Iluminando caminhos para o seu <span style={{ color: PRIMARY_COLOR }}>bem-estar mental.</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                            Combinamos tecnologia de ponta em neurociência com acolhimento humano para transformar vidas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button onClick={() => window.open('https://wa.me/5512996729851', '_blank')}>Agendar Consulta</Button>
                            <Button variant="outline" onClick={() => onScrollTo('services')}>Conhecer Tratamentos</Button>
                        </div>
                    </div>
                    {/* Mock Image Placeholder */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-[4/3] bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl">
                            {/* Using a div to represent an image for the mock */}
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${clinicaImg})`, backgroundColor: '#f3f4f6' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
