import React from 'react';
import './HomePage.css';
import profilePhoto from '../images/Esther.png';

const biographie = "In addition to my passion for teaching and exploring programming in my leisure time, I take great pleasure in discovering diverse culinary delights. Brazilian, Korean, Japanese, and French cuisines are among my favorites. As a creative individual, I love experimenting with various art forms such as drawing and painting, and I enjoy unwinding with music and films. In the future, I'm eager to expand my skillset by attending woodworking classes and learning to create unique pieces of furniture."
const aboutMeTitle = "About Me"

const About = () =>
    <div className='about-section'>
      <div className="wide-tile">
        <article className='tile is-child box wide-tile'>
          <div className="title-container">
            <h2>{aboutMeTitle}</h2>
          </div>
          <div className="content-container">
            <div className="left-side">
              <img src={profilePhoto} alt="Esther's Portrait" width="450" height="300" />
            </div>
            <div className="right-side">
              <p>{biographie}</p>
            </div>
          </div>
        </article>
      </div>
    </div>

export default About;