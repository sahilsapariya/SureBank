'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const FAQs = ({
  data,
}: {
  data: {
    id: number;
    question: string;
    answer: string;
  }[];
}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleFAQs = showAll ? data : data.slice(0, 4);
  return (
    <section className="py-5">
      <div className="relative flex flex-col gap-5 text-center lg:text-start">
        {/* Title */}
        <div className="h2">
          <span className="neon">Frequently</span> Asked Questions
        </div>

        {/* Description */}
        <p className="text-[#B3B3B3] font-light">
          Still you have any questions? Contact our Team via support@surebank.com
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {visibleFAQs?.map((faq) => (
            <div
              className="flex text-left flex-col gap-4 border border-[#262626] p-6 lg:p-10 rounded-xl h-fit"
              key={faq.id}
            >
              <div className="font-medium">{faq.question}</div>
              <div className="bg-[#262626] self-stretch h-px"></div>
              <div className="text-[#B3B3B3] font-light">{faq.answer}</div>
            </div>
          ))}
        </div>

        {/* Gradient to indicate more content */}
        {!showAll && (
          <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none"></div>
        )}
      </div>

      {/* Load More Button */}
      {!showAll && (
        <div className="mt-4 flex justify-center">
          <button className="btn-secondary flex-center gap-1 px-5" onClick={() => setShowAll(true)}>
            Load More FAQs
            <Image src={'/icons/down-arrow.svg'} width={22} height={22} alt="down arrow" />
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQs;
