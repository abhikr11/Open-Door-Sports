'use client';

export default function Footer() {
  const quickLinks = [
    { name: 'About Program', href: '/about' },
    { name: 'Key Elements', href: '/#allProgram' },
    { name: 'Success Stories', href: '/#TestimonialsSection' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/#callToAction' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              OPEN DOOR SPORTS
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Nurturing holistic development through comprehensive education that encompasses mental wellness, physical health, nutrition, and academic excellence.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/opendoorsports19/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center text-lg"></i>
              </a>
              <a href="https://www.instagram.com/opendoorsports_03/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors">
                <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center text-lg"></i>
              </a>
              <a href="https://www.youtube.com/@opendoorsports3576"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors">
                <i className="ri-youtube-fill w-5 h-5 flex items-center justify-center text-lg"></i>
              </a>
              <a href="https://wa.me/9593382777"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 hover:bg-green-500 p-3 rounded-full transition-colors">
                <i className="ri-whatsapp-fill w-5 h-5 flex items-center justify-center text-lg"></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          {/* <div>
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
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Jha@Avinash | 2023 Druze Analytics. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Powered by: Abhijeet Kumar
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 mt-4 md:mt-0">
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
