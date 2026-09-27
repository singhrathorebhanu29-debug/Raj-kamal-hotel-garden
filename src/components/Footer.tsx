import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, Mail, Clock, ArrowUp, Star, LayoutDashboard } from 'lucide-react';

interface FooterProps {
  onOpenOwnerDashboard?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerDashboard }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090a] text-[#8e949e] border-t border-white/10 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-[#c5a059]/60 flex items-center justify-center bg-[#15171a]">
                <span className="font-serif text-[#c5a059] font-bold text-lg">RK</span>
              </div>
              <div>
                <span className="font-serif text-lg tracking-[0.18em] uppercase text-white font-medium block">
                  Raj Kamal
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a059] font-semibold block">
                  Hotel & Garden • Gwalior
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#a0a5ad] font-light leading-relaxed">
              3-Star Hotel in Gwalior offering comfortable air-conditioned luxury rooms, private bathrooms, in-room kitchens, an in-house restaurant, and warm hospitality.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-[#dfc287]">
              <Star className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
              <span className="font-medium text-white">4.8★ Google Rating</span>
              <span className="text-[#8e949e]">(80 verified guest reviews)</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#c5a059] transition-colors">About Hotel</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#c5a059] transition-colors">AC Luxury Rooms</a>
              </li>
              <li>
                <a href="#garden-events" className="hover:text-[#c5a059] transition-colors">Garden & Events</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#c5a059] transition-colors">Amenities & Facilities</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#c5a059] transition-colors">In-House Restaurant</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#c5a059] transition-colors">Guest Ratings</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#c5a059] transition-colors">Photo Gallery</a>
              </li>
            </ul>
          </div>

          {/* Amenities Summary Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Key Features
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Free Wi-Fi & Breakfast</li>
              <li>Free Gated Self Parking</li>
              <li>24-hour Room Service</li>
              <li>24-hour Front Desk</li>
              <li>Lift & Baggage Storage</li>
              <li>Wheelchair Accessible</li>
              <li>Pet & Child Friendly</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Contact & Location
            </h4>
            <address className="not-italic text-xs text-[#a0a5ad] space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  Chauraha, Near Noel Public School, Chandra Nagar, Anand Nagar, Gwalior, Madhya Pradesh – 474012
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-[#c5a059] text-white font-medium">
                  {HOTEL_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>24-Hour Reception & Guest Assistance</span>
              </div>
            </address>

            <div className="pt-2">
              <a
                href={HOTEL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs uppercase tracking-wider text-[#c5a059] hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>

        </div>

        {/* Demo Notice strictly required:
            "This is a demo website.
             Keep all information easy for the hotel owner to edit later." */}
        <div className="bg-[#121417] p-4 rounded-lg border border-white/10 mb-8 text-xs text-[#8e949e] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <strong className="text-white">Demo Website Notice:</strong> Designed for Raj Kamal Hotel & Garden, Gwalior. Content, photos, and policies are modular and easily updated by hotel management.
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {onOpenOwnerDashboard && (
              <button
                onClick={onOpenOwnerDashboard}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#dfc287] hover:bg-[#c5a059]/25 text-xs font-medium transition-colors"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Owner Dashboard</span>
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#c5a059] hover:text-[#dfc287] py-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6e747e] gap-4">
          <p>© {new Date().getFullYear()} Raj Kamal Hotel & Garden. All Rights Reserved.</p>
          <p>Chandra Nagar, Anand Nagar, Gwalior, Madhya Pradesh – 474012</p>
        </div>

      </div>
    </footer>
  );
};
