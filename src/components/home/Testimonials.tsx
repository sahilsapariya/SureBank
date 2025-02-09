'use client';

import React, { useState } from 'react';
import ToggleButtons from './ToggleButtons';
import Image from 'next/image';

const Testimonials = () => {
  const data = [
    {
      id: 1,
      feedback:
        'SureBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.',
      name: 'Sara T',
      type: 'individuals',
    },
    {
      id: 2,
      feedback:
        'I recently applied for a loan with SureBank and was impressed by the quick approval process and competitive rates. I would highly recommend SureBank to anyone in need of financial assistance.',
      name: 'John D',
      type: 'individuals',
    },
    {
      id: 3,
      feedback:
        "SureBank's online banking platform is user-friendly and secure. I can easily manage my accounts, pay bills, and transfer funds from anywhere, at any time. It's convenient and reliable.",
      name: 'Emily G',
      type: 'individuals',
    },
    {
      id: 4,
      feedback:
        'As a small business owner, I rely on SureBank for all my banking needs. Their business accounts and lending services have helped me grow my business and achieve my financial goals.',
      name: 'Mark S',
      type: 'business',
    },
    {
      id: 5,
      feedback:
        'SureBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.',
      name: 'Sara T',
      type: 'business',
    },
    {
      id: 6,
      feedback:
        'I recently applied for a loan with SureBank and was impressed by the quick approval process and competitive rates. I would highly recommend SureBank to anyone in need of financial assistance.',
      name: 'John D',
      type: 'business',
    },
  ];
  const [selected, setSelected] = useState('individuals');

  return (
    <section className="py-5">
      <div className="relative flex flex-col gap-5 text-center lg:text-start">
        {/* Title */}
        <div className="h2">
          Our <span className="neon">Testimonials</span>{' '}
        </div>

        {/* Description */}
        <div className="flex-col gap-5 lg:flex-row lg:flex-between lg:gap-32 flex-center">
          <p className="text-[#B3B3B3] font-light">
            Discover how SureBank has transformed lives with innovative digital solutions and
            personalized customer service. See why our clients trust us for a secure and prosperous
            financial journey
          </p>
          <ToggleButtons selected={selected} setSelected={setSelected} />
        </div>

        {/* Testimonials */}
        <div className="flex gap-10 lg:gap-16 text-center py-10 overflow-scroll scrollbar-none">
          {data
            .filter((testimonial) => testimonial.type === selected)
            .map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col gap-5 text-center min-w-80">
                <div className="flex-none">
                  <div className="flex items-center w-full mx-auto">
                    <span className="h-[1px] w-full bg-[#262626] mr-2"></span>
                    <Image src={'/icons/quotation.svg'} width={60} height={60} alt="quote" />
                    <span className="h-[1px] w-full bg-[#262626] ml-2"></span>
                  </div>
                </div>

                <p className="flex-grow">{testimonial.feedback}</p>
                <p className="flex-grow neon mt-5">{testimonial.name}</p>
              </div>
            ))}
        </div>
        <div className="absolute bottom-0 right-0 w-1/5 lg:w-2/5 h-80 bg-gradient-to-l opacity-80 from-[#1A1A1A] to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/5 lg:w-2/5 h-80 bg-gradient-to-r opacity-80 from-[#1A1A1A] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Testimonials;
