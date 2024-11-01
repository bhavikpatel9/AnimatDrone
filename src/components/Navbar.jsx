// Navbar.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <section className="fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between p-4 text-white text-2xl">
        <p>Logo</p>
        {location.pathname.startsWith('/explore') ? (
          // Show 'X' symbol on ExplorePage to navigate to home
          <Link to="/" className="text-white text-2xl pr-4">X</Link>
        ) : (
          // Show link items on other pages
          <ul className="flex gap-8">
            <li>Home</li>
            <li>About</li>
            <li className="cursor-pointer">
              <a href="https://jeet-portfolio-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Navbar;
