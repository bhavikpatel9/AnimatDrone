import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Left = ({ uniqueId }) => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#left-${uniqueId}`,
                start: 'top-=100 top+=200',
                end: 'bottom center',
                scrub: true,
                // markers: true
            }
        });
  
        tl.fromTo(`#left-${uniqueId}`,
            { scale: 1, autoAlpha: 0, x: -100,  },
            { scale: 1, autoAlpha: 1, duration: 2, x: 0,  }
        ).to(`#left-${uniqueId}`, {
            scale: 0.8,
            autoAlpha: 0,
            duration: 2,
            x: 150,
            y: 150
        });
    }, [uniqueId]);

    return (
        <section id={`left-${uniqueId}`} className={` ${uniqueId === 'container1' ? 'mt-40' : 'mt-14 scale-150 opacity-0'}  w-[300px] shrink-0`}>
            <h2>name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, saepe.</p>
        </section>
    );
};

export default Left;
