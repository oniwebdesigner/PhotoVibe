// Spider.tsx
'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';

const Spider: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Animacioni: lëvizje lart e poshtë
    tl.to('.spider', { y: 10, duration: 1, ease: 'power1.inOut' })
      .to('.spider', { y: 0, duration: 1, ease: 'power1.inOut' });

    // Animacioni: hapja dhe mbyllja e syve
    const eyeElements = document.querySelectorAll('.eye');
    eyeElements.forEach((eye) => {
      gsap.fromTo(
        eye,
        { scaleY: 1 }, // Mbyllur
        {
          scaleY: 0.5, // Hapja
          duration: 0.5, // Rritëm durimin për hapjen
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: Math.random() // Delay për çdo sy për të krijuar efekte të ndryshme
        }
      );
    });
  }, []);

  return (
    <div className="absolute top-20 right-16 spider">
      {/* Spider */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-24 h-24"
      >
        {/* Body Spider */}
        <circle cx="32" cy="32" r="10" fill="#555" />
        
        {/* Sy */}
        <circle cx="27" cy="30" r="2" className="eye" fill="#fff" />
        <circle cx="37" cy="30" r="2" className="eye" fill="#fff" />

        
        <line x1="32" y1="32" x2="12" y2="22" stroke="#555" strokeWidth="2" />
        <line x1="32" y1="32" x2="12" y2="42" stroke="#555" strokeWidth="2" />
        <line x1="32" y1="32" x2="52" y2="22" stroke="#555" strokeWidth="2" />
        <line x1="32" y1="32" x2="52" y2="42" stroke="#555" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default Spider;
