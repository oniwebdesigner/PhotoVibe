
/*
components/AnimatedSections.tsx
'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(Observer, SplitText);

const sections = [
  { title: "Scroll down", image: "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg" },
  { title: "Animated with GSAP", image: "https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb" },
  { title: "GreenSock", image: "https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb" },
  { title: "Animation platform", image: "https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb" },
  { title: "Keep scrolling", image: "https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb" },
];

export default function AnimatedSections() {
  useEffect(() => {
    const headings = gsap.utils.toArray(".section-heading");
    const outerWrappers = gsap.utils.toArray(".outer");
    const innerWrappers = gsap.utils.toArray(".inner");
    const splitHeadings = headings.map(
      (heading) => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" })
    );
    let currentIndex = -1;
    let animating = false;
    const wrap = gsap.utils.wrap(0, sections.length);

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index);
      animating = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;
      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false),
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(`.bg-${currentIndex}`, { yPercent: -15 * dFactor }).set(`.section-${currentIndex}`, { autoAlpha: 0 });
      }

      gsap.set(`.section-${index}`, { autoAlpha: 1, zIndex: 1 });
      tl.fromTo([`.outer-${index}`, `.inner-${index}`], { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) }, { yPercent: 0 })
        .fromTo(`.bg-${index}`, { yPercent: 15 * dFactor }, { yPercent: 0 })
        .fromTo(
          splitHeadings[index].chars,
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: { each: 0.02, from: "random" },
          },
          0.2
        );

      currentIndex = index;
    }

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  }, []);

  return (
    <div className="relative h-screen w-full">
      <header className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-4 bg-black">
        <div className="text-white text-lg">Animated Sections</div>
        <div>
          <a href="https://codepen.io/BrianCross/pen/PoWapLP" className="text-white">
            Original By Brian
          </a>
        </div>
      </header>

      {sections.map((section, index) => (
        <section key={index} className={`section-${index} fixed top-0 w-full h-full invisible`}>
          <div className={`outer outer-${index} h-full`}>
            <div className={`inner inner-${index} h-full`}>
              <div
                className={`bg bg-${index} h-full w-full flex items-center justify-center`}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url(${section.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="section-heading text-white text-5xl">{section.title}</h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
*/