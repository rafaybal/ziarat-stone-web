
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
    <section className="py-20 bg-marble-darkbrown text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-marble-brown bg-opacity-30 rounded-lg p-6 hover:bg-opacity-40 transition-all">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
