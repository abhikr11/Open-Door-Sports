'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dropdown } from "./Dropdown";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const IconsBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconStyle =
    "w-6 h-6 text-nav-text cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-purple-500";

  return (
    <div className="gap-6 flex items-center">
      {/* Desktop icons */}
      <a
        href="https://www.facebook.com/opendoorsports19/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`ri-facebook-fill hidden xl:block ${iconStyle}`}></i>
      </a>

      <a
        href="https://www.instagram.com/opendoorsports_03/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`ri-instagram-line hidden xl:block ${iconStyle}`}></i>
      </a>

      <a
        href="https://wa.me/9593382777"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`ri-whatsapp-line hidden xl:block ${iconStyle}`}></i>
      </a>

      <a
        href="https://www.youtube.com/@opendoorsports3576"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`ri-youtube-fill hidden xl:block ${iconStyle}`}></i>
      </a>

      {/* Mobile menu icon */}
      <div className="relative lg:hidden cursor-pointer">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className={iconStyle} />
          ) : (
            <Bars3Icon className={iconStyle} />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[73px] left-0 w-full h-[calc(100vh-70px)] z-50 overflow-y-auto"
            >
              <Dropdown onClose={() => setIsOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
