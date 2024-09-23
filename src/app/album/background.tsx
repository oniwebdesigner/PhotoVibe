// components/Background.tsx
"use client";

import React from 'react';
import BackgroundImage from '../album/album.jpg';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Background: React.FC = () => {
  const handleSeeMoreClick = (e: React.MouseEvent) => {
    e.preventDefault(); 

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#section1", offsetY: 70 },
    });
  };

  return (
    <div
      className="bg-cover bg-center h-screen text-center backdrop-opacity-10 backdrop-invert bg-white/30 opacity-80"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Photography is the art of capturing moments <br /> that tell stories without words.
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto mb-8">
            Through the lens, we preserve the beauty of fleeting moments and transform them into timeless
            memories. Each photograph is a window into a unique world, capturing the essence of our experiences
            and emotions. Explore our gallery and discover the stories behind every shot.
          </p>
          <button id='#section1'
            onClick={handleSeeMoreClick}
            className="bg-green-600 text-white uppercase font-semibold px-4 py-2 rounded-md inline-block hover:scale-105"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Background;
