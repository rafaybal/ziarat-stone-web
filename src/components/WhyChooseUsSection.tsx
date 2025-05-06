
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
    <section className="py-20 bg-black-gradient text-white relative overflow-hidden">
      {/* Enhanced background with pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center"></div>
      
      {/* Gold light beams effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gold-400 opacity-5 rounded-full blur-3xl animate-pulse-gold"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gold-300 opacity-5 rounded-full blur-3xl animate-pulse-gold" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-32 bg-gradient-to-r from-gold-400/0 via-gold-400/5 to-gold-400/0 rotate-45 animate-shimmer-horizontal"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center animate-fade-in text-gold-400">
          Why Choose Us
        </h2>
        <div className="gold-accent mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="bg-black-800/30 rounded-lg p-6 hover:bg-black-700/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-black/20 opacity-0 animate-fade-in backdrop-blur-sm border border-gold-800/10 group hover:border-gold-800/30"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="bg-black-900 border border-gold-400/30 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:animate-bounce-gentle shadow-lg relative overflow-hidden">
                <Check className="h-6 w-6 text-gold-400 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gold-300">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
