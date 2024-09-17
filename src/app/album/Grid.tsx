// components/Grid.tsx
"use client"; // Kjo do të shënojë që ky është një komponent i klientit

import React from 'react';

const Grid: React.FC = () => {
  // Funksioni që përmban logjikën për klikimin
  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.style.transform = 'scale(1.2)'; // Zmadho foto kur klikohet
    setTimeout(() => img.style.transform = 'scale(1)', 300); // Ktheje në madhësinë origjinale pas 300ms
  };

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-4 pb-16">
      <div className="px-[6%] py-[4%] pb-[2%]">
        <img
          src="https://picsum.photos/id/1/800/600"
          className="shadow-lg rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          alt="picsum"
          onClick={handleImageClick}
        />
      </div>

      <div className="px-[6%] py-[4%]">
        <img
          src="https://picsum.photos/id/2/800/600"
          className="shadow-lg rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          alt="picsum"
          onClick={handleImageClick}
        />
      </div>

      <div className="px-[6%] py-[4%]">
        <img
          src="https://picsum.photos/id/3/800/600"
          className="shadow-lg rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          alt="picsum"
          onClick={handleImageClick}
        />
      </div>

      <div className="px-[6%] py-[4%] pb-[2%]">
        <img
          src="https://picsum.photos/id/4/800/600"
          className="shadow-lg rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          alt="picsum"
          onClick={handleImageClick}
        />
      </div>

      <div className="px-[6%] py-[4%]">
        <img
          src="https://picsum.photos/id/5/800/600"
          className="shadow-lg rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          alt="picsum"
          onClick={handleImageClick}
        />
      </div>

      <div className="px-[6%] py-[4%]">
        <img
          src="https://picsum.photos/id/6/800/600"
          className="shadow-lg rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          alt="picsum"
          onClick={handleImageClick}
        />
      </div>

      <div className="px-[6%] py-[4%] pb-[2%]">
        <img
          src="https://picsum.photos/id/7/800/600"
          className="shadow-lg rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          alt="picsum"
          onClick={handleImageClick}
        />
      </div>

      <div className="px-[6%] py-[4%]">
        <img
          src="https://picsum.photos/id/8/800/600"
          className="shadow-lg rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          alt="picsum"
          onClick={handleImageClick}
        />
      </div>

      <div className="px-[6%] py-[4%]">
        <img
          src="https://picsum.photos/id/9/800/600"
          className="shadow-lg rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          alt="picsum"
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
}

export default Grid;
