import gsap from 'gsap';
import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY, duration: 0.1 }); // Cursor follows mouse
    };

    const onClick = () => {
      const tl = gsap.timeline();

      tl.to(cursor, {
        scale: 2,   // Scale up the cursor
        duration: 0.2,  // Fast scale-up duration
        ease: 'power2.out', // Smooth easing
      })
      .to(cursor, {
        scale: 1,   // Scale back to normal
        duration: 0.2,  // Fast scale-down duration
        ease: 'power2.inOut',  // Smooth transition back
      });
    };

    // Add mousemove event listener
    document.addEventListener('mousemove', onMouseMove);

    // Add click event listener
    document.addEventListener('click', onClick);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div id='custom-cursor' className='custom-cursor'>
      <span className='cursor-text'></span>
    </div>
  );
};

export default Cursor;
