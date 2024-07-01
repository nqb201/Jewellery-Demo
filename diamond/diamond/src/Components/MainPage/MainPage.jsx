import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import ProductList from '../ProductList/ProductList';
import Testimonials from '../Testimonials/Testimonials';
import BlogList from '../BlogList/BlogList';
import Subscribe from '../Subscribe/Subscribe';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <Banner />
      <CategoryList />
      <ProductList />
      <Testimonials />
      {/* <BlogList /> */}
      <Subscribe />
    </div>
  );
}

export default MainPage;
