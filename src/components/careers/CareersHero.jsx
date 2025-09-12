'use client';

export default function CareersHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-25">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=diverse%20group%20of%20enthusiastic%20sports%20coaches%20and%20trainers%20working%20with%20children%20in%20a%20bright%20modern%20gym%20facility%2C%20professional%20training%20environment%2C%20coaching%20basketball%20volleyball%20and%20fitness%20activities%2C%20vibrant%20colorful%20atmosphere%2C%20teamwork%20and%20mentorship%2C%20natural%20lighting%2C%20modern%20sports%20equipment%2C%20inclusive%20diverse%20team%20of%20professional%20coaches%2C%20motivational%20and%20inspiring%20setting&width=1920&height=1080&seq=careers-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Careers at 
            <span className="text-yellow-400 block" style={{ fontFamily: 'Pacifico, serif' }}>
              Open Door Sports
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed">
            Are you passionate about fitness, child development, and making a meaningful impact in children's lives? Join the Open Door Sports team and be part of a growing movement that promotes holistic growth through physical activity and play.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-12">
            <p className="text-lg text-white leading-relaxed">
              We're always looking for dedicated, energetic, and inspiring individuals to join us as coaches, trainers, and program facilitators.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              <i className="ri-file-text-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Apply Now
            </button>
            {/* <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-team-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Meet Our Team
            </button> */}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line w-8 h-8 flex items-center justify-center text-white text-3xl"></i>
      </div>
    </section>
  );
}