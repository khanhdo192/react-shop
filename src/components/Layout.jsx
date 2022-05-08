import React from 'react';
import { useLocation } from 'react-router-dom';
import RoutesConfig from '../routes/RoutesConfig';
import Footer from './Footer';
import Header from './Header';
import ProductViewModal from './ProductViewModal';

const Layout = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div>
      {pathname !== '/login' ? <Header /> : null}
      <div className='container'>
        <div className='main'>
          <RoutesConfig />
        </div>
      </div>
      <Footer />
      <ProductViewModal />
    </div>
  );
};

export default Layout;
