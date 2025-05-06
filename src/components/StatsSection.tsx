
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from '@/hooks/useInView';

interface Stat {
  id: number;
  value: number;
  label: string;
  suffix: string;
}

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  const stats: Stat[] = [
    { id: 1, value: 10, label: "Years Experience", suffix: "+" },
    { id: 2, value: 150, label: "Projects Completed", suffix: "+" },
    { id: 3, value: 50, label: "Happy Clients", suffix: "+" },
    { id: 4, value: 5, label: "Quarries Owned", suffix: "" }
  ];

  const CounterAnimation = ({ stat }: { stat: Stat }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isInView) return;
      
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [isInView, stat.value]);
    
    return (
      <span>{count}{stat.suffix}</span>
    );
  };

  return (
    <section ref={sectionRef} className="py-16 bg-black-800 relative overflow-hidden">
      {/* Gold ray animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gold-400/5 rotate-45 transform -translate-x-full animate-[slide-in-right_8s_ease-in-out_infinite_alternate]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`transform transition-transform duration-500 hover:scale-105 opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="bg-black-900/60 rounded-lg p-6 backdrop-blur-sm border border-gold-800/20 h-full shadow-lg hover:shadow-xl transition-all hover:border-gold-800/40">
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                  {isInView ? <CounterAnimation stat={stat} /> : '0'}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
