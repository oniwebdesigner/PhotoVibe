'use client';

import React, { useState } from 'react';
import gsap from 'gsap';

const Grid: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = [
    "https://madebydesignesia.com/themes/photix/images/album/5.jpg",
    "https://madebydesignesia.com/themes/photix/images/album/6.jpg",
    "https://madebydesignesia.com/themes/photix/images/album/1.jpg",
    "https://madebydesignesia.com/themes/photix/images/album/2.jpg",
    "https://madebydesignesia.com/themes/photix/images/album/3.jpg",
    "https://madebydesignesia.com/themes/photix/images/album/4.jpg",
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div>
      <section id='section1' className="relative w-full overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentImageIndex * (100 / 3)}%)` }}>
          {imageUrls.concat(imageUrls).map((url, index) => (
            <div
              className={`relative flex-shrink-0 w-1/3 transition-transform duration-300 ${
                index === currentImageIndex ? 'scale-125 translate-y-0' : 'scale-75 translate-y-6' // Ndrysho translate-y për të ulur imazhet anash
              }`}
              key={index}
            >
              <img
                src={url}
                className="shadow-lg rounded-md cursor-pointer"
                alt={`Image ${index + 1}`}
                onClick={() => openModal(index % imageUrls.length)} // Siguro që të marrë indeksin e duhur
              />
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
          onClick={prevImage}
        >
          &lt;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
          onClick={nextImage}
        >
          &gt;
        </button>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <img
            src={imageUrls[currentImageIndex]}
            className="w-full h-full object-cover"
            alt={`Full Image ${currentImageIndex + 1}`}
          />
          <button
            className="absolute top-5 right-5 text-white bg-red-500 p-2 rounded-full"
            onClick={closeModal}
          >
            &times;
          </button>
          <button
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white"
            onClick={prevImage}
          >
            &lt;
          </button>
          <button
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white"
            onClick={nextImage}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Grid;
