import Image from 'next/image';
import React from 'react';

const SecurityHeroSection = () => {
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
      <div className="lg:absolute top-12 left-12 z-20 lg:w-[50%] w-full -mt-5 lg:mt-0 text-center lg:text-start bg-[#1A1A1A] sm:p-10 p-5 flex flex-col gap-5 rounded-l-xl lg:rounded-tr-none rounded-xl lg:rounded-br-[60px]">
        <h1 className="h3 sm:h2 xl:h1">
          Your Security is Our <span className="neon">Top Priority</span>
        </h1>
        <p className="text-sm xl:text-base text-[#B3B3B3] font-light">
          At SureBank, we understand the importance of keeping your financial information secure. We
          employ robust security measures and advanced technologies to protect your personal and
          financial data. Rest assured that when you bank with us, your security is our utmost
          priority.
        </p>
      </div>
      <div className="lg:flex-end w-full z-10 lg:w-7/12">
        <Image
          src={'/images/security-hero.png'}
          width={600}
          height={600}
          alt="Security Hero"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default SecurityHeroSection;
