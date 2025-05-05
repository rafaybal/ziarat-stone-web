
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
  );
};

export default ProductPagination;
