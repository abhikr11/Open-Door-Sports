
'use client';

import Link from 'next/link';

export default function GalleryHero() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://readdy.ai/api/search-image?query=children%20participating%20in%20various%20sports%20activities%20including%20soccer%2C%20basketball%2C%20gymnastics%2C%20swimming%2C%20and%20team%20games%20in%20a%20bright%20colorful%20indoor%20sports%20facility%20with%20professional%20equipment%2C%20joyful%20atmosphere%2C%20diverse%20group%20of%20kids%20having%20fun%20together%2C%20modern%20sports%20center%20background%20with%20natural%20lighting&width=1920&height=1080&seq=gallery-hero-bg&orientation=landscape"
          alt="Sports Activities Gallery"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-transparent"></div>
      </div>

      

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-8">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Discover the joy, excitement, and growth happening in our sports programs. From toddlers taking their first steps to advanced athletes reaching new heights!
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-sm text-blue-200">Happy Moments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-sm text-blue-200">Events Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">4</div>
              <div className="text-sm text-blue-200">Age Programs</div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="#gallery" className="bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap">
              View Photos
            </a>
            {/* <Link href="/sports-events#contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all cursor-pointer whitespace-nowrap">
              Join Our Programs
            </Link> */}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-pink-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-20 h-20 bg-green-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
    </div>
  );
}
