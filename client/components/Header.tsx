import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { label: "Software & System Development", href: "/software-and-system" },
    { label: "AI Automation", href: "/ai-automation" },
    { label: "Website Design & Development", href: "/website-design" },
    { label: "Video Editing", href: "/video-editing" },
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "UI/UX Design", href: "/ui-ux" },
    { label: "Graphic Design", href: "/graphic-design" },
    { label: "Content Development", href: "/content-development" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 200 200" className="flex-shrink-0">
              {/* Grid background */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#333" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="200" height="200" fill="white" stroke="#333" strokeWidth="2"/>
              <rect width="200" height="200" fill="url(#grid)" />
              {/* Red S */}
              <path d="M 40 50 L 80 50 Q 95 50 95 65 Q 95 75 80 80 L 45 80 M 45 80 L 85 80 Q 100 80 100 95 Q 100 110 80 110 L 40 110"
                    fill="none" stroke="#8B2E2E" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Teal G */}
              <path d="M 130 50 L 150 50 L 150 110 M 150 75 L 130 75"
                    fill="none" stroke="#0B7B93" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-xl text-gray-900">SolutionGrid</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition font-medium">
              About Us
            </Link>
            <div className="group relative">
              <button className="text-gray-700 hover:text-primary transition flex items-center gap-1 font-medium">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-primary border-b border-gray-100 last:border-b-0 transition"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/portfolio" className="text-gray-700 hover:text-primary transition font-medium">
              Portfolio
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="text-gray-700 hover:text-primary transition font-medium">
              Contact
            </Link>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition font-medium">
              Login
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <div className="px-4 py-2">
              <p className="font-medium text-gray-900 mb-2">Services</p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="block px-4 py-2 text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
            <Link to="/portfolio" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
            <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="px-4 py-2">
              <button className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition font-medium">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
