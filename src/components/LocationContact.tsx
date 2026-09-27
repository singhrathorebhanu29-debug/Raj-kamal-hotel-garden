import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, Clock, Navigation, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOTEL_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 sm:py-24 bg-[#0e1012] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <span>Find & Reach Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            Location & Contact Information
          </h2>
          <p className="text-[#a0a5ad] text-base sm:text-lg font-light">
            Conveniently situated in Anand Nagar, Gwalior near Noel Public School with peaceful garden surroundings and secure gated self parking.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Hotel Information */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Primary Phone Card */}
            <div className="bg-[#141619] p-6 sm:p-8 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-3">
                <Phone className="w-4 h-4" />
                <span>Hotel Calling Number</span>
              </div>

              <div className="mb-4">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="font-serif text-3xl sm:text-4xl text-white font-bold hover:text-[#dfc287] transition-colors block tracking-wide"
                >
                  {HOTEL_INFO.displayPhone}
                </a>
                <p className="text-xs text-[#8e949e] mt-1">
                  24-Hour Front Desk & Reservation Assistance
                </p>
              </div>

              {/* Call Now Button required by prompt */}
              <div className="pt-2">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#c5a059] hover:bg-[#b38e46] text-black font-semibold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#141619] p-6 sm:p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-3">
                <MapPin className="w-4 h-4" />
                <span>Hotel Address</span>
              </div>

              <address className="not-italic text-base sm:text-lg text-white font-light leading-relaxed mb-4">
                {HOTEL_INFO.address.line1}, <br />
                {HOTEL_INFO.address.line2}, <br />
                {HOTEL_INFO.address.city}, {HOTEL_INFO.address.state} – {HOTEL_INFO.address.pincode}
              </address>

              <div className="flex flex-wrap items-center gap-3">
                {/* Google Maps / Get Directions Button */}
                <a
                  href={HOTEL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 text-white font-medium text-xs uppercase tracking-wider rounded-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#c5a059]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/50" />
                </a>

                {/* Copy Address Button */}
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1b1e22] hover:bg-[#23272d] border border-white/10 text-[#d4cfc7] text-xs uppercase tracking-wider rounded-sm transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-white/50" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Operating Hours & Front Desk */}
            <div className="bg-[#141619] p-6 rounded-xl border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#c5a059]" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">24-Hour Front Desk</h4>
                <p className="text-xs text-[#8e949e] mt-1 leading-relaxed">
                  Reception is open 24 hours daily. Standard check-in and check-out support, luggage storage, and guest assistance available around the clock.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Location Map & Directions Card */}
          <div className="lg:col-span-6 bg-[#141619] rounded-xl border border-white/10 overflow-hidden flex flex-col justify-between">
            {/* Visual Landmark Map Container */}
            <div className="relative h-64 sm:h-80 bg-[#1e2227] overflow-hidden flex items-center justify-center">
              
              {/* Stylized Map Backdrop Graphic */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Stylized road grid lines */}
              <svg className="absolute inset-0 w-full h-full stroke-white/10" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="40%" x2="100%" y2="40%" strokeWidth="4" />
                <line x1="50%" y1="0" x2="50%" y2="100%" strokeWidth="4" />
                <line x1="20%" y1="0" x2="20%" y2="100%" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="0" y1="75%" x2="100%" y2="75%" strokeWidth="2" />
                <circle cx="50%" cy="40%" r="50" fill="none" strokeWidth="2" stroke="#c5a059" strokeOpacity="0.4" />
              </svg>

              {/* Pin Marker on Landmark */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="p-3 bg-[#c5a059] rounded-full shadow-2xl text-black animate-bounce">
                  <MapPin className="w-7 h-7 fill-black" />
                </div>
                <div className="mt-2 bg-black/90 backdrop-blur-md px-3.5 py-1.5 rounded border border-[#c5a059]/40 text-center shadow-xl">
                  <span className="text-xs font-serif font-bold text-white block">
                    Raj Kamal Hotel & Garden
                  </span>
                  <span className="text-[10px] text-[#dfc287] block">
                    Near Noel Public School, Anand Nagar
                  </span>
                </div>
              </div>

              {/* Floating Quick Action */}
              <div className="absolute top-4 right-4 z-10">
                <a
                  href={HOTEL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-black/80 backdrop-blur-md text-white border border-white/20 text-xs rounded flex items-center gap-1.5 hover:border-[#c5a059]"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Open in Maps</span>
                </a>
              </div>
            </div>

            {/* Directions & Nearby Highlights */}
            <div className="p-6 sm:p-8 space-y-4">
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
                Location Details & Neighborhood
              </h4>
              <ul className="space-y-2 text-xs text-[#a0a5ad]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                  <span><strong>Landmark:</strong> Directly at Chauraha, Near Noel Public School</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                  <span><strong>Locality:</strong> Chandra Nagar, Anand Nagar, Gwalior (PIN 474012)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                  <span><strong>Parking:</strong> Free Gated Self Parking on hotel premises</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={HOTEL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#c5a059] hover:bg-[#b38e46] text-black font-semibold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
