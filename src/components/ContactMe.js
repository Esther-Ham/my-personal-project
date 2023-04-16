import React from 'react';
import './HomePage.css';

const contactMe = "Contact Me"
const contactMessage = "You can contact me at:"
const myEmail = "Email: esther_ham@outlook.com"
const myLocation = "Location: Hamilton, Ontario"

const Contact = () =>
    <div className='contact-section'>
      <div className="wide-tile">
        <article className='tile is-child box wide-tile'>
          <div className='title-container'>
            <h2 className='custom-h2'>{contactMe}</h2>
          </div>
          <p>{contactMessage}</p>
          <ul>
            <li>{myEmail}</li>
            <li>{myLocation}</li>
          </ul>
          <img 
            src='https://cdn.shopify.com/s/files/1/0727/2198/9918/products/il_fullxfull.3730603734_jujo.jpg?v=1677513613' 
            alt='Map of Ontario' 
            style={{ maxWidth: '80%', height: 'auto', marginTop: '30px' }} 
          />
        </article>
      </div>
    </div>

export default Contact;