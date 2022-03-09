import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from '../routes/RoutesConfig';
import Footer from './Footer';
import Header from './Header';
import ProductViewModal from './ProductViewModal';

const Layout = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className='container'>
          <div className='main'>
            <RoutesConfig />
          </div>
        </div>
        <Footer />
        <ProductViewModal />
      </div>
    </Router>
  );
};

export default Layout;
