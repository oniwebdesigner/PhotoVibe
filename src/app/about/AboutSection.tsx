import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg max-w-2xl mx-auto">
            At Photo Vibe, we are passionate about capturing the essence of moments that tell powerful stories. Our collection showcases the beauty of everyday life and extraordinary events through a lens of creativity and emotion.
            <br /><br />
            Our team of photographers is dedicated to preserving memories in the most captivating way. Each photograph is carefully crafted to evoke feelings and create a lasting impression. Explore our gallery to see how we transform fleeting moments into timeless art.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex-1 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-base">
              Our mission is to bring the art of photography to life, capturing unique perspectives and sharing stories through our lens. We strive to deliver exceptional quality and creativity in every shot.
            </p>
          </div>
          <div className="flex-1 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-base">
              We envision a world where every moment is celebrated and preserved with beauty and artistry. Our goal is to inspire and connect people through our visual storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
