'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GridPhotographers() {
  const gridRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(gridRefs.current);
      images.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom 10%",
                scrub: false,
                once: true,
              },
            }
          );
        }
      });

      // Animacioni për titull
      if (titleRef.current) {
        const titleText = titleRef.current.textContent;
        titleRef.current.textContent = ''; // Përdorimi i një titulli bosh për animacion
        titleText.split('').forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char; // Mbajti hapësirat
          titleRef.current.appendChild(span);
          gsap.from(span, {
            y: -50, // Fillon nga lart
            opacity: 0,
            duration: 0.5,
            delay: index * 0.05, // Shtoni vonesën për çdo shkronjë
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%', // Filloni animacionin kur titulli është i dukshëm
              once: true,
            },
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const photos = [
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/3.jpg",
      description: "Photographer 1: Capturing Timeless Moments. This photographer specializes in wedding photography, ensuring that every moment is preserved beautifully.",
      bgGradient: "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 2: A Vision Through the Lens. Known for their breathtaking landscape photography, this artist captures the essence of nature in its purest form.",
      bgGradient: "bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6]"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/3.jpg",
      description: "Photographer 3: Creating Stories with Every Shot. Specializing in portrait photography, they focus on capturing the personality and essence of each individual.",
      bgGradient: "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 4: Exploring the Art of Photography. This photographer blends art with storytelling, creating images that evoke emotions and tell a story.",
      bgGradient: "bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6]"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 5: Bringing Emotions to Life. Their work focuses on capturing genuine emotions, making every image a true reflection of the moment.",
      bgGradient: "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 6: Light and Shadow Mastery. With a strong understanding of light and composition, this photographer creates stunning images that play with shadows and highlights.",
      bgGradient: "bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6]"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 7: Capturing Raw Beauty. Their focus is on natural beauty and authenticity, often shooting in natural light to enhance the subject's features.",
      bgGradient: "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
    },
    {
      src: "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
      description: "Photographer 8: Moments in Time. Specializing in documentary-style photography, this artist captures life's fleeting moments with a storytelling approach.",
      bgGradient: "bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6]"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#7838e0] to-[#3f2b77] font-sans py-10">
      <h1 ref={titleRef} className="text-white text-4xl text-center font-bold mb-28">Our Top Photographers</h1>
      <div className="flex flex-col items-center">
        {photos.map((photo, index) => (
          <div
            key={index}
            ref={(el) => (gridRefs.current[index] = el)}
            className="flex justify-between items-center mx-4 mb-10 w-full max-w-5xl" 
          >
            {index % 2 === 0 ? (
              <>
                <div className="flex-shrink-0 w-1/2">
                  <img src={photo.src} alt={`Photographer ${index + 1}`} className="w-full h-96 object-cover rounded-lg" />
                </div>
                <div className={`p-4 rounded-lg ml-12 ${photo.bgGradient} w-1/2 h-96 flex items-center justify-center`}>
                  <p className="text-white text-lg font-semibold text-center">{photo.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className={`p-4 rounded-lg mr-12 ${photo.bgGradient} w-1/2 h-96 flex items-center justify-center`}>
                  <p className="text-white text-lg font-semibold text-center">{photo.description}</p>
                </div>
                <div className="flex-shrink-0 w-1/2">
                  <img src={photo.src} alt={`Photographer ${index + 1}`} className="w-full h-96 object-cover rounded-lg" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
