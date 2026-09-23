import React, { useState } from 'react';
import { TOP_INFLUENCERS, Creator } from '../data/creators';
import { ArrowUpRight } from 'lucide-react';

interface TopInfluencersProps {
  onSelectCreator: (creator: Creator) => void;
  activeFilterQuery?: string;
}

export const TopInfluencersSection: React.FC<TopInfluencersProps> = ({ 
  onSelectCreator, 
  activeFilterQuery = '' 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Fashion & Style',
    'Beauty & Skincare',
    'Fitness & Wellness',
    'Tech & Gadget',
    'Food & Cooking',
    'Travel & Lifestyle',
    'Gaming & Streaming',
  ];

  const filteredInfluencers = TOP_INFLUENCERS.filter((c) => {
    const matchesCategory = selectedCategory === 'All' || c.niche.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesQuery = !activeFilterQuery || 
      c.name.toLowerCase().includes(activeFilterQuery.toLowerCase()) || 
      c.niche.toLowerCase().includes(activeFilterQuery.toLowerCase()) ||
      c.handle.toLowerCase().includes(activeFilterQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="influencers" className="bg-white text-[#111111] pb-28 pt-8 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with the distinctive "EXPLORE" scalloped sticker badge from Framer (dHVVs7ZQ8JbBsos1jCRlsXpVzE4.png) */}
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16 relative">
          <div className="relative inline-flex items-center justify-center">
            <h2 className="font-tanker text-5xl sm:text-7xl lg:text-8xl tracking-normal text-[#111111] leading-none">
              Meet Our Top<br />Influencers
            </h2>

            {/* Circular "Explore" Scalloped Star Badge from Framer */}
            <div 
              className="absolute -right-10 sm:-right-16 -bottom-4 sm:-bottom-6 select-none cursor-pointer hover:rotate-45 transition-transform duration-500"
              title="Explore all verified influencers"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#111111] bg-[#cbffed] flex items-center justify-center p-1 shadow-md">
                <img 
                  src="https://framerusercontent.com/images/dHVVs7ZQ8JbBsos1jCRlsXpVzE4.png?width=266&height=265" 
                  alt="Explore" 
                  className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
                />
                <span className="absolute font-tanker text-[11px] sm:text-xs text-[#111111] -rotate-[30deg]">
                  Explore
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#111111] text-white shadow'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Influencer Cards Grid: All 8 Framer verified creators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredInfluencers.map((creator) => (
            <div
              key={creator.id}
              onClick={() => onSelectCreator(creator)}
              className="group flex flex-col bg-[#f5f5f5] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-black/5"
            >
              {/* Image Container with high-res Framer image */}
              <div className="relative aspect-[1.04] w-full overflow-hidden bg-neutral-200">
                <img
                  src={creator.image}
                  alt={creator.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Metric Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-md text-[11px] font-semibold text-white tracking-wider">
                  {creator.engagement} ER
                </div>
              </div>

              {/* Text Card Content: Title + Niche on left, Price + "Start with" on right */}
              <div className="p-5 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-tanker text-2xl text-[#111111] group-hover:text-[#ff5600] transition-colors leading-tight truncate">
                    {creator.name}
                  </h3>
                  <p className="text-sm font-sans font-normal text-black/70 mt-0.5 truncate">
                    {creator.niche}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="font-tanker text-2xl text-[#111111] leading-tight">
                    {creator.startingPrice}
                  </div>
                  <div className="text-xs font-sans text-black/70 mt-0.5">
                    Start with
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
