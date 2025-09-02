'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/journal', label: 'Journal' },
    { href: '/gatherings', label: 'Gatherings' },
    { href: '/join', label: 'Join' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-royal-green rounded-lg flex items-center justify-center">
              <span className="text-white font-space-grotesk font-bold text-sm">RHC</span>
            </div>
            <span className="font-space-grotesk font-semibold text-xl text-royal-green">
              Resilient Human Collective
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-royal-green transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-royal-green text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-royal-green focus:outline-none focus:ring-2 focus:ring-royal-green"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-royal-green transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-royal-green text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}