import React from 'react';
import './HomePage.css';

function Contact() {
  return (
    <div className='contact-section'>
      <div className="wide-tile">
        <article className='tile is-child box wide-tile'>
          <div className='title-container'>
            <h2 className='custom-h2'>Contact Me</h2>
          </div>
          <p>You can contact me at:</p>
          <ul>
            <li>Email: esther_ham@outlook.com</li>
            <li>Location: Hamilton, Ontario</li>
          </ul>
          <img 
            src='https://cdn.shopify.com/s/files/1/0727/2198/9918/products/il_fullxfull.3730603734_jujo.jpg?v=1677513613' 
            alt='Map of Ontario' 
            style={{ maxWidth: '80%', height: 'auto', marginTop: '30px' }} 
          />
        </article>
      </div>
    </div>
  );
}

export default Contact;