'use client';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Child's Future?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
            Join thousands of families who have discovered the power of our Integrated Program. Give your child the foundation they need to thrive in every aspect of life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              <i className="ri-user-add-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Enroll Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Schedule Visit
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-download-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Download Brochure
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <i className="ri-phone-line w-8 h-8 flex items-center justify-center text-white text-3xl mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <i className="ri-mail-line w-8 h-8 flex items-center justify-center text-white text-3xl mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-blue-100">info@integratedprogram.edu</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <i className="ri-map-pin-line w-8 h-8 flex items-center justify-center text-white text-3xl mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100">123 Education Ave, City, State 12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
