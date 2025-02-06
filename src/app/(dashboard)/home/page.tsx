import CTA from '@surebank/components/common/CTA';
import Features from '@surebank/components/home/Features';
import Hero from '@surebank/components/home/Hero';
import Products from '@surebank/components/home/Products';
import UseCases from '@surebank/components/home/UseCases';
import React from 'react';
import FAQs from '@surebank/components/common/FAQs';
import Testimonials from '@surebank/components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <UseCases />
      <Features />
      <FAQs />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
