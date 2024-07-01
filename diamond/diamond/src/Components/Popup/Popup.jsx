import React from 'react';
import { Link } from 'react-router-dom';
import './Popup.css';

const Popup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose} className="popup-close-button">X</button>
        <h2>Sign up our newsletter</h2>
        <p>Subscribe our newsletters now and stay up-to-date with new collections</p>
        <input type="email" placeholder="Enter Email" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Popup;
