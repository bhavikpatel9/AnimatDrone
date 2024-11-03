import gsap from 'gsap';
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Right = ({ uniqueId, specs }) => {
    // console.log(specs.length);
    
  useEffect(() => {
      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: `#right-${uniqueId}`,
              start: 'top-=100 top+=200',
              end: 'bottom center',
              scrub: true,
              // markers: true
          }
      });

      tl.fromTo(`#right-${uniqueId}`,
          { scale: 1, autoAlpha: 0, x: 100,  },
          { scale: 1, autoAlpha: 1, duration: 2, x: 0,  }
      ).to(`#right-${uniqueId}`, {
          scale: 0.8,
          autoAlpha: 0,
          duration: 2,
          x: -150,
          y: 150
      });

}, [uniqueId]);
  return (
    <section id={`right-${uniqueId}`} className={` text-white text-3xl flex flex-col items-center justify-center gap-6 ${uniqueId === 'container1' ? 'mt-40' : 'mt-14 scale-150 opacity-0'} w-[300px] shrink-0`}>
        <h2>SPECS</h2>
        {
            specs.map((spec, index) => (
                <li key={index} className={index === 0 || index === specs.length -1 ? "opacity-[0.5]" : "opacity-1"}>{spec}</li>
            ))
        }
      </section>
  )
}

export default Right