'use client';

import { NavLink } from "./Navbar2";
import { motion } from "framer-motion";

export const Dropdown = ({ onClose }) => {
  const linkBorder = "border-b border-blue w-full";

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
      className="flex flex-col gap-2 w-[250px] h-screen overflow-scroll bg-white border border-white rounded-sm shadow-md p-3 pb-15"
    >
      {/* Remix close icon */}
      <i
        className="ri-close-line cursor-pointer mx-auto mr-2 text-nav-text text-lg"
        onClick={onClose}
      ></i>

      <NavLink to="/" text="Home" className={linkBorder} />
      <NavLink to="/about" text="About Us" className={linkBorder} />
      <NavLink to="/services/sports" text="Sports" className={linkBorder} />
      <NavLink to="/gallery" text="Gallery" className={linkBorder} />
      <NavLink to="/careers" text="Careers" className={linkBorder} />
      <NavLink to="/#allProgram" text="Our Programs" className={linkBorder} />
      <NavLink to="/services/parentToddler" text="Parent-Toddler" className={linkBorder} />
      <NavLink to="/services/intergratedProgram" text="Integrated Program" className={linkBorder} />
      <NavLink to="/services/birthdayEvents" text="Birthday Events" className={linkBorder} />
    </motion.div>
  );
};
