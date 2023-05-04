import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import CleaningsPage from './pages/CleaningsPage/CleaningsPage';
import LeadForm from './components/LeadForm/LeadForm';
import Footer from './components/Footer/Footer';
import BookingForm from './components/BookingForm/BookingForm';
import GiftCards from './components/GiftCard/GiftCards';

// Import the font
import '@fontsource/roboto';

const App = () => {
  return (
    <Router>
      <div className="App" style={{ fontFamily: 'Roboto' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quote-form" element={<LeadForm /> }  />
          <Route path="/booking-form" element={<BookingForm /> }  />
          <Route path="/cleanings" element={<CleaningsPage />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/lead-form" element={<LeadForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
