import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import Left from './Left';
import Right from './Right';
import { drones } from '../utils/Data';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    // Create refs for each drone dynamically
    const droneRefs = useRef([]);

    useEffect(() => {
        drones.forEach((container, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `#${container.idName}`,
                    start: 'top center',
                    end: 'bottom 45%',
                    scrub: true,
                    // markers: true
                }
            });

            // Animate the container
            tl.fromTo(`#${container.idName}`,
                { scale: 2, autoAlpha: 0 },
                { scale: 1, autoAlpha: 1, duration: 2 }
            ).to(`#${container.idName}`, {
                scale: 0.5,
                autoAlpha: 0,
                duration: 2,
            });

            // Animate the drone image
            const img = droneRefs.current[index]; // Access specific ref for this drone
            gsap.fromTo(
                img,
                { scale: 2, opacity: 0 }, // Starting state
                { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" } // Ending state
            );
        });
    }, []);

    return (
        <>
            <div className="radial-bg"></div>

            <div className='w-full min-h-screen relative'>
                {drones.map((drone, index) => (
                    <div key={drone.id} className="drone-container flex justify-around">
                        <Left uniqueId={drone.idName} droneName={drone.name} description={drone.description} rating={drone.rating} />
                        <div
                            className={`w-[500px] h-[300px] shrink-0 ${drone.id === 1 ? 'mt-60' : 'mt-32 scale-150 opacity-0'} flex items-center justify-center flex-col `}
                            id={drone.idName}
                            ref={(el) => (droneRefs.current[index] = el)}
                        >
                            {/* Assign a unique ref to each drone image */}
                            <img
                                src={drone.img}
                                alt={`Drone ${drone.id}`}
                                className='w-[500px] h-[400px]'
                            />
                            <Link to={`/explore/${drone.id}`}>
                                <button className='explore-button absolute left-44 text-white text-lg font-semibold border-2 px-10 py-2 rounded-full'>
                                    Explore
                                </button>
                            </Link>
                        </div>
                        <Right uniqueId={drone.idName} specs={drone.specs} />
                    </div>
                ))}
                <div className='w-full h-[280px]'></div>
            </div>
        </>
    );
};

export default HeroSection;
