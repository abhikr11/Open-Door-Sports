
'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-20 py-25">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=happy%20toddler%20and%20parent%20playing%20together%20in%20bright%20colorful%20playroom%20with%20soft%20toys%20and%20exercise%20equipment%2C%20natural%20lighting%2C%20warm%20atmosphere%2C%20modern%20child%20development%20center%2C%20bright%20white%20and%20blue%20background%2C%20professional%20photography%20style%2C%20joyful%20expressions%2C%20safe%20nurturing%20environment&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-blue-600/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Parent-Toddler Program
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-50">
            Nurturing early childhood development through guided physical activities and play
          </p>
          <p className="text-lg mb-12 text-blue-100 max-w-3xl mx-auto">
            Foster strong bonds between parents and toddlers while promoting holistic growth during these formative years in our supportive, safe environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Register Now
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
