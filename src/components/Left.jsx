import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Left = ({ uniqueId, droneName, description, rating }) => {
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
            { scale: 1, autoAlpha: 0, x: -100, },
            { scale: 1, autoAlpha: 1, duration: 2, x: 0, }
        ).to(`#left-${uniqueId}`, {
            scale: 0.8,
            autoAlpha: 0,
            duration: 2,
            x: 150,
            y: 150
        });
    }, [uniqueId]);

    return (
        <section id={`left-${uniqueId}`} className={` text-white ${uniqueId === 'container1' ? 'mt-40' : 'mt-14 scale-150 opacity-0'}  w-[300px] shrink-0 flex flex-col gap-5`}>
            <h2 className='text-5xl'>{droneName}</h2>
            <p className='text-3xl'>{description}</p>
            <div>
                <p className='text-4xl'>{rating}</p>
                <div className='flex text-3xl'>
                    {Array.from({ length: rating }, (_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Left;
