'use client';

export default function AboutMission() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Open Door Sports is a dedicated organization committed to fostering the overall gross motor development of children through thoughtfully curated physical activities and sports programs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our approach goes beyond routine fitness—we aim to unlock each child's potential by focusing on a holistic blend of physical, social, and emotional growth.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <i className="ri-heart-line w-6 h-6 flex items-center justify-center text-red-500 mr-3 inline-flex"></i>
                Our Core Belief
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe that every child has the capacity to grow into a strong, confident, and independent individual when given the right guidance, encouragement, and opportunities for movement and play.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <i className="ri-trophy-line w-8 h-8 flex items-center justify-center text-blue-600 text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Excellence</h4>
                  <p className="text-gray-600 text-sm">Striving for the highest standards in every program</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <i className="ri-group-line w-8 h-8 flex items-center justify-center text-green-600 text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Inclusion</h4>
                  <p className="text-gray-600 text-sm">Creating opportunities for every child to participate</p>
                </div>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <i className="ri-lightbulb-line w-8 h-8 flex items-center justify-center text-purple-600 text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-600 text-sm">Developing creative approaches to child development</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <i className="ri-seedling-line w-8 h-8 flex items-center justify-center text-orange-600 text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Growth</h4>
                  <p className="text-gray-600 text-sm">Nurturing continuous development and progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}