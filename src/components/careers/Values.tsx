import { VALUES, VALUES_DESCRIPTION } from '@surebank/constants/Careers';
import React from 'react';

const Values = () => {
  return (
    <section className="py-5">
      <div className="flex flex-col gap-5 text-center lg:text-start">
        {/* Title */}
        <div className="h2">
          Our <span className="neon">Values</span>{' '}
        </div>

        {/* Description */}
        <p className="text-[#B3B3B3] font-light">{VALUES_DESCRIPTION}</p>

        <div className="grid grid-cols-1 text-start lg:grid-cols-2 gap-16 my-10">
          {VALUES.map((value) => {
            return (
              <div
                key={value._id}
                className="w-full flex flex-col gap-5 border-l border-[#CAFF33] pl-5 pt-2"
              >
                <div className="h2 text-[#4C4C4D]">{value.title}</div>
                <p className="text-[#B3B3B3] font-light">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
