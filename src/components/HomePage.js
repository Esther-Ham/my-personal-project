// components/HomePage.js
import React from 'react';
import 'bulma/css/bulma.css';
import './HomePage.css';
import computer from '../images/computer.png';

const aboutMe = "Transitioning from a teaching career to exploring the world of programming has been a significant shift, but one that I have been eager to embrace. Although I continue to find joy in teaching, I recognized a desire for change and personal growth. Embarking on this journey has presented its challenges, with a steep learning curve to navigate. Yet, the thrill of designing my own website and bringing my vision to life has been truly invigorating. Naturally, there are numerous additional features I aspire to incorporate, but I am mindful that mastery comes with time and continued learning."
const title = "My Coding Journey!"
const HTML5Logo = "https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
const CSS3Logo = "https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
const JSLogo = "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
const NodeJSLogo = "https://cdn-icons-png.flaticon.com/512/919/919825.png"
const ReactLogo = "https://cdn-icons-png.flaticon.com/512/3459/3459528.png"
const ReactWithReduxLogo = "https://miro.medium.com/v2/resize:fit:1200/1*eNikHbzNdtuxZfOX7ccShg.png"

const Home = () => 
    <div className="home-page">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile is-parent">
            <article className="tile is-child box wide-tile">
              <p className="title">{title}</p>
              <img 
                src={computer} 
                alt='animated coding icon' 
                style={{ maxWidth: '200px', height: 'auto' }} 
              />
              <p>{aboutMe}</p>
            </article>
          </div>
        </div>
        <div className="tile is-vertical is-4 right-tiles">
          <div className="tile is-parent">
            <article className="tile is-child box top-tile">
              <div className="languages-wrapper">
                <p className="title">What I Am Familiar With</p>
                <div className="content logos">
                <div className="logos-line">
                  <img src={HTML5Logo} alt="HTML5 Logo" style={{ maxWidth: '70px', height: 'auto' }} />
                  <img src={CSS3Logo} alt="CSS3 Logo" style={{ maxWidth: '70px', height: 'auto' }} />
                  <img src={JSLogo} alt="JavaScript Logo" style={{ maxWidth: '70px', height: 'auto' }} />
                </div>
                <div className="logos-line">
                  <img src={NodeJSLogo} alt="NodeJS Logo" style={{ maxWidth: '70px', height: 'auto' }} />
                  <img src={ReactLogo} alt="React Logo" style={{ maxWidth: '70px', height: 'auto' }} />
                </div>
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box bottom-tile">
              <p className="title">What I Am Learning</p>
              <div className="logos-line">
                <img src={ReactWithReduxLogo} alt="React with Redux Toolkit" style={{ maxWidth: '275px', height: 'auto', marginTop: '15px' }} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

export default Home;
