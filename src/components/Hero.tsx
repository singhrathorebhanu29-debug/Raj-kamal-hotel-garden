import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, Calendar, Star, Trees, BedDouble, Eye, ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookRoom: (params?: { checkIn?: string; checkOut?: string; guests?: number }) => void;
  onBookGarden: (params?: { eventDate?: string; guests?: number }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookRoom, onBookGarden }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState(2);

  const handleScrollToGarden = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('garden-events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Image with Luxurious Overlay - Hotel exterior & garden atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=85"
          alt="Raj Kamal Hotel & Garden peaceful lawn and exterior"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multi-layered gradient overlay for cinematic luxury and legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[#0c0d0e]/20 backdrop-blur-[0.5px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          {/* 3-Star Badge & Location Line */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm font-medium mb-6">
            <div className="flex items-center gap-0.5 text-[#c5a059]">
              <Star className="w-3.5 h-3.5 fill-[#c5a059]" />
              <Star className="w-3.5 h-3.5 fill-[#c5a059]" />
              <Star className="w-3.5 h-3.5 fill-[#c5a059]" />
            </div>
            <span className="text-white/40">|</span>
            <span className="tracking-wide">3-Star Hotel in Gwalior</span>
            <span className="text-white/40">|</span>
            <span className="text-[#dfc287] font-medium">Chandra Nagar, Anand Nagar</span>
          </div>

          {/* Primary Hotel Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.12] mb-5">
            Raj Kamal <br />
            <span className="text-[#dfc287] italic font-normal">Hotel & Garden</span>
          </h1>

          {/* Tagline / Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#f4efe8]/90 font-light tracking-wide max-w-2xl mb-8 leading-relaxed">
            “Comfortable Stay. Great Service. A Memorable Experience.”
          </p>

          {/* Key Prompts & Badges */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#e2ded9]/80 mb-9">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
              AC Luxury Rooms
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
              Garden Area for Events
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
              In-House Restaurant
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
              Google 4.8★ (80 Reviews)
            </span>
          </div>

          {/* The Main Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            {/* 1. Only Two Booking Options: "Book a Room" */}
            <button
              onClick={() => onBookRoom()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-[#c5a059] hover:bg-[#b38e46] text-black font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-sm transition-all shadow-lg hover:shadow-xl hover:shadow-[#c5a059]/20"
            >
              <BedDouble className="w-4 h-4" />
              <span>Book a Room</span>
            </button>

            {/* 2. Only Two Booking Options: "Book Garden / Event" */}
            <button
              onClick={() => onBookGarden()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-[#1f2429] hover:bg-[#282e35] text-[#dfc287] font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-sm border border-[#c5a059]/60 hover:border-[#c5a059] transition-all shadow-md"
            >
              <Trees className="w-4 h-4 text-[#c5a059]" />
              <span>Book Garden / Event</span>
            </button>

            {/* 3. "View Garden" Button that scrolls to the Garden section */}
            <a
              href="#garden-events"
              onClick={handleScrollToGarden}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-sm border border-white/25 hover:border-white/50 transition-all backdrop-blur-md"
            >
              <Eye className="w-4 h-4 text-[#c5a059]" />
              <span>View Garden</span>
            </a>

            {/* 4. Call Now */}
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 bg-black/60 hover:bg-black/80 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-sm border border-white/20 hover:border-[#c5a059] transition-all backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              <span>Call Now</span>
            </a>

            {/* 5. Get Directions */}
            <a
              href={HOTEL_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 bg-white/5 hover:bg-white/15 text-white/90 font-medium text-xs sm:text-sm tracking-wider uppercase rounded-sm border border-white/15 hover:border-white/30 transition-all"
            >
              <MapPin className="w-4 h-4 text-[#dfc287]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Quick Booking Options Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="bg-[#141619]/95 backdrop-blur-md border border-white/15 rounded-lg sm:rounded-md p-4 sm:p-5 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
            
            {/* Check-In */}
            <div className="sm:col-span-1 lg:col-span-3 flex flex-col border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-3">
              <label htmlFor="hero-checkin" className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#c5a059] mb-1">
                Check-In Date
              </label>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-white/50 shrink-0" />
                <input
                  id="hero-checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-white text-sm focus:outline-none w-full min-w-0 [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Check-Out */}
            <div className="sm:col-span-1 lg:col-span-3 flex flex-col border-b sm:border-b-0 lg:border-r border-white/10 pb-3 sm:pb-0 sm:pr-3">
              <label htmlFor="hero-checkout" className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#c5a059] mb-1">
                Check-Out Date
              </label>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-white/50 shrink-0" />
                <input
                  id="hero-checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-white text-sm focus:outline-none w-full min-w-0 [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="sm:col-span-2 md:col-span-1 lg:col-span-2 flex flex-col border-b sm:border-b-0 lg:border-r border-white/10 pb-3 sm:pb-0 sm:pr-3">
              <label htmlFor="hero-guests" className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#c5a059] mb-1">
                Guests
              </label>
              <select
                id="hero-guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="bg-transparent text-white text-sm focus:outline-none w-full min-w-0 cursor-pointer [color-scheme:dark]"
              >
                <option value={1} className="bg-[#1a1d20] text-white">1 Guest</option>
                <option value={2} className="bg-[#1a1d20] text-white">2 Guests</option>
                <option value={3} className="bg-[#1a1d20] text-white">3 Guests</option>
                <option value={4} className="bg-[#1a1d20] text-white">4 Guests</option>
                <option value={5} className="bg-[#1a1d20] text-white">5+ Guests</option>
              </select>
            </div>

            {/* Action Buttons: strictly the two allowed booking options */}
            <div className="sm:col-span-2 md:col-span-1 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onBookRoom({ checkIn, checkOut, guests })}
                className="py-3 px-3 bg-[#c5a059] hover:bg-[#b38e46] text-black font-semibold text-[11px] sm:text-xs uppercase tracking-wider rounded-sm transition-all shadow-md flex items-center justify-center gap-1.5 text-center min-w-0"
              >
                <BedDouble className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Book a Room</span>
              </button>

              <button
                type="button"
                onClick={() => onBookGarden({ eventDate: checkIn, guests })}
                className="py-3 px-3 bg-[#1e2329] hover:bg-[#252b32] text-[#dfc287] border border-[#c5a059]/50 font-semibold text-[11px] sm:text-xs uppercase tracking-wider rounded-sm transition-all shadow-md flex items-center justify-center gap-1.5 text-center min-w-0"
              >
                <Trees className="w-3.5 h-3.5 shrink-0 text-[#c5a059]" />
                <span className="truncate">Book Garden / Event</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
