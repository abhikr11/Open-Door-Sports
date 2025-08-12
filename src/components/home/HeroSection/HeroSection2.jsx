'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection2() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Vibrant%20modern%20elementary%20school%20playground%20with%20colorful%20rainbow%20equipment%2C%20happy%20children%20playing%20together%2C%20bright%20sunny%20day%20with%20blue%20sky%2C%20lush%20green%20grass%2C%20educational%20play%20structures%2C%20contemporary%20school%20building%20with%20glass%20windows%2C%20natural%20lighting%2C%20joyful%20atmosphere%2C%20safe%20play%20environment%2C%20trees%20and%20flowers%2C%20welcoming%20community%20space%2C%20dynamic%20and%20energetic%20scene&width=1920&height=1080&seq=school-hero-enhanced&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-blue-900/60 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-left text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl lg:text-7xl font-bold mb-6 leading-tight mt-20"
        >
          Welcome to
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300">
            Open Door Sports
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl lg:text-2xl mb-8 max-w-3xl leading-relaxed text-gray-200"
        >
          Where learning meets fun and every child discovers their potential through play, creativity, and friendship in a nurturing environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/enrollment"
            className="max-w-40 bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Enroll Now
          </Link>
          {/* <Link
            href="/virtual-tour"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            Take a Virtual Tour
          </Link> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <i className="ri-arrow-down-line text-white text-3xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
