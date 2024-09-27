// components/Accordions.js
'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Accordions = () => {
  useEffect(() => {
    const accordions = gsap.utils.toArray('.accordion');

    accordions.forEach((accordion, index) => {
      const content = accordion.querySelector('.text');

      // Initially set all accordions to be closed
      gsap.set(content, {
        height: 0,
        opacity: 0,
      });

      // Create ScrollTrigger for each accordion
      ScrollTrigger.create({
        trigger: accordion,
        start: 'top center+=100',  // The effect starts when scrolling above it
        end: 'bottom center-=100', // It ends when scrolling beyond it
        toggleActions: 'play reverse play reverse',
        onEnter: () => toggleAccordion(content, true),  // Opens when passing over it
        onLeave: () => toggleAccordion(content, false), // Closes when scrolling beyond
        onEnterBack: () => toggleAccordion(content, true), // Opens when scrolling back
        onLeaveBack: () => toggleAccordion(content, false), // Closes when scrolling up
      });
    });

    // Function to open/close the accordion
    function toggleAccordion(content, isOpen) {
      gsap.to(content, {
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }

    // Animation for the line under the title
    gsap.fromTo('.title-line', 
      { width: 0 }, 
      { 
        width: '100%', 
        duration: 1, 
        ease: 'power2.out', 
        scrollTrigger: {
          trigger: '.about-title', 
          start: 'top center+=100', 
          toggleActions: 'play none none none'
        }
      });
  }, []);

  return (
    <div id="wrapper" className="bg-gradient-to-br from-[#5c2fa6] to-[#5a36c0] font-sans">
      <div id="content">
        <div className="spacer h-[10vh]"></div> {/* Added more space above */}
        <h2 className="about-title text-white text-[max(3vw,28px)] leading-tight mb-20 text-center relative">
          About Us
          <span className="title-line absolute bottom-[-10px] left-0 h-[3px] bg-white"></span>
        </h2>
        <div className="spacer h-[20vh]"></div> {/* Reduced space above */}
        <div className="accordions flex flex-col items-center pb-[10vh]">
          <div className="accordion bg-gradient-to-br from-[#1d91fc] to-[#5a36c0] w-[70vw] max-w-[600px] p-4 rounded-2xl mb-8 shadow-lg">
            <div className="title text-white text-[max(2vw,24px)] leading-tight pb-2 cursor-pointer">
              Our Mission
            </div>
            <div className="text text-[max(1vw,15px)] leading-relaxed text-white/70">
              We aim to provide a platform where photographers can showcase their talent, and users can explore beautiful and artistic photography.
            </div>
          </div>

          <div className="accordion bg-gradient-to-br from-[#f28885] to-[#e94f66] w-[70vw] max-w-[600px] p-4 rounded-2xl mb-8 shadow-lg">
            <div className="title text-white text-[max(2vw,24px)] leading-tight pb-2 cursor-pointer">
              For Photographers
            </div>
            <div className="text text-[max(1vw,15px)] leading-relaxed text-white/70">
              Photographers can create profiles, post their photos, and interact with an engaged audience. It's the perfect place to get discovered.
            </div>
          </div>

          <div className="accordion bg-gradient-to-br from-[#65bb76] to-[#466fab] w-[70vw] max-w-[600px] p-4 rounded-2xl mb-8 shadow-lg">
            <div className="title text-white text-[max(2vw,24px)] leading-tight pb-2 cursor-pointer">
              For Users
            </div>
            <div className="text text-[max(1vw,15px)] leading-relaxed text-white/70">
              Users can browse through a curated collection of photographs, follow their favorite photographers, and enjoy the beauty of creative work.
            </div>
          </div>

          <div className="accordion bg-gradient-to-br from-[#c215d1] to-[#9813a1] w-[70vw] max-w-[600px] p-4 rounded-2xl mb-8 shadow-lg">
            <div className="title text-white text-[max(2vw,24px)] leading-tight pb-2 cursor-pointer">
              Join Us
            </div>
            <div className="text text-[max(1vw,15px)] leading-relaxed text-white/70">
              Whether you're a photographer or someone who loves beautiful visuals, our platform welcomes you to explore, share, and connect.
            </div>
          </div>
        </div>
        <div className="spacer h-[20vh]"></div> {/* Reduced space below */}
      </div>
    </div>
  );
};

export default Accordions;
