import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS } from '../data/creators';
import { IntegratedBookingForm } from './IntegratedBookingForm';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="bg-white text-[#111111] py-24 sm:py-36 px-4 relative overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title matching Framer: Hear from our users */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-tanker text-5xl sm:text-7xl lg:text-8xl tracking-normal text-[#111111] leading-none">
            Hear from our users
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black/70 font-sans max-w-xl mx-auto">
            Direct feedback from brand founders, growth directors, and marketing coordinators.
          </p>
        </div>

        {/* Desktop Carousel / Grid View matching Framer Review Block */}
        <div className="relative">
          
          {/* Active Card Showcase with animated carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review, idx) => (
              <div
                key={review.id}
                style={{ backgroundColor: review.bgColor }}
                className="p-8 sm:p-9 rounded-xl flex flex-col justify-between min-h-[360px] shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <Quote className="w-10 h-10 text-black/20 mb-6" />
                  <h4 className="font-tanker text-2xl sm:text-3xl text-[#111111] leading-snug">
                    "{review.quote}"
                  </h4>
                </div>

                <div className="flex items-center gap-3.5 mt-8 pt-6 border-t border-black/10">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover shadow-sm bg-white"
                  />
                  <div>
                    <h6 className="font-tanker text-lg text-[#111111] leading-none">
                      {review.author}
                    </h6>
                    <p className="text-xs font-sans text-black/70 mt-1">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls matching Framer Slider Arrow wrap */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prevReview}
              className="w-11 h-11 rounded-full bg-[#ff5600] hover:bg-[#e14c00] text-white flex items-center justify-center transition-all cursor-pointer shadow active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-sans text-xs text-neutral-500 font-medium">
              Verified client testimonials
            </span>
            <button
              onClick={nextReview}
              className="w-11 h-11 rounded-full bg-[#ff5600] hover:bg-[#e14c00] text-white flex items-center justify-center transition-all cursor-pointer shadow active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Integrated Campaign Launch Booking Form */}
        <IntegratedBookingForm initialNiche="Fashion & Style" />

      </div>
    </section>
  );
};
