import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-primary-600 font-bold text-2xl">California</span>
              <span className="text-primary-900 font-bold text-2xl">Senior</span>
              <span className="text-primary-400 font-bold text-2xl">Windows</span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary-600 px-3 py-2 font-medium">Services</a>
            <a href="#why-choose-us" className="text-gray-700 hover:text-primary-600 px-3 py-2 font-medium">Why Choose Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 px-3 py-2 font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 font-medium">Contact</a>
            <a href="tel:888-41-STOUT" className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition duration-300 shadow-md hover:shadow-lg">
              <Phone size={18} className="mr-2" />
              Call Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#services" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#why-choose-us" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="tel:888-41-STOUT" 
              className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition duration-300 w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} className="mr-2" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;