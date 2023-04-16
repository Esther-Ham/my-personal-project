import React from 'react';
import './HomePage.css';
import Paradise from '../images/Paradise.png';
import ComingSoon from '../images/ComingSoon.png';

const componentTitle = "Projects"
const sideNote = "One is done, the other is a work in progress"
const imageSearching = "Image Searching"
const weatherProjectApp = "Weather App"

const Projects = () => 
    <div className='project-section'>
      <div className="wide-tile">
          <article className='tile is-child box wide-tile'>
            <div className='title-container'>
              <h2 className='custom-h2'>{componentTitle}</h2>
            </div>
              <p className='paragraph-subheading'>{sideNote}</p>
              <ul>
                <a href='https://esther-ham.github.io/img-search/'>
                <li><span className="twinkle-text">{imageSearching}</span></li>
                <img 
                  src={Paradise} 
                  alt='screenshot' 
                  style={{ maxWidth: '275px', height: 'auto', marginTop: '15px', marginBottom: '40px' }} 
                />
                </a>
                <li><span className="twinkle-text">{weatherProjectApp}</span></li>
                <img 
                  src={ComingSoon} 
                  alt='My weather app screenshot' 
                  style={{ maxWidth: '275px', height: 'auto', marginTop: '15px', marginBottom: '15px' }} 
                />
              </ul>
          </article>
      </div>
    </div>

export default Projects;