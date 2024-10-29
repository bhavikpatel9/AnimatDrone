import React, { useState, useRef, Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Drone from '../../public/Drone';
import Drone2 from './gltfjsx/Drone2'
import gsap from 'gsap';
import CanvasLoader from './Loader';

const ExplorePage = () => {
  const { id } = useParams();
  const droneRef = useRef();

  // Rotate the model when it's loaded
  const handleDroneLoad = () => {
    // Check if droneRef is defined
    if (droneRef.current) {
      // Delay the rotation slightly to ensure it loads
      setTimeout(() => {
        gsap.to(droneRef.current.rotation, {
          x: 0.1,
          y: -0.5,
          z: 0,
          duration: 1,
          ease: "power2.out",
        });
      }, 100); // Adjust delay if necessary
    }
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen w-screen flex-col'>
        <Canvas>
          <ambientLight />
          <OrbitControls/>
          <Suspense fallback={<CanvasLoader />}>
            
            {id === '2' && <Drone2 ref={droneRef} onLoad={handleDroneLoad} />}
            {id === '4' && <Drone ref={droneRef} onLoad={handleDroneLoad} />}
          </Suspense>
          <Environment preset='sunset' />
        </Canvas>
      </div>
      
    </>
  );
};

export default ExplorePage;