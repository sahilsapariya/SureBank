import { PRESS_RELEASES } from '@surebank/constants/About';
import Image from 'next/image';
import React from 'react';

const Press = () => {
  return (
    <section className="mb-20">
      <div className="flex flex-col gap-5 text-center lg:text-start">
        {/* Title */}
        <div className="h2 neon">Press Release</div>

        {/* Description */}
        <p className="text-[#B3B3B3] font-light max-w-5xl">
          Stay updated with the latest happenings and exciting developments at YourBank through our
          press releases.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-5">
        {PRESS_RELEASES.map((press) => {
          return (
            <div
              className="border border-[#262626] bg-[#1C1C1C] rounded-xl p-5 flex flex-col tex-start gap-6"
              key={press._id}
            >
              {/* image */}
              <Image src={press.img_url} width={500} height={300} alt="press" className="w-full" />

              {/* press title  */}
              <h4 className="h5">{press.title}</h4>

              {/* tags  */}
              <ul className="flex gap-2 flex-wrap">
                <li className="py-2 px-4 border border-[#262626] bg-[#1A1A1A] rounded-full font-light text-[#B3B3B3] ">
                  <span>Location:</span> {press.location}
                </li>
                <li className="py-2 px-4 border border-[#262626] bg-[#1A1A1A] rounded-full font-light text-[#B3B3B3] ">
                  <span>Date:</span> {press.date}
                </li>
              </ul>

              {/* Description */}
              <p className="text-[#B3B3B3] font-light">{press.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Press;
