'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  toggleMobileMenu: () => void;
  isMenuOpen: boolean;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu: () => void = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="max-container w-full">
      {/* Mobile Header */}
      {isMobileMenuOpen && (
        <MobileHeader toggleMobileMenu={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} />
      )}

      {/* Desktop Header */}
      <header className="w-full bg-[#1C1C1C] border-[#262626] border rounded-full px-7 py-5 flex-between my-8 z-30">
        <div className="flex-center gap-4">
          <Image src="/icons/logo.svg" width={28} height={28} alt="logo" />
          <span className="h5 sm:h4">SureBank</span>
        </div>

        <div className="hidden md:flex">
          <Navbar />
        </div>

        <nav className="flex-center gap-5 hidden md:flex">
          <Link
            href="/auth/register"
            className={pathname === '/auth/register' ? 'btn-primary' : ''}
          >
            Sign Up
          </Link>
          <Link href="/auth/login" className={pathname !== '/auth/register' ? 'btn-primary' : ''}>
            Login
          </Link>
        </nav>

        <div className="block md:hidden">
          <div className="btn-primary p-3 px-5" onClick={toggleMobileMenu}>
            <Image src="/icons/menu.svg" width={24} height={24} alt="menu" />
          </div>
        </div>
      </header>
    </div>
  );
};

const MobileHeader: React.FC<Props> = ({ toggleMobileMenu, isMenuOpen }) => {
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = 'auto';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  return (
    <div className="absolute neon-bg top-0 left-0 h-screen p-10 w-full z-50">
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
          <Link href={'/home'} className="h1 w-fit" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link href={'/careers'} className="h1 w-fit" onClick={toggleMobileMenu}>
            Careers
          </Link>
          <Link href={'/about'} className="h1 w-fit" onClick={toggleMobileMenu}>
            About
          </Link>
          <Link href={'/security'} className="h1 w-fit" onClick={toggleMobileMenu}>
            Security
          </Link>
        </div>

        <nav className="flex gap-5">
          <Link
            href="/auth/register"
            className="btn-secondary bg-slate-900"
            onClick={toggleMobileMenu}
          >
            Sign Up
          </Link>
          <Link
            href="/auth/login"
            className="btn-secondary bg-slate-900"
            onClick={toggleMobileMenu}
          >
            Login
          </Link>
        </nav>
      </nav>
    </div>
  );
};

export default Header;
