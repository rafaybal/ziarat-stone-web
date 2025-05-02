
import React, { useState, useEffect } from 'react';
import { WhatsApp, Menu, X } from 'lucide-react';
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-marble-darkbrown">
            ZairatMarbel
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-marble-darkbrown hover:text-marble-brown font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* WhatsApp Button */}
        <div className="hidden md:flex">
          <Button 
            variant="ghost" 
            size="icon"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full h-10 w-10"
            onClick={() => window.open('https://wa.me/yourphonenumber', '_blank')}
          >
            <WhatsApp className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-marble-darkbrown" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20">
          <nav className="flex flex-col items-center space-y-6 pt-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-xl text-marble-darkbrown hover:text-marble-brown font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full h-12 w-12 mt-6"
              onClick={() => window.open('https://wa.me/yourphonenumber', '_blank')}
            >
              <WhatsApp className="h-6 w-6" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
