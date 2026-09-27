import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/hotelData';
import { GalleryImage } from '../types';
import { Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'rooms', label: 'Rooms & Bathrooms' },
    { id: 'garden', label: 'Garden & Grounds' },
    { id: 'dining', label: 'Restaurant & Dining' },
    { id: 'hotel', label: 'Hotel & Lobby' },
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#0a0b0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            Hotel & Property Gallery
          </h2>
          <p className="text-[#a0a5ad] text-base sm:text-lg font-light">
            Take a look inside Raj Kamal Hotel & Garden. Explore our guest rooms, garden grounds, dining hall, and facilities.
          </p>
          <div className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#dfc287]/90 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <ImageIcon className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Demo Gallery • Replaceable with actual property photos by hotel management</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#c5a059] text-black shadow-md'
                  : 'bg-[#15171a] text-[#8e949e] hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setActiveImageIndex(index)}
              className="group relative h-64 sm:h-72 rounded-lg overflow-hidden border border-white/10 bg-[#16181b] cursor-pointer shadow-lg hover:border-[#c5a059]/60 transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="p-3 bg-black/60 rounded-full text-white backdrop-blur-sm border border-white/20">
                  <Eye className="w-5 h-5 text-[#c5a059]" />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-medium block">
                  {image.category}
                </span>
                <h4 className="text-white text-sm font-medium leading-snug">
                  {image.title}
                </h4>
                <p className="text-[11px] text-[#a0a5ad] line-clamp-1 mt-0.5 font-light">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredImages[activeImageIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview Lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 p-2.5 text-white/70 hover:text-white bg-white/10 rounded-full hover:bg-white/20 transition-all z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/60 rounded-full hover:bg-black/90 transition-all z-20 border border-white/20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/60 rounded-full hover:bg-black/90 transition-all z-20 border border-white/20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[activeImageIndex].url}
              alt={filteredImages[activeImageIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg border border-white/15 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block">
                {filteredImages[activeImageIndex].category} • {activeImageIndex + 1} of {filteredImages.length}
              </span>
              <h3 className="text-lg font-serif text-white font-medium mt-1">
                {filteredImages[activeImageIndex].title}
              </h3>
              <p className="text-xs text-[#a0a5ad] max-w-lg mt-1 font-light">
                {filteredImages[activeImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
