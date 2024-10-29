import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Left = ({ uniqueId }) => {
    useEffect(() => {
        gsap.fromTo(
            `#left-${uniqueId}`, 
            { x: 0, y: 0},
            {
                x: 150,
                y: 150, 
                autoAlpha: 0, 
                scrollTrigger: {
                    trigger: `#${uniqueId}`, // Trigger based on the drone container
                    start: 'top top+=100',
                    end: 'bottom center',
                    scrub: true,
                    // markers: true
                }
            }
        );
    }, [uniqueId]);

    return (
        <section id={`left-${uniqueId}`} className={` ${uniqueId === 'container1' ? '' : 'opacity-0'}  mt-40 w-[300px] shrink-0`}>
            <h2>name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, saepe.</p>
        </section>
    );
};

export default Left;
