import React from 'react';
import './CategoryList.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import image1 from '../../Uploads/image3.jpeg';
import image2 from '../../Uploads/image2.png';
import image3 from '../../Uploads/image10.jpeg';
import product16 from '../../Uploads/product16.png';
import product10 from '../../Uploads/product10.png'
import giftBagIcon from '../../assets/Images/gift-bag.svg';
import discountIcon from '../../assets/Images/discount.svg';
import trollyIcon from '../../assets/Images/trolly.svg';

const CategoryList = () => {
    const categories = [
      { title: 'Bestsellers', image: image1, link: '#' },
      { title: 'Necklaces', image: image2, link: '#' },
      { title: 'Pearls', image: image3, link: '#' },
    ];
  
    return (
      <div className="category-list-section">
        <div className="category-list">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
        <div className="additional-section">
          <div className="additional-icons">
            <div className="icon-item">
              <img src={giftBagIcon} alt="Finished Products" />
              <p><b>Finished products</b><br /><span>products and gift wrapping</span></p>
            </div>
            <div className="icon-item">
              <img src={discountIcon} alt="Promotions" />
              <p><b>Large and frequent</b><br /><span>promotions with discounts</span></p>
            </div>
            <div className="icon-item">
              <img src={trollyIcon} alt="Free Shipping" />
              <p><b>Free shipping</b><br /><span>on any order from $150</span></p>
            </div>
          </div>
          <div className="additional-description">
            <h2>Diamonds & Engagement Ring</h2>
            <p>Experience the beauty of diamond jewellery and find your perfect piece for a special occasion. Find the perfect diamond for any special occasion, from engagement rings and wedding bands to anniversary and Christmas gifts.</p>
            <a href="#" className="additional-button">Check More Products</a>
          </div>
          <div className="additional-products">
            <div className="product-card">
              <img src={product16} alt="The Ryker Ring" />
              <h3>The Ryker Ring</h3>
              <p>$890.0</p>
              <button>Add To Cart</button>
              <button>Buy Now</button>
            </div>
            <div className="product-card">
              <img src={product10} alt="The Cathi Diamond" />
              <h3>The Cathi Diamond</h3>
              <p>$940.0</p>
              <button>Add To Cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CategoryList;
