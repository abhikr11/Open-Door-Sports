'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize(); // set once on mount
    window.addEventListener('resize', handleResize);

    const generatedParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Vibrant%20modern%20elementary%20school%20playground%20with%20colorful%20rainbow%20equipment%2C%20happy%20children%20playing%20together%2C%20bright%20sunny%20day%20with%20blue%20sky%2C%20lush%20green%20grass%2C%20educational%20play%20structures%2C%20contemporary%20school%20building%20with%20glass%20windows%2C%20natural%20lighting%2C%20joyful%20atmosphere%2C%20safe%20play%20environment%2C%20trees%20and%20flowers%2C%20welcoming%20community%20space%2C%20dynamic%20and%20energetic%20scene&width=1920&height=1080&seq=school-hero-enhanced&orientation=landscape')`
        }}
      />

      {/* Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-purple-900/70 to-pink-900/85"
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ x: p.x, y: p.y, scale: 0 }}
            animate={{ x: p.x, y: p.y, scale: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 w-full max-w-6xl">
        {/* School Name */}
        <motion.div
          initial={{ opacity: 0, y: -100, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', type: 'spring', stiffness: 100 }}
          className="mb-8"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bold mb-4 font-pacifico bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Open Door School
          </motion.h1>
        </motion.div>

        {/* Animated Slogan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut', type: 'spring', stiffness: 120 }}
          className="mb-12"
        >
          <div className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            {Array.from("COME, LET'S PLAY TOGETHER").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.04, duration: 0.4 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
            className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
          className="mb-16"
        >
          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            Where learning meets fun and every child discovers their potential through play, creativity, and friendship in a nurturing environment.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="/enrollment"
              className="relative bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden group"
            >
              <span className="relative z-10">Join Our Family</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="/virtual-tour"
              className="relative bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/20 hover:border-white/60 transition-all duration-300 whitespace-nowrap cursor-pointer group"
            >
              <span className="relative z-10">Take a Virtual Tour</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Decorative Blobs */}
        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 left-8 w-20 h-20 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [0, -40, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-32 right-12 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [0, -35, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-40 left-16 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [0, -25, 0], scale: [1, 1.4, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-60 right-20 w-18 h-18 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-sm"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            className="w-2 h-4 bg-gradient-to-b from-white to-transparent rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.p
          className="text-white/70 text-sm mt-2 font-light"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
}
