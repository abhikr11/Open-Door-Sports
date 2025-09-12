
'use client';

import Link from 'next/link';

export default function PreschoolersProgram() {
  const activities = [
    {
      title: "Structured Physical Activities",
      description: "Organized games and exercises designed to improve overall fitness and motor skills",
      icon: "🏃"
    },
    {
      title: "Talent Identification",
      description: "Observing and nurturing individual strengths and natural abilities in various activities",
      icon: "⭐"
    },
    {
      title: "Coordination Development",
      description: "Activities focused on hand-eye coordination, balance, and spatial awareness",
      icon: "🎯"
    },
    {
      title: "Team Building Games",
      description: "Group activities that promote cooperation, sharing, and social skills",
      icon: "🤝"
    },
    {
      title: "Basic Sports Introduction",
      description: "Fun introduction to simple sports concepts and equipment handling",
      icon: "⚽"
    },
    {
      title: "Confidence Building",
      description: "Positive reinforcement activities that boost self-esteem and courage",
      icon: "💪"
    }
  ];

  const benefits = [
    "Enhanced physical fitness and overall health",
    "Identification and development of individual talents",
    "Improved coordination and motor skill development",
    "Building strength and endurance through play",
    "Development of social skills and teamwork",
    "Establishing foundation for future athletic pursuits"
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 py-30 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Ages 4.5 to 7 years
              </div>
              <h1 className="text-6xl font-black text-white mb-6">
                Preschoolers <span className="text-yellow-200">Program</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                At this stage, our focus is on fostering the overall physical development of the child. The program is designed to enhance physical fitness, while also identifying and nurturing individual talents and motor skills.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Enroll Now
                </button> */}
                {/* <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Schedule a Visit
                </button> */}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Preschool%20children%20aged%204%20to%207%20years%20participating%20in%20structured%20physical%20activities%20and%20games%2C%20kids%20doing%20coordination%20exercises%20with%20colorful%20sports%20equipment%2C%20professional%20instructor%20demonstrating%20movements%2C%20bright%20gymnasium%20setting%20with%20safety%20mats&width=600&height=500&seq=preschoolers-hero&orientation=landscape"
                alt="Preschoolers Program"
                className="w-full h-96 object-cover object-top rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl animate-bounce">
                🌟
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
              Program <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Activities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured activities designed to enhance physical fitness and identify individual talents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
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
      <section className="py-24 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              Program Benefits
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How our preschoolers program supports your child's physical and social development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Preschool%20children%20developing%20physical%20fitness%20and%20coordination%20skills%20through%20structured%20activities%2C%20kids%20practicing%20with%20age-appropriate%20sports%20equipment%2C%20focus%20on%20talent%20identification%20and%20skill%20development&width=600&height=400&seq=preschoolers-benefits&orientation=landscape"
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
      {/* <section className="py-24 bg-white"> */}
        {/* <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Schedule & <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Pricing</span>
            </h2>
          </div> */}

          {/* <div className="grid lg:grid-cols-2 gap-12">
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Class Schedule</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                  <div>
                    <h4 className="font-bold text-gray-900">Morning Sessions</h4>
                    <p className="text-gray-600">Perfect for active preschoolers</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">10:00 AM - 11:30 AM</p>
                    <p className="text-sm text-gray-600">Mon, Wed, Fri</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                  <div>
                    <h4 className="font-bold text-gray-900">Afternoon Sessions</h4>
                    <p className="text-gray-600">After-school program</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">4:00 PM - 5:30 PM</p>
                    <p className="text-sm text-gray-600">Tue, Thu, Sat</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-8">Pricing Options</h3>
              <div className="space-y-6">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <h4 className="text-xl font-bold mb-2">Monthly Package</h4>
                  <p className="text-3xl font-black text-blue-400 mb-4">$120<span className="text-sm text-gray-300">/month</span></p>
                  <ul className="space-y-2 text-sm">
                    <li>• 12 sessions per month</li>
                    <li>• Small group setting (8-10 kids)</li>
                    <li>• Talent assessment included</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                  <h4 className="text-xl font-bold mb-2">Drop-in Sessions</h4>
                  <p className="text-3xl font-black mb-4">$35<span className="text-sm">/session</span></p>
                  <ul className="space-y-2 text-sm">
                    <li>• Perfect for trying out the program</li>
                    <li>• No commitment required</li>
                    <li>• Book when convenient</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      {/* </section> */}

      {/* CTA Section */}
      {/* <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Ready to Develop Your Child's Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join our preschoolers program and help your child discover their talents while building fitness
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
              Enroll Your Preschooler Now
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule a Free Trial
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
