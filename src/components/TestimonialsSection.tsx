
import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Project Manager",
      company: "Royal Construction",
      content: "We've been using ZairatMarbel for all our luxury projects. Their premium marble quality has never disappointed our clients.",
      rating: 5
    },
    {
      id: 2,
      name: "Fatima Ali",
      role: "Interior Designer",
      company: "Elegance Interiors",
      content: "The variety and quality of marble offered by ZairatMarbel is unmatched. Their customer service and timely delivery make them my top choice.",
      rating: 5
    },
    {
      id: 3,
      name: "Muhammad Usman",
      role: "CEO",
      company: "Prime Developers",
      content: "Direct sourcing from KPK quarries gives ZairatMarbel a competitive edge. We've been partners for 5 years and highly recommend them.",
      rating: 4
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-marble-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-marble-brown opacity-5 rounded-full rotate-45 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-marble-brown opacity-5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-1/4 w-30 h-30 bg-marble-brown opacity-5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-marble-brown opacity-5 rounded-full animate-pulse-light" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading">What Our Clients Say</h2>
        
        <div className="mt-12 relative">
          {/* Testimonials carousel */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 mb-8 relative">
              <div className="absolute inset-0 bg-marble-brown rounded-full animate-pulse-light opacity-20"></div>
              <div className="absolute inset-2 bg-marble-cream rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-marble-brown opacity-60" />
              </div>
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`max-w-3xl mx-auto text-center transition-all duration-700 absolute left-0 right-0 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-y-0 z-10' 
                    : 'opacity-0 translate-y-10 -z-10'
                }`}
              >
                <p className="text-xl md:text-2xl italic mb-6 text-marble-darkbrown font-serif">"{testimonial.content}"</p>
                
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < testimonial.rating 
                          ? 'text-yellow-500 fill-yellow-500' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="font-bold text-lg text-marble-darkbrown">{testimonial.name}</div>
                <div className="text-marble-brown">{testimonial.role}, {testimonial.company}</div>
              </div>
            ))}
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-24 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-marble-brown w-8' 
                    : 'bg-marble-brown/30 hover:bg-marble-brown/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
