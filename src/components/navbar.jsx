'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#location', label: 'Map' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl py-2'
          : 'bg-white/90 backdrop-blur-sm shadow-lg py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/mahalaxmi.png"
                  alt="Mahalaxmi Logo"
                  width={160}
                  height={50}
                  className="h-12 w-auto transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>

                <div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10" />
              </a>
            ))}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center space-x-3">

            {/* CALL NOW BUTTON */}
            <a
              href="tel:9702211049"
              className="group relative flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>

            {/* GET QUOTE → scroll to contact */}
            <a
              href="#contact"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative">Get a Quote</span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-700 hover:text-orange-600"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? 'w-6 rotate-45 translate-y-0.5' : 'w-6 -translate-y-1'
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0 w-0' : 'w-4 opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? 'w-6 -rotate-45 -translate-y-0.5' : 'w-6 translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-lg rounded-2xl mt-4 border border-gray-100 shadow-2xl">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}

            {/* MOBILE CALL NOW BUTTON */}
            <a
              href="tel:9702211049"
              className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-center px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>

            {/* MOBILE GET QUOTE → scroll to contact */}
            <a
              href="#contact"
              className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
