import CTA from '@surebank/components/common/CTA';
import Features from '@surebank/components/home/Features';
import Hero from '@surebank/components/home/Hero';
import Products from '@surebank/components/home/Products';
import UseCases from '@surebank/components/home/UseCases';
import React from 'react';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <UseCases />
      <Features />
      <CTA />
    </>
  );
};

export default Home;
