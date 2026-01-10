import { Link, useLocation } from "react-router-dom";
import {  Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact-us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-indigo-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Knowledge in a Capsule Academy
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-300 hover:text-indigo-600 ${
                  isActive(link.path) ? "text-indigo-600" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/products">
              <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold shadow-md hover:from-purple-700 hover:to-pink-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
                Browse Books
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-slide-down bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-indigo-50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full py-3 px-4 mt-4 text-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Browse Books
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
