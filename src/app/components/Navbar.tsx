"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 text-white transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-lg shadow-xl shadow-black/30" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              RYBURN<span className="text-emerald-500">DOBBS</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="#books" className="hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest">Books</Link>
            <Link href="#about" className="hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest">Author</Link>
            <Link href="#events" className="hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest">Events</Link>
            <Link href="#contact" className="hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest">Contact</Link>
            <a 
              href="#books"
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-2 rounded shadow-lg transition-colors text-sm uppercase tracking-widest font-medium"
            >
              Read Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link
              href="#books"
              className="block px-4 py-3 text-emerald-300 hover:bg-emerald-900/20 rounded text-sm uppercase tracking-widest"
              onClick={toggleMenu}
            >
              Books
            </Link>
            <Link
              href="#about"
              className="block px-4 py-3 text-white hover:bg-emerald-900/20 rounded text-sm uppercase tracking-widest"
              onClick={toggleMenu}
            >
              Author
            </Link>
            <Link
              href="#events"
              className="block px-4 py-3 text-white hover:bg-emerald-900/20 rounded text-sm uppercase tracking-widest"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-3 text-white hover:bg-emerald-900/20 rounded text-sm uppercase tracking-widest"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <a
              href="#books"
              className="block px-4 py-3 mt-4 bg-emerald-700 text-white rounded shadow-lg text-sm uppercase tracking-widest"
              onClick={toggleMenu}
            >
              Read Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 