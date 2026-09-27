import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { ShieldCheck, MapPin, Clock, UtensilsCrossed, Trees, BedDouble, Phone } from 'lucide-react';

interface AboutProps {
  onBookRoom: () => void;
  onBookGarden: () => void;
}

export const About: React.FC<AboutProps> = ({ onBookRoom, onBookGarden }) => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#0e1012] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Descriptive text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
              <span>About Raj Kamal Hotel & Garden</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.2] mb-6">
              Comfortable 3-Star Hospitality <br />
              <span className="italic text-[#dfc287]">in Gwalior, Madhya Pradesh</span>
            </h2>

            <div className="space-y-4 text-[#e2ded9]/85 text-base sm:text-lg font-light leading-relaxed mb-8">
              <p>
                Raj Kamal Hotel & Garden is a 3-star hotel located at Chauraha, Near Noel Public School in Chandra Nagar, Anand Nagar, Gwalior.
              </p>
              <p>
                We offer a comfortable, quiet, and well-maintained environment for guests looking for comfortable rooms, quality food, and a pleasant stay in Gwalior. Our property combines air-conditioned accommodations, private ensuite amenities, an open garden setting for events, an in-house restaurant, and attentive 24-hour service.
              </p>
              <p>
                Whether traveling for business, visiting family, or organizing an outdoor gathering, our aim is to ensure your visit is smooth, relaxing, and memorable.
              </p>
            </div>

            {/* Key Verified Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">3-Star Hotel Standard</h4>
                  <p className="text-xs text-[#a0a5ad] mt-0.5">Comfortable lodging with professional hospitality</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Convenient Gwalior Location</h4>
                  <p className="text-xs text-[#a0a5ad] mt-0.5">Chandra Nagar, Anand Nagar (Near Noel Public School)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">24-Hour Front Desk & Service</h4>
                  <p className="text-xs text-[#a0a5ad] mt-0.5">Assistance and room service available around the clock</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <UtensilsCrossed className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">In-House Dining & Garden</h4>
                  <p className="text-xs text-[#a0a5ad] mt-0.5">Fresh food and open lawn space for family functions</p>
                </div>
              </div>
            </div>

            {/* Strictly only the two booking options */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={onBookRoom}
                className="w-full sm:w-auto px-5 py-3 bg-[#c5a059] hover:bg-[#b38e46] text-black font-semibold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <BedDouble className="w-4 h-4 shrink-0" />
                <span>Book a Room</span>
              </button>

              <button
                onClick={onBookGarden}
                className="w-full sm:w-auto px-5 py-3 bg-[#1a1e23] hover:bg-[#23282f] text-[#dfc287] font-semibold text-xs uppercase tracking-widest rounded-sm border border-[#c5a059]/50 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Trees className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Book Garden / Event</span>
              </button>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-full sm:w-auto px-4 py-3 text-xs uppercase tracking-wider text-[#f4efe8] hover:text-[#c5a059] font-medium border border-white/20 hover:border-[#c5a059]/60 rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <span>Call {HOTEL_INFO.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Imagery matching reference aesthetic */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Photo */}
              <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
                  alt="Raj Kamal Hotel & Garden Reception and interior"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-black/70 backdrop-blur-md border border-white/10">
                  <p className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider">
                    Raj Kamal Hotel & Garden
                  </p>
                  <p className="text-xs text-white/90 mt-1">
                    Chauraha, Near Noel Public School, Anand Nagar, Gwalior
                  </p>
                </div>
              </div>

              {/* Decorative accent card */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#1a1d21] border border-[#c5a059]/40 p-5 rounded shadow-2xl max-w-[240px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-serif text-[#c5a059] font-bold">4.8★</span>
                  <span className="text-xs text-white/80">Google Rating</span>
                </div>
                <p className="text-[11px] text-[#a0a5ad] leading-tight">
                  Based on 80 verified reviews from travelers in Gwalior.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
