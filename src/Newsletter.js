

import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './Newsletter.css'; 
import newsLetter from './design/error-states (2).jpg'

function Newsletter() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setErrorMessage('Valid email address required.');
    } else {
      setErrorMessage('');
      console.log(email); 
      navigate(`/thank-you?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <div className="newsletter-container">
      <div className="border-container">
        <div className="newsletter-box">
        <div className="newsletter-right">
            <img src={newsLetter} alt="Newsletter" className='newsletter-image' />
          </div>
          <div className="newsletter-left">
            <h1>Stay Updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <div className="email-subscribe">
              <span>Email Address</span>
              <input
                type="email"
                placeholder="email@company.com"
                value={email}
                onChange={handleEmailChange}
                className={errorMessage ? 'error-input' : ''} />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <Link to={email.includes('@') ? '/thank-you' : ''}>
                <button onClick={handleSubmit}>Subscribe to monthly newsletter</button>
              </Link>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
