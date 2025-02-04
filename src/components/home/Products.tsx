'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ToggleButtons from '@surebank/components/home/ToggleButtons';

const Products = () => {
  const [selected, setSelected] = useState('individuals');

  return (
    <div className="max-container py-5">
      <div className="flex flex-col gap-5 text-center lg:text-start">
        {/* Title */}
        <div className="h2">
          Our <span className="neon">Products</span>{' '}
        </div>

        {/* Description */}
        <div className="flex-col gap-5 lg:flex-row lg:flex-between lg:gap-32 flex-center">
          <p className="text-[#B3B3B3] font-light">
            Discover a range of comprehensive and customizable banking products at SureBank,
            designed to suit your unique financial needs and aspirations
          </p>
          <ToggleButtons selected={selected} setSelected={setSelected} />
        </div>

        {/* Products or Features */}
        {selected === 'individuals' ? <IndividualProducts /> : <BusinessProducts />}
      </div>
    </div>
  );
};

const IndividualProducts = () => {
  return (
    <div className="flex-center flex-col lg:flex-row gap-10 text-center py-10">
      <div className="flex-center flex-col gap-5 lg:w-1/3 w-full max-w-96">
        <Image
          src={'/icons/products/icon-1-1.svg'}
          width={72}
          height={72}
          alt="checking-accounts"
        />
        <h3 className="h5 font-normal">Checking Accounts</h3>
        <p className="font-light text-[#B3B3B3]">
          Enjoy easy and convenient access to your funds with our range of checking account options.
          Benefit from features such as online and mobile banking, debit cards, and free ATM access.
        </p>
      </div>
      <div className="h-px lg:w-px self-stretch bg-[#262626]"></div>
      <div className="flex-center flex-col gap-5 lg:w-1/3 w-full max-w-96">
        <Image src={'/icons/products/icon-1-2.svg'} width={72} height={72} alt="saving-accounts" />
        <h3 className="h5 font-normal">Savings Accounts</h3>
        <p className="font-light text-[#B3B3B3]">
          Build your savings with our competitive interest rates and flexible savings account
          options. Whether you&apos;re saving for a specific goal or want to grow your wealth over
          time, we have the right account for you.
        </p>
      </div>
      <div className="h-px lg:w-px self-stretch bg-[#262626]"></div>
      <div className="flex-center flex-col gap-5 lg:w-1/3 w-full max-w-96">
        <Image src={'/icons/products/icon-1-3.svg'} width={72} height={72} alt="loans" />
        <h3 className="h5 font-normal">Loans and Mortgages</h3>
        <p className="font-light text-[#B3B3B3]">
          Realize your dreams with our flexible loan and mortgage options. From personal loans to
          home mortgages, our experienced loan officers are here to guide you through the
          application process and help you secure the funds you need.
        </p>
      </div>
    </div>
  );
};

const BusinessProducts = () => {
  return (
    <div className="flex-center flex-col lg:flex-row gap-10 text-center py-10">
      <div className="flex-center flex-col gap-5 lg:w-1/3 w-full max-w-96">
        <Image
          src={'/icons/products/icon-1-1.svg'}
          width={72}
          height={72}
          alt="checking-accounts"
        />
        <h3 className="h5 font-normal">Saving Accounts</h3>
        <p className="font-light text-[#B3B3B3]">
          Enjoy easy and convenient access to your funds with our range of checking account options.
          Benefit from features such as online and mobile banking, debit cards, and free ATM access.
        </p>
      </div>
      <div className="h-px lg:w-px self-stretch bg-[#262626]"></div>
      <div className="flex-center flex-col gap-5 lg:w-1/3 w-full max-w-96">
        <Image src={'/icons/products/icon-1-2.svg'} width={72} height={72} alt="saving-accounts" />
        <h3 className="h5 font-normal">Business Account</h3>
        <p className="font-light text-[#B3B3B3]">
          Build your savings with our competitive interest rates and flexible savings account
          options. Whether you&apos;re saving for a specific goal or want to grow your wealth over
          time, we have the right account for you.
        </p>
      </div>
      <div className="h-px lg:w-px self-stretch bg-[#262626]"></div>
      <div className="flex-center flex-col gap-5 lg:w-1/3 w-full max-w-96">
        <Image src={'/icons/products/icon-1-3.svg'} width={72} height={72} alt="loans" />
        <h3 className="h5 font-normal">Business Loans</h3>
        <p className="font-light text-[#B3B3B3]">
          Realize your dreams with our flexible loan and mortgage options. From personal loans to
          home mortgages, our experienced loan officers are here to guide you through the
          application process and help you secure the funds you need.
        </p>
      </div>
    </div>
  );
};

export default Products;
