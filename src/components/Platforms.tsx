import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Globe, ShieldCheck, Check, Phone } from 'lucide-react';

export const Platforms: React.FC = () => {
  const platformNames = [
    'MakeMyTrip',
    'Goibibo',
    'Booking.com',
    'Agoda',
    'Yatra',
  ];

  return (
    <section className="py-14 bg-[#0d0f11] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main requirement verbatim */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059] mb-2">
          <Globe className="w-3.5 h-3.5" />
          <span>Travel Portals & Booking Channels</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">
          “Also available on leading travel booking platforms.”
        </h3>

        <p className="text-xs sm:text-sm text-[#8e949e] max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Raj Kamal Hotel & Garden accommodations can also be found across popular travel and hotel portals. Contact our front desk directly for real-time room availability, corporate tie-ups, and special group packages.
        </p>

        {/* Platform Display Badges - no fake links as strictly required */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {platformNames.map((platform) => (
            <div
              key={platform}
              className="px-4 py-2.5 rounded-sm bg-[#15181b] border border-white/10 text-xs sm:text-sm font-medium text-[#d4cfc7] flex items-center gap-2"
            >
              <Check className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{platform}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#6e747e]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>Verified property profile in Gwalior, Madhya Pradesh</span>
        </div>

      </div>
    </section>
  );
};
