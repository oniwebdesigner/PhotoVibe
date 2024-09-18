"use client"; 

import React, { useState, useEffect } from 'react'; 
import Link from 'next/link';

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScrollTop && currentScroll > 50) {
      // Scrolling down
      setShowNav(false);
    } else {
      // Scrolling up
      setShowNav(true);
    }
    setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className={`fixed left-0 right-0 py-4 z-50 font-mono transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <h2 className="ml-10 text-white max-w-2xl">
        Photo Vibe
      </h2>

      <nav className="flex gap-10 justify-center items-center">
        <Link
          href="/home"
          className="uppercase font-semibold text-base text-white px-5 py-1 text-xl rounded-2xl hover:bg-green transition duration-500 ease-in-out"
        >
          Home
        </Link>

        <Link
          href="/album"
          className="uppercase font-semibold text-base text-white px-5 py-1 text-xl rounded-2xl hover:bg-green transition duration-500 ease-in-out"
        >
          Albums
        </Link>

        <Link
          href="#"
          className="uppercase font-semibold text-base text-white px-5 py-1 text-xl rounded-2xl hover:bg-green transition duration-500 ease-in-out"
        >
          Gallery
        </Link>

        <Link
          href="/about"
          className="uppercase font-semibold text-base text-white px-5 py-1 text-xl rounded-2xl hover:bg-green transition duration-500 ease-in-out"
        >
          About
        </Link>

       
        <Link
          href="/signin"
          className="uppercase font-semibold text-base text-white px-5 py-1 text-xl rounded-2xl border-2 border-green-600 hover:bg-green-600 transition duration-500 ease-in-out"
        >
          SignIn
        </Link>

        <div className='justify-items-end'>
        <Link
          href="/login"
          className="uppercase font-semibold text-base text-white px-5 py-1 text-xl rounded-2xl border-2 border-green-600 hover:bg-green-600 transition duration-500 ease-in-out"
        >
          Login
        </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
