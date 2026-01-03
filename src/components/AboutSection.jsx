import React from 'react';
import hanneProfileImg from '../assets/hanne-perfil.jpeg';

const PRIMARY_COLOR = 'rgb(248, 179, 25)';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="bg-orange-50 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-64 h-[25rem] md:w-80 md:h-[30rem] flex-shrink-0 rounded-3xl overflow-hidden border-4 shadow-lg transform hover:scale-105 transition-transform duration-300" style={{ borderColor: PRIMARY_COLOR }}>
                        <img src={hanneProfileImg} alt="Hanne Magalhães Failla" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Dra. Hanne Magalhães Failla</h2>
                        <p className="text-orange-500 font-semibold mb-4">Psicóloga Responsável - CRP 06/122325</p>

                        <p className="text-gray-700 leading-relaxed text-justify">
                          Especialista em Psicologia Clínica e Neurociências. Pós-graduada em Terapia Cognitivo-Comportamental e Psicologia Baseada em Evidências. Treinadora cerebral com Neurofeedback. Realiza Neuroestimulação Transcraniana (tDCS/ETCC) com foco em tratamento cognitivo.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-justify about-quote italic border-l-4 border-orange-500 pl-4 pr-4 py-2 my-6 bg-white/60 rounded-r-lg">
                            "Faço o que amo há mais de 13 anos, vejo as mudanças na vida das pessoas através do meu trabalho, e não há nada mais gratificante do que encontrar o seu propósito. Sempre entendi a necessidade de uma conexão verdadeira com meus pacientes. Nos atendimentos, trago dinamismo para as sessões, sendo autêntico, algo que me diferencia. Isso leva você a ser o protagonista da sua própria história, deixando alguns padrões ruins e adquirindo novas formas de lidar com o sofrimento, o que ajuda a conectar com o que você tem de melhor. Sei que decidir iniciar um processo novo na vida sempre gera dúvidas, mas só teremos as respostas se começarmos. Um passo de cada vez, você chega lá!"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
