
'use client';

import Link from 'next/link';

export default function AbovePrepProgram() {
  const activities = [
    {
      title: "Advanced Physical Fitness",
      description: "Comprehensive fitness training focusing on strength, endurance, and overall well-being",
      icon: "💪"
    },
    {
      title: "Health Awareness",
      description: "Education about nutrition, injury prevention, and maintaining a healthy lifestyle",
      icon: "🍎"
    },
    {
      title: "Leadership Development",
      description: "Opportunities to lead teams, mentor younger students, and develop leadership skills",
      icon: "👑"
    },
    {
      title: "Advanced Sports Training",
      description: "Specialized training in specific sports with focus on technique and strategy",
      icon: "🏅"
    },
    {
      title: "Team Building",
      description: "Complex group activities that emphasize collaboration and communication",
      icon: "🤝"
    },
    {
      title: "Personal Growth",
      description: "Self-assessment, goal setting, and personal development activities",
      icon: "🌟"
    }
  ];

  const benefits = [
    "Enhanced strength, endurance, and overall physical well-being",
    "Development of leadership qualities and mentoring abilities",
    "Improved teamwork and social skills",
    "Greater self-awareness and personal growth",
    "Preparation for advanced athletic challenges",
    "Foundation for lifelong fitness and health habits"
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-400 via-violet-400 to-indigo-400 py-30 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Ages 12 years and above
              </div>
              <h1 className="text-6xl font-black text-white mb-6">
                Above Prep Level <span className="text-yellow-200">Program</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                This advanced level emphasizes physical fitness, health awareness, and personal growth. It encourages students to recognize the progress they've made through regular physical activity, leading to enhanced strength, endurance, and overall well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Enroll Now
                </button>
                {/*<button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Schedule a Visit
                </button> */}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Teenagers%20aged%2012%20and%20above%20in%20advanced%20sports%20training%20and%20fitness%20activities%2C%20young%20athletes%20working%20out%20in%20modern%20gym%20facility%2C%20focus%20on%20strength%20training%20and%20team%20sports%2C%20leadership%20development%20through%20physical%20activities&width=600&height=500&seq=above-prep-hero&orientation=landscape"
                alt="Above Prep Level Program"
                className="w-full h-96 object-cover object-top rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl animate-bounce">
                🏆
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
              Program <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Activities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced training and development activities designed to build leaders and promote personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
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
      <section className="py-24 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              Program Benefits
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How our above prep level program develops leadership and promotes lifelong wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Teenagers%20demonstrating%20leadership%20in%20sports%20and%20fitness%20activities%2C%20young%20people%20mentoring%20others%20in%20advanced%20training%20programs%2C%20focus%20on%20personal%20growth%20and%20team%20leadership%20development&width=600&height=400&seq=above-prep-benefits&orientation=landscape"
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Schedule & <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Pricing</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Class Schedule</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                  <div>
                    <h4 className="font-bold text-gray-900">Advanced Training</h4>
                    <p className="text-gray-600">Comprehensive fitness program</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-purple-600">5:00 PM - 7:00 PM</p>
                    <p className="text-sm text-gray-600">Mon, Wed, Fri</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                  <div>
                    <h4 className="font-bold text-gray-900">Leadership Sessions</h4>
                    <p className="text-gray-600">Team building and mentoring</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-purple-600">10:00 AM - 12:00 PM</p>
                    <p className="text-sm text-gray-600">Sat, Sun</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-8">Pricing Options</h3>
              <div className="space-y-6">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <h4 className="text-xl font-bold mb-2">Monthly Package</h4>
                  <p className="text-3xl font-black text-purple-400 mb-4">$200<span className="text-sm text-gray-300">/month</span></p>
                  <ul className="space-y-2 text-sm">
                    <li>• 20 sessions per month</li>
                    <li>• Small group setting (8-10 participants)</li>
                    <li>• Leadership training included</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl">
                  <h4 className="text-xl font-bold mb-2">Drop-in Sessions</h4>
                  <p className="text-3xl font-black mb-4">$55<span className="text-sm">/session</span></p>
                  <ul className="space-y-2 text-sm">
                    <li>• Perfect for trying out the program</li>
                    <li>• No commitment required</li>
                    <li>• Book when convenient</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Ready to Develop Leadership and Excellence?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join our above prep level program and prepare for greater responsibilities and challenges
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
              Enroll in Advanced Program
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule a Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
