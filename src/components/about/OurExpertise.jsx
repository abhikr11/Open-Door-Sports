'use client';

export default function OurExpertise() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated professionals and proven systems that ensure every child receives the highest quality sports education and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Trained Coaches Section */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
            <div className="mb-8">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i className="ri-user-star-line w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Trained & Experienced Full-Time Coaches
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Open Door Sports, we understand the vital role that skilled coaches play in nurturing young athletes at every level—whether on school grounds or within local communities. That's why we provide highly trained and experienced full-time coaches who are adept at working with children across all age groups.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <i className="ri-medal-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Expert Training</h4>
                    <p className="text-gray-600">Professionally trained coaches with specialized knowledge in child development and sports pedagogy.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <i className="ri-heart-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Holistic Approach</h4>
                    <p className="text-gray-600">Committed to fostering confidence, discipline, and teamwork alongside sports skills development.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <i className="ri-shield-check-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Safe Environment</h4>
                    <p className="text-gray-600">Ensuring a safe, supportive, and engaging environment for every student in schools and local hubs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Assessment System Section */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
            <div className="mb-8">
              <div className="bg-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i className="ri-file-chart-line w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Assessment System
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Open Door Sports has developed a robust and detailed assessment system designed to objectively evaluate and track student progress. This system provides a clear grading structure aligned with curriculum requirements, adaptable to various class levels and guidelines.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <i className="ri-line-chart-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Progress Tracking</h4>
                    <p className="text-gray-600">Detailed monitoring of development in physical skills, motor coordination, and overall performance.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <i className="ri-graduation-cap-line w-6 h-6 flex items-center justify-center text-pink-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Curriculum Aligned</h4>
                    <p className="text-gray-600">Clear grading structure that aligns with educational curriculum requirements and standards.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <i className="ri-parent-line w-6 h-6 flex items-center justify-center text-orange-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Parent & Coach Insights</h4>
                    <p className="text-gray-600">Comprehensive reporting that helps coaches and parents recognize and encourage every child's growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistics Section */}
        {/* <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-green-100">Expert Coaches</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-green-100">Schools Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-green-100">Students Trained</div>
            </div>
          </div>
        </div> */}
        
        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience Our Expertise?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with our professional coaches and discover how our comprehensive assessment system can benefit your child's development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-check-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Schedule Assessment
            </button>
            <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-team-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Meet Our Coaches
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}