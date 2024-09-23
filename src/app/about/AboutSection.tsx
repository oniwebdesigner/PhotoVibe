"use client";

import React, { useEffect, useRef } from 'react';
import BackgroundImage from '../album/album.jpg';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Background: React.FC = () => {
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null); // Ref për paragraf
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSeeMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Animimi i skrollimit në seksionin e dëshiruar
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#section2", offsetY: 70 },
      ease: "power2.out",
    });
  };

  useEffect(() => {
    if (quoteRef.current && paragraphRef.current) {
      // Ndarja e manuale e tekstit të titullit në karaktere
      const splitText = (textElement: HTMLElement) => {
        const chars = textElement.innerText.split("").map((char) => (
          `<span class="char">${char}</span>`
        )).join("");
        textElement.innerHTML = chars;
        return textElement.querySelectorAll(".char");
      };

      // Zëvendësojmë përmbajtjen me karakteret e ndara
      const charElementsTitle = splitText(quoteRef.current);
      const charElementsParagraph = splitText(paragraphRef.current);

      // Krijo animimin për të dy tekstet
      const tl = gsap.timeline();
      tl.from(charElementsTitle, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
      }).from(charElementsParagraph, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
      });

      // Rifillimi i animimit kur klikohet butoni
      if (buttonRef.current) {
        buttonRef.current.onclick = () => {
          tl.restart(); // Rifillon animimin
        };
      }
    }
  }, []);

  return (
    <div
      className="bg-cover bg-center h-screen text-center backdrop-opacity-10 backdrop-invert bg-white/30 opacity-80"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          {/* Përdorim ref për të targetuar për animim */}
          <h1 ref={quoteRef} className="text-4xl font-bold text-white mb-8" id="quote">
            Photography is the art of capturing moments <br /> that tell stories without words.
          </h1>
          <p ref={paragraphRef} className="text-lg text-white max-w-2xl mx-auto mb-8">
            Through the lens, we preserve the beauty of fleeting moments and transform them into timeless
            memories. Each photograph is a window into a unique world, capturing the essence of our experiences
            and emotions. Explore our gallery and discover the stories behind every shot.
          </p>
          <div className='flex space-x-6 items-center justify-center'>
            <button
              ref={buttonRef}
              className="bg-green-600 text-white uppercase font-semibold px-4 py-2 rounded-md inline-block hover:scale-105"
              id="animate"
            >
              Animate Again
            </button>
            <button
              onClick={handleSeeMoreClick}
              className="bg-green-600 text-white uppercase font-semibold px-4 py-2 rounded-md inline-block hover:scale-105"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
