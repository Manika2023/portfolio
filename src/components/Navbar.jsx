import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-orange-500">My Portfolio</h1>
        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
        {/* Links */}
        <ul className={`md:flex md:space-x-6 space-y-4 md:space-y-0 absolute md:relative bg-gray-900 w-full md:w-auto left-0 md:flex-row flex-col md:top-0 ${isOpen ? 'top-16' : 'hidden md:flex'}`}>
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive ? "block px-4 py-2 cursor-pointer bg-gray-700" : "block px-4 py-2 cursor-pointer hover:bg-gray-700"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "block px-4 py-2 cursor-pointer bg-gray-700" : "block px-4 py-2 cursor-pointer hover:bg-gray-700"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "block px-4 py-2 cursor-pointer bg-gray-700" : "block px-4 py-2 cursor-pointer hover:bg-gray-700"
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "block px-4 py-2 cursor-pointer bg-gray-700" : "block px-4 py-2 cursor-pointer hover:bg-gray-700"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "block px-4 py-2 cursor-pointer bg-gray-700" : "block px-4 py-2 cursor-pointer hover:bg-gray-700"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
