
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const products: Product[] = [
    {
      id: 1,
      name: "Afghan White Marble",
      description: "Premium quality white marble known for its purity and elegance.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Afghani-White-Marble.jpg"
    },
    {
      id: 2,
      name: "Black & Gold Marble",
      description: "Stunning black marble with elegant gold veining patterns.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Black-Gold-2-1.jpg"
    },
    {
      id: 3,
      name: "Badal Grey Marble",
      description: "Beautiful grey marble with subtle patterns and excellent durability.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Badal-Grey-Marble.jpg"
    },
    {
      id: 4,
      name: "Sunny Grey Marble",
      description: "Versatile grey marble with sunny undertones perfect for modern interiors.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Sunny-Grey-Marble.jpg"
    },
    {
      id: 5,
      name: "Desert Brown Marble",
      description: "Rich brown marble with natural patterns inspired by desert landscapes.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Desert-Brown-Marble.jpg"
    },
    {
      id: 6,
      name: "Silky Black Marble",
      description: "Elegant black marble with a silky smooth finish and subtle veining.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Silky-Black-Marble.jpg"
    },
    {
      id: 7,
      name: "Ziarat White Marble",
      description: "Premium quality white marble from Ziarat known for its purity and elegance.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Ziarat-White-Marble.jpg"
    },
    {
      id: 8,
      name: "Golden Travertine",
      description: "Luxurious golden travertine with natural patterns and excellent durability.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Golden-Travertine.jpg"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className={`section-heading ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          Our Premium Collection
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our extensive selection of high-quality natural stone products, sourced from the finest quarries
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`group transition-all duration-500 ${
                isInView 
                  ? 'animate-fade-in' 
                  : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`, 
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
          ))}
        </div>
        
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">View All</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
