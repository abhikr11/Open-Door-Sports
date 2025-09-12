
'use client';

import Link from 'next/link';

export default function ToddlersProgram() {
  const activities = [
    {
      title: "Basic Movement Skills",
      description: "Crawling, walking, running, jumping - building fundamental locomotor abilities",
      icon: "🚶"
    },
    {
      title: "Balance & Coordination",
      description: "Simple balance games, walking on lines, basic coordination exercises",
      icon: "⚖️"
    },
    {
      title: "Social Play",
      description: "Group activities that encourage interaction and communication with peers",
      icon: "👥"
    },
    {
      title: "Sensory Exploration",
      description: "Tactile activities with different textures, colors, and safe equipment",
      icon: "🌈"
    },
    {
      title: "Rhythm & Music",
      description: "Moving to music, clapping games, and rhythm-based activities",
      icon: "🎵"
    },
    {
      title: "Safety Awareness",
      description: "Learning basic safety rules through fun, age-appropriate activities",
      icon: "🛡️"
    }
  ];

  const benefits = [
    "Develops essential motor skills and physical coordination",
    "Builds confidence in movement and physical activities",
    "Encourages social interaction and communication skills",
    "Provides a safe environment for exploration and learning",
    "Establishes healthy habits and positive attitudes toward exercise",
    "Supports cognitive development through physical play"
  ];

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-400 via-rose-400 to-orange-400 py-30 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Ages 1.5 to 4 years
              </div>
              <h1 className="text-6xl font-black text-white mb-6">
                Toddlers <span className="text-yellow-200">Program</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                This foundational stage is crucial for developing essential movement and locomotor skills. Our program is thoughtfully designed to nurture these abilities in a safe, engaging, and playful environment.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <button className="bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Enroll Now
                </button> */}
                {/* <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Schedule a Visit
                </button> */}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Happy%20toddlers%20aged%201.5%20to%204%20years%20playing%20with%20colorful%20soft%20sports%20equipment%20and%20toys%20in%20a%20bright%2C%20safe%20indoor%20play%20area%20with%20padded%20floors%2C%20professional%20instructor%20sitting%20with%20children%2C%20warm%20lighting%20and%20cheerful%20atmosphere&width=600&height=500&seq=toddlers-hero&orientation=landscape"
                alt="Toddlers Program"
                className="w-full h-96 object-cover object-top rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl animate-bounce">
                🧸
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Program <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Activities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully designed activities that promote physical, social, and cognitive development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              Program Benefits
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How our toddlers program supports your child's development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Toddlers%20learning%20basic%20movements%20and%20coordination%20skills%20in%20a%20colorful%20play%20environment%2C%20children%20playing%20with%20soft%20equipment%2C%20instructor%20demonstrating%20simple%20exercises%2C%20focus%20on%20developmental%20activities&width=600&height=400&seq=toddlers-benefits&orientation=landscape"
                alt="Program Benefits"
                className="w-full h-80 object-cover object-top rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                    {index + 1}
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Pricing */}
      
      {/* CTA Section */}
      
    </div>
  );
}
