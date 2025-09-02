"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Leaf } from "lucide-react";

export default function Hero() {
  const [currentCTA, setCurrentCTA] = useState(0);

  const ctas = [
    {
      text: "Join the newsletter",
      href: "#newsletter",
      icon: <Users size={20} />,
    },
    { text: "Get involved", href: "/join", icon: <ArrowRight size={20} /> },
    { text: "Explore our work", href: "/our-work", icon: <Leaf size={20} /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCTA((prev) => (prev + 1) % ctas.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [ctas.length]);

  return (
    <section className="relative min-h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Hero.png"
          alt="Community gathering and regenerative landscape"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-space-grotesk text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight drop-shadow-lg">
            Build places where people and{" "}
            <span className="text-royal-green">planet thrive</span>
          </h1>

          <p className="text-xl lg:text-2xl text-black mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            We&apos;re a practical network for resilient living—connecting
            people, places, and skills.
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
              className="text-white border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium backdrop-blur-sm"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
