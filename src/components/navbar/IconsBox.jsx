'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dropdown } from "./Dropdown";

export const IconsBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconStyle =
    "text-xl text-nav-text cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-purple-500";

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
        <i
          className={`ri-menu-3-line ${iconStyle}`}
          onClick={() => setIsOpen(!isOpen)}
        ></i>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute -right-6 -top-3 rounded-sm"
            >
              <Dropdown onClose={() => setIsOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
