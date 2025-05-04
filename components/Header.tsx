'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import HoverDropdown, { LinkMenu } from './HoverDropdown';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out py-4 px-10 ${
      scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={'/assets/icon.png'} width={30} height={30} alt="Hackademic Logo" />
          <span className="text-lg hover:text-slate-200/90 text-slate-50 font-[sansation-bold]">HACKADEMIC</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-300/90 rounded-lg md:hidden hover:text-slate-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto text-sm`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link href={'/'} className="block py-2 px-3 text-slate-300/90 rounded hover:text-slate-50" aria-current="page">Home</Link>
            </li>
            <li className="py-2 px-3 text-slate-300/90 hover:text-slate-50">
              <HoverDropdown title='Services'>
                <LinkMenu href='/services/webdev'>Web Development</LinkMenu>
                <LinkMenu href='/services/workshops'>Workshops</LinkMenu>
                <LinkMenu href='/services/pen-test'>Penetration Testing</LinkMenu>
              </HoverDropdown>
            </li>
            <li>
              <Link href={'/#blogs'} className="block py-2 px-3 text-slate-300/90 rounded hover:text-slate-50">Blogs</Link>
            </li>
            <li>
              <Link href={'/#about'} className="block py-2 px-3 text-slate-300/90 rounded hover:text-slate-50">About</Link>
            </li>
            <li>
              <Link href={'/courses'} className="block py-2 px-3 text-slate-300/90 rounded hover:text-slate-50">Courses</Link>
            </li>
            <li>
              <Link href={'/contact'} className="block py-2 px-3 text-slate-300/90 rounded hover:text-slate-50">Contact</Link>
            </li>
            <li>
              <Link href={'/contact'} className="relative rounded-md flex py-2 px-3 items-center justify-center overflow-hidden bg-red-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-36 hover:before:w-36">
                <span className="relative z-10">Need Help?</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

