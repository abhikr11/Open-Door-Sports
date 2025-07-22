import React from 'react';

function KeyElements() {
  const elements = [
    {
      icon: 'ri-brain-line',
      title: 'Mental Wellness',
      description:
        'Activities and sessions that promote emotional intelligence, stress management, self-expression, and resilience—fostering a positive and stable mindset in students.',
      color: 'from-blue-500 to-indigo-600',
      features: ['Emotional Intelligence', 'Stress Management', 'Self-Expression', 'Resilience Building'],
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Physical Health',
      description:
        'Structured fitness routines, movement-based learning, and engaging exercises that improve strength, flexibility, coordination, and overall fitness.',
      color: 'from-green-500 to-emerald-600',
      features: ['Fitness Routines', 'Movement Learning', 'Strength Building', 'Coordination Training'],
    },
    {
      icon: 'ri-restaurant-line',
      title: 'Nutrition Awareness',
      description:
        'Educational components that teach students the importance of balanced eating, hydration, and healthy lifestyle choices.',
      color: 'from-orange-500 to-red-500',
      features: ['Balanced Eating', 'Hydration Education', 'Healthy Choices', 'Lifestyle Habits'],
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Academic Support',
      description:
        'Activities that support focus, concentration, and cognitive development—ensuring physical well-being complements academic progress.',
      color: 'from-purple-500 to-pink-500',
      features: ['Focus Enhancement', 'Concentration Skills', 'Cognitive Development', 'Academic Integration'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Key Program Elements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach focuses on four essential pillars that work together to create a balanced and nurturing educational experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {elements.map((element, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${element.color} p-6`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <i className={`${element.icon} w-6 h-6 flex items-center justify-center text-white text-2xl`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{element.title}</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">{element.description}</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {element.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${element.color}`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyElements;
