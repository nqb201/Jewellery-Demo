import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import BlogList from './Components/BlogList/BlogList';
import CategoryList from './Components/CategoryList/CategoryList';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Popup from './Components/Popup/Popup';
import ProductList from './Components/ProductList/ProductList';
import Testimonials from './Components/Testimonials/Testimonials';
import Subscribe from './Components/Subscribe/Subscribe';
import MainPage from './Components/MainPage/MainPage';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './contexts/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        <Popup />
      </Router>
    </CartProvider>
  );
}

export default App;
