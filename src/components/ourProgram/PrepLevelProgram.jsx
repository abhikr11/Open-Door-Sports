
'use client';

import Link from 'next/link';

export default function PrepLevelProgram() {
  const activities = [
    {
      title: "Specific Sports Training",
      description: "Introduction to soccer, basketball, tennis, and other structured sports activities",
      icon: "⚽"
    },
    {
      title: "Competitive Activities",
      description: "Structured competitions and challenges to apply developing skills",
      icon: "🏆"
    },
    {
      title: "Gross Motor Development",
      description: "Advanced coordination exercises and complex movement patterns",
      icon: "🤸"
    },
    {
      title: "Team Sports",
      description: "Collaborative sports activities that emphasize teamwork and strategy",
      icon: "👥"
    },
    {
      title: "Skill Refinement",
      description: "Focus on perfecting techniques and building sport-specific abilities",
      icon: "🎯"
    },
    {
      title: "Physical Conditioning",
      description: "Age-appropriate fitness training to build strength and endurance",
      icon: "💪"
    }
  ];

  const benefits = [
    "Significant improvement in gross motor development",
    "Enhanced coordination and athletic abilities",
    "Increased confidence through skill mastery",
    "Development of competitive spirit and sportsmanship",
    "Improved focus and concentration abilities",
    "Foundation for advanced athletic pursuits"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/sports-events" className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
              ← Back to Programs
            </Link>
            <div className="text-2xl font-bold text-gray-900" style={{fontFamily: "Pacifico, serif"}}>
              logo
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Ages 7.5 to 12 years
              </div>
              <h1 className="text-6xl font-black text-white mb-6">
                Prep Level <span className="text-yellow-200">Program</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                At this stage, children are introduced to specific sports and co-curricular activities that challenge and refine their growing abilities. The focus is on applying their developing skills in more structured and competitive settings.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Enroll Now
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Schedule a Visit
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Children%20aged%207%20to%2012%20years%20playing%20organized%20sports%20activities%20like%20soccer%20and%20basketball%2C%20kids%20practicing%20specific%20sports%20skills%20with%20proper%20equipment%2C%20competitive%20yet%20fun%20atmosphere%20in%20modern%20sports%20facility&width=600&height=500&seq=prep-level-hero&orientation=landscape"
                alt="Prep Level Program"
                className="w-full h-96 object-cover object-top rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl animate-bounce">
                ⚽
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
              Program <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Activities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured sports training and competitive activities designed to refine skills and build confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
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
      <section className="py-24 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              Program Benefits
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How our prep level program builds athletic skills and competitive confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Children%20aged%207%20to%2012%20years%20developing%20advanced%20sports%20skills%20through%20structured%20training%2C%20kids%20showing%20improved%20coordination%20and%20confidence%20in%20competitive%20settings%2C%20focus%20on%20skill%20refinement%20and%20athletic%20development&width=600&height=400&seq=prep-level-benefits&orientation=landscape"
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
              Schedule & <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Pricing</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Class Schedule</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                  <div>
                    <h4 className="font-bold text-gray-900">After School Sessions</h4>
                    <p className="text-gray-600">Perfect for school-age children</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">4:00 PM - 5:30 PM</p>
                    <p className="text-sm text-gray-600">Mon, Wed, Fri</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                  <div>
                    <h4 className="font-bold text-gray-900">Weekend Sessions</h4>
                    <p className="text-gray-600">Intensive training programs</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">9:00 AM - 11:00 AM</p>
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
                  <p className="text-3xl font-black text-green-400 mb-4">$150<span className="text-sm text-gray-300">/month</span></p>
                  <ul className="space-y-2 text-sm">
                    <li>• 16 sessions per month</li>
                    <li>• Small group setting (8-10 kids)</li>
                    <li>• Skill assessment included</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
                  <h4 className="text-xl font-bold mb-2">Drop-in Sessions</h4>
                  <p className="text-3xl font-black mb-4">$45<span className="text-sm">/session</span></p>
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
            Ready to Take Your Child's Skills to the Next Level?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join our prep level program and watch your child excel in structured sports and competitive activities
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
              Enroll Your Child Now
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
