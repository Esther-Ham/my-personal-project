import React from 'react';
import './HomePage.css';
import Paradise from '../images/Paradise.png';
import ComingSoon from '../images/ComingSoon.png';

function Projects() {
  return (
    <div className='project-section'>
      <div className="wide-tile">
          <article className='tile is-child box wide-tile'>
            <div className='title-container'>
              <h2 className='custom-h2'>Projects</h2>
            </div>
              <p className='paragraph-subheading'>One is done, the other is a work in progress</p>
              <ul>
                <li><span className="twinkle-text">Image Searching</span></li>
                <img 
                  src={Paradise} 
                  alt='screenshot' 
                  style={{ maxWidth: '275px', height: 'auto', marginTop: '15px', marginBottom: '40px' }} 
                />
                <li><span className="twinkle-text">Weather App</span></li>
                <img 
                  src={ComingSoon} 
                  alt='My weather app screenshot' 
                  style={{ maxWidth: '275px', height: 'auto', marginTop: '15px', marginBottom: '15px' }} 
                />
              </ul>
          </article>
      </div>
    </div>
  );
}

export default Projects;
