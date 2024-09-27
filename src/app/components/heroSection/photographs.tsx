// src/app/components/heroSection/Photographs.tsx

"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Photographs = () => {
  useEffect(() => {
    const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 600px)", () => {
      console.log("desktop");

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      // create scrolltrigger for each details section
      // trigger photo animation when headline of each details section 
      // reaches 80% of window height
      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap.timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });
        
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => {
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile");
      };
    });
  }, []);

  return (
    <>
      <div className="spacer"></div>

      <div className="gallery flex flex-col md:flex-row">
        <div className="left md:w-1/2 p-4">
          <div className="desktopContent">
            <div className="desktopContentSection mb-6">
              <h1 className="text-xl font-bold text-red-600">Red</h1>
              <p>
                Red is a color often associated with strong emotions such as passion, love, and anger. 
                It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.
              </p>
            </div>
            <div className="desktopContentSection mb-6">
              <h1 className="text-xl font-bold text-green-600">Green</h1>
              <p>
                Green is a color that is often associated with nature, growth, and harmony. 
                It is a calming and relaxing color that can evoke feelings of balance, stability, and freshness.
              </p>
            </div>
            <div className="desktopContentSection mb-6">
              <h1 className="text-xl font-bold text-pink-600">Pink</h1>
              <p>
                Pink is a color that is often associated with femininity, romance, and sweetness. 
                It is a softer and more delicate shade of red that can evoke feelings of warmth, love, and nurturing.
              </p>
            </div>
            <div className="desktopContentSection mb-6">
              <h1 className="text-xl font-bold text-blue-600">Blue</h1>
              <p>
                Blue is a color that is often associated with calmness, trust, and reliability. 
                It is a peaceful and serene color that can evoke feelings of stability, security, and professionalism.
              </p>
            </div>
          </div>
        </div>

        <div className="right md:w-1/2 p-4">
          {/* Mobile Content */}
          <div className="mobileContent md:hidden">
            <div className="mobilePhoto red h-32 bg-red-500 mb-4"></div>
            <h1 className="text-xl font-bold text-red-600">Red</h1>
            <p>
              Red is a color often associated with strong emotions such as passion, love, and anger. 
              It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.
            </p>

            <div className="mobilePhoto green h-32 bg-green-500 mb-4"></div>
            <h1 className="text-xl font-bold text-green-600">Green</h1>
            <p>
              Green is a color that is often associated with nature, growth, and harmony. 
              It is a calming and relaxing color that can evoke feelings of balance, stability, and freshness.
            </p>

            <div className="mobilePhoto pink h-32 bg-pink-500 mb-4"></div>
            <h1 className="text-xl font-bold text-pink-600">Pink</h1>
            <p>
              Pink is a color that is often associated with femininity, romance, and sweetness. 
              It is a softer and more delicate shade of red that can evoke feelings of warmth, love, and nurturing.
            </p>

            <div className="mobilePhoto blue h-32 bg-blue-500 mb-4"></div>
            <h1 className="text-xl font-bold text-blue-600">Blue</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and reliability. 
              It is a peaceful and serene color that can evoke feelings of stability, security, and professionalism.
            </p>
          </div>

          {/* Desktop Content */}
          <div className="desktopPhotos hidden md:flex flex-col">
            <div className="desktopPhoto red h-48 bg-red-500 mb-4"></div>
            <div className="desktopPhoto green h-48 bg-green-500 mb-4"></div>
            <div className="desktopPhoto pink h-48 bg-pink-500 mb-4"></div>
            <div className="desktopPhoto blue h-48 bg-blue-500 mb-4"></div>
          </div>
        </div>
      </div>

      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </>
  );
};

export default Photographs;
