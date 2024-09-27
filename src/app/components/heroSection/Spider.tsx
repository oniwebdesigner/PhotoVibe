// Spider.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Spider: React.FC = () => {
  const spiderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Funksioni që lëviz merimangën
    const moveSpider = (e: MouseEvent) => {
      const x = e.clientX; // Pozicioni X i kursorit
      const y = e.clientY; // Pozicioni Y i kursorit

      // GSAP për të lëvizur merimangën në mënyrë të butë drejt pozicionit të ri
      gsap.to(spiderRef.current, {
        x: x - 32, // Përshtatje për të mbajtur qendrën e merimangës
        y: y - 32,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Shto event listener për të ndjekur lëvizjet e mausit
    window.addEventListener('mousemove', moveSpider);

    return () => {
      // Hiq event listener kur komponenti shkatërrohet
      window.removeEventListener('mousemove', moveSpider);
    };
  }, []);

  return (
    <div ref={spiderRef} className="absolute top-5 right- spider">
      {/* Spider */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-24 h-24"
      >
        {/* Body Spider */}
        <circle cx="32" cy="32" r="10" fill="#6A6A6A" stroke="#333" strokeWidth="2" />
        
        {/* Sy */}
        <circle cx="27" cy="30" r="2" className="eye" fill="#ffcc00" />
        <circle cx="37" cy="30" r="2" className="eye" fill="#ffcc00" />

        {/* Këmbët e merimangës */}
        <line x1="32" y1="32" x2="12" y2="22" stroke="#555" strokeWidth="2" />
        <line x1="32" y1="32" x2="12" y2="42" stroke="#555" strokeWidth="2" />
        <line x1="32" y1="32" x2="52" y2="22" stroke="#555" strokeWidth="2" />
        <line x1="32" y1="32" x2="52" y2="42" stroke="#555" strokeWidth="2" />

        {/* Këmbët e tjera */}
        <line x1="32" y1="32" x2="20" y2="10" stroke="#555" strokeWidth="2" />
        <line x1="32" y1="32" x2="20" y2="54" stroke="#555" strokeWidth="2" />
        <line x1="32" y1="32" x2="44" y2="10" stroke="#555" strokeWidth="2" />
        <line x1="32" y1="32" x2="44" y2="54" stroke="#555" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default Spider;
