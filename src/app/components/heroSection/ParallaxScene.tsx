"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";

const ParallaxScene = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Zvogëlo dhe zhduki skenën parallax me scroll
      gsap.to(".parallax-scene", {
        opacity: 1 - scrollY / 500, // Rregullo 500 për shpejtësinë e zhdukjes
        ease: "power1.inOut",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="parallax-scene relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[#111b29] font-montserrat text-[99px] text-center">
        <div className="absolute inset-0">
          <main className="fixed bg-white w-full max-w-[1600px] h-full top-0 left-1/2 transform -translate-x-1/2">
            <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
              <mask id="m">
                <g className="cloud1">
                  <rect fill="#fff" width="100%" height="801" y="799" />
                  <image xlinkHref="" width="1200" height="800" />
                </g>
              </mask>

              <image
                className="sky"
                xlinkHref="https://assets.codepen.io/721952/sky.jpg"
                width="1200"
                height="590"
              />
              <image
                className="mountBg"
                xlinkHref="https://assets.codepen.io/721952/mountBg.png"
                width="1200"
                height="800"
              />
              <image
                className="mountMg"
                xlinkHref="https://assets.codepen.io/721952/mountMg.png"
                width="1200"
                height="800"
              />
              <image
                className="cloud2"
                xlinkHref="https://assets.codepen.io/721952/cloud2.png"
                width="1200"
                height="800"
              />
              <image
                className="mountFg"
                xlinkHref="https://assets.codepen.io/721952/mountFg.png"
                width="1200"
                height="800"
              />
              <image
                className="cloud1"
                xlinkHref="https://assets.codepen.io/721952/cloud1.png"
                width="1200"
                height="800"
              />
              <image
                className="cloud3"
                xlinkHref="https://assets.codepen.io/721952/cloud3.png"
                width="1200"
                height="800"
              />
              <text fill="#fff" x="350" y="200">
                EXPLORE
              </text>
              <polyline
                className="arrow"
                fill="#fff"
                points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250"
              />

              <g mask="url(#m)">
                <rect fill="#fff" width="100%" height="100%" />
                <text x="350" y="200" fill="#162a43">
                  FURTHER
                </text>
              </g>

              <rect
                id="arrow-btn"
                width="100"
                height="100"
                opacity="0"
                x="550"
                y="220"
                style={{ cursor: "pointer" }}
              />
            </svg>
          </main>
        </div>

        {/* Overlay-i me ngjyrë të errët, më i theksuar */}
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Rregullo opacity për errësirë më të madhe ose më të vogël */}
      </div>
      <div className="h-screen w-full"></div> {/* Divi për skrollim */}
    </section>
  );
};

export default ParallaxScene;
