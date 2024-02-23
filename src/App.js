import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* This will appear at the top of every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        {/* Add routes for other pages */}
      </Routes>
      <Footer /> {/* This will appear at the bottom of every page */}
    </Router>
  );
};

export default App;
