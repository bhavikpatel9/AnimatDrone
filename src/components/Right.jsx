import gsap from 'gsap';
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Right = ({ uniqueId }) => {
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
    
  //////
    // gsap.fromTo(
    //     `#right-${uniqueId}`, 
    //     { x: 0, y: 0},
    //     {
    //         x: -150,
    //         y: 150, 
    //         autoAlpha: 0, 
    //         scrollTrigger: {
    //             trigger: `#${uniqueId}`, // Trigger based on the drone container
    //             start: 'top top+=100',
    //             end: 'bottom center',
    //             scrub: true,
    //             markers: true
    //         }
    //     }
    // );
}, [uniqueId]);
  return (
    <section id={`right-${uniqueId}`} className={` ${uniqueId === 'container1' ? 'mt-40' : 'mt-14 scale-150 opacity-0'} w-[300px] shrink-0`}>
        right
      </section>
  )
}

export default Right