import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import CleaningsPage from './pages/CleaningsPage/CleaningsPage';
import StandardCleanPage from './pages/CleaningsPage/StandardCleanPage/StandardCleanPage.jsx';
import DeepCleanPage from './pages/CleaningsPage/DeepCleanPage/DeepCleanPage.jsx';
import MovingCleanPage from './pages/CleaningsPage/MovingCleanPage/MovingCleanPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cleanings" element={<CleaningsPage />} />
        <Route path="/cleanings/standard-cleaning" element={<StandardCleanPage />} />
        <Route path="/cleanings/deep-cleaning" element={<DeepCleanPage />} />
        <Route path="/cleanings/moving-cleaning" element={<MovingCleanPage />} />
      </Routes>
    </Router>
  );
};

export default App;
