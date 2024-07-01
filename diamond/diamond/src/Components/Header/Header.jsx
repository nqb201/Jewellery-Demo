import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import diamondImage from '../../Uploads/diamond.png';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  }

  return (
    <header className="header">
      <div className="top-bar">
        <p>
          <b>Monday - Friday: </b>
          9:00 Am - 7:00 Pm
        </p>
      </div>
      <div className="nav-bar">
        <nav>
          <ul>
            <li><a href="#">Bracelets</a></li>
            <li><a href="#">Diamond Pendal</a></li>
            <li><a href="#">Earrings</a></li>
            <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <a href="#" className="dropdown-toggle">
                Pages <FontAwesomeIcon icon={faChevronDown} />
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Collection</a></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className="logo">
          <img src={diamondImage} alt="Jewellery" className="diamond-image" />
        </div>
        <div className="search-cart">
          <button className="search-button">Search
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="user-button">
            <FontAwesomeIcon icon={faUser} />
          </button>
          <div className="cart">
            <button className="cart-button">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
          <button className="lang-button">
            EN <FontAwesomeIcon icon={faGlobe} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
