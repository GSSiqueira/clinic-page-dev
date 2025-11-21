import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';
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
                            Estamos prontos para te acolher. Entre em contato pelo WhatsApp ou nos acompanhe nas redes sociais.
                        </p>

                        <div className="space-y-4 mb-8">
                            <Button
                                className="w-full flex items-center justify-center gap-3 py-4 text-lg"
                                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                            >
                                <MessageCircle size={24} />
                                Agendar pelo WhatsApp
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full flex items-center justify-center gap-3 py-4 text-lg"
                                onClick={() => window.open('https://instagram.com', '_blank')}
                            >
                                <Instagram size={24} />
                                Siga no Instagram
                            </Button>
                        </div>

                        <div className="space-y-3 border-t border-gray-100 pt-8">
                            <div className="flex items-center text-gray-600">
                                <Phone size={20} className="mr-3 text-orange-400" /> (11) 99999-9999
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Mail size={20} className="mr-3 text-orange-400" /> contato@clinicaaurum.com.br
                            </div>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="lg:w-1/2 bg-gray-100 relative h-[400px] lg:h-auto min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975380933167!2d-46.656906!3d-23.561349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '100%' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-lg flex items-center max-w-xs">
                            <MapPin size={24} className="text-orange-500 mr-3 flex-shrink-0" />
                            <p className="text-sm text-gray-700">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
