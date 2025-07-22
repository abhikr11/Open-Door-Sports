
'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-trophy-line',
      title: 'Age-Appropriate Activities',
      description: 'Tailored games and sports activities designed specifically for your child\'s age group and skill level.'
    },
    {
      icon: 'ri-group-line',
      title: 'Social Engagement',
      description: 'Activities that encourage teamwork, friendship, and positive social interaction among party guests.'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Active & Healthy Fun',
      description: 'Get kids moving with exciting physical activities that promote fitness while having a blast.'
    },
    {
      icon: 'ri-time-line',
      title: 'Stress-Free Planning',
      description: 'Our experienced team handles all the activity coordination, letting you enjoy your child\'s special day.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Safe Environment',
      description: 'Professional supervision and safety measures ensure a secure and worry-free celebration.'
    },
    {
      icon: 'ri-star-line',
      title: 'Memorable Experiences',
      description: 'Create lasting memories with unique activities that your child and guests will talk about for years.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Open Door Sports for Birthday Celebrations?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating unforgettable birthday experiences that combine fun, fitness, and friendship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-purple-600 text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
