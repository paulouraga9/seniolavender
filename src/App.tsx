import React from 'react';
import { Phone, Mail, Clock, CheckCircle, MapPin, Shield, Sun, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;