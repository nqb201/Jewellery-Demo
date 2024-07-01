import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import facebookIcon from '../../assets/Images/facebook.png';
import instaIcon from '../../assets/Images/insta.png';
import twitterIcon from '../../assets/Images/twitter.png';
import youtubeIcon from '../../assets/Images/youtube.png';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="subscribe-section1">
          <h2>Subscribe And Get -20% Off</h2>
          <div className="subscribe-form1">
            <input type="email" placeholder="Enter email address..." />
            <button>➤</button>
          </div>
        </div>
        <div className="footer-nav">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/necklaces">Necklaces</Link></li>
            <li><Link to="/pearls">Pearls</Link></li>
            <li><Link to="/rings">Rings</Link></li>
          </ul>
        </div>
        <div className="footer-about">
          <h3>About Us</h3>
          <ul>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        <div className="footer-share">
          <h3>Share</h3>
          <ul>
            <li><a href="#"><img src={facebookIcon} alt="Facebook" /></a></li>
            <li><a href="#"><img src={instaIcon} alt="Instagram" /></a></li>
            <li><a href="#"><img src={twitterIcon} alt="Twitter" /></a></li>
            <li><a href="#"><img src={youtubeIcon} alt="YouTube" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2024 Diamond Jewellery. All rights reserved</p>
        <div className="footer-policy">
          <Link to="/privacy-policy">Policy Privacy</Link>
          <Link to="/terms-and-conditions">Terms and conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
