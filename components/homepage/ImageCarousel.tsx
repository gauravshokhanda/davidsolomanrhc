"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { slideService } from "@/lib/api";

interface Slide {
  _id: string;
  imageUrl: string;
  caption?: string;
  link?: string;
}

export default function ImageCarousel() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Fetch slides using slideService
  useEffect(() => {
    const fetchSlides = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_Image_URL;
      console.log(baseUrl);
      try {
        const data = await slideService.getAllSlides();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };
    fetchSlides();
  }, []);

  // Auto slide every 5s
  useEffect(() => {
    if (slides.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (slides.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] bg-gray-200 rounded-2xl flex items-center justify-center">
            <p className="text-gray-500">No slides available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="aspect-[21/9] bg-light-green rounded-2xl overflow-hidden relative">
            {/* Carousel Image */}
            <Image
              src={`${process.env.NEXT_PUBLIC_Image_URL}${slides[currentSlide].imageUrl}`}
              alt={slides[currentSlide].caption || "Slide"}
              fill
              className="object-cover"
              priority
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

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
            {slides[currentSlide].caption && (
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-lg p-4">
                {slides[currentSlide].link ? (
                  <a
                    href={slides[currentSlide].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900"
                  >
                    {slides[currentSlide].caption}
                  </a>
                ) : (
                  <p className="font-medium text-gray-900">
                    {slides[currentSlide].caption}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-royal-green w-8"
                    : "bg-gray-300 hover:bg-gray-400"
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
