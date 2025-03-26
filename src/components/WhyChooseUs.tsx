import React from 'react';
import { CheckCircle, Shield, Clock, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: "Senior Living Specialists",
      description: "We understand the unique needs of retirement homes, assisted living, and senior care facilities."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-600" />,
      title: "Consistent & Reliable Service",
      description: "Our recurring cleaning plans ensure spotless windows all year round."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary-600" />,
      title: "Senior-Friendly Approach",
      description: "Our trained team works with care, respect, and attention to safety."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary-600" />,
      title: "Custom Solutions",
      description: "Tailored services based on your facility's specific needs."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Why Choose California Senior Windows?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We understand that clean, streak-free windows do more than just enhance a building's appearance—they brighten the lives of the residents inside.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-primary-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2 text-center">{reason.title}</h3>
              <p className="text-gray-700 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary-100 rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">A Clear Difference in Senior Living</h3>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8">
            Dirty windows can impact the mood and well-being of residents. Letting in natural light with professionally cleaned windows improves comfort, happiness, and even health.
          </p>
          <div className="text-center">
            <a 
              href="https://none297160.hbportal.co/schedule/670dbea6dea66f0019828f79"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;