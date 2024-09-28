'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Photographs() {
  // Deklarimi i ref me tip HTMLHeadingElement ose null
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textRefs.current.forEach((el, index) => {
        if (el) {
          gsap.from(el, {
            x: index % 2 === 0 ? -200 : 200, // Lëvizje horizontale (majtas apo djathtas)
            y: -100, // Lëvizje vertikale (nga lart poshtë)
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#804dd2] to-[#5838af] font-sans py-10 flex flex-col items-center justify-center">
      <h1 ref={(el) => (textRefs.current[0] = el)} className='text-green-600 text-4xl font-bold mb-20'>Photographs</h1>
      <h2 ref={(el) => (textRefs.current[1] = el)} className='text-white text-[max(2vw,24px)] leading-tight pb-6 cursor-pointer'>Capturing Moments</h2>
      <h2 ref={(el) => (textRefs.current[2] = el)} className='text-white text-[max(2vw,24px)] leading-tight pb-6 cursor-pointer'>Memories That Last</h2>
      <h2 ref={(el) => (textRefs.current[3] = el)} className='text-white text-[max(2vw,24px)] leading-tight pb-6 cursor-pointer'>Art Through Lens</h2>
      <h2 ref={(el) => (textRefs.current[4] = el)} className='text-white text-[max(2vw,24px)] leading-tight pb-6 cursor-pointer'>Every Picture Tells a Story</h2>
      <p className='text-white text-xl mt-6 max-w-xl text-center'>
        Explore the art of photography through the eyes of our talented photographers. Below, you will find a gallery showcasing their exceptional work, capturing moments that resonate with every viewer.
      </p>
    </div>
  );
}
