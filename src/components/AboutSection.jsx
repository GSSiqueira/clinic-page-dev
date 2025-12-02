import React from 'react';
import hanneProfileImg from '../assets/hanne-perfil.jpeg';

const PRIMARY_COLOR = 'rgb(248, 179, 25)';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="bg-orange-50 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-64 h-80 md:w-80 md:h-96 flex-shrink-0 rounded-3xl overflow-hidden border-4 shadow-lg transform hover:scale-105 transition-transform duration-300" style={{ borderColor: PRIMARY_COLOR }}>
                        <img src={hanneProfileImg} alt="Hanne Magalhães Failla" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Dra. Hanne Magalhães Failla</h2>
                        <p className="text-orange-500 font-semibold mb-4">Psicóloga Responsável - CRP 06/12345</p>
                        <p className="text-gray-700 leading-relaxed">
                            "Acredito que a união entre a ciência do cérebro e a sensibilidade da escuta é o caminho para uma saúde mental plena. Com especialização em Neuropsicologia pela USP e certificação internacional em Neurofeedback, fundei a Clínica Aurum para oferecer tratamentos que integram corpo, mente e tecnologia."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
