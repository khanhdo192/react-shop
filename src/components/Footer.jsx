import React from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';

import logo from '../assets/images/logoA.png';

const footerLinks = [
  {
    display: 'Về chúng tôi',
    path: '/about',
  },
  {
    display: 'Liên hệ',
    path: '/contact',
  },
  {
    display: 'Hệ thống cửa hàng',
    path: '/stores',
  },
  {
    display: 'Tin tức',
    path: '/news',
  },
];

const footerCustomer = [
  {
    display: 'Đổi trả',
    path: '/exchange',
  },
  {
    display: 'Bảo mật',
    path: '/privacy',
  },
  {
    display: 'Vận chuyển',
    path: '/shipping',
  },
  {
    display: 'Thanh toán',
    path: '/payment',
  },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className='footer__title'>Thông tin</div>
            <div className='footer__content'>
              {footerLinks.map((item, i) => (
                <p key={i}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className='footer__title'>Chính sách</div>
            <div className='footer__content'>
              {footerCustomer.map((item, i) => (
                <p key={i}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className='footer__title'>Liên hệ</div>
            <div className='footer__content'>
              <p>
                Hotline: <strong>0123456789</strong>
              </p>
              <p>
                Email: <strong>amand@gmail.com</strong>
              </p>
            </div>
          </div>
          <div>
            <Link to='/'>
              <img src={logo} className=' footer__logo' alt='' />
            </Link>
            <p className='footer__about'>
              Vì chúng tôi hiểu rõ, đằng sau những thành công lớn lao luôn là những tâm huyết trong
              từng điều nhỏ nhất, đó chính là phương châm chính của Amand
            </p>
          </div>
        </Grid>
      </div>
      <div className='footer__copyright'>
        <p>Copyright ©2022 A M A N D</p>
      </div>
    </footer>
  );
};

export default Footer;
