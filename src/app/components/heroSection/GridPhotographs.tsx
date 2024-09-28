'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GridPhotographers() {
  const gridRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gridRefs.current.forEach((el, index) => {
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
              scrub: false, // Të vendoset në false për të mos rregulluar animacionin gjatë scroll-it
              once: true, // Të bëhet vetëm një herë
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  // Fotot dhe përshkrimet që do të shfaqen
  const photos = [
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/3.jpg",
      description: "Photographer 1: Capturing Timeless Moments"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 2: A Vision Through the Lens"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/3.jpg",
      description: "Photographer 3: Creating Stories with Every Shot"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 4: Exploring the Art of Photography"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 5: Bringing Emotions to Life"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 6: Light and Shadow Mastery"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 7: Capturing Raw Beauty"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 8: Moments in Time"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#7838e0] to-[#3f2b77] font-sans py-10">
      <h1 className="text-white text-4xl text-center font-bold mb-8">Our Top Photographers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 px-4 max-h-screen overflow-y-auto">
        {photos.map((photo, index) => (
          <div
            key={index}
            ref={(el) => (gridRefs.current[index] = el)}
            className="flex flex-col items-center"
          >
            <img src={photo.src} alt={`Photographer ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
            <p className="text-white text-lg mt-4 text-center">{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
