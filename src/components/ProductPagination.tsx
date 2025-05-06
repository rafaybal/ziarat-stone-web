
import React from 'react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

const ProductPagination: React.FC<ProductPaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
  nextPage,
  prevPage
}) => {
  return (
    <div className="mt-12">
      <Pagination>
        <PaginationContent className="text-gold-400">
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => { e.preventDefault(); prevPage(); }}
                className="border border-gold-800/30 bg-black-800 hover:bg-black-700 hover:border-gold-800/50 transition-colors"
              />
            </PaginationItem>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink 
                href="#" 
                isActive={currentPage === i + 1} 
                onClick={(e) => { e.preventDefault(); paginate(i + 1); }}
                className={currentPage === i + 1 ? 
                  "bg-gold-400 text-black-900 border-gold-400" : 
                  "border-gold-800/30 bg-black-800 hover:bg-black-700 hover:border-gold-800/50 transition-colors"
                }
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          
          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => { e.preventDefault(); nextPage(); }}
                className="border border-gold-800/30 bg-black-800 hover:bg-black-700 hover:border-gold-800/50 transition-colors"
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductPagination;
