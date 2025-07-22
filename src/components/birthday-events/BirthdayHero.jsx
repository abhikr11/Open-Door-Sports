
'use client';

import Link from 'next/link';

export default function BirthdayHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Vibrant%20colorful%20birthday%20party%20celebration%20with%20children%20playing%20active%20sports%20games%20and%20activities%20in%20a%20bright%20indoor%20gym%20setting%2C%20balloons%20and%20decorations%2C%20energetic%20kids%20jumping%20and%20running%2C%20warm%20lighting%2C%20festive%20atmosphere%2C%20modern%20sports%20facility%20background&width=1920&height=1080&seq=birthday-hero&orientation=landscape')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-1/2">
          <div className="mb-6">
            <span className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🎉 Birthday Events
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Make Your Child's Special Day 
            <span className="text-purple-600"> Active</span> and 
            <span className="text-pink-600"> Memorable</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            While cake and presents are highlights of any birthday, adding interactive physical games and activities makes the celebration truly unforgettable. Open Door Sports organizes fun-filled, age-appropriate activities that keep kids entertained, energized, and socially engaged throughout the event.
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            From obstacle courses to group games, we bring the excitement of sports into your child's celebration, ensuring a day full of laughter, movement, and joyful memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
              Book Your Party
            </button>
            <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
              View Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
