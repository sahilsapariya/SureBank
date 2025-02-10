import Image from 'next/image';
import React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Image
        src={'/home-wave.svg'}
        width={700}
        height={600}
        alt="Home Wave"
        className="absolute -z-10 top-0 left-0"
      />

      {children}
    </>
  );
};

export default HomeLayout;
