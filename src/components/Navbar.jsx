import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

import brainLogo from '../assets/brain-logo-nobg.png';

const Navbar = ({ onNavigate, onScrollTo }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', id: 'hero' },
        { name: 'Sobre', id: 'about' },
        { name: 'Serviços', id: 'services' },
        { name: 'Depoimentos', id: 'testimonials' },
    ];

    const handleLinkClick = (id) => {
        setIsMobileMenuOpen(false);
        onScrollTo(id);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="w-56 h-[5.5rem] lg:w-72 lg:h-28 overflow-hidden relative group block"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <img
                        src={brainLogo}
                        alt="Brain Works Logo"
                        className="h-full w-auto object-contain object-center md:object-left lg:object-center group-hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleLinkClick(link.id)}
                            className="text-gray-600 hover:text-amber-600 font-medium transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                    <Button onClick={() => window.open('https://wa.me/5512996729851', '_blank')}>Agendar Consulta</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Alternar menu de navegação"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleLinkClick(link.id)}
                            className="text-gray-600 hover:text-amber-600 font-medium text-lg text-left"
                        >
                            {link.name}
                        </button>
                    ))}
                    <Button className="w-full" onClick={() => window.open('https://wa.me/5512996729851', '_blank')}>Agendar Consulta</Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
