import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Utensils, Clock, HeartHandshake, Sparkles, Coffee, ChefHat, Phone } from 'lucide-react';

export const Dining: React.FC = () => {
  return (
    <section id="dining" className="py-20 sm:py-24 bg-[#0a0b0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <span>Culinary Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            In-House Restaurant & 24-Hour Dining
          </h2>
          <p className="text-[#a0a5ad] text-base sm:text-lg font-light">
            Enjoy delicious, wholesome food right on the property. Guests staying at Raj Kamal Hotel & Garden have appreciated the quality and flavor of our freshly prepared meals.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Visual Showcase: Left 6 columns */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl h-[340px] sm:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Raj Kamal In-house Restaurant dining room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded bg-black/75 backdrop-blur-md border border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block">
                  On-Site Dining
                </span>
                <p className="text-white text-sm font-light mt-1">
                  Comfortable seating ambiance for breakfast, lunch, and dinner gatherings.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden border border-white/10 h-36">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                  alt="Delicious food prepared at Raj Kamal Hotel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute bottom-2 left-2 text-[11px] font-medium text-white px-2 py-0.5 bg-black/60 rounded">
                  Freshly Prepared Cuisine
                </span>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-white/10 h-36">
                <img
                  src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
                  alt="Morning breakfast spread"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute bottom-2 left-2 text-[11px] font-medium text-white px-2 py-0.5 bg-black/60 rounded">
                  Complimentary Breakfast
                </span>
              </div>
            </div>
          </div>

          {/* Descriptive Content: Right 6 columns */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Feature 1: In-House Restaurant */}
            <div className="bg-[#141619] p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5 text-[#c5a059]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white font-medium">In-House Restaurant</h3>
                  <span className="text-xs text-[#c5a059] uppercase tracking-wider font-semibold">Fresh & Wholesome</span>
                </div>
              </div>
              <p className="text-sm text-[#b0b5be] font-light leading-relaxed">
                Enjoy hassle-free dining without having to step outside the property. Our in-house kitchen prepares nourishing meals, traditional North Indian specialties, snacks, and daily staples using fresh ingredients.
              </p>
            </div>

            {/* Feature 2: 24-Hour Room Service */}
            <div className="bg-[#141619] p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#c5a059]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white font-medium">24-Hour Room Service</h3>
                  <span className="text-xs text-[#c5a059] uppercase tracking-wider font-semibold">Available Any Time</span>
                </div>
              </div>
              <p className="text-sm text-[#b0b5be] font-light leading-relaxed">
                Arriving late into Gwalior or seeking a quiet meal in your room? Our dedicated staff is ready around the clock to deliver hot meals, tea, coffee, and refreshments straight to your doorstep.
              </p>
            </div>

            {/* Guest Appreciation Note (strictly following prompt: mention that guests have appreciated the food, no fake reviews) */}
            <div className="bg-gradient-to-r from-[#1b1e22] to-[#16181b] p-6 rounded-lg border border-[#c5a059]/30">
              <div className="flex items-start gap-3">
                <HeartHandshake className="w-6 h-6 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
                    Guest Food Appreciation
                  </h4>
                  <p className="text-xs sm:text-sm text-[#d4cfc7] font-light leading-relaxed mt-1.5">
                    Guests staying at Raj Kamal Hotel & Garden have regularly appreciated the delicious flavors, hygienic food preparation, and prompt room service delivered by our kitchen team.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact for dining */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c5a059] hover:bg-[#b38e46] text-black text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Kitchen & Reception</span>
              </a>
              <span className="text-xs text-[#8e949e]">
                Dial ext. from your room or call{' '}
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="text-[#c5a059] hover:underline font-semibold"
                >
                  {HOTEL_INFO.displayPhone}
                </a>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
