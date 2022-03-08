import React from 'react';
import { Link } from 'react-router-dom';
import heroSliderData from '../assets/fake-data/hero-slider';
import policy from '../assets/fake-data/policy';
import productData from '../assets/fake-data/products';
import Grid from '../components/Grid';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import PolicyCard from '../components/PolicyCard';
import ProductCard from '../components/ProductCard';
import Section, { SectionBody, SectionTitle } from '../components/Section';

const Home = () => {
  return (
    <Helmet title='Trang chủ'>
      <HeroSlider data={heroSliderData} control={true} auto={false} timeOut={5000} />
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, i) => (
              <Link key={i} to='/policy'>
                <PolicyCard
                  key={i}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Top sản phẩm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, i) => (
              <ProductCard
                key={i}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, i) => (
              <ProductCard
                key={i}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Home;
