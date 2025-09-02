'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Leaf } from 'lucide-react';

export default function Hero() {
  const [currentCTA, setCurrentCTA] = useState(0);
  
  const ctas = [
    { text: 'Join the newsletter', href: '#newsletter', icon: <Users size={20} /> },
    { text: 'Get involved', href: '/join', icon: <ArrowRight size={20} /> },
    { text: 'Explore our work', href: '/our-work', icon: <Leaf size={20} /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCTA((prev) => (prev + 1) % ctas.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [ctas.length]);

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-space-grotesk text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build places where people and{' '}
            <span className="text-royal-green">planet thrive</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            We're a practical network for resilient living—connecting people, places, and skills.
          </p>

          {/* Dynamic CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href={ctas[currentCTA].href}
              className="bg-royal-green text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium flex items-center space-x-2 group"
            >
              {ctas[currentCTA].icon}
              <span>{ctas[currentCTA].text}</span>
            </Link>
            
            <Link
              href="/about"
              className="text-royal-green border border-royal-green px-8 py-4 rounded-lg hover:bg-royal-green hover:text-white transition-all duration-300 font-medium"
            >
              Learn more
            </Link>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-light-green rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Leaf size={64} className="mx-auto mb-4 text-royal-green" />
                <p className="text-lg font-medium">Hero Image</p>
                <p className="text-sm">Community gathering or regenerative landscape</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}