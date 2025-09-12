'use client';


export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20educational%20environment%20with%20diverse%20students%20engaged%20in%20holistic%20learning%20activities%20including%20physical%20exercise%2C%20mindfulness%2C%20and%20academic%20work%2C%20bright%20natural%20lighting%2C%20contemporary%20school%20setting%20with%20open%20spaces%2C%20inclusive%20atmosphere%20showing%20children%20of%20different%20abilities%20working%20together%2C%20clean%20minimalist%20design%20with%20soft%20pastel%20colors%2C%20inspiring%20and%20nurturing%20educational%20space&width=1920&height=1080&seq=hero-integrated-program&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-left text-white">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Integrated
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              Program
            </span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl leading-relaxed text-gray-200">
            A comprehensive initiative nurturing overall well-being and development of students through mental wellness, physical health, nutrition, and education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              <i className="ri-play-circle-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Learn More
            </button> */}
            {/* <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Contact Us
            </button> */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line w-8 h-8 flex items-center justify-center text-2xl"></i>
      </div>
    </div>
  );
}
