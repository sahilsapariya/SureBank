import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] w-full py-10">
      <div className="max-container">
        <div className="flex-center gap-4">
          <Image src="/icons/logo.svg" width={28} height={28} alt="logo" />
          <span className="h4 sm:h3">SureBank</span>
        </div>

        <div className="py-8 border-b border-[#262626]">
          <nav className="flex-center gap-5">
            <Link href={'/home'}>Home</Link>
            <Link href={'/careers'}>Careers</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/security'}>Security</Link>
          </nav>
        </div>

        <div className="py-8 border-b border-[#262626] flex-center flex-wrap gap-5">
          <div className="flex-center gap-2">
            <Image src={'/icons/mail.svg'} width={24} height={24} alt="mail" />
            <a href="mailto:sahilsapariya03@gmail.com">sahilsapariya03@gmail.com</a>
          </div>
          <div className="flex-center gap-2">
            <Image src={'/icons/phone.svg'} width={24} height={24} alt="phone" />
            <a href="tel:+917984553527">+91 7984553527</a>
          </div>
          <div className="flex-center gap-2">
            <Image src={'/icons/location.svg'} width={24} height={24} alt="location" />
            <span>Vadodara, Gujarat 390001</span>
          </div>
        </div>

        <div className="flex-col gap-5 rounded-xl relative md:flex-row  w-full items-center bg-[#1C1C1C] border-[#262626] border md:rounded-full px-7 py-5 flex-between mt-10 z-30">
          <div className="flex-center gap-2">
            <Link href={'https://github.com/sahilsapariya'} target="_blank">
              <Image
                src="/icons/github.svg"
                className="btn-primary p-2"
                width={48}
                height={48}
                alt="github"
              />
            </Link>
            <Link href={'https://instagram.com/_sahil_sapariya_03'} target="_blank">
              <Image
                src="/icons/instagram.svg"
                className="btn-primary p-2"
                width={48}
                height={48}
                alt="instagram"
              />
            </Link>
            <Link href={'https://linkedin.com/in/sahilsapariya'} target="_blank">
              <Image
                src="/icons/linkedin.svg"
                className="btn-primary p-2"
                width={48}
                height={48}
                alt="linkedin"
              />
            </Link>
          </div>

          <div className="text-[#B3B3B3] font-light text-sm">
            © 2025 SureBank All Rigths Reserved
          </div>

          <div className="flex font-light gap-3 text-[#B3B3B3] text-sm">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
