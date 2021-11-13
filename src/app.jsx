import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './app.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Solution from './components/solution/solution';
import Careers from './components/careers/careers';
import Contact from './components/contact/contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="solution" element={<Solution />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
