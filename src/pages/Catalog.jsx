import React, { useCallback, useEffect, useRef, useState } from 'react';
import category from '../assets/fake-data/category';
import productData from '../assets/fake-data/products';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Helmet from '../components/Helmet';
import InfinityList from '../components/InfinityList';

const Catalog = () => {
  const initFilter = {
    category: [],
  };

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case 'CATEGORY':
          setFilter({ ...filter, category: [...filter.category, item.categorySlug] });
          break;
        default:
      }
    } else {
      switch (type) {
        case 'CATEGORY':
          const newCategory = filter.category.filter((e) => e !== item.categorySlug);
          setFilter({ ...filter, category: newCategory });
          break;
        default:
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const clearFilter = () => setFilter(initFilter);

  const filterRef = useRef(null);

  const showHideFilter = () => {
    filterRef.current.classList.toggle('active');
  };

  return (
    <Helmet title='Sản phẩm'>
      <div className='catalog'>
        <div className='catalog__filter' ref={filterRef}>
          <div className='catalog__filter__close' onClick={() => showHideFilter()}>
            <i className='bx bx-left-arrow-alt'></i>
          </div>
          <div className='catalog__filter__widget'>
            <div className='catalog__filter__widget__title'>Danh mục sản phẩm</div>
            <div className='catalog__filter__widget__content'>
              {category.map((item, i) => (
                <div key={i} className='catalog__filter__widget__content__item'>
                  <CheckBox
                    label={item.display}
                    onChange={(input) => filterSelect('CATEGORY', input.checked, item)}
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='catalog__filter__widget'>
            <div className='catalog__filter__widget__content'>
              <Button size='sm' onClick={clearFilter}>
                Xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>
        <div className='catalog__filter__toggle'>
          <Button size='sm' onClick={() => showHideFilter()}>
            Bộ lọc
          </Button>
        </div>
        <div className='catalog__content'>
          <InfinityList data={products} />
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
