'use client';

import { motion } from 'framer-motion';
import React from 'react';

const directionMap = {
  left: { x: -100, y: 0 },
  right: { x: 100, y: 0 },
  up: { x: 0, y: -100 },
  down: { x: 0, y: 100 },
};

const SlideInView = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.8,
  className = '',
}) => {
  const initial = directionMap[direction] || { x: 0, y: 0 };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ ...initial, opacity: 0, position: 'absolute' }}
        whileInView={{ x: 0, y: 0, opacity: 1, position: 'relative' }}
        transition={{ duration, delay, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideInView;
