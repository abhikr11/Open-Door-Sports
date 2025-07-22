// No need to import react-icons anymore

import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white'>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 py-10 text-sm text-white md:px-10">
                
                {/* Address & Socials */}
                <div className="space-y-3">
                    <h1 className="text-xl font-semibold mb-8">LOGO</h1>
                    <p className="mb-4 leading-relaxed">
                        Pandit Nehru Marg, opposite DKV College,<br />
                        Indradeep Society,<br />
                        Jamnagar, Gujarat 361008
                    </p>

                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full">
                            <i className="ri-facebook-fill text-lg"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full">
                            <i className="ri-twitter-fill text-lg"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full">
                            <i className="ri-instagram-fill text-lg"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 p-3 rounded-full">
                            <i className="ri-youtube-fill text-lg"></i>
                        </a>
                    </div>
                </div>

                {/* Useful Links */}
                <div className="space-y-3">
                    <h1 className="text-xl font-semibold mb-8">Useful Links</h1>
                    <ul className="space-y-2">
                        <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                        <li><Link href="/#gallery" className="hover:underline">Gallery</Link></li>
                        <li><Link href="/services/sports" className="hover:underline">Sports Events</Link></li>
                        <li><Link href="/services/parentToddler" className="hover:underline">Parent Toddler</Link></li>
                        <li><Link href="/services/intergratedProgram" className="hover:underline">Integrated Program</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                    <h1 className="text-xl font-semibold mb-8">Get In Touch</h1>

                    <IconWithText icon="ri-map-pin-2-fill">
                        Pandit Nehru Marg, opposite DKV College,<br />
                        Indradeep Society,<br />
                        Jamnagar, Gujarat 361008
                    </IconWithText>
                    <IconWithText icon="ri-mail-line">
                        contact@xaviers.co.in
                    </IconWithText>
                    <IconWithText icon="ri-phone-line">
                        +91 288 2553908
                    </IconWithText>
                </div>
            </div>

            <div className="text-center space-y-3 py-4">
                <hr className="border-white/30" />
                <Link href="#" className="hover:underline">
                    Copyright © 2025 jha@avinash. All Rights Reserved
                </Link>
            </div>
        </div>
    );
};

export default Footer;

// Reusable Remix Icon with text
const IconWithText = ({ icon, children }) => (
    <div className="flex items-start gap-3">
        <i className={`${icon} bg-white/50 p-2 rounded-full text-lg`} style={{ minWidth: 30 }}></i>
        <p className="text-sm leading-relaxed">{children}</p>
    </div>
);
