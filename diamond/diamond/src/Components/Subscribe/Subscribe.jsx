import React from 'react';
import blogCard2 from '../../assets/Images/blog-card2.png';
import instaProfile from '../../assets/Images/insta-profile.png';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <div className="subscribe-section">
      <h2>Subscribe and get -20% off</h2>
      <div className="subscribe-content">
        <img src={blogCard2} alt="Subscribe" className="subscribe-image" />
        <div className="instagram-info">
          <a href="https://www.instagram.com/jewellery" target="_blank" rel="noopener noreferrer">
            <img src={instaProfile} alt="Instagram Profile" className="instagram-image" />
          </a>
          <h3>INSTAGRAM</h3>
          <p>@jewellery</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
