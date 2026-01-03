import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, ChevronRight } from 'lucide-react';
import Button from './Button';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-4 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-100 rounded-full opacity-50 -z-10"></div>

            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row bg-white rounded-[3rem] shadow-2xl overflow-hidden">

                    {/* Content Side */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Estamos prontos para te acolher. Escolha a melhor forma de falar conosco.
                        </p>

                        <div className="space-y-4 mb-8">
                            {/* WhatsApp Card */}
                            <button
                                onClick={() => window.open('https://wa.me/5512996729851', '_blank')}
                                className="w-full bg-green-50 hover:bg-green-100 border border-green-100 rounded-3xl p-4 sm:p-6 flex items-center transition-all duration-300 group text-left"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                                    <Phone className="text-white" size={24} />
                                </div>
                                <div className="ml-3 sm:ml-5 flex-grow min-w-0">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 leading-tight">Agendar via WhatsApp</h3>
                                    <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-tight">Resposta em horário comercial</p>
                                </div>
                                <ChevronRight className="text-gray-400 group-hover:text-green-500 transition-colors flex-shrink-0" size={24} />
                            </button>

                            {/* Instagram Card */}
                            <button
                                onClick={() => window.open('https://www.instagram.com/neuropsihannefailla/', '_blank')}
                                className="w-full bg-purple-50 hover:bg-purple-100 border border-purple-100 rounded-3xl p-4 sm:p-6 flex items-center transition-all duration-300 group text-left"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                                    <Instagram className="text-white" size={24} />
                                </div>
                                <div className="ml-3 sm:ml-5 flex-grow min-w-0">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 break-all leading-tight">@neuropsihannefailla</h3>
                                    <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-tight">Dicas diárias de saúde mental</p>
                                </div>
                                <ChevronRight className="text-gray-400 group-hover:text-purple-500 transition-colors flex-shrink-0" size={24} />
                            </button>
                        </div>

                        <div className="border-t border-gray-100 pt-8">
                            <div className="flex items-center text-gray-600">
                                <Mail size={20} className="mr-3 text-orange-600" /> <address>hannefailla@gmail.com</address>
                            </div>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="lg:w-1/2 bg-gray-100 relative h-[400px] lg:h-auto min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.712249469999!2d-45.904906499999996!3d-23.217155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc358016a5b34d%3A0x3123e322015b74a2!2sR.%20Dr.%20Tito%20Roberto%20Liberato%2C%2083%20-%20Parque%20Res.%20Aquarius%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012246-150!5e0!3m2!1sen!2sbr!4v1764284853116!5m2!1sen!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '100%' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-lg flex items-center max-w-xs">
                            <MapPin size={24} className="text-orange-500 mr-3 flex-shrink-0" />
                            <address className="text-sm text-gray-700">R. Dr. Tito Roberto Liberato, 83 - Parque Res. Aquarius, São José dos Campos - SP</address>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
