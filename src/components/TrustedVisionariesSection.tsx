import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface TrustedVisionariesProps {
  onOpenBooking: () => void;
}

export const TrustedVisionariesSection: React.FC<TrustedVisionariesProps> = ({ onOpenBooking }) => {
  // 11 SVGs from Framer template + 1 "Let's talk" CTA card = 12 items in 6-column grid
  const logos = [
    { url: 'https://framerusercontent.com/images/NnEILlSOSGIs5ijypTAep15DEU.svg?width=160&height=30', width: 160, height: 30 },
    { url: 'https://framerusercontent.com/images/ioIHHcyJLC81K6H7ibUTj98k1PI.svg?width=160&height=22', width: 160, height: 22 },
    { url: 'https://framerusercontent.com/images/MMRmCteTGkkpjPXqtZCvwmrjOw.svg?width=160&height=25', width: 160, height: 25 },
    { url: 'https://framerusercontent.com/images/c8XL6Bl4MOc9ZlU8Rq9SDgjPhI.svg?width=160&height=31', width: 160, height: 31 },
    { url: 'https://framerusercontent.com/images/E0XFb8Km7x15sfCgX6GaXPpARi8.svg?width=160&height=27', width: 160, height: 27 },
    { url: 'https://framerusercontent.com/images/mbmj1N32NmW44OQcj8qDtUfvaZo.svg?width=160&height=27', width: 160, height: 27 },
    { url: 'https://framerusercontent.com/images/ioIHHcyJLC81K6H7ibUTj98k1PI.svg?width=160&height=22', width: 160, height: 22 },
    { url: 'https://framerusercontent.com/images/E0XFb8Km7x15sfCgX6GaXPpARi8.svg?width=160&height=27', width: 160, height: 27 },
    { url: 'https://framerusercontent.com/images/NnEILlSOSGIs5ijypTAep15DEU.svg?width=160&height=30', width: 160, height: 30 },
    { url: 'https://framerusercontent.com/images/mbmj1N32NmW44OQcj8qDtUfvaZo.svg?width=160&height=27', width: 160, height: 27 },
    { url: 'https://framerusercontent.com/images/c8XL6Bl4MOc9ZlU8Rq9SDgjPhI.svg?width=160&height=31', width: 160, height: 31 },
  ];

  return (
    <section id="trusted" className="bg-[#111111] py-24 sm:py-32 px-4 border-t border-[#3e3c3d]/40 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header matching Framer: Dot + Work with, then Trusted by the visionaries */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3a3a3]" />
            <span className="font-sans text-sm text-[#a3a3a3]">
              Work with
            </span>
          </div>
          <h2 className="font-tanker text-5xl sm:text-7xl lg:text-8xl tracking-normal text-[#fefefe] leading-none">
            Trusted by the visionaries
          </h2>
        </div>

        {/* 12-Card Grid (11 logo cards + 1 "Let's talk" CTA card) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="h-24 sm:h-28 rounded-lg bg-[#1e1e1e] border-2 border-[#111111] flex items-center justify-center px-4 transition-all duration-200 group hover:border-[#3e3c3d]"
            >
              <img 
                src={logo.url} 
                alt={`Partner logo ${idx + 1}`}
                className="max-h-7 max-w-[140px] w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity" 
              />
            </div>
          ))}

          {/* 12th card: Highlighted "Let's talk ↗" card matching Framer */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="h-24 sm:h-28 rounded-lg bg-[#1e1e1e] border-2 border-[#111111] hover:border-[#ff5600]/50 flex items-center justify-center gap-3 px-4 transition-all duration-200 group cursor-pointer"
          >
            <span className="font-tanker text-base tracking-wider text-[#fefefe]">
              Let’s talk
            </span>
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-md">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
