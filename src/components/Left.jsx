import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Left = ({ uniqueId, droneName, description, rating }) => {
    const leftRef = useRef()
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

    useEffect(() => {
        const timeline = gsap.timeline()

        timeline.fromTo(
            leftRef.current,
            { x: -150, opacity: 0 }, // Starting state
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", } // Ending state
        )

        // Exclude <h2> and target all other child elements
        const childElements = Array.from(leftRef.current.children).filter(
            (el) => el.tagName !== "H2"
        );

        // Animate child elements with a stagger effect
        timeline.fromTo(
            childElements,
            { y: 50, opacity: 0 }, // Starting state
            {
                y: 0,
                opacity: 1,
                stagger: 0.1, // Staggered animation
                duration: 0.3,
                ease: "power3.out",
            }
        );
    }, [])
    

    return (
        <section id={`left-${uniqueId}`} ref={leftRef} className={` text-white ${uniqueId === 'container1' ? 'mt-40' : 'mt-14 scale-150 opacity-0'}  w-[300px] shrink-0 flex flex-col gap-5`}>
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
