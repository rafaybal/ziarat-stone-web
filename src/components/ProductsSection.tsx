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
      name: "BISMILLAH BADAL",
      description: "Premium quality marble with elegant gray and white veining patterns.",
      image: "/lovable-uploads/237fd927-f868-483e-80b4-7b73a89ef837.png"
    },
    {
      id: 2,
      name: "BOTICENA CAMANDO CREAM",
      description: "Elegant cream marble with subtle golden veining patterns.",
      image: "/lovable-uploads/586c106a-426f-4e28-8284-3fd8058fd285.png"
    },
    {
      id: 3,
      name: "BOTICENA CAMANDO GOLD",
      description: "Luxurious marble with rich golden veining on a creamy background.",
      image: "/lovable-uploads/b741499f-ae6b-4c0c-932d-a3a0b0033026.png"
    },
    {
      id: 4,
      name: "BOTICENA CREAM",
      description: "Classic cream marble with natural patterns and superb durability.",
      image: "/lovable-uploads/02d4b1be-e4de-45f7-845f-b14c38cf80ad.png"
    },
    {
      id: 5,
      name: "BOTICENA FANCY",
      description: "Exquisite marble featuring intricate golden veining on cream background.",
      image: "/lovable-uploads/23408cd5-d9c4-4aa2-9aae-fe81fae4610f.png"
    },
    {
      id: 6,
      name: "DARK ZEBRA",
      description: "Dramatic marble with distinctive zebra-like patterns in dark and light tones.",
      image: "/lovable-uploads/e4654439-dcb2-4ce3-b43f-b6a895b51bc8.png"
    },
    {
      id: 7,
      name: "INDIAN GREEN",
      description: "Vibrant green marble with unique natural patterns, perfect for statement pieces.",
      image: "/lovable-uploads/a2926f3d-8316-4ba1-8306-4b4fd11d19b6.png"
    },
    {
      id: 8,
      name: "JET BLACK",
      description: "Elegant deep black marble with a sophisticated high-gloss finish.",
      image: "/lovable-uploads/2b708aab-484c-4087-9b83-4b059e912845.png"
    },
    {
      id: 9,
      name: "LIGHT ZEBRA",
      description: "Beautiful marble with light zebra-like patterns for a unique aesthetic.",
      image: "/lovable-uploads/30f2a1dc-fff3-4177-a734-d658573197bc.png"
    },
    {
      id: 10,
      name: "NAKHROL FANCY",
      description: "Premium marble with intricate natural veining and exceptional durability.",
      image: "/lovable-uploads/564e0903-a5a1-45b2-9380-eda91cedfabb.png"
    },
    {
      id: 11,
      name: "NOSHERA PINK",
      description: "Distinctive pink marble with subtle veining and warm tones.",
      image: "/lovable-uploads/20f79a89-9167-4bd5-840a-bed1a7952af9.png"
    },
    {
      id: 12,
      name: "OSHNIC",
      description: "Premium quality marble with unique patterns and excellent durability.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Oshnic-Marble.jpg"
    },
    {
      id: 13,
      name: "PAK GREEN",
      description: "Beautiful green marble with natural patterns, sourced from Pakistan.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Pak-Green-Marble.jpg"
    },
    {
      id: 14,
      name: "RED N WHITE",
      description: "Stunning marble featuring striking red and white contrasting patterns.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Red-N-White-Marble.jpg"
    },
    {
      id: 15,
      name: "ROYAL FANCY",
      description: "Luxurious marble with elegant veining and premium finish.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Royal-Fancy-Marble.jpg"
    },
    {
      id: 16,
      name: "SILKY BLACK",
      description: "Deep black marble with a silky smooth finish and subtle patterns.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Silky-Black-Marble.jpg"
    },
    {
      id: 17,
      name: "AFGHAN WHITE",
      description: "Premium quality white marble known for its purity and elegance.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Afghani-White-Marble.jpg"
    },
    {
      id: 18,
      name: "BLACK & GOLD",
      description: "Stunning black marble with elegant gold veining patterns.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Black-Gold-2-1.jpg"
    },
    {
      id: 19,
      name: "BADAL GREY",
      description: "Beautiful grey marble with subtle patterns and excellent durability.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Badal-Grey-Marble.jpg"
    },
    {
      id: 20,
      name: "SUNNY GREY",
      description: "Versatile grey marble with sunny undertones perfect for modern interiors.",
      image: "http://pakistanmarbles.com/wp-content/uploads/2023/08/Sunny-Grey-Marble.jpg"
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
