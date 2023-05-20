import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import BlogPage from './pages/BlogPage'
import LeadForm from './components/LeadForm/LeadForm';
import ContactUsPage from './pages/ContactUsPage'
import Footer from './components/Footer/Footer';
import BookingForm from './components/BookingForm/BookingForm';
import GiftCards from './components/GiftCard/GiftCards';
import StandardCleanPage from './pages/CleaningsPage/StandardCleanPage/StandardCleanPage';
import DeepCleanPage from './pages/CleaningsPage/DeepCleanPage/DeepCleanPage';
import MovingCleanPage from './pages/CleaningsPage/MovingCleanPage/MovingCleanPage';
import { Box, ThemeProvider, createTheme } from '@mui/material';

// Import the font
import '@fontsource/roboto';
import ServicesSection from './components/ServicesSection/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#57eb4a',
    },
    secondary: {
      main: '#03588C',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#333333',
    },
    action: {
      active: '#f2a154',
    },
  },
});

const AppContent = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ fontFamily: 'Roboto' }}>
        <Navbar />
        <Box sx={{ mt: 0 }}></Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/get-a-free-quote" element={<LeadForm />} />
          <Route path="/book-a-service" element={<BookingForm />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/services/standard-cleaning" element={<StandardCleanPage />} />
          <Route path="/services/deep-cleaning" element={<DeepCleanPage />} />
          <Route path="/services/moving-cleaning" element={<MovingCleanPage />} />
          <Route path='/testimonials' element={<TestimonialsSection />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/blog' element={<BlogPage /> } />
          <Route path="/gift-cards" element={<GiftCards />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
