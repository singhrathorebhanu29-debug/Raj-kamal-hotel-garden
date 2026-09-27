import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Star, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Reviews: React.FC = () => {
  const { score, totalReviews, breakdown } = HOTEL_INFO.googleRating;

  const ratingCategories = [
    { name: 'Rooms', score: breakdown.rooms, percent: (breakdown.rooms / 5) * 100, desc: 'AC rooms, hygiene, private bathroom, and in-room amenities' },
    { name: 'Service', score: breakdown.service, percent: (breakdown.service / 5) * 100, desc: '24-hour front desk, room service, and hospitable staff' },
    { name: 'Location', score: breakdown.location, percent: (breakdown.location / 5) * 100, desc: 'Chandra Nagar, Anand Nagar, near Noel Public School' },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#0e1012] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <span>Verified Guest Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            Guest Satisfaction & Ratings
          </h2>
          <p className="text-[#a0a5ad] text-base sm:text-lg font-light">
            Real guest satisfaction scores reflecting our dedication to comfortable lodging, prompt service, and convenient accessibility.
          </p>
        </div>

        {/* Main Rating Card */}
        <div className="bg-[#141619] rounded-xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Google Rating Score */}
            <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Google Verified Score</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-white tracking-tight">
                  {score}
                </span>
                <div className="flex flex-col text-left">
                  <div className="flex text-[#c5a059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#c5a059]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#dfc287] font-medium mt-1">
                    out of 5.0
                  </span>
                </div>
              </div>

              <p className="text-sm font-medium text-white mb-1">
                4.8★ based on {totalReviews} reviews
              </p>
              <p className="text-xs text-[#8e949e] font-light leading-relaxed">
                Guest ratings evaluated directly by travelers visiting Raj Kamal Hotel & Garden in Gwalior.
              </p>

              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-center lg:justify-start gap-2 text-xs text-[#c5a059]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Public Google Review Average</span>
              </div>
            </div>

            {/* Right Col: Rating Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#a0a5ad] mb-2">
                Rating Highlights
              </h3>

              {ratingCategories.map((item) => (
                <div key={item.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-white">{item.name}</span>
                    <span className="font-serif font-bold text-[#c5a059] text-base">{item.score} / 5.0</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 bg-[#20242a] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#c5a059] to-[#dfc287] rounded-full transition-all duration-700"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-[#8e949e]">
                    {item.desc}
                  </p>
                </div>
              ))}

              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#a0a5ad]">
                <span>✓ High Cleanliness Standards</span>
                <span>✓ 24/7 Front Desk Support</span>
                <span>✓ Peaceful Anand Nagar Setting</span>
              </div>
            </div>

          </div>
        </div>

        {/* Note strictly reiterating authentic presentation */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#6e747e]">
            * Google aggregate ratings updated as of recent guest submissions. No fabricated testimonials or promotional claims.
          </p>
        </div>

      </div>
    </section>
  );
};
