import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './MenuBar.css';

function MenuBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className='navbar has-background-color is-rounded'>
      <div className='container is-max-desktop'>
        <div className='navbar-brand'>
          <div className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} onClick={() => setIsActive(!isActive)} data-target='navbar-menu'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className='navbar-start navbar-end'>
            <Link exact to='/' className='navbar-item'>Home</Link>
            <Link to='/about' className='navbar-item'>About Me</Link>
            <Link to='/skills' className='navbar-item'>Skills</Link>
            <Link to='/projects' className='navbar-item'>Projects</Link>
            <Link to='/contact' className='navbar-item'>Contact Me</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
