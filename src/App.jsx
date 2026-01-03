import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
// import ServiceDetail from './components/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';

const ServiceDetail = lazy(() => import('./components/ServiceDetail'));

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

  useEffect(() => {
    if (location.pathname === '/') {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', "Clínica Brain Works - Psicologia e Neurociência em São José dos Campos. Especializada em TCC, Neurofeedback e Mapeamento Cerebral com Dra. Hanne Magalhães Failla.");
      }
      document.title = "Brain Works - Psicologia e Neurociência";
    }
  }, [location]);

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
          <Route path="/servicos/:id" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Carregando...</div>}>
              <ServiceDetail onBack={() => handleNavigate('/')} />
            </Suspense>
          } />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
