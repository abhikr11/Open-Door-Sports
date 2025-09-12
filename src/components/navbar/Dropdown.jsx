'use client';

import { NavLink } from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Dropdown = ({ onClose }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

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
      className="grid grid-cols-1 min-w-[220px] bg-white border border-white rounded-3xl shadow-md p-2 space-y-2"
    >
      {/* Remix close icon */}
      <i
        className="ri-close-line cursor-pointer mx-auto mr-2 text-nav-text text-2xl"
        onClick={onClose}
      ></i>

      <NavLink to="/" text="Home" onClick={onClose} />
      <NavLink to="/about" text="About Us" onClick={onClose} />

      {/* Our Services with Submenu */}
      <button
        className="text-left text-[#0408C3]  text-[18px]  px-2 py-1 hover:bg-gray-100 rounded font-medium"
        onClick={() => toggleSubmenu("services")}
      >
        Our Services {activeSubmenu === "services" ? "▲" : "▼"}
      </button>
      <AnimatePresence>
        {activeSubmenu === "services" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 space-y-1"
          >
            <NavLink to="/services/sports" className="text-[10px] text-[#373755]" text="- Sports" onClick={onClose} />
            <NavLink to="/services/birthdayEvents" className="text-[10px] text-[#373755]"  text="- Birthday Events" onClick={onClose} />
            <NavLink to="/services/parentToddler" className="text-[10px] text-[#373755]"  text="- Parent-Toddler" onClick={onClose} />
            <NavLink to="/services/afterSchool" className="text-[10px] text-[#373755]"  text="- After School" onClick={onClose} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Our Programs with Submenu */}
      <button
        className="text-left text-[#0408C3] font-medium text-[18px] px-2 py-1 hover:bg-gray-100 rounded "
        onClick={() => toggleSubmenu("programs")}
      >
        Our Programs {activeSubmenu === "programs" ? "▲" : "▼"}
      </button>
      <AnimatePresence>
        {activeSubmenu === "programs" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 space-y-1"
          >
            <NavLink to="/program/toddlersProgram" className="text-[10px] text-[#373755]"  text=" - Toddlers" onClick={onClose} />
            <NavLink to="/program/PreschoolersProgram" className="text-[10px] text-[#373755]"  text="- Preschoolers " onClick={onClose} />
            <NavLink to="/program/preLevelProgram" className="text-[10px] text-[#373755]"   text="- Prep Level" onClick={onClose} />
            <NavLink to="/program/abovePrepProgram" className="text-[10px] text-[#373755]"  text="- Above Prep LeveL" onClick={onClose} />
            <NavLink to="/services/intergratedProgram" className="text-[10px] text-[#373755]"  text="- Intergrated" onClick={onClose} />
          </motion.div>

        )}
      </AnimatePresence>

      <NavLink to="/gallery" text="Gallery" onClick={onClose} />
      <NavLink to="/careers" text="Careers" onClick={onClose} />
    </motion.div>
  );
};
