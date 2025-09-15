'use client';

import { NavLink } from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { XMarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

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
      {/* Close Icon */}
      <XMarkIcon
        className="w-6 h-6 cursor-pointer mx-auto mr-2 text-nav-text"
        onClick={onClose}
      />

      {/* Nav Links */}
      <NavLink to="/" text="Home" onClick={onClose} />
      <NavLink to="/about" text="About Us" onClick={onClose} />

      {/* Services Submenu */}
      <button
        className="flex justify-between w-full text-left text-[#0408C3] text-[18px] px-2 py-1 hover:bg-gray-100 rounded font-medium"
        onClick={() => toggleSubmenu("services")}
      >
        <span>Services</span>
        {activeSubmenu === "services" ? (
          <ChevronUpIcon className="w-5 h-5 text-[#0408C3]" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-[#0408C3]" />
        )}
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
            <NavLink to="/services/sports" className="text-[10px] text-[#373755]" text="Sports" onClick={onClose} />
            <NavLink to="/services/birthdayEvents" className="text-[10px] text-[#373755]" text="Birthday Events" onClick={onClose} />
            <NavLink to="/services/parentToddler" className="text-[10px] text-[#373755]" text="Parent Toddler" onClick={onClose} />
            <NavLink to="/services/afterSchool" className="text-[10px] text-[#373755]" text="After School" onClick={onClose} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Program Submenu */}
      <button
        className="flex justify-between w-full text-left text-[#0408C3] font-medium text-[18px] px-2 py-1 hover:bg-gray-100 rounded"
        onClick={() => toggleSubmenu("programs")}
      >
        <span>Program</span>
        {activeSubmenu === "programs" ? (
          <ChevronUpIcon className="w-5 h-5 text-[#0408C3]" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-[#0408C3]" />
        )}
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
            <NavLink to="/program/toddlersProgram" className="text-[10px] text-[#373755]" text="Toddlers" onClick={onClose} />
            <NavLink to="/program/PreschoolersProgram" className="text-[10px] text-[#373755]" text="Preschoolers" onClick={onClose} />
            <NavLink to="/program/preLevelProgram" className="text-[10px] text-[#373755]" text="Prep Level" onClick={onClose} />
            <NavLink to="/program/abovePrepProgram" className="text-[10px] text-[#373755]" text="Above Prep Level" onClick={onClose} />
            <NavLink to="/services/intergratedProgram" className="text-[10px] text-[#373755]" text="Intergrated" onClick={onClose} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Other Nav Links */}
      <NavLink to="/gallery" text="Gallery" onClick={onClose} />
      <NavLink to="/careers" text="Careers" onClick={onClose} />

      {/* Social Icons (mobile only) */}
      <div className="flex justify-center gap-4 mt-4 xl:hidden">
        <a
          href="https://www.facebook.com/opendoorsports19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-facebook-fill text-xl text-[#0408C3] hover:text-purple-500 transition-colors"></i>
        </a>

        <a
          href="https://www.instagram.com/opendoorsports_03/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-instagram-line text-xl text-[#0408C3] hover:text-purple-500 transition-colors"></i>
        </a>

        <a
          href="https://wa.me/9593382777"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-whatsapp-line text-xl text-[#0408C3] hover:text-purple-500 transition-colors"></i>
        </a>

        <a
          href="https://www.youtube.com/@opendoorsports3576"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-youtube-fill text-xl text-[#0408C3] hover:text-purple-500 transition-colors"></i>
        </a>
      </div>
    </motion.div>
  );
};
