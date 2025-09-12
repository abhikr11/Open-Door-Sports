'use client';

export default function AboutHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Children%20playing%20various%20sports%20and%20physical%20activities%20in%20a%20modern%20sports%20facility%2C%20diverse%20group%20of%20kids%20engaged%20in%20teamwork%2C%20bright%20natural%20lighting%2C%20contemporary%20sports%20equipment%2C%20inclusive%20environment%20showing%20children%20of%20different%20abilities%20participating%20together%2C%20vibrant%20colors%2C%20inspiring%20athletic%20development%20setting%20with%20open%20spaces%20and%20professional%20coaching%20equipment&width=1920&height=1080&seq=about-hero-sports&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-blue-900/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-left text-white">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Open Door Sports
            </span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl leading-relaxed text-gray-200">
            Dedicated to fostering overall gross motor development of children through thoughtfully curated physical activities and sports programs.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              <i className="ri-team-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Our Programs
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Contact Us
            </button>
          </div> */}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line w-8 h-8 flex items-center justify-center text-2xl"></i>
      </div>
    </div>
  );
}