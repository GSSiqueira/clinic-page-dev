import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import { SERVICES_DATA } from './data/services';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or serviceId
  const [activeService, setActiveService] = useState(null);

  const handleNavigate = (viewId) => {
    if (viewId === 'home') {
      setCurrentView('home');
      setActiveService(null);
      window.scrollTo(0, 0);
    } else {
      const service = SERVICES_DATA.find(s => s.id === viewId);
      if (service) {
        setActiveService(service);
        setCurrentView('service');
      }
    }
  };

  const scrollToSection = (id) => {
    if (currentView !== 'home') {
      handleNavigate('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-orange-200 selection:text-orange-900">
      <Navbar onNavigate={handleNavigate} onScrollTo={scrollToSection} />

      <main>
        {currentView === 'home' ? (
          <>
            <HeroSection onScrollTo={scrollToSection} />
            <AboutSection />
            <ServicesSection onNavigate={handleNavigate} />
            <TestimonialsSection />
            <ContactSection />
          </>
        ) : (
          <ServiceDetail
            service={activeService}
            onBack={() => handleNavigate('home')}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
