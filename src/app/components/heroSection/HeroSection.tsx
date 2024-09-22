"use client"; 

import { useEffect } from "react";
import Image from "next/image";
import Background from '../image/background1.jpg';
import { scrollAnimation } from "../heroSection/scrollAnimation"; 

const HeroSection = () => {

  useEffect(() => {
    scrollAnimation(); 
  }, []);

  return (
    <>
      <div className="bg-cover bg-center h-screen text-center"
        style={{ backgroundImage: `url(${Background.src})` }}> {/* Përdor `` për string të tipit template */}
        
        <div className="flex justify-start items-center h-screen left-10">
          <h1 className="text-4xl font-bold text-center text-white ml-10 content-to-animate">
            Photography is the art of capturing moments <br /> that tell stories without words.
            <p className="text-lg text-center text-white max-w-2xl mt-8 content-to-animate">
              Through the lens, we preserve the beauty of fleeting moments and transform them into timeless
              memories. Each photograph is a window into a unique world, capturing the essence of our experiences
              and emotions. Explore our gallery and discover the stories behind every shot.
            </p>
            <a href="\uploadImages" className="bg-green-600 text-white text-center uppercase font-semibold px-4 py-2 rounded-md inline-block hover:scale-105 mt-10 ml-5 content-to-animate">
              Upload Here
            </a>
          </h1>
        </div>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Top Photographers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team consists of some of the most talented and renowned photographers in the industry.
              Each of them brings a unique and creative perspective, capturing the most beautiful and special moments.
              Explore some of their best work and discover the passion and creativity behind every photograph.
            </p>
          </div>

          
        </section>

        
      </div>
    </>
  );
}

export default HeroSection;
