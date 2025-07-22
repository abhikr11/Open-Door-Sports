'use client';

export default function WhyJoinUs() {
  const benefits = [
    {
      icon: 'ri-heart-pulse-line',
      title: 'Make a Real Difference',
      description: 'Opportunity to make a meaningful impact in children\'s lives and contribute to their holistic development'
    },
    {
      icon: 'ri-team-line',
      title: 'Supportive Culture',
      description: 'Work in a supportive and collaborative environment where your ideas and contributions are valued'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Flexible Locations',
      description: 'Flexible work locations including schools, apartments, and local hubs to fit your lifestyle'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Continuous Learning',
      description: 'Access to continuous training and skill development opportunities to advance your career'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Work With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a team that's passionate about making a difference in children's lives while growing professionally
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className={`${benefit.icon} w-8 h-8 flex items-center justify-center text-white text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Growing Team
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Be part of a dynamic organization that's transforming how children learn, grow, and develop through innovative physical education programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Competitive Compensation
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Professional Growth
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Work-Life Balance
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://readdy.ai/api/search-image?query=happy%20diverse%20team%20of%20sports%20coaches%20and%20trainers%20celebrating%20together%20in%20modern%20gym%20facility%2C%20professional%20workplace%20culture%2C%20teamwork%20and%20collaboration%2C%20inclusive%20environment%2C%20motivational%20atmosphere%2C%20bright%20natural%20lighting%2C%20modern%20sports%20equipment%2C%20diverse%20group%20of%20fitness%20professionals%2C%20positive%20work%20environment&width=400&height=300&seq=team-culture&orientation=landscape"
                alt="Team Culture"
                className="w-80 h-60 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}