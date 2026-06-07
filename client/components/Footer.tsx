import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="40" height="40" viewBox="0 0 200 200" className="flex-shrink-0">
                {/* Grid background */}
                <defs>
                  <pattern id="grid-dark" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#999" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="#1a1a1a" stroke="#999" strokeWidth="2"/>
                <rect width="200" height="200" fill="url(#grid-dark)" />
                {/* Red S */}
                <path d="M 40 50 L 80 50 Q 95 50 95 65 Q 95 75 80 80 L 45 80 M 45 80 L 85 80 Q 100 80 100 95 Q 100 110 80 110 L 40 110"
                      fill="none" stroke="#FF6B6B" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Teal G */}
                <path d="M 130 50 L 150 50 L 150 110 M 150 75 L 130 75"
                      fill="none" stroke="#4ECDC4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-bold text-xl">SolutionGrid</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for cutting-edge digital solutions. AI-compatible, SEO-friendly, and production-ready.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/software-and-system" className="hover:text-red-500 transition">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/ai-automation" className="hover:text-red-500 transition">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/website-design" className="hover:text-red-500 transition">
                  Website Design
                </Link>
              </li>
              <li>
                <Link to="/video-editing" className="hover:text-red-500 transition">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link to="/digital-marketing" className="hover:text-red-500 transition">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">More Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/ui-ux" className="hover:text-red-500 transition">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/graphic-design" className="hover:text-red-500 transition">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/content-development" className="hover:text-red-500 transition">
                  Content Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>40 Winsford Terrace, London, N18 1BS, UK</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <a href="tel:+441234567890" className="hover:text-red-500 transition">
                  +44 07932 506226
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <a href="mailto:support@solutiongrid.com" className="hover:text-red-500 transition">
                  support@solutiongrid.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SolutionGrid. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-red-500 transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
