import React from 'react';
import Image from 'next/image';

const Achievements = () => {
  return (
    <section id='section2'>
    <section className="container mx-auto px-8 py-8 lg:py-40 text-center">
      <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">Latest Achievements</h2>
      <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mt-9 w-full font-normal !text-gray-500 lg:w-5/12 mx-auto">
        Discover our recent accomplishments in capturing life's most beautiful moments.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
          <Image src="https://bucket.material-tailwind.com/magic-ai/58b51625af5803baea7811b7e9128c8b23c0706c3271fa863b6bc287c2d3958a.jpg" alt="Award-Winning Photography" layout="fill" className="absolute inset-0 object-cover object-center" />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="p-6 relative flex flex-col justify-end">
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Award-Winning Photography</h4>
            <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
              We are thrilled to have won prestigious awards for our captivating and creative shots that capture the essence of every moment.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
          <Image src="https://bucket.material-tailwind.com/magic-ai/36e7d64250cd9568062f658a26b4d0107c00235cb3b85fa4919b3ba4070c9bed.jpg" alt="International Exhibitions" layout="fill" className="absolute inset-0 object-cover object-center" />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="p-6 relative flex flex-col justify-end">
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">International Exhibitions</h4>
            <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
              Our work has been displayed in international galleries, celebrating the art of photography and storytelling through visuals.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
          <Image src="https://bucket.material-tailwind.com/magic-ai/36e7d64250cd9568062f658a26b4d0107c00235cb3b85fa4919b3ba4070c9bed.jpg" alt="Published in Renowned Magazines" layout="fill" className="absolute inset-0 object-cover object-center" />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="p-6 relative flex flex-col justify-end">
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Published in Renowned Magazines</h4>
            <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
              Our photos have been featured in leading photography and lifestyle magazines, recognized for their technical brilliance and emotional impact.
            </p>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Achievements;
