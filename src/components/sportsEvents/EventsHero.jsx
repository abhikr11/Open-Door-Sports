
'use client';

export default function EventsHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Large%20outdoor%20school%20sports%20day%20event%20with%20children%20of%20various%20ages%20participating%20in%20different%20athletic%20activities%2C%20colorful%20sports%20equipment%20scattered%20around%2C%20teachers%20and%20parents%20cheering%20in%20the%20background%2C%20bright%20sunny%20day%20with%20clear%20orange%20and%20yellow%20sky%2C%20professional%20sports%20event%20setup%20with%20orange%20and%20yellow%20banners%20and%20organizing%20stations%2C%20vibrant%20and%20energetic%20atmosphere%2C%20modern%20sports%20facility%20with%20running%20tracks%20and%20field%20areas&width=1920&height=1080&seq=sports-events-hero-orange&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-yellow-600/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Sports Events
          </h1>
          <p className="text-2xl lg:text-3xl text-yellow-100 mb-8 font-medium">
            Celebrate Movement, Competition, and Team Spirit
          </p>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl">
            Sports Day is a memorable occasion where students, teachers, and parents come together to celebrate physical fitness and teamwork through a variety of sporting activities. We offer comprehensive end-to-end event organization solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-event-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Plan Your Event
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-download-2-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Event Portfolio
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line w-8 h-8 flex items-center justify-center text-white text-3xl"></i>
      </div>
    </section>
  );
}
