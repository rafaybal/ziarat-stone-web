
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ProductsSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Ziarat White Marble",
      description: "Premium quality white marble known for its purity and elegance.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Onyx Marble",
      description: "Stunning translucent marble with unique patterns and colors.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Granite",
      description: "Durable and versatile stone perfect for countertops and flooring.",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Custom Sizes & Finishes",
      description: "Tailored solutions to meet your specific requirements.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="products" className="py-20 marble-texture-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading animate-fade-in">Our Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2 duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-marble-darkbrown">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-marble-brown hover:text-marble-darkbrown font-medium group"
                >
                  <span className="relative">
                    Inquire Now
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-marble-brown group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
