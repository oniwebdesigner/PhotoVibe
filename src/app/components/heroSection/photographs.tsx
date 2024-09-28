'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Photographs() {
  // Declare refs for heading elements
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const cameraRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Create a context for GSAP
    const ctx = gsap.context(() => {
      textRefs.current.forEach((el, index) => {
        if (el) {
          // Animation for each element
          gsap.from(el, {
            x: index % 2 === 0 ? -200 : 200, // Horizontal movement (left or right)
            y: -100, // Vertical movement (from top to bottom)
            opacity: 0, // Starts with opacity 0
            duration: 1, // Duration of the animation
            scrollTrigger: {
              trigger: el, // The element that activates ScrollTrigger
              start: "top 90%", // Animation starts when the top reaches 90% of the viewport
              end: "bottom 10%", // Animation ends when the bottom reaches 10% of the viewport
              scrub: true, // Activate animation based on scroll movement
            },
          });
        }
      });

      // Animation for camera pulsing
      cameraRefs.current.forEach((el) => {
        if (el) {
          gsap.to(el, {
            scale: 1.1, // Scale up
            duration: 0.5, // Duration of the pulsing
            yoyo: true, // Return to original scale
            repeat: -1, // Repeat indefinitely
            ease: "power1.inOut", // More natural movement
          });
        }
      });
    });

    // Revert to the initial context when the component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-[#804dd2] to-[#5838af] font-sans py-10 flex flex-col items-center justify-center">
      {/* Main title */}
      <h1 ref={(el) => (textRefs.current[0] = el)} className='text-green-600 text-4xl font-bold mb-20'>
        Photographs
      </h1>

      {/* Subtitles */}
      {["Capturing Moments", "Memories That Last", "Art Through Lens", "Every Picture Tells a Story"].map((text, index) => (
        <h2 
          key={index} 
          ref={(el) => (textRefs.current[index + 1] = el)} 
          className='text-white text-[max(2vw,24px)] leading-tight pb-6 cursor-pointer'
        >
          {text}
        </h2>
      ))}

      {/* Description */}
      <p className='text-white text-xl mt-6 max-w-xl text-center'>
        Explore the art of photography through the eyes of our talented photographers. Below, you will find a gallery showcasing their exceptional work, capturing moments that resonate with every viewer.
      </p>

      {/* Cameras */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2" ref={(el) => (cameraRefs.current[0] = el)}>
        <div className="bg-black w-24 h-16 rounded-md relative">
          <div className="bg-white w-10 h-10 rounded-full absolute top-1 left-7"></div>
        </div>
      </div>
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2" ref={(el) => (cameraRefs.current[1] = el)}>
        <div className="bg-black w-24 h-16 rounded-md relative">
          <div className="bg-white w-10 h-10 rounded-full absolute top-1 left-7"></div>
        </div>
      </div>
    </div>
  );
}
