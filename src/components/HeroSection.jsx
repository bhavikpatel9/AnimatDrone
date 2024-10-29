import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import Left from './Left';
import Right from './Right';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const drones = [
        { id: 1, idName: 'container1', img: '/drone1.png' },
        { id: 2, idName: 'container2', img: '/drone2.png' },
        { id: 3, idName: 'container3', img: '/drone3.png' },
        { id: 4, idName: 'container4', img: '/drone4.png' },
    ];

    const containers = [
        { id: 'container1', initialScale: 2, finalScale: 0.5, duration: 2 },
        { id: 'container2', initialScale: 2, finalScale: 0.5, duration: 2 },
        { id: 'container3', initialScale: 1.5, finalScale: 0.7, duration: 2 },
        { id: 'container4', initialScale: 1.5, finalScale: 0.6, duration: 2 },
    ];

    useEffect(() => {
        containers.forEach((container) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `#${container.id}`,
                    start: 'top center',
                    end: 'bottom 40%',
                    scrub: true,
                }
            });

            tl.fromTo(`#${container.id}`,
                { scale: container.initialScale, autoAlpha: 0 },
                { scale: 1, autoAlpha: 1, duration: container.duration }
            ).to(`#${container.id}`, {
                scale: container.finalScale,
                autoAlpha: 0,
                duration: 2,
            });
        });
    }, []);

    return (
        <div className='w-full min-h-screen relative'>
            {drones.map((drone) => (
                <div key={drone.id} className="drone-container  flex justify-around">
                    <Left uniqueId={drone.idName} />
                    <div
                        className={`w-[500px] h-[300px] shrink-0 ${drone.id === 1 ? 'mt-60' : 'mt-32 scale-150 opacity-0'} flex items-center justify-center flex-col `}
                        id={drone.idName}
                    >
                        <img src={drone.img} alt={`Drone ${drone.id}`} />
                        <Link to={`/explore/${drone.id}`}>
                            <button className='explore-button text-white text-lg font-semibold border-2 px-10 py-2 rounded-full'>
                                Explore
                            </button>
                        </Link>
                    </div>
                    <Right />
                </div>
            ))}
            <div className='w-full h-[280px]'></div>
        </div>
    );
};

export default HeroSection;
