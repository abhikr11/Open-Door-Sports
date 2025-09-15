'use client';
import Link from "next/link";

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
      icon: "👶",
      color: "from-green-500 to-teal-500",
      features: ["Social Interaction", "Parent-Child Bonding", "Language Development", "Cognitive Development"],
      image: "/ourServicesBg/parent-toddler.jpg",
      link: "/services/parentToddler"
    }
  ];

  return (
    <section className="py-10 pb-20 bg-gray-50 mb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            What We <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From community programs to grand celebrations, we create unforgettable sporting experiences
          </p>
        </div>

        {/* Services Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 pt-4 shadow-sm transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                {service.icon}
              </div>

              {/* Image */}
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 lg:h-75 object-cover object-top transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

              {/* Features */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 text-sm">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-2`}></div>
                    {feature}
                  </div>
                ))}
              </div>

              <Link href={service.link}>
                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300`}>
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
