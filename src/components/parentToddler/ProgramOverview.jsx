
'use client';

export default function ProgramOverview() {
  const features = [
    {
      icon: 'ri-run-line',
      title: 'Early Motor Skill Development',
      description: 'Develops fundamental motor skills through crawling, walking, balance, and hand-eye coordination activities'
    },
    {
      icon: 'ri-brain-line',
      title: 'Sensory & Cognitive Stimulation',
      description: 'Engages toddlers\' senses and cognitive abilities, encouraging exploration and learning through movement'
    },
    {
      icon: 'ri-heart-line',
      title: 'Parent-Child Bonding',
      description: 'Strengthens emotional connections, enhances communication, and builds trust between parent and child'
    },
    {
      icon: 'ri-group-line',
      title: 'Social Interaction',
      description: 'Provides opportunities for peer interaction, teaching sharing, turn-taking, and empathy skills'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Safe & Nurturing Environment',
      description: 'Experienced instructors ensure highest safety standards in a warm, welcoming space for families'
    },
    {
      icon: 'ri-parent-line',
      title: 'Guidance for Parents',
      description: 'Practical tips on supporting child development at home, including nutrition, sleep, and play strategies'
    }
  ];

  return (
    <section className="py-20 bg-white md:px-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Features of Our Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive program is designed to support both child development and parent-child relationships through carefully crafted activities and expert guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mb-6">
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
