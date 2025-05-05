
import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from '@/components/ui/pagination';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const allProducts: Product[] = [
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
    },
    {
      id: 9,
      name: "Verona Marble",
      description: "Classic Italian-inspired Verona marble with distinctive veining.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Verona-Marble.jpg"
    },
    {
      id: 10,
      name: "Asian Blue Marble",
      description: "Stunning blue marble with unique veining patterns from Asia.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Blue-Ocean-Marble.jpg"
    },
    {
      id: 11,
      name: "Emerald Green Marble",
      description: "Luxurious green marble with emerald tones for a distinctive look.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Green-Onyx.jpg"
    },
    {
      id: 12,
      name: "Silver Travertine",
      description: "Elegant silver travertine with natural patterns and textures.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Silver-Travertine-Marble.jpg"
    },
    {
      id: 13,
      name: "Botticino Marble",
      description: "Fine-grained cream colored marble with subtle veining.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Botticino-1.jpg"
    },
    {
      id: 14,
      name: "Persian Umber Marble",
      description: "Rich brown marble with distinctive patterns from Persian regions.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Persian-Travertine.jpg"
    },
    {
      id: 15,
      name: "Ruby Red Marble",
      description: "Vibrant red marble with distinctive veining and high polish finish.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Red-Travertine.jpg"
    },
    {
      id: 16,
      name: "Sahara Beige Marble",
      description: "Warm beige marble inspired by the colors of the Sahara desert.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Sahara-Beige-Marble.jpg"
    },
    {
      id: 17,
      name: "Indus Gold Marble",
      description: "Beautiful gold marble with rich warm tones and natural patterns.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Indus-Gold-Marble.jpg"
    },
    {
      id: 18,
      name: "Black Zebra Marble",
      description: "Dramatic black marble with distinctive white veining resembling zebra patterns.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Black-Zebra-Marble.jpg"
    },
    {
      id: 19,
      name: "Rosalia Pink Marble",
      description: "Delicate pink marble with subtle veining and warm undertones.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Rosalia-Pink-Marble.jpg"
    },
    {
      id: 20,
      name: "Golden Flower Marble",
      description: "Stunning marble with golden floral patterns and premium finish.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Golden-Flower-Marble.jpg"
    },
    {
      id: 21,
      name: "Statuario Blue Marble",
      description: "Luxurious blue marble with distinctive white veining patterns.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Ocean-Blue-1.jpg"
    },
    {
      id: 22,
      name: "Breccia Aurora",
      description: "Multicolored marble with complex patterns and exceptional beauty.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Breccia-Aurora.jpg"
    },
    {
      id: 23,
      name: "Teak Wood Stone",
      description: "Natural stone with wood-like appearance and excellent durability.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Teak-Wood-Stone.jpg"
    },
    {
      id: 24,
      name: "Emperador Light",
      description: "Light brown marble with delicate veining and warm undertones.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Emperador-Light.jpg"
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));

  return (
    <section id="products" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className={`section-heading text-3xl font-bold text-blue-800 text-center mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          Our Premium Collection
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our extensive selection of high-quality natural stone products, sourced from the finest quarries
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product, index) => (
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
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); prevPage(); }} />
                </PaginationItem>
              )}
              
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink 
                    href="#" 
                    isActive={currentPage === i + 1} 
                    onClick={(e) => { e.preventDefault(); paginate(i + 1); }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext href="#" onClick={(e) => { e.preventDefault(); nextPage(); }} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
