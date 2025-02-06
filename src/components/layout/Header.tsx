'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';

interface Props {
  toggleMobileMenu: () => void;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu: () => void = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="max-container w-full">
      {/* Mobile Header */}
      {isMobileMenuOpen && <MobileHeader toggleMobileMenu={toggleMobileMenu} />}

      {/* Desktop Header */}
      <header className="w-full bg-[#1C1C1C] border-[#262626] border rounded-full px-7 py-5 flex-between my-5 z-30">
        <div className="flex-center gap-4">
          <Image src="/icons/logo.svg" width={28} height={28} alt="logo" />
          <span className="h5 sm:h4">SureBank</span>
        </div>

        <div className="hidden md:block">
          <Navbar />
        </div>

        <div className="hidden md:block">
          <nav className="flex-center gap-5">
            <Link href="/register">Sign Up</Link>
            <Link href="/login" className="btn-primary">
              Login
            </Link>
          </nav>
        </div>

        <div className="block md:hidden">
          <div className="btn-primary p-3 px-5" onClick={toggleMobileMenu}>
            <Image src="/icons/menu.svg" width={24} height={24} alt="menu" />
          </div>
        </div>
      </header>
    </div>
  );
};

const MobileHeader: React.FC<Props> = ({ toggleMobileMenu }) => {
  return (
    <div className="absolute neon-bg top-0 left-0 h-screen p-10 w-full z-10">
      {/* close button  */}
      <div className="absolute top-12 right-16">
        <Image
          src="/icons/close.svg"
          className="cursor-pointer"
          width={28}
          height={28}
          alt="close"
          onClick={toggleMobileMenu}
        />
      </div>

      {/* nav links */}
      <nav className="flex-between flex-col my-16 h-full max-h-96">
        <div className="flex flex-col gap-4">
          <Link href={'/home'} className="h1 w-fit">
            Home
          </Link>
          <Link href={'/careers'} className="h1 w-fit">
            Careers
          </Link>
          <Link href={'/about'} className="h1 w-fit">
            About
          </Link>
          <Link href={'/security'} className="h1 w-fit">
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
  );
};

export default Header;
