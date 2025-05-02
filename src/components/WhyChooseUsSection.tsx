
import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: 'Direct Quarry Access',
      description: 'We source directly from our own quarries, ensuring the best quality and prices.'
    },
    {
      id: 2,
      title: 'Competitive Rates',
      description: 'By eliminating middlemen, we offer the best possible prices for premium marble.'
    },
    {
      id: 3,
      title: 'Nationwide Delivery',
      description: 'Our efficient logistics network ensures timely delivery across Pakistan.'
    },
    {
      id: 4,
      title: 'Trusted by Builders',
      description: 'Leading construction companies and architects rely on our quality and service.'
    }
  ];

  return (
    <section className="py-20 bg-marble-darkbrown text-white relative overflow-hidden">
      {/* Light beams effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="bg-marble-brown bg-opacity-30 rounded-lg p-6 hover:bg-opacity-40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-black/20 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 animate-float">
                <Check className="h-6 w-6 text-marble-brown" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-marble-cream">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
