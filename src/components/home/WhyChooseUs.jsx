'use client';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Comprehensive safety protocols and professional supervision ensure worry-free experiences.",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: "⏰",
      title: "Expert Planning",
      description: "2-month preparation timeline guarantees flawless execution and confident participation.",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: "👨‍💼",
      title: "Professional Team",
      description: "Certified sports organizers with years of experience in event management.",
      color: "from-purple-400 to-indigo-600"
    },
    {
      icon: "✨",
      title: "Memorable Moments",
      description: "Creating lasting memories through engaging, well-structured activities.",
      color: "from-pink-400 to-rose-600"
    },
    {
      icon: "🎯",
      title: "Complete Solution",
      description: "End-to-end service from initial planning to final execution.",
      color: "from-orange-400 to-red-600"
    },
    {
      icon: "👶",
      title: "Age-Appropriate",
      description: "Tailored activities for different age groups ensuring inclusive participation.",
      color: "from-yellow-400 to-amber-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Why <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Open Door Sports</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional expertise meets passionate dedication to create unforgettable sporting experiences
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-300">Events Organized</div>
            </div>
            
            <div className="group">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                15K+
              </div>
              <div className="text-gray-300">Happy Participants</div>
            </div>
            
            <div className="group">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            
            <div className="group">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-300">Expert Staff</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}