import React from 'react';
import { X, CheckCircle2, TrendingUp, Users, Eye, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { Creator } from '../data/creators';

interface CreatorModalProps {
  creator: Creator | null;
  onClose: () => void;
  onBookCreator: (creator: Creator) => void;
}

export const CreatorModal: React.FC<CreatorModalProps> = ({ creator, onClose, onBookCreator }) => {
  if (!creator) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#141417] text-white rounded-3xl overflow-hidden border border-white/15 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Top Profile Header */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-white/10 shadow-lg">
              <img
                src={creator.image}
                alt={creator.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold tracking-wide border border-emerald-500/20 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Brandfluencer Partner</span>
              </div>
              <h3 className="font-tanker text-3xl sm:text-4xl text-white tracking-wide leading-tight">
                {creator.name}
              </h3>
              <p className="text-sm font-mono text-neutral-400 mt-0.5">{creator.handle} · {creator.platform}</p>
              <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                {creator.bio}
              </p>
            </div>
          </div>

          {/* Verified Stats Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">Total Followers</span>
              <span className="font-tanker text-2xl sm:text-3xl text-white mt-1 block">{creator.followers}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">Engagement Rate</span>
              <span className="font-tanker text-2xl sm:text-3xl text-[#FFAEC0] mt-1 block">{creator.engagement}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">Average Video Views</span>
              <span className="font-tanker text-2xl sm:text-3xl text-[#D4FBE5] mt-1 block">{creator.avgViews}</span>
            </div>
          </div>

          {/* Rate Card Packages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              Standard Deliverable Packages
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white">1x Dedicated Video Post</span>
                  <span className="font-mono text-xs text-[#FF5722] font-semibold">{creator.startingPrice}</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  60s high-production vertical format + caption CTA & bio link.
                </p>
              </div>

              <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white">Spark Ad Bundle</span>
                  <span className="font-mono text-xs text-[#FF5722] font-semibold">+ $750</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  30-day paid advertising digital usage rights code included.
                </p>
              </div>
            </div>
          </div>

          {/* Past Clients */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Recent Brand Collaborations
            </h4>
            <div className="flex flex-wrap gap-2">
              {creator.recentClients.map((client, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 text-xs font-medium text-neutral-200 rounded-lg">
                  {client}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-5 bg-[#0E0E11] border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-neutral-400 block font-sans">Starting from</span>
            <span className="font-tanker text-2xl text-white">{creator.startingPrice}</span>
          </div>
          <button
            onClick={() => {
              onBookCreator(creator);
              onClose();
            }}
            className="px-6 py-3 bg-[#ff5600] hover:bg-[#e14c00] active:scale-95 text-white font-tanker text-sm tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>BOOK THIS CREATOR</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
