import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import CallToActionSection from '../../components/CallToActionSection/CallToActionSection';
import LeadForm from '../../components/LeadForm/LeadForm';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home Sparkle Pros | Home Cleaning Services in Fresno, Madera, and Clovis</title>
        <meta name="description" content="Home Sparkle Pros offers professional home cleaning services in Fresno, Madera, and Clovis. Get a free quote or book online now." />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      {/* <LeadForm /> */}
      <TestimonialsSection />
      {/* <CallToActionSection /> */}

    </div>

  );
};

export default HomePage;

