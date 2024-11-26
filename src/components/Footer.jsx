import React, { useEffect, useRef } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import DroneCarousel from './DroneCarousel';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Footer = () => {
  const location = useLocation();

  // Refs for animations
  const copyrightRef = useRef(null);
  const faviconsRef = useRef([]);
  const droneCarousel = useRef();

  // Add refs for the social media icons
  const addToRefs = (el) => {
    if (el && !faviconsRef.current.includes(el)) {
      faviconsRef.current.push(el);
    }
  };

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate copyright text from left
    timeline.fromTo(
      copyrightRef.current,
      { x: -50, opacity: 0 }, // Starting state
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" } // Ending state
    );

    // Animate social media icons from bottom
    timeline.fromTo(
      faviconsRef.current,
      { y: 50, opacity: 0 }, // Starting state
      {
        y: 0,
        opacity: 1,
        stagger: 0.2, // Stagger effect for sequential animation
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.5" // Overlap with the copyright animation
    );

    gsap.fromTo(
      droneCarousel.current,
      { y: 150, opacity: 1 }, // Starting state
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" } // Ending state
    );
  }, []);

  return (
    <section className="fixed bottom-0 left-0 w-full z-10">
      <div className="flex justify-between p-4 text-white text-2xl">
        {/* Copyright text with animation */}
        <p ref={copyrightRef} className="flex items-end justify-center">
          Copyright Info
        </p>

        {/* Conditional rendering based on location */}
        {location.pathname.startsWith('/explore') ? (
          // Show animated button
          <div className="w-7 h-10 border-2 rounded-xl flex items-end p-2 justify-center">
            <p className="w-[2px] h-2 bg-white animate-bounceY"></p>
          </div>
        ) : (
          <div ref={droneCarousel}>
            <DroneCarousel />
          </div>
        )}

        {/* Social Media Icons */}
        <ul className="flex gap-8 items-end justify-center">
          <li ref={addToRefs} className="hover:opacity-70 cursor-pointer">
            <FaFacebookSquare />
          </li>
          <li ref={addToRefs} className="hover:opacity-70 cursor-pointer">
            <FaInstagramSquare />
          </li>
          <li ref={addToRefs} className="hover:opacity-70 cursor-pointer">
            <FaTwitterSquare />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
