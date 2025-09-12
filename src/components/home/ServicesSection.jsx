'use client';
import Link from "next/link";
import FadeInOnView from "../animation/FadeInOnView";
import SlideInView from "../animation/SlideInView";

export default function ServicesSection() {
  const services = [
    {
      title: "After-School Program",
      description: "Bringing fitness and fun to your doorstep with convenient classes in residential communities.",
      icon: "🏠",
      color: "from-purple-500 to-pink-500",
      features: ["8-10 children groups", "Motor skills development", "Social interaction", "Community building"],
      image: "https://readdy.ai/api/search-image?query=Children%20participating%20in%20after-school%20sports%20activities%20in%20a%20modern%20apartment%20complex%20courtyard%2C%20small%20group%20doing%20fun%20physical%20exercises%20with%20colorful%20equipment%2C%20friendly%20coach%20leading%20activities%2C%20safe%20residential%20environment%20with%20natural%20lighting&width=500&height=300&seq=after-school-modern&orientation=landscape",
      link: "/services/afterSchool"
    },
    {
      title: "School Sports Days",
      description: "Complete sports day solutions with professional planning and exciting competitive events.",
      icon: "🏆",
      color: "from-blue-500 to-cyan-500",
      features: ["Professional planning", "Safety protocols", "Age-appropriate events", "2-month preparation"],
      image: "https://readdy.ai/api/search-image?query=School%20sports%20day%20with%20students%20in%20colorful%20team%20uniforms%20participating%20in%20track%20and%20field%20events%2C%20modern%20sports%20facility%20with%20professional%20equipment%2C%20cheering%20crowd%2C%20energetic%20atmosphere%20with%20bright%20sunshine&width=500&height=300&seq=sports-day-modern&orientation=landscape",
      link: "/services/sports"
    },
    {
      title: "Birthday Adventures",
      description: "Transform birthday parties into active adventures with themed sports activities and games.",
      icon: "🎂",
      color: "from-orange-500 to-red-500",
      features: ["Themed activities", "Obstacle courses", "Group challenges", "Party coordination"],
      image: "https://readdy.ai/api/search-image?query=Childrens%20birthday%20party%20with%20sports%20theme%2C%20kids%20playing%20active%20games%20with%20colorful%20decorations%2C%20balloons%2C%20birthday%20cake%2C%20obstacle%20course%20setup%2C%20happy%20children%20laughing%20and%20playing%20together%20in%20outdoor%20party%20setting&width=500&height=300&seq=birthday-modern&orientation=landscape",
      link: "/services/birthdayEvents"
    }, 
    {
      title: "Parent Toddler Program",
      description: "Nurturing early childhood growth through play and guided activities.",
      icon: "🏠",
      color: "from-purple-500 to-pink-500",
      features: ["Social Interaction", "Parent-Child Bonding", "Language Development", "Cognitive Development"],
      image: "https://readdy.ai/api/search-image?query=Children%20participating%20in%20after-school%20sports%20activities%20in%20a%20modern%20apartment%20complex%20courtyard%2C%20small%20group%20doing%20fun%20physical%20exercises%20with%20colorful%20equipment%2C%20friendly%20coach%20leading%20activities%2C%20safe%20residential%20environment%20with%20natural%20lighting&width=500&height=300&seq=after-school-modern&orientation=landscape",
      link: "/services/parentToddler"
    }
  ];

  const featureCards = [
    {
      icon: '🎯',
      title: 'Perfect Group Size',
      desc: '8-10 children for optimal attention and engagement',
      delay: 0.2,
      dir: 'left'
    },
    {
      icon: '🏃‍♀️',
      title: 'Skill Development',
      desc: 'Motor skills, social interaction, and teamwork',
      delay: 0.4,
      dir: 'right'
    },
    {
      icon: '🏘️',
      title: 'Community Focus',
      desc: 'Building connections in familiar environments',
      delay: 0.6,
      dir: 'left'
    },
    {
      icon: '🛡️',
      title: 'Safe Environment',
      desc: 'Secure and well-supervised activities for comfort and confidence',
      delay: 0.8,
      dir: 'right'
    }
  ];



  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 ">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-10">
            Our Services
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            What We <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From community programs to grand celebrations, we create unforgettable sporting experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex overflow-x-auto scrollbar-hidden gap-8 mb-20 p-10">
          {services.map((service, index) => (
            <div key={index} className="group relative min-w-100">
              <div className="bg-white rounded-3xl p-8 shadow-sm  transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Service Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link href={service.link}>
                  <button className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer`}>
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

          ))}
        </div>

        {/* After-School Program Highlight */}
        {/*<FadeInOnView delay={0.8}>
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              // Text Content 
              <div>
                <h3 className="text-4xl font-bold mb-6">After-School & Apartment Classes</h3>
                <p className="text-xl mb-8 text-purple-100">
                  Our specialized programs bring fitness and fun directly to your community, creating safe spaces for children to grow, learn, and play together.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {featureCards.map((item, idx) => (
                    <SlideInView key={idx} delay={item.delay} direction={item.dir}>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 h-full">
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-purple-100">{item.desc}</p>
                      </div>
                    </SlideInView>
                  ))}
                </div>
              </div>

              // Image Section 
              <div className="relative">
                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                  <img
                    src="https://readdy.ai/api/search-image?query=Children%20in%20a%20modern%20apartment%20complex%20playing%20sports%20and%20physical%20activities%20with%20a%20professional%20coach%2C%20small%20group%20of%20kids%20doing%20exercises%20in%20a%20safe%20courtyard%20environment%2C%20colorful%20sports%20equipment%2C%20natural%20lighting&width=500&height=600&seq=apartment-classes&orientation=portrait"
                    alt="After-School Classes"
                    className="w-full h-80 object-cover object-top rounded-2xl"
                  />
                </div>

                // Floating Stats 
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 text-black font-bold text-center shadow-lg">
                  <div className="text-2xl">8-10</div>
                  <div className="text-xs">Kids/Group</div>
                </div>
              </div>

            </div>
          </div>
        </FadeInOnView>*/}

      </div>
    </section>
  );
}