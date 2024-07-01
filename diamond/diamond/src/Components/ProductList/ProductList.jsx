import React, { useState } from 'react';
import './ProductList.css';
import product1 from '../../Uploads/product1.png';
import product2 from '../../Uploads/product2.png';
import product3 from '../../Uploads/product3.png';
import product4 from '../../Uploads/product4.png';
import product5 from '../../Uploads/product5.png';
import product6 from '../../Uploads/product6.png';
import product7 from '../../Uploads/product7.png';
import product8 from '../../Uploads/product8.png';
import product9 from '../../Uploads/product9.png';
import product10 from '../../Uploads/product10.png';
import product11 from '../../Uploads/product11.png';
import product12 from '../../Uploads/product12.png';
import product13 from '../../Uploads/product13.png';
import product14 from '../../Uploads/product14.png';
import product15 from '../../Uploads/product15.png';
import product16 from '../../Uploads/product16.png';
import product17 from '../../Uploads/product17.png';
import product18 from '../../Uploads/product18.png';
import product19 from '../../Uploads/product19.png';
import product20 from '../../Uploads/product20.png';
import product21 from '../../Uploads/product21.png';
import business from '../../assets/Images/img1.png';
import ring from '../../assets/Images/top-main-desing.png'
import { FaShoppingCart, FaArrowRight } from 'react-icons/fa';

const products = [
  { title: 'The Ryker Ring', image: product1, price: '$890.0' },
  { title: 'The Cathi Diamond', image: product2, price: '$940.0' },
  { title: 'The P Alphabet Pendant', image: product3, price: '$840.0' },
  { title: 'The R Alphabet Pendant', image: product4, price: '$840.0' },
  { title: 'Product 5', image: product5, price: '$850.0' },
  { title: 'Product 6', image: product6, price: '$860.0' },
  { title: 'Product 7', image: product7, price: '$870.0' },
  { title: 'Product 8', image: product8, price: '$880.0' },
  { title: 'Product 9', image: product9, price: '$890.0' },
  { title: 'Product 10', image: product10, price: '$900.0' },
  { title: 'Product 11', image: product11, price: '$910.0' },
  { title: 'Product 12', image: product12, price: '$920.0' },
  { title: 'Product 13', image: product13, price: '$930.0' },
  { title: 'Product 14', image: product14, price: '$940.0' },
  { title: 'Product 15', image: product15, price: '$950.0' },
  { title: 'Product 16', image: product16, price: '$960.0' },
  { title: 'Product 17', image: product17, price: '$970.0' },
  { title: 'Product 18', image: product18, price: '$980.0' },
  { title: 'Product 19', image: product19, price: '$990.0' },
  { title: 'Product 20', image: product20, price: '$1000.0' },
  { title: 'Product 21', image: product21, price: '$1010.0' }
];

const ProductList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + products.length) % products.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % products.length);
  };

  return (
    <div className="product-list-section">
      <h2>Find the perfect diamond for you</h2>
      <div className="product-list-container">
      <img src={ring} alt="ring" className="ring-image" />
        <button className="prev-button" onClick={handlePrevClick}>‹</button>
        <div className="product-list">
          <div className="product-list-inner" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <img className="product-image" src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <button className="add-to-cart">
                  <FaShoppingCart /> Add To Cart
                </button>
                <button className="buy-now">
                  Buy Now <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
        <button className="next-button" onClick={handleNextClick}>›</button>
      </div>
      <div className="business-section">
        <h2>Get the best diamonds for your business</h2>
        <p>Our expert team includes diamond setters, gemologists and jewellery experts who will help you find the perfect stone for every occasion.</p>
        <a href="#" className="business-button">Check More Products</a>
        <div className="business-images">
          <img src={business} alt="Business 1" />
        </div>
      </div>
      <div className="additional-section">
        <h2>Diamonds are forever</h2>
        <div className="additional-products">
          <div className="product-card">
            <img className="product-image" src={product2} alt="The Cathi Diamond Ring" />
            <h3>The Cathi Diamond Ring</h3>
            <p>$940.0</p>
            <button className="add-to-cart">
              <FaShoppingCart /> Add To Cart
            </button>
            <button className="buy-now">
              Buy Now <FaArrowRight />
            </button>
          </div>
          <div className="product-card">
            <img className="product-image" src={product3} alt="The P Alphabet Pendant" />
            <h3>The P Alphabet Pendant</h3>
            <p>$840.0</p>
            <button className="add-to-cart">
             Add To Cart <FaShoppingCart />
            </button>
            <button className="buy-now">
              Buy Now <FaArrowRight />
            </button>
          </div>
        </div>
        <a href="#" className="additional-button">Check More Product</a>
      </div>
    </div>
  );
}

export default ProductList;
