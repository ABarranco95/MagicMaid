import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import CleaningsPage from './pages/CleaningsPage/CleaningsPage';
import StandardCleanPage from './pages/CleaningsPage/StandardCleanPage/StandardCleanPage.jsx';
import DeepCleanPage from './pages/CleaningsPage/DeepCleanPage/DeepCleanPage.jsx';
import MovingCleanPage from './pages/CleaningsPage/MovingCleanPage/MovingCleanPage';
import LeadForm from './components/LeadForm/LeadForm';
import Footer from './components/Footer/Footer';
import BookingForm from './components/BookingForm/BookingForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote-form" element={<LeadForm /> }  />
        <Route path="/booking-form" element={<BookingForm /> }  />
        <Route path="/cleanings" element={<CleaningsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
