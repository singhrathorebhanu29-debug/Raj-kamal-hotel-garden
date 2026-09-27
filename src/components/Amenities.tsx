import React, { useState } from 'react';
import { AMENITIES_LIST } from '../data/hotelData';
import {
  Wifi,
  Coffee,
  Car,
  Utensils,
  Clock,
  ShieldCheck,
  ArrowUpDown,
  Luggage,
  Shirt,
  Briefcase,
  Accessibility,
  Smile,
  Gamepad2,
  Dog,
  Ban,
  CheckCircle2,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Wifi,
  Coffee,
  Car,
  Utensils,
  Clock,
  ShieldCheck,
  ArrowUpDown,
  Luggage,
  Shirt,
  Briefcase,
  Accessibility,
  Smile,
  Gamepad2,
  Dog,
  Ban,
};

export const Amenities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Amenities (15)' },
    { id: 'essentials', label: 'Essentials & Comfort' },
    { id: 'facilities', label: 'Hotel Facilities' },
    { id: 'services', label: '24/7 Services' },
    { id: 'family', label: 'Family & Pet Friendly' },
  ];

  const filteredAmenities =
    activeCategory === 'all'
      ? AMENITIES_LIST
      : AMENITIES_LIST.filter((item) => item.category === activeCategory);

  return (
    <section id="amenities" className="py-20 sm:py-24 bg-[#0e1012] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <span>Guest Comfort & Conveniences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            Hotel Amenities & Facilities
          </h2>
          <p className="text-[#a0a5ad] text-base sm:text-lg font-light">
            Every convenience thoughtfully provided to make your visit to Gwalior comfortable, seamless, and hassle-free.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#c5a059] text-black shadow-md'
                  : 'bg-[#15171a] text-[#8e949e] hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Amenities Cards Grid - displaying all 15 clearly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {filteredAmenities.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon] || CheckCircle2;
            return (
              <div
                key={amenity.name}
                className="bg-[#15181b] p-5 rounded-lg border border-white/10 hover:border-[#c5a059]/50 transition-all duration-200 group flex flex-col justify-between hover:bg-[#191c21]"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#c5a059]/10 border border-[#c5a059]/25 flex items-center justify-center mb-4 group-hover:bg-[#c5a059]/20 group-hover:scale-105 transition-all">
                    <IconComponent className="w-5 h-5 text-[#c5a059]" />
                  </div>
                  <h4 className="text-white font-medium text-sm sm:text-base mb-1.5 group-hover:text-[#dfc287] transition-colors">
                    {amenity.name}
                  </h4>
                  <p className="text-xs text-[#8e949e] leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-[11px] text-[#c5a059]/80 font-medium">
                  <span>Available on property</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#17191d] via-[#1a1d22] to-[#17191d] p-6 rounded-lg border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#c5a059]" />
            </div>
            <div>
              <h4 className="text-white font-medium text-base">Complete Guest Facilities</h4>
              <p className="text-xs sm:text-sm text-[#a0a5ad] mt-0.5">
                From gated self parking and high-speed Wi-Fi to round-the-clock room service and wheelchair accessibility.
              </p>
            </div>
          </div>

          <a
            href="#rooms"
            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-xs font-medium uppercase tracking-wider rounded-sm transition-all shrink-0"
          >
            Explore Accommodations
          </a>
        </div>

      </div>
    </section>
  );
};
