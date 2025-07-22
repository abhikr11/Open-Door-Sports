'use client';

export default function ProgramAreas() {
  const programAreas = [
    {
      icon: 'ri-hand-heart-line',
      title: 'Hand-Eye Coordination',
      description: 'Developing precision and control through targeted activities that enhance visual and motor coordination skills.',
      color: 'bg-blue-500'
    },
    {
      icon: 'ri-body-scan-line',
      title: 'Fine & Gross Motor Skills',
      description: 'Building strength and dexterity through comprehensive movement programs tailored to each developmental stage.',
      color: 'bg-green-500'
    },
    {
      icon: 'ri-run-line',
      title: 'Locomotor Abilities',
      description: 'Enhancing movement patterns including running, jumping, skipping, and dynamic movement sequences.',
      color: 'bg-purple-500'
    },
    {
      icon: 'ri-scales-line',
      title: 'Balance & Body Alignment',
      description: 'Improving stability, posture, and spatial awareness through structured balance training and body mechanics.',
      color: 'bg-orange-500'
    },
    {
      icon: 'ri-team-line',
      title: 'Social Interaction',
      description: 'Fostering teamwork, communication, and leadership skills through collaborative sports and group activities.',
      color: 'bg-pink-500'
    },
    {
      icon: 'ri-building-line',
      title: 'Team Building',
      description: 'Creating strong bonds and cooperation skills through structured team challenges and group problem-solving.',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Program Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our programs are designed to enhance key developmental areas that form the foundation for lifelong physical and social success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programAreas.map((area, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`${area.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                <i className={`${area.icon} w-8 h-8 flex items-center justify-center text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Comprehensive Development Approach
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Each program area is carefully integrated to create a holistic development experience that addresses the physical, social, and emotional needs of every child.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
            <i className="ri-calendar-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
            Schedule Assessment
          </button>
        </div>
      </div>
    </section>
  );
}