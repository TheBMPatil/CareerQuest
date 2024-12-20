import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Home/Footer/Footer';
import Login from './Components/Login/Login';
import ContactUs from './Components/ContactUs/ContactUs';
import JobListings from './Components/JobListings/JobListings';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './Components/Terms/TermsOfService';






import './App.css'
function App() {
  return (
    <Router>
      <div className="app">
      {/* <Home /> */}
      
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/JobListings" element={<JobListings />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />

        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
