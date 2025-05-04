
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with improved fit */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/lovable-uploads/5e14603b-3d13-4745-936f-62678afa9873.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${scrollPosition * 0.2}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg">
            <span className="block transform transition-transform duration-700 hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>Premium Quality</span>
            <span className="block transform transition-transform duration-700 hover:scale-105 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>Ziarat Marble</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto font-light animate-fade-in text-shadow" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
            Elevate Your Spaces with Exquisite Marble Flooring
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <a 
              href="#products" 
              className="btn-primary transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg relative group overflow-hidden animate-fade-in"
              style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}
            >
              <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              View Products
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce-gentle" />
            </a>
            <a 
              href="#contact" 
              className="btn-secondary transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg relative group overflow-hidden animate-fade-in"
              style={{animationDelay: '1.6s', animationFillMode: 'forwards'}}
            >
              <span className="absolute inset-0 w-full h-full bg-marble-brown/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced animated light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/8 rotate-45 transform -translate-x-full animate-[slide-in-right_12s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute top-0 right-1/4 w-1/2 h-full bg-white/8 -rotate-45 transform translate-x-full animate-[slide-in-right_12s_ease-in-out_infinite_alternate-reverse]"></div>
      </div>
      
      {/* Floating particles with enhanced animation */}
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
              animationDuration: Math.random() * 15 + 5 + 's',
              animationDelay: Math.random() * 5 + 's',
              filter: 'blur(' + (Math.random() * 2) + 'px)'
            }}
          ></div>
        ))}
      </div>

      {/* Mouse scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-[fade-in_1.5s_ease-in-out_infinite_alternate]"></div>
        </div>
        <p className="text-white/70 text-xs mt-2 text-center">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;
