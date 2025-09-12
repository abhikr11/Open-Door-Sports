'use client';

export default function EventPreparation() {
  const preparationSteps = [
    {
      phase: 'Month 1',
      title: 'Initial Planning & Assessment',
      activities: [
        'Venue assessment and requirements analysis',
        'Activity selection based on age groups',
        'Equipment inventory and procurement',
        'Safety protocols establishment'
      ]
    },
    {
      phase: 'Month 2',
      title: 'Training & Practice Sessions',
      activities: [
        'Student training and skill development',
        'Practice sessions for competitive events',
        'Team formation and coordination',
        'Individual coaching for special events'
      ]
    },
    
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Event Preparation Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A minimum of two months is recommended for training and practice before the event, allowing students to perform with confidence and enthusiasm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {preparationSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                    {step.phase}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {step.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start">
                      <i className="ri-check-double-line w-5 h-5 flex items-center justify-center text-sky-500 mr-3 mt-0.5"></i>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < preparationSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <i className="ri-arrow-right-line w-8 h-8 flex items-center justify-center text-blue-500 text-2xl"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why 2 Months Preparation?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our experience shows that a minimum two-month preparation period ensures the best outcomes for all participants. This timeline allows for proper skill development, confidence building, and creates a truly memorable experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <i className="ri-time-line w-5 h-5 flex items-center justify-center text-sky-500 mr-3"></i>
                  Adequate time for skill development
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-shield-check-line w-5 h-5 flex items-center justify-center text-blue-500 mr-3"></i>
                  Comprehensive safety preparation
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-heart-line w-5 h-5 flex items-center justify-center text-indigo-400 mr-3"></i>
                  Builds confidence and reduces anxiety
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-trophy-line w-5 h-5 flex items-center justify-center text-cyan-500 mr-3"></i>
                  Better performance outcomes
                </li>
              </ul>
            </div>

            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Children%20practicing%20various%20sports%20activities%20during%20training%20sessions%2C%20coaches%20guiding%20students%20in%20running%2C%20jumping%2C%20and%20team%20sports%20preparation%2C%20outdoor%20school%20playground%20setting%20with%20organized%20practice%20equipment%2C%20students%20showing%20progress%20and%20improvement%20over%20time%2C%20professional%20coaching%20environment%20with%20safety%20measures%20in%20place&width=600&height=400&seq=preparation-timeline&orientation=landscape"
                alt="Event Preparation"
                className="rounded-xl shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
