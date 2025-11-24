import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-12">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">Brain Works</h3>
                </div>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">Cuidando da sua mente com ciência e coração.</p>
                <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Brain Works. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
