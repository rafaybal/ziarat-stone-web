
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
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Enhanced background with pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
      
      {/* Light beams effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-300 opacity-10 rounded-full blur-3xl animate-pulse-light"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-200 opacity-10 rounded-full blur-3xl animate-pulse-light" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-32 bg-gradient-to-r from-blue-100/0 via-blue-100/10 to-blue-100/0 rotate-45 animate-shimmer"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="bg-blue-800/30 rounded-lg p-6 hover:bg-blue-700/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-black/20 opacity-0 animate-fade-in backdrop-blur-sm border border-blue-300/10 group"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:animate-bounce-gentle shadow-lg relative overflow-hidden">
                <Check className="h-6 w-6 text-primary relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-blue-100">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
