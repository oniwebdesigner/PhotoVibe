// src/app/components/Card.tsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { scale: 1.1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { scale: 1, duration: 0.3 });
  };

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
