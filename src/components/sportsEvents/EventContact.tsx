'use client';

export default function EventContact() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Plan Your Sports Event?
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Let's create an unforgettable sports experience for your students. Contact us to discuss your event requirements and get a customized proposal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <i className="ri-calendar-event-line w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
                <h3 className="text-xl font-bold text-white">Event Planning</h3>
              </div>
              <p className="text-orange-100">
                Book a consultation to discuss your event requirements, timeline, and budget. We'll create a detailed proposal tailored to your needs.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <i className="ri-phone-line w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
                <h3 className="text-xl font-bold text-white">Immediate Support</h3>
              </div>
              <p className="text-orange-100">
                Call us for immediate assistance with urgent event planning needs or any questions about our services.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <i className="ri-mail-line w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
                <h3 className="text-xl font-bold text-white">Detailed Inquiry</h3>
              </div>
              <p className="text-orange-100">
                Send us detailed information about your event requirements, and we'll respond with a comprehensive proposal.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Event Quote</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School/Organization Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter organization name"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Contact number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-8 cursor-pointer bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Select event type</span>
                    <i className="ri-arrow-down-s-line w-5 h-5 flex items-center justify-center text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Participants
                </label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Number of participants"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Requirements
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your specific requirements..."
                  maxLength={500}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-send-plane-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
                Request Event Quote
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <i className="ri-phone-line w-8 h-8 flex items-center justify-center text-white text-3xl mx-auto mb-4"></i>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-orange-100">+1 (555) 123-4567</p>
            <p className="text-orange-100 text-sm mt-1">Mon-Fri: 8AM-6PM</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <i className="ri-mail-line w-8 h-8 flex items-center justify-center text-white text-3xl mx-auto mb-4"></i>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-orange-100">events@opendoorsports.com</p>
            <p className="text-orange-100 text-sm mt-1">Response within 24 hours</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <i className="ri-time-line w-8 h-8 flex items-center justify-center text-white text-3xl mx-auto mb-4"></i>
            <h3 className="text-xl font-bold text-white mb-2">Planning Time</h3>
            <p className="text-orange-100">2 months minimum</p>
            <p className="text-orange-100 text-sm mt-1">For best results</p>
          </div>
        </div>
      </div>
    </section>
  );
}