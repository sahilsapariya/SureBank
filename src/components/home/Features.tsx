import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <section className="py-5">
      <div className="flex flex-col gap-5 text-center lg:text-start">
        {/* Title */}
        <div className="h2">
          Our <span className="neon">Features</span>{' '}
        </div>

        {/* Description */}
        <p className="text-[#B3B3B3] font-light">
          Experience a host of powerful features at SureBank, including seamless online banking,
          secure transactions, and personalized financial insights, all designed to enhance your
          banking experience
        </p>

        {/* Content  */}
        <div className="flex flex-col md:flex-row gap-4 overflow-hidden my-8">
          <div className="md:max-w-56 w-full mx-auto md:mx-0 h-fit p-5 bg-[#1C1C1C] rounded-xl overflow-x-scroll scrollbar-none">
            <div className="flex md:flex-col w-full gap-4">
              <button className="btn-secondary text-[#CAFF33] text-sm whitespace-nowrap">
                Online Banking
              </button>
              <button className="btn-secondary text-sm whitespace-nowrap">Financial Tools</button>
              <button className="btn-secondary text-sm whitespace-nowrap">Customer Support</button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {[
              {
                _id: 1,
                title: '24/7 Account Access',
                description:
                  'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.',
              },

              {
                _id: 2,
                title: 'Mobile Banking App',
                description:
                  'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.',
              },

              {
                _id: 3,
                title: 'Secure Transactions',
                description:
                  'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.',
              },

              {
                _id: 4,
                title: 'Bill Pay and Transfers',
                description:
                  'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.',
              },
            ].map((feature) => {
              return (
                <div
                  className="flex flex-col bg-[#1C1C1C] border border-[#262626] rounded-xl p-6 gap-5"
                  key={feature._id}
                >
                  <div className="flex-none flex-between items-center">
                    <h4>{feature.title}</h4>
                    <Image src={'/icons/redirect.svg'} width={24} height={24} alt={'tab2'} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[#B3B3B3] text-start font-light">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
