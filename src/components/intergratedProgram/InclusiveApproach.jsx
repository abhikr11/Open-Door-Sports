'use client';

export default function InclusiveApproach() {
  const approaches = [
    {
      title: 'Adaptive Techniques',
      description: 'Customized methods tailored to individual learning styles and abilities',
      icon: 'ri-settings-3-line'
    },
    {
      title: 'Specialized Support',
      description: 'Dedicated assistance for differently-abled and specially-abled students',
      icon: 'ri-hand-heart-line'
    },
    {
      title: 'Confidence Building',
      description: 'Programs designed to boost self-esteem and personal growth',
      icon: 'ri-trophy-line'
    },
    {
      title: 'Nurturing Environment',
      description: 'Safe, supportive spaces where every child feels valued and included',
      icon: 'ri-shield-check-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Inclusive%20educational%20environment%20showing%20children%20with%20diverse%20abilities%20working%20together%2C%20adaptive%20learning%20techniques%20being%20used%2C%20supportive%20teachers%20helping%20differently-abled%20students%2C%20modern%20accessible%20classroom%20with%20specialized%20equipment%2C%20warm%20and%20nurturing%20atmosphere%2C%20collaborative%20learning%20activities%20with%20assistive%20technology%2C%20diverse%20group%20of%20students%20supporting%20each%20other&width=600&height=700&seq=inclusive-approach-visual&orientation=portrait"
              alt="Inclusive Approach"
              className="rounded-2xl shadow-2xl object-cover w-full h-96 lg:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Inclusive by Design
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Special attention is given to differently-abled and specially-abled students, with customized activities and adaptive techniques that ensure full participation and confidence building.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {approaches.map((approach, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full w-fit mb-4">
                    <i className={`${approach.icon} w-5 h-5 flex items-center justify-center text-white text-lg`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl text-white">
              <div className="flex items-center space-x-4">
                <i className="ri-star-line w-8 h-8 flex items-center justify-center text-3xl"></i>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Goal</h3>
                  <p className="text-lg leading-relaxed">
                    Create a safe, inclusive, and empowering space where every child—regardless of background or ability—can grow holistically and reach their full potential.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
