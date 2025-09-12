'use client';

import Link from 'next/link';

export default function SportsHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-500 via-sky-500 to-indigo-600 flex items-center py-25">
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-sky-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-cyan-300/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-teal-300/20 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold">🏆 Professional Sports Events</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-sky-200 to-blue-300 bg-clip-text text-transparent">
                Sports
              </span>
              <br />
              <span className="text-white">Events</span>
            </h1>

            <p className="text-xl mb-8 text-gray-100 leading-relaxed">
              Transform ordinary days into extraordinary memories with our dynamic sports events. From school competitions to birthday celebrations, we bring energy, excitement, and professional organization to every occasion.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <i className="ri-shield-check-line w-5 h-5 flex items-center justify-center text-green-300 mr-2"></i>
                <span className="text-sm">Safety First</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <i className="ri-team-line w-5 h-5 flex items-center justify-center text-teal-300 mr-2"></i>
                <span className="text-sm">Expert Team</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <i className="ri-star-line w-5 h-5 flex items-center justify-center text-indigo-200 mr-2"></i>
                <span className="text-sm">Memorable</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                <i className="ri-calendar-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
                Book Your Event
              </button> */}
              <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/30 transition-all duration-300 whitespace-nowrap cursor-pointer">
                <i className="ri-play-circle-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <img 
                src="https://readdy.ai/api/search-image?query=Energetic%20children%20and%20teenagers%20in%20colorful%20sports%20uniforms%20jumping%20and%20celebrating%20with%20raised%20arms%2C%20dynamic%20action%20shot%20with%20motion%20blur%2C%20bright%20stadium%20lights%2C%20confetti%20and%20sports%20equipment%20in%20background%2C%20vibrant%20and%20exciting%20atmosphere&width=600&height=700&seq=hero-sports-new&orientation=portrait"
                alt="Sports Events"
                className="w-full h-96 object-cover object-top rounded-2xl mb-6"
              />

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-sky-300">500+</div>
                  <div className="text-sm text-gray-200">Events Organized</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-300">15K+</div>
                  <div className="text-sm text-gray-200">Happy Participants</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-300">98%</div>
                  <div className="text-sm text-gray-200">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-2xl animate-spin-slow">
              🏃‍♂️
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-cyan-500 rounded-full flex items-center justify-center text-xl animate-bounce">
              ⚽
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
