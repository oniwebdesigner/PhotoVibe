"use client"; 

import React, { useState } from 'react';
import useGridAnimations from './useGridAnimations'; 
import ImageModal from './ImageModal'; 

const Grid: React.FC = () => {
  useGridAnimations();

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = [
    "https://picsum.photos/id/1/800/600",
    "https://picsum.photos/id/2/800/600",
    "https://picsum.photos/id/3/800/600",
    "https://picsum.photos/id/4/800/600",
    "https://picsum.photos/id/5/800/600",
    "https://picsum.photos/id/6/800/600",
    "https://picsum.photos/id/7/800/600",
    "https://picsum.photos/id/8/800/600",
    "https://picsum.photos/id/9/800/600"
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
      <div className="bg-white grid md:grid-cols-3 grid-cols-1 w-full gap-4 pb-16">
        {imageUrls.map((url, index) => (
          <div className="px-[6%] py-[4%] grid-item" key={index}>
            <img
              src={url}
              className="shadow-lg rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              alt={`picsum ${index + 1}`}
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      <ImageModal 
        isOpen={isModalOpen} 
        imageUrl={imageUrls[currentImageIndex]} 
        onClose={closeModal} 
        onNext={nextImage} 
        onPrev={prevImage} 
      />
    </div>
  );
}

export default Grid;
