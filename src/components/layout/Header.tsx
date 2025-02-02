'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {isMobileMenuOpen && (
        <div className="absolute neon-bg top-0 left-0 h-screen p-16 w-full z-10">
          <div className="w-full flex-end">
            <Image
              src="/icons/close.svg"
              className="cursor-pointer"
              width={28}
              height={28}
              alt="close"
              onClick={toggleMobileMenu}
            />
          </div>

          <nav className="flex-between flex-col my-10 h-full max-h-96">
            <div className="flex flex-col gap-4 ">
              <Link href={'/home'} className="h1">
                Home
              </Link>
              <Link href={'/career'} className="h1">
                Career
              </Link>
              <Link href={'/about'} className="h1">
                About
              </Link>
              <Link href={'/security'} className="h1">
                Security
              </Link>
            </div>
            <nav className="flex gap-5">
              <Link href="/register" className="btn-secondary">
                Sign Up
              </Link>
              <Link href="/login" className="btn-secondary">
                Login
              </Link>
            </nav>
          </nav>
        </div>
      )}

      <header className="w-full bg-[#1C1C1C] border-[#262626] border rounded-full px-7 py-5 flex-between z-30">
        <div className="flex-center gap-4">
          {/* logo */}
          <Image src="/icons/logo.svg" width={28} height={28} alt="logo" />
          <span className="h5 sm:h4">SureBank</span>
        </div>

        <div className="hidden md:block">
          {/* navbar  */}
          <Navbar />
        </div>

        <div className="hidden md:block">
          {/* login register  */}
          <nav className="flex-center gap-5">
            <Link href="/register">Sign Up</Link>
            <Link href="/login" className="btn-primary">
              Login
            </Link>
          </nav>
        </div>

        <div className="block md:hidden">
          <div className="btn-primary p-3 px-5 cursor-pointer" onClick={toggleMobileMenu}>
            <Image src="/icons/menu.svg" width={24} height={24} alt="menu" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
