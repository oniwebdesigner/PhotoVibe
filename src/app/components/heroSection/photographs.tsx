'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Photographs() {
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement | null>(null);
  const flowerRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textRefs.current.forEach((el, index) => {
        if (el) {
          gsap.from(el, {
            x: index % 2 === 0 ? -200 : 200,
            y: -100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 10%",
              scrub: true,
            },
          });
        }
      });

      // Flower movement along the path forming the camera, but starts only when scrolled to the path
      gsap.to(flowerRef.current, {
        duration: 8,
        repeat: -1,
        ease: "power1.inOut",
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        scrollTrigger: {
          trigger: pathRef.current, // Animation starts when the path becomes visible
          start: "top 80%", // Can adjust to control the exact start point
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-[#804dd2] to-[#5838af] font-sans py-10 flex flex-col items-center justify-center">
      <h1 ref={(el) => (textRefs.current[0] = el)} className='text-white text-4xl text-center font-bold mb-28'>
        Photographs
      </h1>

      {["Capturing Moments", "Memories That Last", "Art Through Lens", "Every Picture Tells a Story"].map((text, index) => (
        <h2 
          key={index} 
          ref={(el) => (textRefs.current[index + 1] = el)} 
          className='text-white text-[max(2vw,24px)] leading-tight pb-6 cursor-pointer'
        >
          {text}
        </h2>
      ))}

      <p className='text-white text-xl mt-6 max-w-xl text-center'>
        Explore the art of photography through the eyes of our talented photographers. Below, you will find a gallery showcasing their exceptional work, capturing moments that resonate with every viewer.
      </p>

      {/* SVG containing the path forming a camera and a yellow figure-8 */}
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-10"
      >
        {/* Path forming a camera */}
        <path
          ref={pathRef}
          d="M 100 150 L 300 150 Q 320 150, 320 170 L 320 250 Q 320 270, 300 270 L 100 270 Q 80 270, 80 250 L 80 170 Q 80 150, 100 150 
            M 140 170 A 30 30 0 1 1 200 170 A 30 30 0 1 1 140 170 
            M 250 180 A 10 10 0 1 1 260 180 A 10 10 0 1 1 250 180"
          stroke="white"
          strokeWidth="3"
          fill="transparent"
        />
        {/* Path for the yellow figure-8 inside the camera */}
        <path
          d="M 140 170 A 30 30 0 1 1 200 170 A 30 30 0 1 1 140 170"
          stroke="#FFD700"
          strokeWidth="3"
          fill="transparent"
        />
        
        {/* Flower figure that moves along the path */}
        <g ref={flowerRef} transform="translate(100, 150)">
          {/* Flower petals */}
          <circle cx="0" cy="-20" r="10" fill="#FF69B4" />
          <circle cx="-20" cy="0" r="10" fill="#FF69B4" />
          <circle cx="20" cy="0" r="10" fill="#FF69B4" />
          <circle cx="0" cy="20" r="10" fill="#FF69B4" />
          <circle cx="-14" cy="-14" r="10" fill="#FF69B4" />
          <circle cx="14" cy="-14" r="10" fill="#FF69B4" />
          <circle cx="-14" cy="14" r="10" fill="#FF69B4" />
          <circle cx="14" cy="14" r="10" fill="#FF69B4" />
          
          {/* Center of the flower */}
          <circle cx="0" cy="0" r="10" fill="#FFD700" />
        </g>
      </svg>
    </div>
  );
}
