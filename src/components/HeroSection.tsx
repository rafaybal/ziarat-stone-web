
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
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
    >
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/lovable-uploads/5e14603b-3d13-4745-936f-62678afa9873.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.85',
          transform: `translateY(${scrollPosition * 0.15}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-600/30 to-blue-900/40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg">
            <span className="block transform transition-transform duration-700 hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>Exquisite</span>
            <span className="block transform transition-transform duration-700 hover:scale-105 animate-fade-in text-blue-200" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>Ziarat Marble</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto font-light animate-fade-in text-shadow" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
            Transform Your Space with Luxury Marble Solutions
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <a 
              href="#products" 
              className="btn-primary transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg relative group overflow-hidden animate-fade-in"
              style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}
            >
              <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce-gentle" />
            </a>
            <a 
              href="#contact" 
              className="btn-secondary transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg relative group overflow-hidden animate-fade-in"
              style={{animationDelay: '1.6s', animationFillMode: 'forwards'}}
            >
              <span className="absolute inset-0 w-full h-full bg-blue-500/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Modern animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse-light"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-300/15 blur-3xl animate-pulse-light" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Modern floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-blue-200 rounded-full opacity-40 animate-float" 
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

      {/* Modern scroll indicator */}
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
