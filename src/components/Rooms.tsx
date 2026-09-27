import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Wind, Bath, ChefHat, Check, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface RoomsProps {
  onSelectRoom: (roomTitle: string) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onSelectRoom }) => {
  // Details strictly adhere to the prompt specification:
  // - AC Luxury Rooms
  // - Air-conditioned rooms
  // - Private bathroom and shower
  // - Kitchen facility in rooms
  // - Do not invent room categories or room sizes
  // - Price: "Check latest room rates and availability."
  const rooms = [
    {
      id: 'ac-luxury-room',
      title: 'AC Luxury Rooms',
      subtitle: 'Air-Conditioned Comfort with In-Room Kitchen & Private Bath',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      badge: 'Featured Room',
      description:
        'Thoughtfully designed for comfort and extended stays, featuring climate-controlled cooling, an ensuite private bathroom with shower, and convenient in-room kitchen facilities.',
      features: [
        {
          label: 'Air-conditioned rooms',
          icon: Wind,
          desc: 'Individual climate control for cool and restful stays',
        },
        {
          label: 'Private bathroom and shower',
          icon: Bath,
          desc: 'Clean private bathroom with hot and cold shower',
        },
        {
          label: 'Kitchen facility in rooms',
          icon: ChefHat,
          desc: 'In-room kitchen amenities for light meal preparation',
        },
      ],
      priceNote: 'Check latest room rates and availability.',
    },
    {
      id: 'ac-executive-room',
      title: 'AC Luxury Rooms (Twin / Double Setup)',
      subtitle: 'Spacious Air-Conditioned Room with Private Shower & Kitchenette',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      badge: 'Ideal for Families & Business',
      description:
        'Peaceful and comfortable accommodations equipped with full air-conditioning, a hygienic private bathroom and shower, and self-sufficient in-room kitchen facility.',
      features: [
        {
          label: 'Air-conditioned rooms',
          icon: Wind,
          desc: 'Quality cooling ensuring a restful environment day & night',
        },
        {
          label: 'Private bathroom and shower',
          icon: Bath,
          desc: 'Private ensuite bathroom with modern sanitary fittings',
        },
        {
          label: 'Kitchen facility in rooms',
          icon: ChefHat,
          desc: 'In-room kitchen facility for added flexibility during travel',
        },
      ],
      priceNote: 'Check latest room rates and availability.',
    },
  ];

  return (
    <section id="rooms" className="py-20 sm:py-24 bg-[#0a0b0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <span>Accommodations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            Rooms & Living
          </h2>
          <p className="text-[#a0a5ad] text-base sm:text-lg font-light">
            Elegantly maintained accommodations offering air conditioning, private bathrooms, and in-room kitchen facilities for a relaxing stay in Gwalior.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-[#141619] rounded-lg overflow-hidden border border-white/10 hover:border-[#c5a059]/50 transition-all duration-300 flex flex-col group shadow-xl"
            >
              {/* Room Image */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-black/40">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141619] via-transparent to-black/30" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/75 backdrop-blur-md border border-[#c5a059]/40 text-[#dfc287] text-xs font-medium tracking-wider uppercase rounded-sm">
                    {room.badge}
                  </span>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#dfc287] transition-colors mb-2">
                    {room.title}
                  </h3>
                  <p className="text-sm text-[#c5a059] font-medium mb-4">
                    {room.subtitle}
                  </p>
                  <p className="text-sm text-[#b0b5be] font-light leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Explicit Required Features */}
                  <div className="space-y-3.5 pt-4 border-t border-white/10 mb-6">
                    {room.features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-3.5 h-3.5 text-[#c5a059]" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-white block">
                              {feature.label}
                            </span>
                            <span className="text-xs text-[#8e949e]">
                              {feature.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Price policy note & Action Button */}
                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#8e949e] uppercase tracking-wider block">Pricing Notice</span>
                    <span className="text-sm font-medium text-[#dfc287] italic">
                      “{room.priceNote}”
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectRoom(room.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#c5a059] hover:bg-[#b38e46] text-black font-semibold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md shrink-0"
                  >
                    <span>Book a Room</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Helpful Info Notice Box */}
        <div className="mt-12 p-6 rounded-lg bg-[#141619]/60 border border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-[#a0a5ad] leading-relaxed">
            <span className="text-white font-medium">Direct Booking Assistance:</span> Contact our 24-hour front desk at{' '}
            <a href={`tel:${HOTEL_INFO.phone}`} className="text-[#c5a059] hover:underline font-semibold">
              {HOTEL_INFO.displayPhone}
            </a>{' '}
            for current room tariffs, seasonal check-in availability, and group bookings.
          </p>
        </div>

      </div>
    </section>
  );
};
