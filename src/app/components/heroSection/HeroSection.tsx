// components/HeroSection.tsx
"use client"; 

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Background from '../image/background1.jpg';
import background1 from '../image/background1.jpg';
import Footer from "@components/footer/Footer";
import { scrollAnimation } from "../heroSection/scrollAnimation"; // Importo animacionin

const HeroSection = () => {

  useEffect(() => {
    scrollAnimation(); // Thirr funksionin e animacionit kur komponenti montohet
  }, []);

  return (
    <>
      <div className="bg-cover bg-center h-screen text-center
        backdrop-opacity-10 backdrop-invert bg-white/30 opacity-80 linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)" 
        style={{ backgroundImage: `url(${Background.src})` }} >
        
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

        <section className="bg-darkGray py-16 bg-gray-100 content-to-animate">
          <div className="container mx-auto px-4">
            {/* Title and Description */}
            <div className="text-center mb-12 content-to-animate">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-black">Our Top Photographers</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team consists of some of the most talented and renowned photographers in the industry.
                Each of them brings a unique and creative perspective, capturing the most beautiful and special moments.
                Explore some of their best work and discover the passion and creativity behind every photograph.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Row 1 */}
              <div className="flex flex-col items-center content-to-animate">
                <Image src={background1} alt="Photo 1" width={300} height={200} className="rounded-lg shadow-lg mb-4" />
                <p className="text-center text-lg font-semibold">Photograph</p>
              </div>
              <div className="flex flex-col items-center content-to-animate">
                <Image src={background1} alt="Photo 2" width={300} height={200} className="rounded-lg shadow-lg mb-4" />
                <p className="text-center text-lg font-semibold">Photograph</p>
              </div>
              <div className="flex flex-col items-center content-to-animate">
                <Image src={background1} alt="Photo 3" width={300} height={200} className="rounded-lg shadow-lg mb-4" />
                <p className="text-center text-lg font-semibold">Photograph</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 content-to-animate">
              {/* Row 2 */}
              <div className="flex flex-col items-center">
                <Image src={background1} alt="Photo 4" width={300} height={200} className="rounded-lg shadow-lg mb-4" />
                <p className="text-center text-lg font-semibold">Photograph</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={background1} alt="Photo 5" width={300} height={200} className="rounded-lg shadow-lg mb-4" />
                <p className="text-center text-lg font-semibold">Photograph</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={background1} alt="Photo 6" width={300} height={200} className="rounded-lg shadow-lg mb-4" />
                <p className="text-center text-lg font-semibold">Photograph</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HeroSection;
