
'use client';

import Link from 'next/link';
import FadeInOnView from '../animation/FadeInOnView';

export default function ProgramsSection() {
  const programs = [
    {
      title: "Toddlers Program",
      age: "Ages 1.5 to 4 years",
      description: "This foundational stage is crucial for developing essential movement and locomotor skills. Our program is thoughtfully designed to nurture these abilities in a safe, engaging, and playful environment, where toddlers can learn through fun, exploration, and social interaction.",
      focus: "Building balance, coordination, and confidence while enjoying the process alongside their peers.",
      icon: "program_icon/tp001.png",
      color: "from-pink-400 to-rose-500",
      image: "https://readdy.ai/api/search-image?query=Toddlers%20aged%201.5%20to%204%20years%20playing%20with%20colorful%20soft%20sports%20equipment%20in%20a%20safe%20indoor%20play%20area%2C%20professional%20instructor%20guiding%20young%20children%20through%20basic%20movement%20activities%2C%20bright%20and%20cheerful%20environment%20with%20padded%20surfaces&width=400&height=300&seq=toddlers-program&orientation=landscape",
      link: "/program/toddlersProgram"
    },
    {
      title: "Preschoolers Program",
      age: "Ages 4.5 to 7 years",
      description: "At this stage, our focus is on fostering the overall physical development of the child. The program is designed to enhance physical fitness, while also identifying and nurturing individual talents and motor skills. Children engage in activities that build strength, coordination, and confidence.",
      focus: "Building strength, coordination, and confidence through structured activities and regular practice.",
      icon: "program_icon/pp002.png",
      color: "from-blue-400 to-cyan-500",
      image: "https://readdy.ai/api/search-image?query=Preschool%20children%20aged%204%20to%207%20years%20participating%20in%20structured%20physical%20activities%2C%20kids%20doing%20coordination%20exercises%20with%20colorful%20equipment%2C%20instructor%20demonstrating%20movements%2C%20bright%20gymnasium%20setting%20with%20safety%20mats&width=400&height=300&seq=preschoolers-program&orientation=landscape",
      link: "/program/PreschoolersProgram"
    },
    {
      title: "Prep Level",
      age: "Ages 7.5 to 12 years",
      description: "At this stage, children are introduced to specific sports and co-curricular activities that challenge and refine their growing abilities. The focus is on applying their developing skills in more structured, competitive, and team-based settings, fostering discipline, teamwork, and a spirit of healthy competition.",
      focus: "Significant improvements in gross motor development, coordination, and confidence through consistent physical practice.",
      icon: "program_icon/kr003.png",
      color: "from-green-400 to-emerald-500",
      image: "https://readdy.ai/api/search-image?query=Children%20aged%207%20to%2012%20years%20playing%20organized%20sports%20activities%20like%20soccer%20and%20basketball%2C%20kids%20practicing%20specific%20sports%20skills%20with%20proper%20equipment%2C%20competitive%20yet%20fun%20atmosphere%20in%20modern%20sports%20facility&width=400&height=300&seq=prep-level-program&orientation=landscape",
      link: "/program/preLevelProgram"
    },
    {
      title: "Above Prep Level",
      age: "Ages 12 years and above",
      description: "This advanced level emphasizes physical fitness, health awareness, and personal growth. It encourages students to recognize the progress they've made through regular physical activity, leading to enhanced strength, endurance, and overall well-being.",
      focus: "Development of leadership qualities, teamwork, and social skills, preparing them for greater responsibilities and challenges.",
      icon: "program_icon/wfc004.png",
      color: "from-purple-400 to-violet-500",
      image: "https://readdy.ai/api/search-image?query=Teenagers%20aged%2012%20and%20above%20in%20advanced%20sports%20training%2C%20young%20athletes%20working%20out%20in%20modern%20gym%20facility%2C%20focus%20on%20strength%20training%20and%20team%20sports%2C%20leadership%20development%20through%20physical%20activities&width=400&height=300&seq=above-prep-program&orientation=landscape",
      link: "/program/abovePrepProgram"
    }
  ];

  return (
    <div id="allProgram" className="w-[98%] mx-auto   p-1 pb-0   rounded-t-xl">
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-10">
              Our School Program
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Age-Specific <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully structured programs designed for every stage of your child's physical and social development
            </p>
          </div>

          {/* Programs Grid */}
         {/* <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {programs.map((program, index) => (
              <FadeInOnView key={index} delay={index * 0.2}>
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    // { Program Header }
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <img src={program.icon} width={32} height={32} className="object-contain" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                        <div className={`inline-block bg-gradient-to-r ${program.color} text-white px-4 py-1 rounded-full text-sm font-semibold mt-1`}>
                          {program.age}
                        </div>
                      </div>
                    </div>

                    //{ Program Image }
                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {// Program Description }
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">{program.description}</p>

                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border-l-4 border-gradient-to-b from-blue-400 to-purple-400">
                        <h4 className="font-bold text-gray-900 mb-2">Program Focus:</h4>
                        <p className="text-gray-700 text-sm">{program.focus}</p>
                      </div>
                    </div>

                    {// CTA Button }
                    <Link href={program.link}>
                      <button className={`w-full bg-gradient-to-r ${program.color} text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer mt-6`}>
                        Learn More About This Program
                      </button>
                    </Link>
                  </div>
                </div>
              </FadeInOnView>
            ))}
          </div> */}

          {/* Age Timeline */}
          <FadeInOnView delay={0.6}>
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Development Timeline</h3>
                <p className="text-gray-300 text-lg">Follow your child's journey through our comprehensive age-appropriate programs</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {programs.map((program, index) => (
                  <div key={index} className="text-center">
                    <a href={program.link} className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-4 hover:scale-110 transition-transform duration-300 cursor-pointer`}>
                      <img src={program.icon} width={40} className='image' />
                    </a>
                    <h4 className="font-bold text-lg mb-2">{program.title}</h4>
                    <div className="text-gray-300 text-sm bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                      {program.age}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white  px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Find the Right Program
                </button>
              </div>
            </div>
          </FadeInOnView>
        </div>
      </section>
    </div>

  );
}
