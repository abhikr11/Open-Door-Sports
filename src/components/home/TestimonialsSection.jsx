'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Elementary School Principal",
      content: "Open Door Sports transformed our annual sports day into an incredible experience. The organization was flawless and the kids are still talking about it!",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Professional%20woman%20in%20her%2040s%2C%20elementary%20school%20principal%2C%20warm%20smile%2C%20business%20casual%20attire%2C%20modern%20office%20background%2C%20confident%20and%20friendly%20demeanor%2C%20professional%20headshot%20style&width=200&height=200&seq=testimonial-sarah&orientation=squarish",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Michael Chen",
      role: "Parent & Community Leader",
      content: "The after-school program has been a game-changer for our apartment complex. My kids have made new friends and stay active every day!",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Asian%20man%20in%20his%2030s%2C%20parent%20and%20community%20leader%2C%20warm%20smile%2C%20casual%20clothing%2C%20outdoor%20community%20setting%2C%20approachable%20and%20friendly%20appearance%2C%20professional%20headshot%20style&width=200&height=200&seq=testimonial-michael&orientation=squarish",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Emma Rodriguez",
      role: "Birthday Party Host",
      content: "My daughter's 8th birthday party was absolutely amazing! The sports activities kept all the kids engaged and happy throughout the event.",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Hispanic%20woman%20in%20her%2030s%2C%20mother%20and%20party%20host%2C%20joyful%20smile%2C%20casual%20party%20attire%2C%20colorful%20party%20background%2C%20enthusiastic%20and%20happy%20expression%2C%20professional%20headshot%20style&width=200&height=200&seq=testimonial-emma&orientation=squarish",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from schools, parents, and communities who trust us with their events
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                {/* Quote Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className="ri-double-quotes-l w-6 h-6 flex items-center justify-center text-white"></i>
                </div>
                
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="text-yellow-400 text-xl">⭐</div>
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-8 text-lg italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover object-top border-4 border-gray-100 group-hover:border-gray-200 transition-colors duration-300"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center`}>
                      <i className="ri-check-line w-3 h-3 flex items-center justify-center text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-xl mb-8 text-indigo-100">
              Join hundreds of satisfied clients who have made their events memorable with us
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-indigo-50 transition-colors duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Book Your Event Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}