import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const ProductView = (props) => {
  const product = props.product;
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const check = () => {
    let res = true;

    if (color === undefined) {
      alert('Please select color!');
      return false;
    }
    if (size === undefined) {
      alert('Please select size!');
      return false;
    }
    return true;
  };

  const addToCart = () => {
    if (check()) {
    }
  };

  const navigate = useNavigate();

  const goToCart = () => {
    if (check()) {
      navigate('/cart');
    }
  };

  return (
    <div className='product'>
      <div className='product__images'>
        <div className='product__images__list'>
          <div className='product__images__list__item'>
            <img src={product.image01} alt='' />
          </div>
          <div className='product__images__list__item'>
            <img src={product.image02} alt='' />
          </div>
        </div>
        <div className='product__images__main'>
          <img src={previewImg} alt='' />
        </div>
      </div>
      <div className='product__info'>
        <h1 className='product__info__title'>{product.title}</h1>
        <div className='product__info__item'>
          <span className='product__info__title__price'>{product.price}</span>
        </div>
        <div className='product__info__item'>
          <div className='product__info__item__title'>Màu sắc</div>
          <div className='product__info__item__list'>
            {product.colors.map((item, i) => (
              <div
                key={i}
                className={`product__info__item__list__item ${color === item ? 'active' : ''}`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className='product__info__item'>
          <div className='product__info__item__title'>Kích cỡ</div>
          <div className='product__info__item__list'>
            {product.size.map((item, i) => (
              <div
                key={i}
                className={`product__info__item__list__item ${size === item ? 'active' : ''}`}
                onClick={() => setSize(item)}
              >
                <span className='product__info__item__list__item__size'>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='product__info__item'>
          <div className='product__info__item__title'>Số lượng</div>
          <div className='product__info__item__quantity'>
            <div
              className='product__info__item__quantity__btn'
              onClick={() => updateQuantity('minus')}
            >
              <i className='bx bx-minus'></i>
            </div>
            <div className='product__info__item__quantity__input'>{quantity}</div>
            <div
              className='product__info__item__quantity__btn'
              onClick={() => updateQuantity('plus')}
            >
              <i className='bx bx-plus'></i>
            </div>
          </div>
        </div>
        <div className='product__info__item'>
          <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
          <Button onClick={() => goToCart()}>mua ngay</Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
