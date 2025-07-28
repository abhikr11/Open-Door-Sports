'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SchoolName } from './SchoolName';
import { IconsBox } from './IconsBox';

// ------------------- NavLink Component -------------------
export const NavLink = ({ to, text, className = '', onClick }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick();  // e.g., close dropdown
    router.push(to);         // SPA navigation
  };

  return (
    <button
      onClick={handleClick}
      className={`relative text-start inline-block text-[#0408C3] cursor-pointer font-medium text-[18px] px-3 py-2
                hover:text-[#17246D] transition duration-300 ease-in-out 
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                after:bg-[#17246D] after:transition-all after:duration-300 hover:after:w-full ${className}`}
    >
      {text}
    </button>
  );
};

// ------------------- Dropdown Menu Components -------------------
const ServiceMenu = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ type: "spring", stiffness: 120, damping: 15, mass: 0.5 }}
    className="min-w-45 min-h-60 bg-white border border-white rounded-sm shadow-md p-1 space-y-1"
  >
    <NavLink to="/services/sports" text="Sports" onClick={onClose} />
    <NavLink to="/services/birthdayEvents" text="Birthday Events" onClick={onClose} />
    <NavLink to="/services/parentToddler" text="Parent-Toddler" onClick={onClose} />
    <NavLink to="/services/intergratedProgram" text="Mental Wellness" onClick={onClose} />
    <NavLink to="/#allProgram" text="Our Programs" onClick={onClose} />
  </motion.div>
);

const ProgramMenu = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ type: "spring", stiffness: 120, damping: 15, mass: 0.5 }}
    className="min-w-45 max-w-45 min-h-60 bg-white border border-white rounded-sm shadow-md p-1 space-y-1"
  >
    <NavLink to="/program/toddlersProgram" text="Toddlers" onClick={onClose} />
    <NavLink to="/program/PreschoolersProgram" text="Preschoolers " onClick={onClose} />
    <NavLink to="/program/preLevelProgram" text="Prep Level" onClick={onClose} />
    <NavLink to="/program/abovePrepProgram" text="Above Prep Level" onClick={onClose} />
    <NavLink to="/#allProgram" text="Our Programs" onClick={onClose} />
  </motion.div>
);

// ------------------- Navbar Component -------------------
export const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(prev => !prev);
    setIsProgramsOpen(false); // close other
  };

  const togglePrograms = () => {
    setIsProgramsOpen(prev => !prev);
    setIsServicesOpen(false); // close other
  };

  const closeDropdowns = () => {
    setIsServicesOpen(false);
    setIsProgramsOpen(false);
  };

  return (
    <div className="fixed top-0 z-50 w-full py-3 px-6 lg:px-10 flex items-center justify-between 
                    bg-gradient-to-r from-white via-white-100/5 to-white/40 
                    backdrop-blur-md shadow-md border-b border-green-200/40">

      {/* Left: School Name or Logo */}
      <SchoolName />

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-2 h-[65px] items-center relative">
        <NavLink to="/#" text="Home" onClick={closeDropdowns} />
        <NavLink to="/about" text="About_Us" onClick={closeDropdowns} />

        {/* Services Dropdown */}
        <div className="relative">
          <button
            onClick={toggleServices}
            className="relative inline-block text-[#0408C3] font-medium text-[18px] px-3 py-2 cursor-pointer
                      hover:text-[#17246D] transition duration-300 ease-in-out"
          >
            Services
          </button>
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-12 left-0 w-fit bg-white/80 text-gray-800 border border-gray-200 
                          rounded-lg shadow-lg p-2 backdrop-blur-md z-50"
              >
                <ServiceMenu onClose={closeDropdowns} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Programs Dropdown */}
        <div className="relative">
          <button
            onClick={togglePrograms}
            className="relative inline-block text-[#0408C3] font-medium text-[18px] px-3 py-2 cursor-pointer
                      hover:text-[#17246D] transition duration-300 ease-in-out"
          >
            Programs
          </button>
          <AnimatePresence>
            {isProgramsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-12 left-0 w-fit bg-white/80 text-gray-800 border border-gray-200 
                          rounded-lg shadow-lg p-2 backdrop-blur-md z-50"
              >
                <ProgramMenu onClose={closeDropdowns} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Other Links */}
        <NavLink to="/gallery" text="Gallery" onClick={closeDropdowns} />
        <NavLink to="/careers" text="Careers" onClick={closeDropdowns} />
      </div>

      {/* Right: Icons */}
      <div className="items-center gap-2 flex">
        <IconsBox />
      </div>
    </div>
  );
};
