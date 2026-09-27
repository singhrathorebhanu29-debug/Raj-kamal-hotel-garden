import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Trees, Users, Sparkles, Calendar, Flower2, Phone, Camera, CheckCircle2 } from 'lucide-react';

interface GardenEventsProps {
  onBookGarden: () => void;
}

export const GardenEvents: React.FC<GardenEventsProps> = ({ onBookGarden }) => {
  return (
    <section id="garden-events" className="py-20 sm:py-28 bg-[#0a0c0e] relative overflow-hidden border-t border-white/5">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <Trees className="w-3.5 h-3.5" />
            <span>Open Grounds & Celebrations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            Garden & Events at Raj Kamal
          </h2>

          <p className="text-[#a0a5ad] text-base sm:text-lg font-light leading-relaxed">
            A serene outdoor setting in Gwalior providing a beautiful garden environment for outdoor gatherings, family functions, and celebrations.
          </p>
        </div>

        {/* Highlight Banner / Demo Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Visual Showcase (Demo Images) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Garden / Event Hero Image */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group h-80 sm:h-[440px] bg-[#141619]">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80"
                alt="Raj Kamal Hotel & Garden Event Setting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Replaceable Demo Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#c5a059]/50 text-[#dfc287] text-xs font-medium uppercase tracking-wider rounded-sm">
                  <Camera className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Demo Event Photo • Replaceable with Hotel Photos</span>
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-lg bg-[#141619]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-serif text-lg sm:text-xl font-medium">
                      Beautiful Garden Setting
                    </h3>
                    <p className="text-xs text-[#a0a5ad] mt-0.5">
                      Lush outdoor lawn environment tailored for memorable gatherings
                    </p>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/40 text-xs font-medium rounded-sm">
                    Gwalior, M.P.
                  </span>
                </div>
              </div>
            </div>

            {/* Supporting Garden Image Tiles */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden border border-white/10 h-36 sm:h-44 bg-[#141619]">
                <img
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
                  alt="Outdoor lawn and garden area"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs font-medium text-white">
                  Garden Area
                </span>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-white/10 h-36 sm:h-44 bg-[#141619]">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
                  alt="Family celebrations and functions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs font-medium text-white">
                  Family Functions & Celebrations
                </span>
              </div>
            </div>
          </div>

          {/* Descriptive Content and Exact Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                Host Family Functions & Outdoor Gatherings in Gwalior
              </h3>
              <p className="text-sm sm:text-base text-[#b0b5be] font-light leading-relaxed">
                Raj Kamal Hotel & Garden features an open garden setting situated at Anand Nagar, Gwalior. Surrounded by natural greenery, our garden area offers a peaceful backdrop for hosting meaningful gatherings with family and guests.
              </p>
            </div>

            {/* Exactly Specified 4 Points */}
            <div className="space-y-3.5 pt-2">
              
              <div className="p-4 rounded-lg bg-[#141619] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Trees className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Garden Area</h4>
                  <p className="text-xs text-[#8e949e] mt-0.5">
                    Open-air garden space providing fresh air and a relaxed outdoor setting.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#141619] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Family Functions & Events</h4>
                  <p className="text-xs text-[#8e949e] mt-0.5">
                    Ideal venue for family get-togethers, birthday celebrations, anniversaries, and personal events.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#141619] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Outdoor Gatherings</h4>
                  <p className="text-xs text-[#8e949e] mt-0.5">
                    Comfortable space for evening gatherings, community events, and social occasions.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#141619] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Flower2 className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Beautiful Garden Setting</h4>
                  <p className="text-xs text-[#8e949e] mt-0.5">
                    Quiet and pleasing ambiance paired with on-site hotel amenities and parking.
                  </p>
                </div>
              </div>

            </div>

            {/* Booking Option Action Button: "Book Garden / Event" */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                onClick={onBookGarden}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#c5a059] hover:bg-[#b38e46] text-black font-semibold text-xs uppercase tracking-widest rounded-sm transition-all shadow-lg hover:shadow-[#c5a059]/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Garden / Event</span>
              </button>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider rounded-sm border border-white/15 hover:border-white/30 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Call {HOTEL_INFO.displayPhone}</span>
              </a>
            </div>

            <p className="text-[11px] text-[#6e747e] italic">
              * Send a Garden / Event booking enquiry via WhatsApp to verify availability for your preferred date.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
