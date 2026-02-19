'use client';

// components/Header.tsx
import { LiaBarsSolid } from 'react-icons/lia';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-4 z-50 px-4 transition-all duration-300 md:top-6 ${
        isScrolled ? 'md:top-2' : ''
      }`}
    >
      <nav
        className={`navbar max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-base-100/85 backdrop-blur-xl shadow-md border border-base-300/30'
            : 'bg-base-100/10 backdrop-blur-lg'
        }`}
      >
        {/* Logo */}
        <div className="flex-1">
          <a href="#home" className="normal-case">
            <img
              src="/assets/Logo.svg"
              alt="Dwahfy Logo"
              className="h-7 md:h-8 object-contain"
            />
          </a>
        </div>

        {/* Desktop Menu with Lia Icons */}
        <div className="hidden md:flex flex-none items-center gap-8">
          <ul className="menu menu-horizontal px-1 gap-8 text-lg">
            <li>
              <a href="#home" className="flex items-center gap-2">
                Home
              </a>
            </li>
            <li>
              <a href="#mission" className="flex items-center gap-2">
                Mission
              </a>
            </li>
            <li>
              <a href="#roadmap" className="flex items-center gap-2">
                Roadmap
              </a>
            </li>
          </ul>

          <button className="btn btn-primary btn-md"
          onClick={() => window.open('https://form.typeform.com/to/NiVPfw3J', '_blank')}>
            Join waitlist
          </button>
        </div>

        {/* Mobile Menu Toggle - Now with LiaBarsSolid icon */}
        <div className="flex-none md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <LiaBarsSolid className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-72 gap-3 border border-base-300"
            >
              <li>
                <a href="#home" className="flex items-center gap-3 text-lg py-3">
                  Home
                </a>
              </li>
              <li>
                <a href="#mission" className="flex items-center gap-3 text-lg py-3">
                  Mission
                </a>
              </li>
              <li>
                <a href="#roadmap" className="flex items-center gap-3 text-lg py-3">
                  Roadmap
                </a>
              </li>
              <li className="mt-6">
                <button className="btn btn-primary btn-block"
                onClick={() => window.open('https://form.typeform.com/to/NiVPfw3J', '_blank')}>
                  Join waitlist
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
