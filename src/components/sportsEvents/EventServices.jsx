'use client';

export default function EventServices() {
  const services = [
    {
      icon: 'ri-calendar-check-line',
      title: 'Complete Event Planning',
      description: 'From initial concept to final execution, we handle every aspect of your sports event with meticulous attention to detail.',
      features: []
    },
    {
      icon: 'ri-team-line',
      title: 'Professional Staff',
      description: 'Our experienced team of coaches and event coordinators ensure smooth operations and participant safety.',
      features: []
    },
    {
      icon: 'ri-trophy-line',
      title: 'Diverse Activities',
      description: 'We organize a wide range of sporting activities suitable for all age groups and skill levels.',
      features: []
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Safety First',
      description: 'All activities are conducted with highest safety standards.',
      features: []
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Equipment & Setup',
      description: 'We provide all essential sports equipment in collaboration with the school.',
      features: []
    },
    {
      icon: 'ri-camera-line',
      title: 'Award Distribution',
      description: 'Celebrating excellence through recognition and award distribution.',
      features: []
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Event Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From planning to execution, we ensure that all physical activities are conducted in a structured, safe, and enjoyable manner for students, teachers, and parents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-500 to-sky-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <i className={`${service.icon} w-8 h-8 flex items-center justify-center text-white text-2xl`}></i>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-500 mr-3"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
