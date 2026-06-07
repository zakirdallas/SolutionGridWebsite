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
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">SG</span>
            </div>
            <span className="font-bold text-xl text-gray-900">SolutionGrid</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <div className="group relative">
              <button className="text-gray-700 hover:text-primary transition flex items-center gap-1">
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
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="text-gray-700 hover:text-primary transition">
              Contact
            </a>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-medium">
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
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Home
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
            <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Contact
            </a>
            <div className="px-4 py-2">
              <button className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-medium">
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
