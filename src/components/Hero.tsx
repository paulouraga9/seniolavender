import React from 'react';
import { Home, Heart, Sun } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-primary-900/20 pattern-grid-lg"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-400/20 to-transparent transform skew-x-12"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex items-center space-x-2 mb-8">
          <Home className="h-8 w-8" />
          <span className="text-xl font-semibold">California Senior Windows</span>
        </div>
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Crystal Clear Views for Enhanced Senior Living
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Professional Window Cleaning for Senior Living Communities
            </p>
            <p className="text-primary-100 mb-8 leading-relaxed">
              We enhance the quality of life for seniors by providing specialized window cleaning services that bring more natural light and clearer views to their living spaces.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://none297160.hbportal.co/schedule/670dbea6dea66f0019828f79"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Schedule Free Consultation
              </a>
              <a 
                href="#services" 
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition duration-300 text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-primary-400/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Senior living facility with clean windows" 
                className="rounded-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Professional service</p>
                <p className="text-sm">with 100% satisfaction guarantee</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg transform rotate-6">
              <Sun className="h-24 w-24 text-primary-600" />
              <p className="text-primary-600 font-medium text-sm mt-2">Brighter spaces for better living</p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-primary-400/30">
          <h3 className="text-xl font-semibold mb-4">Trusted by Senior Living Communities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2 text-primary-100">
              <Home className="h-5 w-5" />
              <span>Retirement Homes</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-100">
              <Heart className="h-5 w-5" />
              <span>Assisted Living</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-100">
              <Home className="h-5 w-5" />
              <span>Memory Care</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-100">
              <Heart className="h-5 w-5" />
              <span>Senior Communities</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/5 to-transparent"></div>
    </div>
  );
};

export default Hero;