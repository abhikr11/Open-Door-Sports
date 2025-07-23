'use client';

export default function Footer() {
  const quickLinks = [
    { name: 'About Program', href: '#' },
    { name: 'Key Elements', href: '#' },
    { name: 'Enrollment', href: '#' },
    { name: 'Success Stories', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const programs = [
    { name: 'Mental Wellness', href: '#' },
    { name: 'Physical Health', href: '#' },
    { name: 'Nutrition Education', href: '#' },
    { name: 'Academic Support', href: '#' },
    { name: 'Special Needs', href: '#' }
  ];

  const resources = [
    { name: 'Parent Resources', href: '#' },
    { name: 'Student Portal', href: '#' },
    { name: 'Program Calendar', href: '#' },
    { name: 'News & Updates', href: '#' },
    { name: 'FAQ', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
                OPEN DOOR SPORTS
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Nurturing holistic development through comprehensive education that encompasses mental wellness, physical health, nutrition, and academic excellence.
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors cursor-pointer">
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center text-lg"></i>
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-colors cursor-pointer">
                <i className="ri-twitter-fill w-5 h-5 flex items-center justify-center text-lg"></i>
              </button>
              <button className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors cursor-pointer">
                <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center text-lg"></i>
              </button>
              <button className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors cursor-pointer">
                <i className="ri-youtube-fill w-5 h-5 flex items-center justify-center text-lg"></i>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a href={program.href} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <a href="https://e-portfolio-avi.vercel.app/" className="text-gray-400 text-sm">
              © 2025 Jha@Avinash. All rights reserved.
            </a>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
