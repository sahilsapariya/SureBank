import Benefits from '@surebank/components/careers/Benefits';
import CareersHeroSection from '@surebank/components/careers/Hero';
import Values from '@surebank/components/careers/Values';
import CTA from '@surebank/components/common/CTA';
import FAQs from '@surebank/components/common/FAQs';
import React from 'react';

const Careers = () => {
  return (
    <>
      <CareersHeroSection />
      <Values />
      <Benefits />
      <FAQs />
      <CTA />
    </>
  );
};

export default Careers;
