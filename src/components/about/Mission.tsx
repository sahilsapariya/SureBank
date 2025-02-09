import Image from 'next/image';
import React from 'react';

const Mission = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col gap-5 text-center lg:text-start">
        {/* Title */}
        <div className="h2 neon">Mission & Vision</div>

        {/* Description */}
        <p className="text-[#B3B3B3] font-light max-w-5xl">
          Experience a host of powerful features at SureBank, including seamless online banking,
          secure transactions, and personalized financial insights, all designed to enhance your
          banking experience
        </p>

        {/* Content  */}
        <div className="py-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-fit lg:w-5/12 subtract-shape p-8 sm:p-12 [&]:pb-0 overflow-hidden">
              <Image
                src="/images/about-2.png"
                alt="Coins and plant"
                className="lg:rounded-lg rounded-t-lg shadow-lg mx-auto"
                width={500}
                height={500}
              />
            </div>

            <div className="w-full lg:w-7/12 flex flex-col gap-5 lg:pl-12 lg:pt-1 py-10 border-t lg:border-t-0 lg:border-l  border-[#CAFF33]">
              <h2 className="h3">Mission</h2>
              <p className="text-[#B3B3B3] font-light">
                At SureBank, our mission is to empower our customers to achieve financial success.
                We are dedicated to delivering innovative banking solutions that cater to their
                unique needs. Through personalized services, expert guidance, and cutting-edge
                technology, we aim to build strong, lasting relationships with our customers. Our
                mission is to be their trusted partner, helping them navigate their financial
                journey and realize their dreams.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center xl:mt-[-40px]">
            <div className="w-fit lg:w-5/12 subtract-shape p-8 sm:p-12 [&]:pb-0 overflow-hidden">
              <Image
                src="/images/about-3.png"
                alt="Coins and plant"
                className="lg:rounded-lg rounded-t-lg shadow-lg mx-auto"
                width={500}
                height={500}
              />
            </div>

            <div className="w-full lg:w-7/12 flex flex-col gap-5 lg:pr-12 lg:pt-1 py-10 border-t lg:border-t-0 lg:border-r border-[#CAFF33]">
              <h2 className="h3">Vision</h2>
              <p className="text-[#B3B3B3] font-light">
                Our vision at SureBank is to redefine banking by creating a seamless and
                personalized experience for our customers. We envision a future where banking is
                accessible, transparent, and tailored to individual preferences. Through continuous
                innovation and collaboration, we strive to be at the forefront of the industry,
                setting new standards for customer-centric banking. Our vision is to be the
                preferred financial institution, known for our unwavering commitment to excellence,
                trust, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
