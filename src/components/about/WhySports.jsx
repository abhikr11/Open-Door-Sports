'use client';

export default function WhySports() {
  const benefits = [
    {
      icon: 'ri-heart-pulse-line',
      title: 'Lifelong Health Habits',
      description: 'Promotes lifelong habits of health and fitness from an early age, establishing a foundation for continued wellness.'
    },
    {
      icon: 'ri-shield-star-line',
      title: 'Character & Discipline',
      description: 'Shapes character and discipline, influencing all areas of life with positive behavioral patterns and self-control.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Consistent Progress',
      description: 'Encourages steady, consistent progress—both physically and emotionally, building confidence through achievement.'
    },
    {
      icon: 'ri-brain-line',
      title: 'Mental & Physical Well-being',
      description: 'Boosts both mental and physical well-being through the release of endorphins and stress reduction.'
    },
    {
      icon: 'ri-sword-line',
      title: 'Strength & Resilience',
      description: 'Builds strength, resilience, and confidence through overcoming challenges and pushing personal limits.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Exploration & Leadership',
      description: 'Inspires children to explore, lead, and grow through meaningful movement and collaborative experiences.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Sports Matter in Early Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Incorporating regular sports and physical activity into a child's routine offers long-lasting benefits that extend far beyond physical fitness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i className={`${benefit.icon} w-8 h-8 flex items-center justify-center text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-12 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                More Than Just Exercise
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Open Door Sports, we view sports as more than just a form of exercise—it's a powerful tool to engage, inspire, and empower children in their unique developmental journeys.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Holistic Development</h4>
                    <p className="text-gray-600">Addressing physical, social, and emotional growth simultaneously</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Individual Focus</h4>
                    <p className="text-gray-600">Tailored programs that respect each child's unique journey</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lifelong Impact</h4>
                    <p className="text-gray-600">Building foundations that benefit children throughout their lives</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Happy%20children%20celebrating%20after%20completing%20a%20sports%20activity%2C%20diverse%20group%20showing%20joy%20and%20achievement%2C%20modern%20sports%20facility%20background%2C%20bright%20natural%20lighting%2C%20positive%20emotions%2C%20teamwork%20celebration%2C%20inspiring%20athletic%20development%20moment%20with%20coaches%20and%20kids%20together%2C%20vibrant%20colors%20and%20energetic%20atmosphere&width=600&height=400&seq=sports-celebration&orientation=landscape"
                alt="Children celebrating sports achievement"
                className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}