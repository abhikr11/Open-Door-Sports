
'use client';

export default function PricingSection() {
  const packages = [
    {
      name: 'Basic Fun Package',
      price: '$199',
      duration: '1.5 hours',
      guests: 'Up to 12 kids',
      features: [
        '1.5 hours of supervised activities',
        'Choice of 2 activity stations',
        'Basic sports equipment included',
        'Birthday child gets special recognition',
        'Setup and cleanup included',
        'Party host coordinator'
      ],
      popular: false
    },
    {
      name: 'Ultimate Adventure',
      price: '$299',
      duration: '2 hours',
      guests: 'Up to 16 kids',
      features: [
        '2 hours of supervised activities',
        'Choice of 4 activity stations',
        'Obstacle course included',
        'Team sports games',
        'Birthday child gets special gift',
        'Professional party photography',
        'Setup and cleanup included',
        'Dedicated party coordinator'
      ],
      popular: true
    },
    {
      name: 'Premium Celebration',
      price: '$399',
      duration: '2.5 hours',
      guests: 'Up to 20 kids',
      features: [
        '2.5 hours of supervised activities',
        'All activity stations available',
        'Custom obstacle course design',
        'Dance and movement session',
        'Adventure challenges',
        'Birthday child medal ceremony',
        'Professional party photography',
        'Party decorations included',
        'Setup and cleanup included',
        'Dedicated party coordinator'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Birthday Party Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your child's special day. All packages include professional supervision and age-appropriate activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white rounded-xl p-8 ${pkg.popular ? 'ring-2 ring-purple-500 shadow-xl' : 'shadow-lg'}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">{pkg.price}</div>
                <div className="text-gray-600 mb-1">{pkg.duration}</div>
                <div className="text-gray-600">{pkg.guests}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <i className="ri-check-line text-green-500 text-lg mt-0.5 mr-3"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                pkg.popular 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}>
                Choose This Package
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom package? We can create a personalized celebration just for your child!
          </p>
          <button className="text-purple-600 hover:text-purple-700 font-semibold cursor-pointer">
            Contact Us for Custom Packages →
          </button>
        </div>
      </div>
    </section>
  );
}
