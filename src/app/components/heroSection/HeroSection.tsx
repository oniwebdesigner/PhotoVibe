"use client"; 

import { useEffect } from "react";
import Background from '../image/background1.jpg';
import { scrollAnimation } from "../heroSection/scrollAnimation"; 
import gsap from "gsap";

const HeroSection = () => {

  useEffect(() => {
    scrollAnimation(); 
    const tl = gsap.timeline();

    // Set the initial position for all hero-content
    gsap.set(".hero-content", { opacity: 0, y: 100 });

    // Animate the appearance of all content
    tl.to(".hero-content", {
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: "power2.out",
    });

    // Function to create various shapes on hover
    const title = document.querySelector("h1");
    
    const hoverAnimation = (e) => {
      const randomShape = document.createElement("div");
      const shapes = ["circle", "square", "triangle", "star"];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      
      // Add class based on the shape
      randomShape.classList.add(shape);
      
      // Initial styling for shapes
      gsap.set(randomShape, {
        position: "absolute",
        top: e.clientY + "px",
        left: e.clientX + "px",
        width: "50px",
        height: "50px",
        opacity: 0,
        backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, 
                                ${Math.floor(Math.random() * 255)}, 
                                ${Math.floor(Math.random() * 255)}, 0.8)`,
        borderRadius: shape === "circle" ? "50%" : "0",
        clipPath: shape === "triangle" 
          ? "polygon(50% 0%, 0% 100%, 100% 100%)"
          : shape === "star"
          ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
          : "none",
      });

      document.body.appendChild(randomShape);
      
      // Animation for shape appearance
      gsap.to(randomShape, {
        duration: 1,
        opacity: 1,
        scale: 1.5,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => {
          // Remove the shape after animation
          randomShape.remove();
        }
      });
    };

    // Add event listener for hover on title
    title.addEventListener("mousemove", hoverAnimation);

    // Remove event listener when component unmounts
    return () => {
      title.removeEventListener("mousemove", hoverAnimation);
    };
  }, []);

  return (
    <>
      <div className="bg-cover bg-center h-screen text-center"
        style={{ backgroundImage: `url(${Background.src})` }}>
        
        <div className="flex justify-start items-center h-screen left-10">
          <div className="hero-content">
            <h1 className="text-4xl font-bold text-center text-white ml-10">
              Photography is the art of capturing moments <br /> that tell stories without words.
            </h1>
            <p className="text-lg text-center text-white max-w-2xl mt-8 hero-content">
              Through the lens, we preserve the beauty of fleeting moments and transform them into timeless
              memories. Each photograph is a window into a unique world, capturing the essence of our experiences
              and emotions. Explore our gallery and discover the stories behind every shot.
            </p>
            <a href="\uploadImages" className="bg-green-600 text-white text-center uppercase font-semibold px-4 py-2 rounded-md inline-block hover:scale-105 mt-10 ml-5 hero-content">
              Upload Here
            </a>
          </div>
        </div>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center mb-12 hero-content">
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
