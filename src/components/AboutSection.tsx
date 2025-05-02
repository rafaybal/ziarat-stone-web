
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Us</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Marble quarry in KPK" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-marble-brown text-white py-4 px-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-bold">10+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>
          
          {/* Right side: Text */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold mb-6 text-marble-darkbrown">
              Trusted Supplier of Premium Marble
            </h3>
            
            <p className="text-lg mb-6 text-gray-700">
              ZairatMarbel is a trusted supplier of premium marble directly from KPK's finest quarries. 
              With over 10 years of experience, we have been supplying marble to builders, designers, 
              and retailers across Pakistan.
            </p>
            
            <p className="text-lg mb-6 text-gray-700">
              Our commitment to quality and customer satisfaction has made us the preferred choice 
              for those seeking exceptional natural stone products. We take pride in sourcing the finest 
              materials and delivering them with utmost care.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="bg-marble-cream rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-marble-brown" />
                </div>
                <span className="text-gray-800">Premium Quality</span>
              </div>
              <div className="flex items-center">
                <div className="bg-marble-cream rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-marble-brown" />
                </div>
                <span className="text-gray-800">Competitive Pricing</span>
              </div>
              <div className="flex items-center">
                <div className="bg-marble-cream rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-marble-brown" />
                </div>
                <span className="text-gray-800">Custom Sizes Available</span>
              </div>
              <div className="flex items-center">
                <div className="bg-marble-cream rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-marble-brown" />
                </div>
                <span className="text-gray-800">Nationwide Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
