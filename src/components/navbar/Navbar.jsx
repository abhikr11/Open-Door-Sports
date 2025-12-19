'use client';

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SchoolName } from './SchoolName';
import { IconsBox } from './IconsBox';

// ------------------- NavLink Component -------------------
export const NavLink = ({ to, text, className = '', onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link
      href={to}
      onClick={onClick}
      className={`relative inline-block align-middle font-medium text-[18px] px-3 py-2
                 transition duration-300 ease-in-out 
                 after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                 after:bg-[#17246D] after:transition-all after:duration-300 
                 select-none cursor-pointer ${className}
                 ${isActive ? 'text-[#17246D] after:w-full' : 'text-[#0408C3] hover:text-[#17246D] after:w-0 hover:after:w-full'}`}
    >
      {text}
    </Link>
  );
};

// ------------------- Dropdown Menu Components -------------------
const ServiceMenu = ({ onClose }) => (
  <div className="min-w-45 min-h-50 bg-white border border-white rounded-sm shadow-md p-1 space-y-1">
    <NavLink to="/services/sports" text="Sports" onClick={onClose} />
    <NavLink to="/services/birthdayEvents" text="Birthday Events" onClick={onClose} />
    <NavLink to="/services/parentToddler" text="Parent Toddler" onClick={onClose} />
    <NavLink to="/services/afterSchool" text="After School" onClick={onClose} />
  </div>
);

const ProgramMenu = ({ onClose }) => (
  <div className="min-w-45 max-w-45 min-h-60 bg-white border border-white rounded-sm shadow-md p-1 space-y-1">
    <NavLink to="/program/toddlersProgram" text="Toddlers" onClick={onClose} />
    <NavLink to="/program/PreschoolersProgram" text="Preschoolers" onClick={onClose} />
    <NavLink to="/program/preLevelProgram" text="Prep Level" onClick={onClose} />
    <NavLink to="/program/abovePrepProgram" text="Above Prep Level" onClick={onClose} />
    <NavLink to="/services/intergratedProgram" text="Integrated" onClick={onClose} />
  </div>
);

// ------------------- Navbar Component -------------------
export const Navbar = () => {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const servicesRef = useRef(null);
  const programsRef = useRef(null);

  const closeDropdowns = () => {
    setIsServicesOpen(false);
    setIsProgramsOpen(false);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (
        !servicesRef.current?.contains(event.target) &&
        !programsRef.current?.contains(event.target)
      ) {
        closeDropdowns();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isServicesPath = pathname.startsWith('/services');
  const isProgramsPath = pathname.startsWith('/program');

  const Chevron = ({ isOpen }) => (
    <svg 
      className={`ml-1.5 w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
      fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const btnAnimation = `transition duration-300 ease-in-out 
                        after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                        after:bg-[#17246D] after:transition-all after:duration-300 
                        select-none cursor-pointer`;

  return (
    <div className="fixed top-0 z-50 w-full py-3 px-6 lg:px-10 flex items-center justify-between 
                    bg-gradient-to-r from-white via-white-100/5 to-white/40 
                    backdrop-blur-md shadow-md border-b border-green-200/40 cursor-default select-none">

      <SchoolName />

      <div className="hidden lg:flex gap-4 items-center relative h-full">
        <NavLink to="/#" text="Home" onClick={closeDropdowns} />
        <NavLink to="/about" text="About Us" onClick={closeDropdowns} />

        {/* Services Dropdown */}
        <div 
          className="relative py-2" 
          ref={servicesRef}
          onMouseEnter={() => { setIsServicesOpen(true); setIsProgramsOpen(false); }}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className={`relative inline-flex items-center font-medium text-[18px] px-3 py-1 
                        ${btnAnimation}
                        ${isServicesOpen || isServicesPath ? 'text-[#17246D] after:w-full' : 'text-[#0408C3] after:w-0'}`}
          >
            Services
            <Chevron isOpen={isServicesOpen} />
          </button>
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-1 w-fit bg-white/90 text-gray-800 border border-gray-200 
                          rounded-lg shadow-lg p-2 backdrop-blur-md z-50"
              >
                <ServiceMenu onClose={closeDropdowns} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Programs Dropdown */}
        <div 
          className="relative py-2" 
          ref={programsRef}
          onMouseEnter={() => { setIsProgramsOpen(true); setIsServicesOpen(false); }}
          onMouseLeave={() => setIsProgramsOpen(false)}
        >
          <button
            onClick={() => setIsProgramsOpen(!isProgramsOpen)}
            className={`relative inline-flex items-center font-medium text-[18px] px-3 py-1 
                        ${btnAnimation}
                        ${isProgramsOpen || isProgramsPath ? 'text-[#17246D] after:w-full' : 'text-[#0408C3] after:w-0'}`}
          >
            Program
            <Chevron isOpen={isProgramsOpen} />
          </button>
          <AnimatePresence>
            {isProgramsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-1 w-fit bg-white/90 text-gray-800 border border-gray-200 
                          rounded-lg shadow-lg p-2 backdrop-blur-md z-50"
              >
                <ProgramMenu onClose={closeDropdowns} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <NavLink to="/gallery" text="Gallery" onClick={closeDropdowns} />
        <NavLink to="/careers" text="Careers" onClick={closeDropdowns} />
      </div>

      <div className="items-center gap-2 flex">
        <IconsBox />
      </div>
    </div>
  );
};