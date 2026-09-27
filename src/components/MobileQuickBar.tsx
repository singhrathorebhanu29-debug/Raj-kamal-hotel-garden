import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, BedDouble, Trees } from 'lucide-react';

interface MobileQuickBarProps {
  onBookRoom: () => void;
  onBookGarden: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onBookRoom, onBookGarden }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#121417]/98 backdrop-blur-lg border-t border-white/15 px-2.5 py-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5">
        {/* Book a Room */}
        <button
          onClick={onBookRoom}
          aria-label="Book a Room"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-[#c5a059] text-black font-bold text-[10px] uppercase tracking-tight transition-all active:scale-95 min-w-0"
        >
          <BedDouble className="w-4 h-4 mb-0.5 shrink-0" />
          <span className="truncate w-full text-center">Book a Room</span>
        </button>

        {/* Book Garden / Event */}
        <button
          onClick={onBookGarden}
          aria-label="Book Garden / Event"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-[#1e2329] text-[#dfc287] font-bold text-[10px] uppercase tracking-tight border border-[#c5a059]/40 transition-all active:scale-95 min-w-0"
        >
          <Trees className="w-4 h-4 text-[#c5a059] mb-0.5 shrink-0" />
          <span className="truncate w-full text-center">Book Garden</span>
        </button>

        {/* Call Now */}
        <a
          href={`tel:${HOTEL_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-black/60 text-white font-medium text-[10px] uppercase tracking-tight border border-white/15 transition-all min-w-0"
        >
          <Phone className="w-4 h-4 text-[#c5a059] mb-0.5 shrink-0" />
          <span className="truncate w-full text-center">Call Now</span>
        </a>

        {/* Directions */}
        <a
          href={HOTEL_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-white/5 text-white font-medium text-[10px] uppercase tracking-tight border border-white/15 transition-all min-w-0"
        >
          <MapPin className="w-4 h-4 text-[#dfc287] mb-0.5 shrink-0" />
          <span className="truncate w-full text-center">Directions</span>
        </a>
      </div>
    </div>
  );
};
