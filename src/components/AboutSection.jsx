import React from 'react';

const PRIMARY_COLOR = 'rgb(248, 179, 25)';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="bg-orange-50 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: PRIMARY_COLOR }}>
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" alt="Dra. Helena Campos" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Dra. Helena Campos</h2>
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
