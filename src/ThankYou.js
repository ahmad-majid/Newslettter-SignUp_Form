import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ThankYou.css';

function ThankYou() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');
  const navigate = useNavigate();

  const handleDismiss = () => {
    navigate('/');
  };

  return (
    <div className="centered-box">
      <div className="box">
        <div className="tick-icon">✓</div>
        <h2 className="success-heading">Thanks For Subscribing</h2>
        {email && (
          <span>
            A confirmation email has been sent to{' '}
            <span className="success-email">{email}</span>. Please open it and
            click the button inside to confirm your subscription.
          </span>
        )}
        <button type="button" className="submit-button" onClick={handleDismiss}>
          Dismiss Message
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
