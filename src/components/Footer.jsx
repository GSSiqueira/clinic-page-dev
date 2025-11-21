import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-12">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center items-center gap-2 mb-6">
                    <Brain className="text-orange-400" size={32} />
                    <span className="text-2xl font-bold">Clínica Aurum</span>
                </div>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">Cuidando da sua mente com ciência e coração.</p>
                <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Clínica Aurum. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
