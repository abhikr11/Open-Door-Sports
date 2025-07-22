'use client';

export default function ProgramOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Beyond Academics
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            True development goes beyond academics. By integrating physical activity, emotional support, and healthy lifestyle practices into daily routines, students are better equipped to thrive both in and outside the classroom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <i className="ri-heart-pulse-line w-6 h-6 flex items-center justify-center text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Holistic Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our multi-dimensional approach ensures comprehensive growth across all aspects of a child's development, creating well-rounded individuals prepared for future challenges.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full">
                <i className="ri-team-line w-6 h-6 flex items-center justify-center text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Inclusive Environment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every child, regardless of background or ability, receives personalized attention and support to ensure they can participate fully and build confidence.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <i className="ri-lightbulb-line w-6 h-6 flex items-center justify-center text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Evidence-Based Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our program is built on proven methodologies and research-backed practices that have shown measurable improvements in student outcomes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Students%20of%20different%20ages%20and%20abilities%20participating%20in%20various%20integrated%20learning%20activities%20in%20a%20modern%20educational%20setting%2C%20showing%20mental%20wellness%20sessions%2C%20physical%20activities%2C%20nutrition%20education%2C%20and%20academic%20support%2C%20diverse%20and%20inclusive%20environment%20with%20natural%20lighting%2C%20contemporary%20classroom%20design%2C%20collaborative%20learning%20atmosphere%2C%20healthy%20lifestyle%20practices%20being%20demonstrated&width=600&height=800&seq=program-overview-visual&orientation=portrait"
              alt="Program Overview"
              className="rounded-2xl shadow-2xl object-cover w-full h-96 lg:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
