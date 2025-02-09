import { BENEFITS, BENEFITS_DESCRIPTION } from '@surebank/constants/Careers';
import Image from 'next/image';
import React from 'react';

const Benefits = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col gap-5 text-center lg:text-start">
        {/* Title */}
        <div className="h2">
          Our <span className="neon">Benefits</span>{' '}
        </div>

        {/* Description */}
        <p className="text-[#B3B3B3] font-light">{BENEFITS_DESCRIPTION}</p>

        {/* Content  */}
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {BENEFITS.map((benefit) => {
            return (
              <div className={`border border-[#262626] rounded-xl ${benefit.className} text-start flex flex-col gap-5 p-5`} key={benefit._id}>
                <div className="flex-start items-center gap-4">
                  <Image src={benefit.icon_url} alt={benefit.title} width={50} height={50} />
                  <h6 className="h5">{benefit.title}</h6>
                </div>
                <p className="text-[#B3B3B3] font-light">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
