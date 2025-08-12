'use client';

export default function AfterTestimonialsSection() {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Mother of Emma (18 months)',
            content: 'The Parent-Toddler Program has been amazing for both Emma and me. Watching her develop confidence and motor skills while strengthening our bond has been incredible. The instructors are so knowledgeable and caring.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Father of Lucas (2 years)',
            content: 'As a first-time parent, I was nervous about activities with Lucas. This program gave me confidence and practical tools. Lucas loves the sessions and has made great progress in his social skills.',
            rating: 5
        },
        {
            name: 'Lisa Rodriguez',
            role: 'Mother of Sofia (20 months)',
            content: 'The sensory activities have been perfect for Sofia\'s development. She\'s become more curious and engaged. The parent guidance sessions have been invaluable for understanding her needs better.',
            rating: 5
        },
        {
            name: 'David Thompson',
            role: 'Father of Oliver (16 months)',
            content: 'We\'ve seen remarkable improvement in Oliver\'s balance and coordination. The safe environment allows him to explore freely while I learn how to support his development at home.',
            rating: 5
        }
    ];

    return (
        <div>


            <section className="py-20 md:px-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Parents Say
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hear from families who have experienced the transformative benefits of our Parent-Toddler Program
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-green-50 p-8 rounded-2xl">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <div key={i} className="w-5 h-5 flex items-center justify-center text-yellow-400">
                                            <i className="ri-star-fill"></i>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-green-900 via-emerald-800 to-green-700">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-black text-white mb-6">
                        Ready to Take Your Child's Skills to the Next Level?
                    </h2>
                    <p className="text-xl text-green-100 mb-12">
                        Join our after school program and watch your child excel in structured sports and competitive activities
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 whitespace-nowrap cursor-pointer">
                            Enroll Your Child Now
                        </button>
                        <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer">
                            Schedule a Free Trial
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
