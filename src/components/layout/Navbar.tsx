'use client';

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname instead
import React from 'react';

const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="flex-center gap-5">
      <Link href="/home" className={pathname === '/home' ? 'active' : ''}>
        Home
      </Link>
      <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
        Careers
      </Link>
      <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
        About
      </Link>
      <Link href="/security" className={pathname === '/security' ? 'active' : ''}>
        Security
      </Link>
    </nav>
  );
};

export default Navbar;
