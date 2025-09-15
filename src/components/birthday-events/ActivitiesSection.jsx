
'use client';

export default function ActivitiesSection() {
  const activities = [
    {
      title: 'Obstacle Courses',
      description: 'Exciting challenges that test agility, balance, and coordination while keeping kids engaged and active.',
      image: 'https://readdy.ai/api/search-image?query=Children%20navigating%20through%20colorful%20obstacle%20course%20with%20tunnels%2C%20cones%2C%20and%20jumping%20elements%20in%20modern%20indoor%20sports%20facility%2C%20bright%20lighting%2C%20safety%20mats%2C%20kids%20laughing%20and%20having%20fun%2C%20birthday%20party%20atmosphere%20with%20balloons%20and%20decorations%20in%20background&width=600&height=400&seq=obstacle-course&orientation=landscape',
      ageGroup: 'Ages 4-12'
    },
    {
      title: 'Team Sports Games',
      description: 'Modified versions of popular sports like cricket, soccer, basketball and many more to explore designed for birthday fun.',
      image: 'https://readdy.ai/api/search-image?query=Group%20of%20diverse%20children%20playing%20modified%20team%20sports%20games%20in%20indoor%20gym%2C%20colorful%20equipment%2C%20birthday%20party%20setting%20with%20decorations%2C%20kids%20in%20casual%20clothes%20having%20fun%2C%20energetic%20atmosphere%2C%20safety%20equipment%20visible&width=600&height=400&seq=team-sports&orientation=landscape',
      ageGroup: 'Ages 5-14'
    },
    {
      title: 'Interactive Group Games',
      description: 'Classic party games with a sports twist, promoting teamwork and friendly competition.',
      image: 'https://readdy.ai/api/search-image?query=Children%20playing%20interactive%20group%20games%20in%20circle%20formation%2C%20colorful%20parachute%20activity%2C%20birthday%20party%20decorations%2C%20indoor%20sports%20facility%2C%20kids%20smiling%20and%20participating%20actively%2C%20festive%20atmosphere%20with%20balloons&width=600&height=400&seq=group-games&orientation=landscape',
      ageGroup: 'Ages 3-10'
    },
    {
      title: 'Dance & Movement',
      description: 'High-energy dance sessions and movement activities that get everyone moving to the beat.',
      image: 'https://readdy.ai/api/search-image?query=Children%20dancing%20and%20moving%20to%20music%20in%20decorated%20indoor%20space%2C%20birthday%20party%20atmosphere%2C%20kids%20in%20motion%20with%20arms%20raised%2C%20colorful%20lighting%2C%20festive%20decorations%2C%20energetic%20celebration%20scene&width=600&height=400&seq=dance-movement&orientation=landscape',
      ageGroup: 'Ages 3-12'
    },
    {
      title: 'Adventure Challenges',
      description: 'Exciting adventure-based activities that encourage problem-solving and physical activity.',
      image: 'https://readdy.ai/api/search-image?query=Kids%20participating%20in%20adventure%20challenge%20activities%2C%20climbing%20walls%2C%20rope%20courses%2C%20indoor%20adventure%20setup%2C%20birthday%20party%20decorations%2C%20children%20helping%20each%20other%2C%20safe%20environment%20with%20supervision&width=600&height=400&seq=adventure-challenges&orientation=landscape',
      ageGroup: 'Ages 6-14'
    },
    {
      title: 'Creative Sports Stations',
      description: 'Multiple activity stations where kids can rotate and try different sports and games.',
      image: 'https://readdy.ai/api/search-image?query=Multiple%20sports%20activity%20stations%20set%20up%20in%20large%20indoor%20facility%2C%20kids%20rotating%20between%20different%20games%2C%20birthday%20party%20atmosphere%2C%20colorful%20equipment%2C%20organized%20layout%2C%20children%20engaged%20in%20various%20activities&width=600&height=400&seq=sports-stations&orientation=landscape',
      ageGroup: 'Ages 4-12'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Birthday Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of engaging activities designed to make your child's birthday celebration extraordinary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {activity.ageGroup}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                {/* <button className="text-purple-600 hover:text-purple-700 font-semibold cursor-pointer">
                  Learn More →
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
