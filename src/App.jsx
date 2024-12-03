import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Problems } from './Problems'; 
import Resources from './Resources'; 
import About from './About'; 
import Header from './Header'; 
import './App.css'
import Footer from './Footer';
// import data from './resources.json';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Problems />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
