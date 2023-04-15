import React from 'react';
import './HomePage.css';
import Daniel from '../images/Daniel.png';
import crocheting from '../images/crocheting.png';
import learning from '../images/learning.png';

const painting = 'Drawing and painting have always been cherished hobbies of mine. Experimenting with various colors and techniques, particularly in the portrayal of people, brings me great joy. These artistic pursuits serve as an excellent means of relaxation and stress relief when life becomes demanding, as well as providing a delightful pastime during periods of leisure.'
const crochetingDescription = `Engaging in repetitive motions can have a soothing effect on the mind, making it an effective technique for relaxation. 
While such activities require a certain level of cognitive engagement to maintain focus, the tangible outcome of creating something useful, whether for personal use or as a gift for others, can be highly satisfying. 
Therefore, it is a great way to unwind and take a break from the daily grind.`
const studying = `While often overlooked, I firmly believe that learning is a skill in and of itself. 
Individuals who possess the mindsets and abilities necessary for effective learning are able to capitalize on learning opportunities more efficiently, resulting in faster growth and greater personal development compared to their peers. 
Despite my learning pace being slower than some, I prioritize a deeper understanding of the material at hand rather than relying on guesswork and continuous trial and error. 
This approach has allowed me to retain a greater amount of information over time.`

const Skills = () =>
    <div className='skills-section'>
      <div className="wide-tile">
        <article className="tile is-child box wide-tile">
          <div className="title-container">
            <h2 className='custom-h2'>My Other Skills</h2>
          </div>
          <div className="skills-container">
            <ul>
              <li className="skills-item">
                <div className="skills-item-inner"> 
                  <div className="skills-item-content">
                    <h3>Oil Painting</h3>
                    <p>{painting}</p>
                  </div>
                  <img src={Daniel} alt="Example" width="20%" />
                </div>
              </li>
              <li className="skills-item">
                <div className="skills-item-inner"> 
                  <div className="skills-item-content">
                    <h3>Crocheting</h3>
                    <p>{crochetingDescription}</p>
                  </div>
                  <img src={crocheting} alt="Example" width="20%" />
                </div>
              </li>
              <li className="skills-item">
                <div className="skills-item-inner"> 
                  <div className="skills-item-content">
                    <h3>Learning</h3>
                    <p>{studying}</p>
                  </div>
                  <img src={learning} alt="Example" width="20%" />
                </div>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>

export default Skills;
