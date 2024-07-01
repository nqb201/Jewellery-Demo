import React from 'react';
import './Banner.css';
import sliderImage from '../../assets/Images/slider.png';

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-content">
        <h2>Gold jewellery
          <br /> 
          & diamonds</h2>
        <p>If you are looking for the perfect diamond, you have come to the right place. Our site features the world's top diamonds and jewellery. We work with some of the leading jewellery designers and diamond specialists in the industry. Explore our site today to find your perfect diamond.</p>
        <a href="#" className="banner-button">Check More Products</a>
      </div>
      <div className="banner-image">
        <img src={sliderImage} alt="Slider" className="main-image" />
      </div>
      <div className="categories-section">
      </div>
    </div>
  );
}

export default Banner;
