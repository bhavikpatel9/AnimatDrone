import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import DroneCarousel from './DroneCarousel';
import { useLocation } from 'react-router-dom';
import { button, p } from 'framer-motion/client';

const Footer = () => {
  const location = useLocation();

  return (
    <section className='fixed bottom-0 left-0 w-full z-10'>
      <div className='flex justify-between p-4 text-white text-2xl'>
        <p className='flex items-end justify-center'>copyright info</p>

        {location.pathname.startsWith('/explore') ? (
          // Show animated button
          <div className='w-7 h-10 border-2 rounded-xl flex items-end p-2 justify-center'>
            <p className='w-[2px] h-2 bg-white animate-bounceY'></p>
          </div>
        ) : (<div>
          <DroneCarousel />
        </div>)
        }

        <ul className='flex gap-8 items-end justify-center'>
          <li><FaFacebookSquare /></li>
          <li><FaInstagramSquare /></li>
          <li><FaTwitterSquare /></li>
        </ul>
      </div>
    </section>
  )
}

export default Footer