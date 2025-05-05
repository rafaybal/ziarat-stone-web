
import React, { useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { products } from '@/data/productData';
import ProductCard from './ProductCard';
import ProductPagination from './ProductPagination';

const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Calculate pagination
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
            <ProductCard 
              key={product.id}
              product={product}
              animationIndex={index}
              isInView={isInView}
            />
          ))}
        </div>
        
        <ProductPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </section>
  );
};

export default ProductsSection;
