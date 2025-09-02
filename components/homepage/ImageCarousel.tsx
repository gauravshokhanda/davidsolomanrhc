'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { caption: 'Community garden workshop in Portland', credit: 'Photo by Sarah Chen' },
    { caption: 'Natural building techniques demonstration', credit: 'Photo by Marcus Rivera' },
    { caption: 'Renewable energy system installation', credit: 'Photo by Alex Thompson' },
    { caption: 'Skill-sharing circle gathering', credit: 'Photo by Jordan Kim' },
    { caption: 'Permaculture design planning session', credit: 'Photo by Taylor Brown' },
    { caption: 'Youth leadership training program', credit: 'Photo by Casey Wilson' },
    { caption: 'Local food system mapping', credit: 'Photo by Morgan Davis' },
    { caption: 'Resilience planning workshop', credit: 'Photo by River Martinez' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="aspect-[21/9] bg-light-green rounded-2xl overflow-hidden relative">
            {/* Carousel Image Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-royal-green/10 to-velvet-purple/10 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="w-24 h-24 bg-royal-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <p className="text-lg font-medium">Image {currentSlide + 1} of {slides.length}</p>
                <p className="text-sm mt-1">{slides[currentSlide].caption}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>

            {/* Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-lg p-4">
              <p className="font-medium text-gray-900">{slides[currentSlide].caption}</p>
              <p className="text-sm text-gray-600 mt-1">{slides[currentSlide].credit}</p>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-royal-green w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}