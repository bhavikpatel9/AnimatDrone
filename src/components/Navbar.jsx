import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const location = useLocation();
  const logoRef = useRef(null); // Ref for the logo
  const navLinksRef = useRef([]); // Ref for the nav links
  const xSymbolRef = useRef(null); // Ref for the 'X' symbol

  // GSAP Animation
  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate the logo
    timeline.fromTo(
      logoRef.current,
      { x: -90, opacity: 0 }, // Starting state
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" } // Ending state
    );

    // Animate the navigation links
    timeline.fromTo(
      navLinksRef.current,
      { y: -50, opacity: 0 }, // Starting state
      {
        y: 0,
        opacity: 1,
        stagger: 0.2, // Stagger effect for sequential animation
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.5" // Overlap this animation with the logo animation
    );

    // Animate the 'X' symbol (if visible)
    if (xSymbolRef.current) {
      timeline.fromTo(
        xSymbolRef.current,
        { y: -50, opacity: 0 }, // Starting state
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" } // Ending state
      );
    }
  }, []);

  // Add refs to the nav links
  const addToRefs = (el) => {
    if (el && !navLinksRef.current.includes(el)) {
      navLinksRef.current.push(el);
    }
  };

  return (
    <section className="fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between p-4 text-white text-2xl">
        {/* Logo with ref for animation */}
        <p ref={logoRef} className="font-bold">AnimatDrone</p>
        {location.pathname.startsWith('/explore') ? (
          // Show 'X' symbol with ref for animation
          <Link
            to="/"
            ref={xSymbolRef} // Assign ref to the 'X' symbol
            className="text-white text-2xl pr-4"
          >
            X
          </Link>
        ) : (
          // Show link items on other pages
          <ul className="flex gap-8">
            {[
              { name: 'Home', link: '/' },
              { name: 'About', link: '/about' },
              { name: 'Contact', link: '/contact' }
            ].map((item) => (
              <li
                key={item.name}
                ref={addToRefs} // Assign ref to each link
                className="hover:opacity-70"
              >
                <Link to={item.link} className=''>{item.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Navbar;
