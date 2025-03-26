import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className={`fixed right-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-l-xl shadow-lg max-w-sm border-l border-t border-b border-gray-200/50 transition-all duration-300 ease-in-out ${
        isHovered ? 'translate-x-0 opacity-100' : 'translate-x-[calc(100%-12px)] opacity-60'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/90 backdrop-blur-sm p-2 rounded-l-lg shadow-md border border-gray-200/50 transition-opacity duration-300 ${
        isHovered ? 'opacity-0' : 'opacity-100'
      }`}>
        <Mail className="h-6 w-6 text-primary-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-900">Phone</p>
            <p className="text-gray-700">888-41-STOUT</p>
            <p className="text-sm text-gray-600">Monday to Friday, 8am to 6pm</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-900">Email</p>
            <p className="text-gray-700">Booking@californiaseniorwindows.com</p>
            <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-900">Service Area</p>
            <p className="text-gray-700">Serving senior living facilities throughout California</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-900">Business Hours</p>
            <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;