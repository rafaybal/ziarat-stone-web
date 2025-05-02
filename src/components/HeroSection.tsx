
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Light effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block transform transition-transform duration-700 hover:scale-105">Premium Quality</span>
            <span className="block transform transition-transform duration-700 hover:scale-105">Ziarat Marble</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto animate-pulse">
            Direct from KPK Quarries
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <a 
              href="#products" 
              className="btn-primary transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg"
            >
              View Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contact" 
              className="btn-secondary transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/5 rotate-45 transform -translate-x-full animate-[slide-in-right_8s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute top-0 right-1/4 w-1/2 h-full bg-white/5 -rotate-45 transform translate-x-full animate-[slide-in-right_8s_ease-in-out_infinite_alternate-reverse]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
