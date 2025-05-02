
import React from 'react';
import { WhatsApp, Facebook, Instagram, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-marble-darkbrown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ZairatMarbel</h3>
            <p className="mb-4 text-marble-cream">
              Premium quality marble direct from KPK quarries. Trusted supplier for builders, 
              designers, and retailers across Pakistan.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/92XXXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors"
              >
                <WhatsApp className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-marble-cream hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-marble-cream hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-marble-cream hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-marble-cream hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-marble-cream hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-marble-cream" />
                <span>+92 XXX XXXXXXX</span>
              </li>
              <li className="flex items-center">
                <WhatsApp className="h-5 w-5 mr-2 text-marble-cream" />
                <span>+92 XXX XXXXXXX</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-marble-cream" />
                <span>KPK, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-marble-cream border-opacity-30 mt-12 pt-6 text-center">
          <p>Copyright © 2025 ZairatMarbel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
