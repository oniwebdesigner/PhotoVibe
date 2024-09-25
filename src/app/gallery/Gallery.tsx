'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@components/footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  // Animation when clicking the "Gallery" navbar link
  const handleGalleryClick = () => {
    const galleryImages = gsap.utils.toArray(".gallery-img");
    
    // Animate all images from outside the viewport to the center
    gsap.fromTo(
      galleryImages,
      {
        // Initial positions (off-screen)
        x: (i) => (i % 2 === 0 ? -2000 : 2000), // Alternate between left and right sides
        y: (i) => (i % 2 === 0 ? -2000 : 2000), // Alternate between top and bottom
        opacity: 0,
        scale: 0.3,
      },
      {
        // End positions (centered)
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        stagger: 0.1, // Stagger animation for each image
      }
    );
  };

  useEffect(() => {
    // Optionally set up animations for other parts of the gallery if needed
  }, []);

  return (
    <div className="pt-28" ref={galleryRef}> {/* Spacing to avoid navbar overlap */}
      <h2 className="text-center text-3xl font-bold">Gallery</h2> {/* Title */}
      
      {/* Button to trigger the animation manually for demo purpose */}
      <button
        className="my-4 mx-auto block bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGalleryClick}
      >
        Trigger Animation
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-20">
        <div className="grid gap-4">
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/album/3.jpg" alt="" width={500} height={300} />
          </div>
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/gallery/pf%20(1).jpg" alt="" width={500} height={300} />
          </div>
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/gallery/pf%20(5).jpg" alt="" width={500} height={300} />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/gallery/pf%20(5).jpg" alt="" width={500} height={300} />
          </div>
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/gallery/pf%20(2).jpg" alt="" width={500} height={300} />
          </div>
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/gallery/pf%20(6).jpg" alt="" width={500} height={300} />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/gallery/pf%20(3).jpg" alt="" width={500} height={300} />
          </div>
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/album/2.jpg" alt="" width={500} height={300} />
          </div>
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/album/4.jpg" alt="" width={500} height={300} />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/album/3.jpg" alt="" width={500} height={300} />
          </div>
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/gallery/pf%20(2).jpg" alt="" width={500} height={300} />
          </div>
          <div>
            <Image className="h-auto max-w-full rounded-lg gallery-img" src="https://madebydesignesia.com/themes/photix/images/gallery/pf%20(4).jpg" alt="" width={500} height={300} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
