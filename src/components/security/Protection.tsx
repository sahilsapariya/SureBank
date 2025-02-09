import { SECURITY, SECURITY_DESCRIPTION } from '@surebank/constants/Security';
import Image from 'next/image';
import React from 'react';

const Protection = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col gap-5 text-center lg:text-start">
        {/* Title */}
        <div className="h2">
          How We <span className="neon">Protect You</span>{' '}
        </div>

        {/* Description */}
        <p className="text-[#B3B3B3] font-light">{SECURITY_DESCRIPTION}</p>

        {/* Content  */}
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {SECURITY.map((security) => {
            return (
              <div
                className={`border border-[#262626] rounded-xl ${security.className} text-start flex flex-col gap-5 p-5`}
                key={security._id}
              >
                <div className="flex-start items-center gap-4">
                  <Image src={security.icon_url} alt={security.title} width={50} height={50} />
                  <h6 className="h5">{security.title}</h6>
                </div>
                <p className="text-[#B3B3B3] font-light">{security.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Protection;
