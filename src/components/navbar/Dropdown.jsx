'use client';

import { NavLink } from "./Navbar";
import { motion } from "framer-motion";

export const Dropdown = ({ onClose }) => {
  

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5,
      }}
      className="grid grid-cols-1 min-w-[200px] max-h-[480px] bg-white border border-white rounded-sm shadow-md p-2 pb-8"
    >
      {/* Remix close icon */}
      <i
        className="ri-close-line cursor-pointer mx-auto mr-2 text-nav-text text-lg"
        onClick={onClose}
      ></i>

      <NavLink to="/" text="Home"  />
      <NavLink to="/about" text="About Us"  />
      <NavLink to="/services/sports" text="Sports" onClick={onClose} />
      <NavLink to="/gallery" text="Gallery"  onClick={onClose}/>
      <NavLink to="/careers" text="Careers" onClick={onClose} />
      <NavLink to="/#allProgram" text="Our Programs" onClick={onClose} />
      <NavLink to="/services/parentToddler" text="Parent-Toddler"  onClick={onClose}/>
      <NavLink to="/services/intergratedProgram" text="Integrated Program"  onClick={onClose}/>
      <NavLink to="/services/birthdayEvents" text="Birthday Events" onClick={onClose} />
    </motion.div>
  );
};
