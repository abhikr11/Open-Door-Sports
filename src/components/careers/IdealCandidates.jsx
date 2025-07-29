'use client';

export default function IdealCandidates() {
  const qualifications = [
    {
      icon: 'ri-parent-line',
      title: 'Child Development Experience',
      description: 'Experience in handling children across various age groups with patience and understanding'
    },
    {
      icon: 'ri-heart-line',
      title: 'Passion for Fitness',
      description: 'A genuine passion for fitness and child development with enthusiasm for active lifestyles'
    },
    {
      icon: 'ri-message-3-line',
      title: 'Communication Skills',
      description: 'Strong communication and leadership skills to effectively engage with children and parents'
    },
    {
      icon: 'ri-emotion-happy-line',
      title: 'Motivational Ability',
      description: 'The ability to motivate and engage children in a fun and positive manner'
    },
    {
      icon: 'ri-award-line',
      title: 'Professional Certification',
      description: 'A certification in physical education or sports training (preferred but not mandatory)'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Creative Approach',
      description: 'Innovative thinking to create engaging activities and adapt to different learning styles'
    }
  ];

  return (
    <section className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6">
            Who <span className="text-teal-500">We're Looking </span>For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ideal candidates should have the following qualities and experience to join our dynamic team
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualifications.map((qualification, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <i className={`${qualification.icon} w-8 h-8 flex items-center justify-center text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {qualification.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {qualification.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-lg text-blue-100 mb-6">
              If you're enthusiastic, responsible, and love working with children, we'd love to hear from you.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Apply Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}