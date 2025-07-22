
'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      content: 'My daughter Emma had the most amazing 8th birthday party! The obstacle course was a huge hit, and all the kids were so engaged. The staff was professional and made sure every child felt included.',
      rating: 5,
      childAge: '8 years old'
    },
    {
      name: 'Michael Chen',
      role: 'Parent',
      content: 'We chose Open Door Sports for our twin boys\' 10th birthday, and it exceeded all expectations. The team sports activities were perfectly organized, and the kids are still talking about it weeks later!',
      rating: 5,
      childAge: '10 years old'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Parent',
      content: 'The dance and movement session was perfect for our 6-year-old\'s party. Even the shy kids joined in by the end. Great value for money and stress-free for parents!',
      rating: 5,
      childAge: '6 years old'
    },
    {
      name: 'David Thompson',
      role: 'Parent',
      content: 'Amazing experience! The adventure challenges were exciting but safe. The staff handled everything professionally, and I could actually enjoy my son\'s party instead of worrying about activities.',
      rating: 5,
      childAge: '9 years old'
    },
    {
      name: 'Jennifer Kim',
      role: 'Parent',
      content: 'The creative sports stations were brilliant! Each child found something they loved, and the rotation system kept everyone engaged. Highly recommend for active kids!',
      rating: 5,
      childAge: '7 years old'
    },
    {
      name: 'Robert Martinez',
      role: 'Parent',
      content: 'Outstanding service! The team adapted activities perfectly for our mixed-age group party. Every child from 4 to 12 had a blast. Will definitely book again!',
      rating: 5,
      childAge: 'Mixed ages'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Parents Say About Our Birthday Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from families who've celebrated with us!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-500 text-lg"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-purple-600 font-medium">{testimonial.childAge}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
