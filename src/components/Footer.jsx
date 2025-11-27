import React from 'react';
import { Brain } from 'lucide-react';
import brainLogoWhite from '../assets/brain-logo-white-nobg.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-12">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-6 flex justify-center">
                    <img src={brainLogoWhite} alt="Brain Works" className="h-24 w-auto object-contain" />
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
