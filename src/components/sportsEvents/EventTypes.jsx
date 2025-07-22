'use client';

export default function EventTypes() {
  const eventTypes = [
    {
      title: 'Annual Sports Day',
      description: 'Complete sports day celebration with multiple activities',
      image: 'https://readdy.ai/api/search-image?query=Large%20school%20annual%20sports%20day%20celebration%20with%20students%20participating%20in%20various%20track%20and%20field%20events%2C%20colorful%20banners%20and%20decorations%2C%20parents%20cheering%20in%20stands%2C%20medal%20ceremony%20podium%20setup%2C%20festive%20atmosphere%20with%20organized%20competition%20events%2C%20professional%20sports%20day%20management%20with%20clear%20activity%20stations&width=600&height=400&seq=annual-sports-day&orientation=landscape',
      features: [
        'Multi-age group activities',
        'Track and field events',
        'Team competitions',
        'Awards ceremony',
        'Parent participation',
        'Professional photography'
      ]
    },
    {
      title: 'Inter-House Competitions',
      description: 'Competitive events between different school houses',
      image: 'https://readdy.ai/api/search-image?query=School%20inter-house%20sports%20competition%20with%20students%20wearing%20different%20colored%20house%20uniforms%2C%20competitive%20team%20sports%20activities%2C%20scoreboards%20showing%20house%20points%2C%20enthusiastic%20cheering%20sections%2C%20organized%20team%20formations%2C%20school%20sports%20facility%20with%20house%20banners%20and%20team%20spirit%20displays&width=600&height=400&seq=inter-house-competition&orientation=landscape',
      features: [
        'House-wise team formation',
        'Point-based scoring system',
        'Multiple sport categories',
        'Team spirit activities',
        'House pride celebrations',
        'Championship trophies'
      ]
    },
    {
      title: 'Fun Sports Events',
      description: 'Recreational activities focused on enjoyment and participation',
      image: 'https://readdy.ai/api/search-image?query=Children%20enjoying%20fun%20sports%20activities%20and%20games%20in%20school%20playground%2C%20non-competitive%20recreational%20sports%2C%20laughing%20children%20playing%20creative%20games%2C%20colorful%20play%20equipment%20and%20obstacle%20courses%2C%20inclusive%20activities%20for%20all%20abilities%2C%20joyful%20atmosphere%20with%20emphasis%20on%20participation%20over%20competition&width=600&height=400&seq=fun-sports-events&orientation=landscape',
      features: [
        'Non-competitive games',
        'Creative obstacle courses',
        'Team building activities',
        'Inclusive participation',
        'Skill-based challenges',
        'Participation certificates'
      ]
    },
    {
      title: 'Tournament Events',
      description: 'Competitive tournaments for skilled athletes',
      image: 'https://readdy.ai/api/search-image?query=School%20sports%20tournament%20with%20competitive%20matches%20in%20progress%2C%20skilled%20young%20athletes%20competing%20in%20various%20sports%2C%20professional%20tournament%20setup%20with%20scoreboards%20and%20timing%20systems%2C%20intense%20competition%20atmosphere%2C%20coaches%20providing%20guidance%2C%20awards%20podium%20ready%20for%20winners&width=600&height=400&seq=tournament-events&orientation=landscape',
      features: [
        'Skilled athlete competitions',
        'Professional officiating',
        'Tournament brackets',
        'Performance tracking',
        'Elite athlete recognition',
        'Championship medals'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Types of Sports Events
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We organize various types of sports events tailored to different objectives, age groups, and skill levels to ensure every participant has a memorable experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {eventTypes.map((event, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-64">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-500 mr-3"></i>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              Custom Event Solutions
            </h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Don't see exactly what you're looking for? We create custom sports events tailored to your specific needs, budget, and objectives. Every event is unique and designed to deliver maximum impact.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              <i className="ri-settings-3-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Customize Your Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
