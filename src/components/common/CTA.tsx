import Image from 'next/image';
import React from 'react';

const CTA = () => {
  return (
    <section className="relative my-16 p-10 py-16 rounded-2xl border border-[#262626] bg-[#1C1C1C]">
      <Image
        src={'/icons/radial-dots-bg.svg'}
        width={200}
        height={200}
        alt="radial-dots-bg"
        className="absolute z-10 top-0 left-0"
      />

      <div className="flex flex-col lg:flex-row text-center lg:flex-between items-center gap-10 lg:gap-20">
        <div className="flex flex-col gap-5 z-20">
          <h3 className="h3">
            Start your financial journey with&nbsp;
            <span className="neon">SureBank today!</span>
          </h3>
          <p className="text-[#B3B3B3] font-light">
            Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit.
            Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus
            purus.
          </p>
        </div>

        <div className="flex-center">
          <button className="btn-primary whitespace-nowrap">Open Account</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
