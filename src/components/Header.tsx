
import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About Us', link: '#about' },
    { name: 'Products', link: '#products' },
    { name: 'Gallery', link: '#gallery' },
    { name: 'Contact', link: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-md py-2 backdrop-blur-sm bg-white/90' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center group">
          <h1 className={`text-2xl md:text-3xl font-bold relative ${
            isScrolled ? 'text-primary' : 'text-white text-shadow-sm'
          }`}>
            ZairatMarbel
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
              isScrolled ? 'bg-primary' : 'bg-white'
            } group-hover:w-full transition-all duration-300`}></span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`font-medium transition-colors relative group ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white hover:text-blue-200 text-shadow-sm'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                isScrolled ? 'bg-primary' : 'bg-white'
              } group-hover:w-full transition-all duration-300`}></span>
            </a>
          ))}
        </nav>

        {/* WhatsApp Button */}
        <div className="hidden md:flex">
          <Button 
            variant="ghost" 
            size="icon"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full h-10 w-10 transform transition-transform hover:scale-110 hover:rotate-12 duration-300 shadow-md"
            onClick={() => window.open('https://wa.me/yourphonenumber', '_blank')}
          >
            <MessageCircle className="h-5 w-5 animate-pulse" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 animate-fade-in">
          <nav className="flex flex-col items-center space-y-6 pt-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.link}
                className="text-xl text-primary hover:text-blue-700 font-medium transform hover:scale-110 transition-transform duration-300"
                onClick={() => setMobileMenuOpen(false)}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full h-12 w-12 mt-6 animate-bounce shadow-md"
              onClick={() => window.open('https://wa.me/yourphonenumber', '_blank')}
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
