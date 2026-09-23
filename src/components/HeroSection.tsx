import React, { useState } from 'react';
import { Search, Users } from 'lucide-react';
import { ORBIT_AVATARS, OrbitAvatar } from '../data/creators';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  onSelectCreator: (avatar: OrbitAvatar) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onSelectCreator }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredAvatar, setHoveredAvatar] = useState<OrbitAvatar | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      const el = document.getElementById('influencers');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[95vh] pt-32 sm:pt-36 pb-16 flex flex-col justify-center items-center overflow-hidden bg-[#111111] select-none text-white">
      
      {/* Background Orbital Curve Graphic from exact Framer image: 3pZkrbYRjUs6RZLdu5Xmew5PH4.png */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
        <img
          src="https://framerusercontent.com/images/3pZkrbYRjUs6RZLdu5Xmew5PH4.png?width=1600&height=773"
          alt="Orbital background graph"
          className="w-full h-full max-w-[1600px] object-contain object-top opacity-90"
        />
      </div>

      {/* Floating Orbital Avatar Nodes (Exact 8 Framer CDN Photos with responsive dimensions) */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-auto z-10 hidden sm:block">
        {ORBIT_AVATARS.map((avatar) => {
          const isHovered = hoveredAvatar?.id === avatar.id;
          return (
            <div
              key={avatar.id}
              style={{
                left: `${avatar.leftPercent}%`,
                top: `${avatar.topPercent}%`,
                width: `${avatar.size}px`,
                height: `${avatar.size}px`,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform duration-300 hover:scale-110 ${avatar.animationClass}`}
              onMouseEnter={() => setHoveredAvatar(avatar)}
              onMouseLeave={() => setHoveredAvatar(null)}
              onClick={() => onSelectCreator(avatar)}
            >
              {/* Creator Photo Circle */}
              <div 
                className="w-full h-full rounded-full overflow-hidden shadow-2xl ring-2 ring-white/10 group-hover:ring-[#ff5600] transition-all bg-[#1e1e1e]"
                style={{ backgroundColor: avatar.bgColor }}
              >
                <img
                  src={avatar.imgUrl}
                  alt={avatar.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Verified small indicator dot */}
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#ff5600] border border-[#111111] flex items-center justify-center shadow">
                <span className="w-1 h-1 rounded-full bg-white" />
              </span>

              {/* Interactive Tooltip Card on Hover */}
              {isHovered && (
                <div 
                  className={`absolute z-30 w-52 p-3 bg-[#1e1e1e] border border-white/15 rounded-xl shadow-2xl backdrop-blur-xl pointer-events-none animate-in fade-in zoom-in-95 duration-150 ${
                    avatar.leftPercent > 50 ? '-left-56 top-0' : 'left-full ml-3 top-0'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-white truncate">{avatar.name}</span>
                    <span className="text-[10px] font-mono text-[#ff5600] bg-[#ff5600]/10 px-1.5 py-0.5 rounded">
                      {avatar.engagement} ER
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5">{avatar.handle}</p>
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-300">
                    <span className="flex items-center gap-1 font-sans">
                      <Users className="w-3 h-3 text-neutral-400" />
                      {avatar.followers}
                    </span>
                    <span className="text-neutral-400 font-sans">{avatar.niche}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Massive Typographic Block: Authentic creators Real impact */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Line 1: Authentic */}
        <h1 className="font-tanker text-6xl sm:text-8xl md:text-[112px] lg:text-[160px] leading-[0.95] text-[#fefefe] tracking-normal select-none">
          Authentic
        </h1>

        {/* Line 2: creators + Orange Star / Disc Icon (YmudFN2PcugQr5deAnXVpFRIo.svg) */}
        <div className="relative inline-flex items-center justify-center my-0">
          <span className="font-tanker text-6xl sm:text-8xl md:text-[112px] lg:text-[160px] leading-[0.95] text-[#fab3db] tracking-normal select-none">
            creators
          </span>

          {/* SVG Icon sticker from Framer overlapping the right corner */}
          <div 
            className="absolute -right-7 sm:-right-10 md:-right-12 bottom-1 sm:bottom-3 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 select-none pointer-events-auto cursor-pointer hover:rotate-45 transition-transform duration-300"
            title="Brandfluencer Verified Creator Marketplace"
          >
            <img 
              src="https://framerusercontent.com/images/YmudFN2PcugQr5deAnXVpFRIo.svg?width=84&height=84" 
              alt="Brandfluencer Star badge" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Line 3: Real impact */}
        <h2 className="font-tanker text-6xl sm:text-8xl md:text-[112px] lg:text-[160px] leading-[0.95] text-[#fefefe] tracking-normal select-none">
          Real impact
        </h2>

        {/* Search Bar matching Framer: bg #3e3c3d wrapper with inner #111 input and #ff5600 Search button */}
        <div className="w-full max-w-[550px] mt-10 sm:mt-14 px-2">
          <form
            onSubmit={handleSubmit}
            className="bg-[#3e3c3d] p-2 rounded-lg flex flex-col sm:flex-row items-center gap-2 shadow-2xl"
          >
            <div className="relative w-full flex-1 bg-[#111111] h-10 rounded-lg flex items-center px-3.5 gap-2.5">
              <img 
                src="https://framerusercontent.com/images/SM9QDYoUJggZBwyR9ybEa37Twk.svg?width=16&height=16" 
                alt="Search" 
                className="w-4 h-4 shrink-0 opacity-70"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Your Influencer…"
                className="w-full bg-transparent text-[#fefefe] placeholder-[#a3a3a3] text-sm font-tanker tracking-wider focus:outline-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full sm:w-auto px-7 h-10 bg-[#ff5600] hover:bg-[#e14c00] active:scale-95 text-[#fefefe] font-tanker text-sm tracking-wider rounded-lg transition-all cursor-pointer shrink-0 flex items-center justify-center shadow"
            >
              Search
            </button>
          </form>

          {/* Quick Trending tags */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-[#a3a3a3] font-sans">
            <span className="text-neutral-500 font-medium">Trending:</span>
            {['Fashion & Style', 'Beauty & Skincare', 'Fitness & Wellness', 'Tech & Gadget', 'Food & Cooking'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setSearchQuery(tag);
                  onSearch(tag);
                  const el = document.getElementById('influencers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {tag} <span className="text-neutral-600">·</span>
              </button>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
