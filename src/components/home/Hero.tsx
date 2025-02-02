import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-center lg:flex-row lg:flex-between py-5">
      {/* left side  */}
      <div className="flex-center text-center lg:text-start lg:items-start flex-col  w-full lg:w-1/2 gap-5">
        <span className="btn-secondary flex-center gap-2 w-fit">
          <Image src="/icons/checkmark.svg" width={20} height={20} alt="checkmark" />
          <span className="font-light text-sm">No LLC Required, No Credit Check.</span>
        </span>
        <h1 className="h3 lg:h2 leading-normal">
          Welcome to SureBank Empowering Your{' '}
          <span className="neon whitespace-nowrap">Financial Journey</span>
        </h1>

        <p className="font-light">
          At SureBank, our mission is to provide comprehensive banking solutions that empower
          individuals and businesses to achieve their financial goals. We are committed to
          delivering personalized and innovative services that prioritize our customers&apos; needs.
        </p>

        <button className="btn-primary text-sm w-fit">Open Account</button>
      </div>

      {/* right side  */}

      <div className="w-1/2 flex-center">
        <div className="border border-[#506816] min-w-96 rounded-xl p-5">
          {/* transaction  */}
          <div className="flex flex-col gap-5">
            <h5 className="font-medium text-sm">Your Transactions</h5>
            <div className="relative w-full">
              <ul className="flex-center flex-col">
                <li className="z-30 border w-full border-[#506816] rounded-xl px-4 flex-center bg-[#1C1C1C]">
                  <Image
                    src="/icons/transaction.svg"
                    className="w-fit neon-bg rounded-full p-2"
                    width={30}
                    height={30}
                    alt="transaction"
                  />

                  <div className="flex flex-grow flex-col p-2">
                    <span className="font-light text-xs">Transaction</span>
                    <div className="flex-between">
                      <span className="text-sm">Joel Kenely</span>
                      <span className="font-medium">-$68.00</span>
                    </div>
                    <div></div>
                  </div>
                </li>
                <li className="z-20 top-12 absolute border w-[calc(100%-30px)] border-[#506816] opacity-65 rounded-xl px-4 flex-center bg-[#1C1C1C]">
                  <Image
                    src="/icons/transaction.svg"
                    className="w-fit neon-bg rounded-full p-2"
                    width={30}
                    height={30}
                    alt="transaction"
                  />

                  <div className="flex flex-grow flex-col p-2">
                    <span className="font-light text-xs">Transaction</span>
                    <div className="flex-between">
                      <span className="text-sm">Joel Kenely</span>
                      <span className="font-medium">-$68.00</span>
                    </div>
                    <div></div>
                  </div>
                </li>
                <li className="absolute border z-10 top-24 w-[calc(100%-60px)] border-[#506816] opacity-25 rounded-xl px-4 flex-center bg-[#1C1C1C]">
                  <Image
                    src="/icons/transaction.svg"
                    className="w-fit neon-bg rounded-full p-2"
                    width={30}
                    height={30}
                    alt="transaction"
                  />

                  <div className="flex flex-grow flex-col p-2">
                    <span className="font-light text-xs">Transaction</span>
                    <div className="flex-between">
                      <span className="text-sm">Joel Kenely</span>
                      <span className="font-medium">-$68.00</span>
                    </div>
                    <div></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* money exchange  */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
