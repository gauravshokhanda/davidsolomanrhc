'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-royal-green rounded-lg flex items-center justify-center">
                <span className="text-white font-space-grotesk font-bold text-sm">RHC</span>
              </div>
              <span className="font-space-grotesk font-semibold text-lg text-royal-green">
                Resilient Human Collective
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Building places where people and planet thrive through practical networks 
              for resilient living.
            </p>
            
            {/* Newsletter Signup */}
            <div>
              <h3 className="font-space-grotesk font-semibold text-gray-900 mb-3">Stay Connected</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-royal-green text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
              {isSubmitted && (
                <p className="text-sm text-green-600 mt-2">Thank you for subscribing!</p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-space-grotesk font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-royal-green transition-colors duration-200">About</Link></li>
              <li><Link href="/our-work" className="text-gray-600 hover:text-royal-green transition-colors duration-200">Our Work</Link></li>
              <li><Link href="/journal" className="text-gray-600 hover:text-royal-green transition-colors duration-200">Journal</Link></li>
              <li><Link href="/gatherings" className="text-gray-600 hover:text-royal-green transition-colors duration-200">Gatherings</Link></li>
              <li><Link href="/join" className="text-gray-600 hover:text-royal-green transition-colors duration-200">Join</Link></li>
              <li><Link href="/support" className="text-gray-600 hover:text-royal-green transition-colors duration-200">Support</Link></li>
            </ul>
          </div>

          {/* Contact & Members */}
          <div>
            <h3 className="font-space-grotesk font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-royal-green transition-colors duration-200 flex items-center">
                  <Mail size={16} className="mr-2" />
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:hello@resilienthumancollective.org" className="text-gray-600 hover:text-royal-green transition-colors duration-200 text-sm">
                  hello@resilienthumancollective.org
                </a>
              </li>
              <li className="pt-4 border-t border-gray-200">
                <Link href="/members" className="text-xs text-gray-500 hover:text-velvet-purple transition-colors duration-200">
                  Members Area
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 Resilient Human Collective. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}