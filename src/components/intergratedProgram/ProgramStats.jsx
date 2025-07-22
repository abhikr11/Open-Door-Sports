'use client';

export default function ProgramStats() {
  const stats = [
    {
      number: '500+',
      label: 'Students Enrolled',
      icon: 'ri-group-line',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      number: '25+',
      label: 'Expert Instructors',
      icon: 'ri-user-star-line',
      color: 'from-green-500 to-emerald-600'
    },
    {
      number: '95%',
      label: 'Satisfaction Rate',
      icon: 'ri-heart-line',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '12',
      label: 'Program Areas',
      icon: 'ri-apps-line',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    'Improved academic performance through holistic development',
    'Enhanced emotional intelligence and stress management skills',
    'Better physical health and fitness levels',
    'Increased confidence and self-esteem',
    'Stronger social connections and teamwork abilities',
    'Healthy lifestyle habits that last a lifetime'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Program Impact
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            See the measurable difference our Integrated Program makes in the lives of students and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`bg-gradient-to-r ${stat.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mb-4`}>
                <i className={`${stat.icon} w-8 h-8 flex items-center justify-center text-white text-4xl mx-auto mb-4`}></i>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Program Benefits</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 p-2 rounded-full mt-1">
                    <i className="ri-check-line w-4 h-4 flex items-center justify-center text-white text-sm"></i>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Happy%20diverse%20students%20celebrating%20achievements%20in%20an%20integrated%20educational%20program%2C%20showing%20improved%20academic%20performance%2C%20emotional%20growth%2C%20physical%20fitness%2C%20and%20social%20connections%2C%20modern%20school%20environment%20with%20charts%20and%20progress%20indicators%2C%20success%20stories%20visualization%2C%20bright%20positive%20atmosphere%20with%20celebration%20elements&width=600&height=500&seq=program-stats-visual&orientation=landscape"
              alt="Program Success"
              className="rounded-2xl shadow-2xl object-cover w-full h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
