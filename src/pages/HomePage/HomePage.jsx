import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import CallToActionSection from '../../components/CallToActionSection/CallToActionSection';
import Footer from '../../components/Footer/Footer';
import LeadForm from '../../components/LeadForm/LeadForm';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      {/* <LeadForm /> */}
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;

