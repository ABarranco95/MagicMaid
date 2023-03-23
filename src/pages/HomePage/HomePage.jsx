import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import CallToActionSection from '../../components/CallToActionSection/CallToActionSection';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;

