import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, BedDouble, Trees, Menu, X, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  onBookRoom: () => void;
  onBookGarden: () => void;
  onOpenOwnerDashboard?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookRoom, onBookGarden, onOpenOwnerDashboard }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Garden & Events', href: '#garden-events' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Dining', href: '#dining' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f1113]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm border border-[#c5a059]/60 flex items-center justify-center bg-[#181b1e]/80 group-hover:border-[#c5a059] transition-colors shadow-sm">
              <span className="font-serif text-[#c5a059] font-bold text-lg tracking-wider">RK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg tracking-[0.18em] uppercase text-white font-medium group-hover:text-[#dfc287] transition-colors">
                Raj Kamal
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#c5a059] font-semibold">
                Hotel & Garden • 3★ Gwalior
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.16em] text-[#e2ded9]/85 hover:text-[#c5a059] font-medium transition-colors relative py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs: strictly "Book a Room" and "Book Garden / Event" */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider uppercase text-white hover:text-[#c5a059] font-medium transition-colors border border-white/20 hover:border-[#c5a059]/60 rounded-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{HOTEL_INFO.displayPhone}</span>
            </a>

            {/* Option 1: Book a Room */}
            <button
              onClick={onBookRoom}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs tracking-wider uppercase bg-[#c5a059] hover:bg-[#b38e46] text-black font-semibold rounded-sm transition-all shadow-md"
            >
              <BedDouble className="w-3.5 h-3.5" />
              <span>Book a Room</span>
            </button>

            {/* Option 2: Book Garden / Event */}
            <button
              onClick={onBookGarden}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs tracking-wider uppercase bg-[#181d22] hover:bg-[#222830] text-[#dfc287] font-semibold rounded-sm border border-[#c5a059]/50 transition-all shadow-md"
            >
              <Trees className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Book Garden / Event</span>
            </button>

            {/* Owner Dashboard Demo Button */}
            {onOpenOwnerDashboard && (
              <button
                onClick={onOpenOwnerDashboard}
                title="Open Owner Booking Dashboard (Demo)"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider uppercase text-[#c5a059] hover:text-white font-medium transition-colors border border-[#c5a059]/40 hover:border-[#c5a059] rounded-sm bg-[#c5a059]/10 hover:bg-[#c5a059]/20"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Dashboard</span>
              </button>
            )}
          </div>

          {/* Mobile / Tablet Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              aria-label="Call Hotel"
              className="p-2 text-[#c5a059] border border-[#c5a059]/40 rounded-sm hover:bg-[#c5a059]/10"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#c5a059] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 bg-[#121417]/98 rounded-lg p-5 shadow-2xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wider text-slate-200 hover:text-[#c5a059] py-2 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                {/* Two Main Booking Options in Mobile Menu */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookRoom();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs uppercase tracking-widest font-bold bg-[#c5a059] text-black rounded-sm shadow-md"
                >
                  <BedDouble className="w-4 h-4" />
                  <span>Book a Room</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookGarden();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs uppercase tracking-widest font-bold bg-[#1b2026] text-[#dfc287] border border-[#c5a059]/50 rounded-sm shadow-md"
                >
                  <Trees className="w-4 h-4 text-[#c5a059]" />
                  <span>Book Garden / Event</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white border border-[#c5a059]/60 rounded-sm bg-[#c5a059]/10"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={HOTEL_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white border border-white/20 rounded-sm hover:border-[#c5a059]"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Directions</span>
                  </a>
                </div>

                {onOpenOwnerDashboard && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenOwnerDashboard();
                    }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 text-xs uppercase tracking-wider font-semibold text-[#dfc287] bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-sm hover:bg-[#c5a059]/20"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Owner Booking Dashboard (Demo)</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
