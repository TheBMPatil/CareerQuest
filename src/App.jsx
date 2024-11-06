import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Home/Footer/Footer';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      {/* <Home /> */}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />

        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
