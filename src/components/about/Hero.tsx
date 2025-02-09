import Image from 'next/image';
import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-end sm:my-10 my-5 sm:p-12 p-5 rounded-2xl bg-[#1C1C1C]">
      <div className="absolute top-0 right-0">
        <Image
          src={'/icons/radial-dots-bg-2.svg'}
          width={150}
          height={150}
          alt="radial dots bg"
          className="w-full h-full"
        />
      </div>
      <div className="lg:absolute top-12 left-12 z-20 lg:w-[55%] w-full -mt-5 lg:mt-0 text-center lg:text-start bg-[#1A1A1A] sm:p-10 p-5 flex flex-col gap-5 rounded-l-xl lg:rounded-tr-none rounded-xl lg:rounded-br-[60px]">
        <span className="-mb-3">Welcome to Surebank</span>
        <h1 className="h3 sm:h2 xl:h1">
          Where Banking Meets<span className="neon"> Excellence!</span>
        </h1>
        <p className="text-sm xl:text-base text-[#B3B3B3] font-light">
          At YourBank, we believe that banking should be more than just transactions. It should be
          an experience that empowers individuals and businesses to thrive and reach their financial
          goals. As a trusted financial institution, we are committed to delivering exceptional
          banking services that go beyond expectations. With a focus on innovation, personalized
          solutions, and unwavering integrity, we strive to provide the best banking experience for
          our valued customers. Join us on this exciting journey and discover a new level of banking
          excellence.
        </p>
      </div>
      <div className="lg:flex-end w-full z-10 lg:w-7/12">
        <Image
          src={'/images/about-hero.png'}
          width={600}
          height={600}
          alt="Careers Hero"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default AboutHeroSection;
