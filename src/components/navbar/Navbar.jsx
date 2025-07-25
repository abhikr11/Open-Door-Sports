'use client';
import { useState } from "react";
import Link from 'next/link';
import { SchoolName } from './SchoolName';
import { IconsBox } from './IconsBox';
import { AnimatePresence, motion } from "framer-motion";
import { ServiceMenu } from "./serviceMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <div className="fixed top-0 z-50 w-full py-3 px-6 lg:px-10 flex items-center justify-between 
                    bg-gradient-to-r from-white via-white-100/5 to-white/40 
                    backdrop-blur-md shadow-md border-b border-green-200/40">
      {/* Left: School Logo or Name */}
      <SchoolName />

      {/* Center: Navigation */}
      <div className="hidden md:flex gap-5 h-[65px] items-center relative">
        <NavLink to="/#" text="Home" />
        {/* Services Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown}>
            <NavLink to="#" text="Services" />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-12 left-0 w-56 bg-white/80 text-gray-800 border border-gray-200 
                  rounded-lg shadow-lg p-4 backdrop-blur-md z-50"
              >
                <ServiceMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <NavLink to="/about" text="About Us" />
        <NavLink to="/gallery" text="Gallery" />
        <NavLink to="/careers" text="Careers" />
      </div>


      <div className="items-center gap-2 flex">
        <IconsBox />
      </div>
    </div>
  );
};

// NavLink Component
export const NavLink = ({ to, text, className = '' }) => {
  return (
    <Link
      href={to}
      className={`relative inline-block text-[#0408C3] font-medium text-[20px] px-3 py-2 
        hover:text-[#17246D] transition duration-300 ease-in-out 
        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
        after:bg-[#17246D] after:transition-all after:duration-300 hover:after:w-full ${className}`}
    >
      {text}
    </Link>
  );
};
