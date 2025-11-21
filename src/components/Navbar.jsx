import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import Button from './Button';

const PRIMARY_COLOR = 'rgb(248, 179, 25)';

const Navbar = ({ onNavigate, onScrollTo }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = (id) => {
        onScrollTo(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm py-4 transition-all">
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => onNavigate('home')}
                >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: PRIMARY_COLOR }}>
                        <Brain className="text-white" size={24} />
                    </div>
                    <span className="text-2xl font-bold text-gray-800 tracking-tight">
                        Clínica <span style={{ color: PRIMARY_COLOR }}>Aurum</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => handleScroll('about')} className="text-gray-600 hover:text-orange-500 font-medium">A Profissional</button>
                    <button onClick={() => handleScroll('services')} className="text-gray-600 hover:text-orange-500 font-medium">Tratamentos</button>
                    <button onClick={() => handleScroll('testimonials')} className="text-gray-600 hover:text-orange-500 font-medium">Depoimentos</button>
                    <Button onClick={() => handleScroll('contact')}>Fale Conosco</Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col gap-4 border-t border-gray-100">
                    <button onClick={() => handleScroll('about')} className="text-left text-lg py-2 text-gray-700">A Profissional</button>
                    <button onClick={() => handleScroll('services')} className="text-left text-lg py-2 text-gray-700">Tratamentos</button>
                    <button onClick={() => handleScroll('testimonials')} className="text-left text-lg py-2 text-gray-700">Depoimentos</button>
                    <Button onClick={() => handleScroll('contact')} className="w-full text-center mt-2">Fale Conosco</Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
