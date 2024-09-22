// components/Photographs.tsx
"use client"; 

import Image from "next/image";
import background1 from '../image/background1.jpg'; 


const Photographs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">Our Top Photographers</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our team consists of some of the most talented and renowned photographers in the industry.
          Each of them brings a unique and creative perspective, capturing the most beautiful and special moments.
          Explore some of their best work and discover the passion and creativity behind every photograph.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Row 1 */}
        <div className="flex flex-col items-center content-to-animate">
          <Image src={background1} alt="Photographer 1" width={300} height={200} className="rounded-lg shadow-lg mb-4" />
          <p className="text-center text-lg font-semibold">Photographer 1</p>
        </div>
        <div className="flex flex-col items-center content-to-animate">
          <Image src={background1} alt="Photographer 2" width={300} height={200} className="rounded-lg shadow-lg mb-4" />
          <p className="text-center text-lg font-semibold">Photographer 2</p>
        </div>
        <div className="flex flex-col items-center content-to-animate">
          <Image src={background1} alt="Photographer 3" width={300} height={200} className="rounded-lg shadow-lg mb-4" />
          <p className="text-center text-lg font-semibold">Photographer 3</p>
        </div>
       
      </div>
      
    </section>
  );
};

export default Photographs;
