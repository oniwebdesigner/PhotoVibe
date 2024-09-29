'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FlipBook() {
  const pagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const pages = pagesRef.current;

    pages.forEach((page, index) => {
      if (page) {
        gsap.fromTo(
          page,
          { rotationY: 180, transformOrigin: 'left center' },  // Fillon i mbyllur
          {
            rotationY: 0,  // Hapet plotësisht
            duration: 2.5,
            scrollTrigger: {
              trigger: page,
              start: 'top 90%',  // Fillo shfletimin kur faqja është afër pamjes
              end: 'top 10%',
              scrub: true,  // Lidhje e animacionit me scroll
            },
          }
        );
      }
    });
  }, []);

  const pageGradients = [
    "bg-gradient-to-r from-[#4b6cb7] to-[#182848]", // Ngjyrat më të errëta
    "bg-gradient-to-r from-[#fc4a1a] to-[#f7b733]",
    "bg-gradient-to-r from-[#1f4037] to-[#99f2c8]",
    "bg-gradient-to-r from-[#2c3e50] to-[#4ca1af]",
  ];

  const pageTitles = [
    "See Albums",
    "Explore More",
    "Discover Your Favorites",
    "Start Your Journey",
  ];

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl text-center font-bold mb-10 text-white">Scroll Down</h1>

      <div className="relative w-full max-w-4xl mx-auto">
        {pageGradients.map((gradient, index) => (
          <div
            key={index}
            ref={(el) => (pagesRef.current[index] = el)}
            className={`${gradient} w-full h-96 mb-5 shadow-xl rounded-lg`}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          >
            <div className="text-center p-10 text-white">
              <h2 className="text-5xl font-bold">{pageTitles[index]}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
