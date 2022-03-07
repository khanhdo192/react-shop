import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from '../routes/RoutesConfig';
import Footer from './Footer';
import Header from './Header';

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
      </div>
    </Router>
  );
};

export default Layout;
