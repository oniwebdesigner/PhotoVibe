import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CameraWithFlash: React.FC = () => {
  const flashRef = useRef<HTMLDivElement>(null);

  // Function to create the flash effect when clicked
  const triggerFlash = () => {
    if (flashRef.current) {
      gsap.fromTo(flashRef.current, 
        { opacity: 1 }, 
        { opacity: 0, duration: 0.2, ease: 'power2.inOut' }
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {/* Camera */}
      <div 
        className="relative w-64 h-64 bg-gray-700 rounded-full shadow-2xl cursor-pointer" 
        onClick={triggerFlash}
      >
        {/* Lens */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-black rounded-full border-8 border-gray-500 shadow-inner"></div>
        
        {/* Shutter button */}
        <div className="absolute top-2 right-4 w-8 h-8 bg-red-500 rounded-full shadow-lg"></div>

        {/* Flash */}
        <div className="absolute top-6 left-16 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>

        {/* Flash light (animation) */}
        <div 
          ref={flashRef}
          className="absolute top-0 left-0 w-full h-full bg-white rounded-full opacity-0 pointer-events-none"
        ></div>
      </div>
      <p className="mt-6 text-white text-lg">Click on the camera to trigger the flash!</p>
    </div>
  );
};

export default CameraWithFlash;
