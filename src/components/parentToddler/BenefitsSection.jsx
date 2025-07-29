
'use client';

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Motor Skills Foundation',
      description: 'Builds a solid foundation for both gross and fine motor skills through age-appropriate activities',
      image: 'https://readdy.ai/api/search-image?query=toddler%20developing%20motor%20skills%20with%20colorful%20blocks%20and%20toys%2C%20bright%20educational%20environment%2C%20child%20playing%20with%20building%20blocks%2C%20fine%20motor%20development%20activity%2C%20warm%20lighting%2C%20safe%20play%20area&width=400&height=300&seq=benefit-001&orientation=landscape'
    },
    {
      title: 'Language Development',
      description: 'Encourages early language and communication development through interactive play and songs',
      image: 'https://readdy.ai/api/search-image?query=parent%20and%20toddler%20reading%20book%20together%2C%20communication%20development%2C%20language%20learning%20through%20play%2C%20bright%20colorful%20books%2C%20nurturing%20interaction%2C%20educational%20moment&width=400&height=300&seq=benefit-002&orientation=landscape'
    },
    {
      title: 'Emotional Security',
      description: 'Enhances emotional security through positive parent-child interactions and bonding activities',
      image: 'https://readdy.ai/api/search-image?query=happy%20parent%20hugging%20toddler%2C%20emotional%20bonding%20moment%2C%20secure%20attachment%2C%20loving%20interaction%2C%20warm%20family%20connection%2C%20safe%20nurturing%20environment&width=400&height=300&seq=benefit-003&orientation=landscape'
    },
    {
      title: 'Cognitive Development',
      description: 'Supports early cognitive development through sensory-rich play and problem-solving activities',
      image: 'https://readdy.ai/api/search-image?query=toddler%20exploring%20sensory%20play%20activities%2C%20cognitive%20development%20toys%2C%20colorful%20learning%20materials%2C%20brain%20development%20activities%2C%20educational%20play%20environment&width=400&height=300&seq=benefit-004&orientation=landscape'
    },
    {
      title: 'Love for Movement',
      description: 'Creates a joyful introduction to physical activity that fosters lifelong love for movement',
      image: 'https://readdy.ai/api/search-image?query=toddler%20enjoying%20physical%20activities%2C%20jumping%20and%20moving%2C%20joyful%20exercise%2C%20active%20play%2C%20healthy%20lifestyle%20introduction%2C%20energetic%20child%20development&width=400&height=300&seq=benefit-005&orientation=landscape'
    },
    {
      title: 'Healthy Habits',
      description: 'Establishes healthy lifestyle patterns and routines that benefit long-term development',
      image: 'https://readdy.ai/api/search-image?query=healthy%20toddler%20lifestyle%20habits%2C%20nutritious%20snacks%2C%20active%20play%2C%20good%20sleep%20routine%2C%20wellness%20for%20children%2C%20balanced%20development%20approach&width=400&height=300&seq=benefit-006&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 md:px-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Program Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our Parent-Toddler Program creates lasting positive impacts on your child's development and your relationship
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
