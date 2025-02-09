import Image from 'next/image';
import React from 'react';

const CareersHeroSection = () => {
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
      <div className="lg:absolute top-12 left-12 z-20 lg:w-[55%] w-full -mt-5 bg-[#1A1A1A] sm:p-10 p-5 flex flex-col gap-5 rounded-l-xl lg:rounded-tr-none rounded-xl lg:rounded-br-[60px]">
        <h1 className="h3 sm:h2 xl:h1">
          Welcome to <span className="neon">SureBank</span> Careers!
        </h1>
        <p className="text-sm xl:text-base text-[#B3B3B3] font-light">
          Join our team and embark on a rewarding journey in the banking industry. At SureBank, we
          are committed to fostering a culture of excellence and providing opportunities for
          professional growth. With a focus on innovation, customer service, and integrity, we
          strive to make a positive impact in the lives of our customers and communities. Join us
          today and be a part of our mission to shape the future of banking.
        </p>
      </div>
      <div className="lg:flex-end w-full z-10 lg:w-7/12">
        <Image
          src={'/images/careers-hero.png'}
          width={600}
          height={600}
          alt="Careers Hero"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default CareersHeroSection;
