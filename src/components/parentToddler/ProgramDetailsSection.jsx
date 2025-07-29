
'use client';

export default function ProgramDetailsSection() {
  const ageGroups = [
    {
      title: '12-18 Months',
      description: 'Focus on crawling, standing, and first steps with sensory exploration',
      activities: ['Crawling obstacle courses', 'Standing balance games', 'Sensory bins', 'Simple songs and rhymes']
    },
    {
      title: '18-24 Months',
      description: 'Walking confidence, climbing skills, and beginning social interaction',
      activities: ['Walking challenges', 'Climbing equipment', 'Ball games', 'Group circle time']
    },
    {
      title: '24-36 Months',
      description: 'Running, jumping, and advanced motor skills with peer interaction',
      activities: ['Running games', 'Jumping activities', 'Cooperative play', 'Art and craft projects']
    },
    {
      title: 'Mixed Ages',
      description: 'Running, jumping, and advanced motor skills with peer interaction',
      activities: ['Running games', 'Jumping activities', 'Cooperative play', 'Art and craft projects']
    }
  ];

  const schedule = [
    { day: 'Monday', time: '9:00 AM - 10:00 AM', group: '12-18 Months' },
    { day: 'Monday', time: '10:30 AM - 11:30 AM', group: '18-24 Months' },
    { day: 'Tuesday', time: '9:00 AM - 10:00 AM', group: '24-36 Months' },
    { day: 'Wednesday', time: '9:00 AM - 10:00 AM', group: '12-18 Months' },
    { day: 'Wednesday', time: '10:30 AM - 11:30 AM', group: '18-24 Months' },
    { day: 'Friday', time: '9:00 AM - 10:00 AM', group: '24-36 Months' },
    { day: 'Saturday', time: '9:00 AM - 10:00 AM', group: 'Mixed Ages' }
  ];

  return (
    <section className="py-20 md:px-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Program Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our program is structured by age groups to ensure age-appropriate activities and optimal development outcomes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Age Groups & Activities</h3>
            <div className="space-y-6">
              {ageGroups.map((group, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{group.title}</h4>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-check-line text-blue-600"></i>
                        </div>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Weekly Schedule</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <div className="grid grid-cols-3 gap-4 font-semibold">
                  <div>Day</div>
                  <div>Time</div>
                  <div>Age Group</div>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {schedule.map((session, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 p-4 hover:bg-blue-50 transition-colors">
                    <div className="font-medium text-gray-900">{session.day}</div>
                    <div className="text-gray-600">{session.time}</div>
                    <div className="text-blue-600 font-medium">{session.group}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                <div className="w-6 h-6 flex items-center justify-center inline-block mr-2">
                  <i className="ri-information-line text-blue-600"></i>
                </div>
                Important Information
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Each session is 60 minutes long</li>
                <li>• Maximum 8 parent-child pairs per session</li>
                <li>• Comfortable clothing recommended</li>
                <li>• Water bottles and snacks provided</li>
                <li>• Make-up sessions available for missed classes</li>
                <li>• Missed a class? Join a make-up session at your convenience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
