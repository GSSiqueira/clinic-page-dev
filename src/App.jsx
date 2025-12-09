import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const scrollWithOffset = () => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollWithOffset, 100);
    } else {
      scrollWithOffset();
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-orange-200 selection:text-orange-900">
      <Navbar onNavigate={handleNavigate} onScrollTo={scrollToSection} />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection onScrollTo={scrollToSection} />
              <AboutSection />
              <ServicesSection onNavigate={handleNavigate} />
              <TestimonialsSection />
              <ContactSection />
            </>
          } />
          <Route path="/servicos/:id" element={<ServiceDetail onBack={() => handleNavigate('/')} />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
