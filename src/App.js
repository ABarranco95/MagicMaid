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
import AdLandingPage from './components/AdLandingPage'
import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import { CssBaseline } from '@mui/material';

// Import the font
import '@fontsource/poppins';
import ServicesSection from './components/ServicesSection/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import ServiceChecklistPage from './pages/ServiceChecklistPage';

const GlobalStyle = styled('body')({
  margin: 0,
  padding: 0,
});

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <GlobalStyle />
      <AppContent />
    </Router>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#165085',
    },
    secondary: {
      main: '#f95370',
    },
    background: {
      default: '#ffffff',
      paper: '#eff0ee',
    },
    text: {
      primary: '#000000',
      secondary: '#f95370',
    },
    action: {
      active: '#003d75',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const AppContent = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Container disableGutters maxWidth='xlg'>
        <Navbar />
        <Box sx={{ mt: 0,  }}></Box>
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
          <Route path="/service-checklists" element={<ServiceChecklistPage />}/>
          <Route path="/get-free-quote" element={<AdLandingPage />} />
          
        </Routes>
        <Footer />
        </Container>
      </div>
    </ThemeProvider>
  );
};


export default App;
