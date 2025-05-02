
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Enhanced light effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block transform transition-transform duration-700 hover:scale-105">Premium Quality</span>
            <span className="block transform transition-transform duration-700 hover:scale-105">Ziarat Marble</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto animate-pulse font-light">
            Direct from KPK Quarries
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <a 
              href="#products" 
              className="btn-primary transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg relative group overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              View Products
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce-gentle" />
            </a>
            <a 
              href="#contact" 
              className="btn-secondary transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg relative group overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-marble-brown/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced animated light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/10 rotate-45 transform -translate-x-full animate-[slide-in-right_8s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute top-0 right-1/4 w-1/2 h-full bg-white/10 -rotate-45 transform translate-x-full animate-[slide-in-right_8s_ease-in-out_infinite_alternate-reverse]"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-marble-darkbrown/30 to-transparent"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full opacity-30 animate-float" 
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 5 + 's',
              animationDelay: Math.random() * 5 + 's'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
