
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface GalleryItem {
  id: number;
  category: string;
  image: string;
  title: string;
}

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'slabs',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'White Marble Slabs'
    },
    {
      id: 2,
      category: 'tiles',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Polished Floor Tiles'
    },
    {
      id: 3,
      category: 'projects',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Hotel Lobby'
    },
    {
      id: 4,
      category: 'slabs',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Premium Onyx Slabs'
    },
    {
      id: 5,
      category: 'projects',
      image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Kitchen Countertops'
    },
    {
      id: 6,
      category: 'tiles',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Custom Cut Marble Tiles'
    }
  ];
  
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);
    
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Gallery</h2>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 rounded-full ${
                filter === 'all' 
                  ? 'bg-marble-brown text-white' 
                  : 'bg-marble-cream text-marble-darkbrown hover:bg-marble-beige'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('slabs')} 
              className={`px-4 py-2 rounded-full ${
                filter === 'slabs' 
                  ? 'bg-marble-brown text-white' 
                  : 'bg-marble-cream text-marble-darkbrown hover:bg-marble-beige'
              }`}
            >
              Slabs
            </button>
            <button 
              onClick={() => setFilter('tiles')} 
              className={`px-4 py-2 rounded-full ${
                filter === 'tiles' 
                  ? 'bg-marble-brown text-white' 
                  : 'bg-marble-cream text-marble-darkbrown hover:bg-marble-beige'
              }`}
            >
              Tiles
            </button>
            <button 
              onClick={() => setFilter('projects')} 
              className={`px-4 py-2 rounded-full ${
                filter === 'projects' 
                  ? 'bg-marble-brown text-white' 
                  : 'bg-marble-cream text-marble-darkbrown hover:bg-marble-beige'
              }`}
            >
              Projects
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative group h-64 md:h-80">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center p-4">
                    <p className="text-lg font-medium">{item.title}</p>
                    <p className="text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-white p-0">
          {selectedImage && (
            <div className="w-full h-full max-h-[80vh]">
              <img 
                src={selectedImage} 
                alt="Gallery view" 
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
