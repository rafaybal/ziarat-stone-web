
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/data/productData';

interface ProductCardProps {
  product: Product;
  animationIndex: number;
  isInView: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, animationIndex, isInView }) => {
  return (
    <div 
      className={`group transition-all duration-500 ${
        isInView 
          ? 'animate-fade-in' 
          : 'opacity-0'
      }`}
      style={{ 
        animationDelay: `${animationIndex * 0.1}s`, 
        animationFillMode: 'forwards'
      }}
    >
      <Card className="overflow-hidden border border-gray-200 h-full hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-3 w-full">
              <a 
                href="#contact" 
                className="bg-primary text-white text-center text-sm py-2 px-4 rounded w-full inline-block"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-blue-800">{product.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
          <div className="mt-3 flex justify-between items-center">
            <a 
              href="#contact" 
              className="inline-flex items-center text-primary hover:text-primary-foreground/90 text-sm font-medium group"
            >
              <span>Details</span>
              <ArrowRight className="ml-1 h-3 w-3 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">In Stock</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
