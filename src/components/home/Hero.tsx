import Image from 'next/image';
import React from 'react';
import { Button } from '@surebank/components/ui/button';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-center lg:flex-row lg:flex-between py-10 lg:pt-0">
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

      <div className="mb-10 mt-20 w-full lg:w-1/2 flex-center flex-col gap-5 px-5">
        <div className="relative border border-[#506816] min-w-80 w-full max-w-96 rounded-xl sm:py-8 py-6 sm:px-5 px-3 pb-5">
          {/* top left box (monthly credit) */}
          <div className="absolute z-40 top-[-30px] sm:left-[-60px] left-[-30px] flex-center sm:gap-3 gap-2 py-2 sm:px-4 px-3 bg-[#22251B] rounded-xl">
            <Image
              src={'/icons/plus.svg'}
              className="neon-bg rounded-full p-2 sm:w-8 w-6"
              alt="plus"
              width={20}
              height={20}
            />
            <div className="flex flex-col gap-1">
              <span className="sm:text-sm text-[10px]">+ $5000,00</span>
              <span className="font-light sm:text-xs text-[8px]">Monthly Income</span>
            </div>
          </div>

          {/* transaction  */}
          <div className="flex flex-col gap-2">
            <h5 className="font-medium text-sm">Your Transactions</h5>
            <div className="w-full">
              <ul className="relative flex-center flex-col">
                {[
                  {
                    id: 1,
                    name: 'Joel Kenely',
                    amount: '-$68.00',
                    opacity: 'opacity-100',
                    zIndex: 'z-30',
                    scale: 'scale-100',
                  },
                  {
                    id: 2,
                    name: 'Mark Smith',
                    amount: '-$55.00',
                    opacity: 'opacity-75',
                    zIndex: 'z-20',
                    scale: 'scale-90',
                  },
                  {
                    id: 3,
                    name: 'Lenen Roy',
                    amount: '-$30.00',
                    opacity: 'opacity-50',
                    zIndex: 'z-10',
                    scale: 'scale-75',
                  },
                ].map((item, index) => (
                  <li
                    key={item.id}
                    className={`relative border w-full border-[#506816] rounded-xl px-4 py-2 flex-center bg-[#1C1C1C] transform ${item.zIndex} ${item.opacity} ${item.scale} translate-y-${index * -4}`}
                    style={{ marginTop: index === 0 ? '0' : '-20px' }}
                  >
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
                        <span className="text-sm">{item.name}</span>
                        <span className="font-medium">{item.amount}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* money exchange  */}
          <div className="flex flex-col gap-2 mt-2">
            <h5 className="font-medium text-sm">Money Exchange</h5>
            <div>
              {/* first - row  */}
              <div className="flex w-full">
                <div className="w-1/2 p-3 sm:px-4 px-3 border border-[#262626] rounded-tl-xl">
                  <div className="flex items-center gap-2">
                    <Image src="icons/india.svg" width={30} height={30} alt="india" />
                    <span className="text-sm">INR</span>
                  </div>
                  <span className="font-light text-xs text-[#E4E4E7]">Indian Rupees</span>
                </div>
                <div className="w-1/2 p-3 sm:px-4 px-3 border border-[#262626] rounded-tr-xl">
                  <div className="flex items-center gap-2">
                    <Image src="icons/usa.svg" width={30} height={30} alt="usa" />
                    <span className="text-sm">USD</span>
                  </div>
                  <span className="font-light text-xs text-[#E4E4E7]">United States Dollar</span>
                </div>
              </div>
              {/* second - row  */}
              <div className="flex w-full">
                <div className="w-1/2 p-4 border border-[#262626] rounded-bl-xl">5,000</div>
                <div className="w-1/2 p-4 border border-[#262626] rounded-br-xl">12.00</div>
              </div>
            </div>
          </div>

          {/* exchange button  */}
          <div className="w-full mt-4">
            <Button
              className="w-full bg-[#22251B] text-[#D1FF4D] text-xs rounded-full"
              variant={'default'}
            >
              Exchange
            </Button>
          </div>
        </div>
        {/* supported currencies container */}
        <div className="self-end flex-end bg-[#22251B] items-center gap-4 py-2 px-4 rounded-full">
          <span className="text-xs sm:text-sm whitespace-nowrap">Supported Currency</span>
          <div className="flex-center gap-1 bg-[#1A1A1A] sm:p-2 p-1 rounded-full">
            <Image
              src="icons/currency/dollar.svg"
              className="rounded-full p-1 sm:p-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#262626]"
              width={12}
              height={12}
              alt="dollar"
            />
            <Image
              src="icons/currency/euro.svg"
              className="rounded-full p-1 sm:p-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#262626]"
              width={12}
              height={12}
              alt="euro"
            />
            <Image
              src="icons/currency/bitcoin.svg"
              className="rounded-full p-1 sm:p-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#262626]"
              width={12}
              height={12}
              alt="bitcoin"
            />
            <Image
              src="icons/currency/etherium.svg"
              className="rounded-full p-1 sm:p-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#262626]"
              width={12}
              height={12}
              alt="etherium"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
