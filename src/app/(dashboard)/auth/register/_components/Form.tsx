import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AuthFormSignIn = () => {
  return (
    <section className="relative py-10 px-5 border rounded-xl border-[#262626] my-5 sm:my-10 max-w-5xl mx-auto text-center flex-center flex flex-col gap-5">
      <div className="absolute top-0 -right-1 -z-10">
        <Image
          src={'/icons/radial-dots-bg-2.svg'}
          width={200}
          height={200}
          alt="radial dots bg"
          className="w-52 h-52"
        />
      </div>
      {/* header */}
      <div className="max-w-sm w-full flex flex-col gap-2 z-10">
        <h3 className="h3 neon">Sign Up</h3>
        <span className="text-[#BFBFBF] font-light">
          Join our community today! Create an account to unlock exclusive features and personalized
          experiences.
        </span>
      </div>

      <div className="flex flex-col gap-4 max-w-sm w-full z-10">
        <input
          type="text"
          placeholder="Enter first name"
          className="border border-[#262626] bg-[#1A1A1A] text-[#59595A] py-4 px-6 rounded-full"
        />
        <input
          type="text"
          placeholder="Enter last name"
          className="border border-[#262626] bg-[#1A1A1A] text-[#59595A] py-4 px-6 rounded-full"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-[#262626] bg-[#1A1A1A] text-[#59595A] py-4 px-6 rounded-full"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="border border-[#262626] bg-[#1A1A1A] text-[#59595A] py-4 px-6 rounded-full"
        />

        <button className="btn btn-primary">Sign Up</button>
        <Link className="btn btn-secondary bg-[#262626]" href={'/auth/login'}>
          Login
        </Link>
      </div>

      <div className="flex items-center w-full mx-auto max-w-sm ">
        <span className="h-px w-1/2 bg-[#B3B3B3] mr-2"></span>
        <span className="text-sm text-[#B3B3B3] whitespace-nowrap">Or Continue with</span>
        <span className="h-px w-1/2 bg-[#B3B3B3] ml-2"></span>
      </div>

      <div className="flex gap-4">
        <Image
          src={'/icons/google.svg'}
          className="cursor-pointer"
          width={60}
          height={60}
          alt="google"
        />
        <Image
          src={'/icons/facebook.svg'}
          className="cursor-pointer"
          width={60}
          height={60}
          alt="facebook"
        />
        <Image
          src={'/icons/apple.svg'}
          className="cursor-pointer"
          width={60}
          height={60}
          alt="apple"
        />
      </div>
    </section>
  );
};

export default AuthFormSignIn;
