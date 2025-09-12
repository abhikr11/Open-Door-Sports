'use client';

export default function IntegratedProgramSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Integrated Program
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A comprehensive initiative nurturing overall well-being and development of students through mental wellness, physical health, nutrition, and education.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              True development goes beyond academics. By integrating physical activity, emotional support, and healthy lifestyle practices into daily routines, students are better equipped to thrive both in and outside the classroom.
            </p>
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
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Specialized Support</h4>
                  <p className="text-gray-600 text-sm">Dedicated assistance for differently-abled and specially-abled students</p>
                </div>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <i className="ri-lightbulb-line w-8 h-8 flex items-center justify-center text-purple-600 text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Adaptive Techniques</h4>
                  <p className="text-gray-600 text-sm">Customized methods tailored to individual learning styles and abilities</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <i className="ri-seedling-line w-8 h-8 flex items-center justify-center text-orange-600 text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Confidence Building</h4>
                  <p className="text-gray-600 text-sm">Programs designed to boost self-esteem and personal growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}