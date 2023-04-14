import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Home from './components/HomePage';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/ContactMe';
import Projects from './components/Projects';
import LinkedIn from './images/LinkedIn.png';

function Header() {
  return (
    <div style={{ height: '70px' }} />
  );
}

function Footer() {
  return (
    <div className='footer has-background-color'>
      <a href="https://www.linkedin.com/in/estherham/" target="_blank" rel="noopener noreferrer" className="footer-link">
        <img 
          src={LinkedIn} 
          alt='LinkedIn Logo in Pink' 
          style={{ maxWidth: '30px', height: 'auto', marginRight: '20px' }} 
        />
        <p>Visit my LinkedIn Page!</p>
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <div className="content-container">
            <h1 className="title is-1">Esther Ham</h1>
          <MenuBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;