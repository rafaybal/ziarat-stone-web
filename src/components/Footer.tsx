
import React from 'react';
import { MessageCircle, Facebook, Instagram, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-900 text-gray-300 py-16 border-t border-gold-900/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gold-400">ZairatMarbel</h3>
            <p className="mb-4 text-gray-400">
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
                <MessageCircle className="h-5 w-5" />
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
            <h4 className="text-xl font-bold mb-6 text-gold-400">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-gold-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-gold-400 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center group">
                <Phone className="h-5 w-5 mr-3 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
                <span className="group-hover:text-gold-300 transition-colors duration-300">+92 XXX XXXXXXX</span>
              </li>
              <li className="flex items-center group">
                <MessageCircle className="h-5 w-5 mr-3 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
                <span className="group-hover:text-gold-300 transition-colors duration-300">+92 XXX XXXXXXX</span>
              </li>
              <li className="flex items-center group">
                <MapPin className="h-5 w-5 mr-3 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
                <span className="group-hover:text-gold-300 transition-colors duration-300">KPK, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold-900/30 mt-12 pt-6 text-center">
          <p className="text-gray-500">Copyright © 2025 ZairatMarbel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
