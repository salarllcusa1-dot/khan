import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap, Send, RefreshCw } from 'lucide-react';

interface IntegratedBookingFormProps {
  initialNiche?: string;
}

export const IntegratedBookingForm: React.FC<IntegratedBookingFormProps> = ({ initialNiche = 'Fashion & Style' }) => {
  const [selectedObjective, setSelectedObjective] = useState('Conversions & Sales');
  const [selectedNiches, setSelectedNiches] = useState<string[]>([initialNiche]);
  const [selectedBudget, setSelectedBudget] = useState('$5,000 - $15,000');
  const [targetPlatform, setTargetPlatform] = useState('TikTok & Instagram Reels');
  
  // Form fields
  const [brandName, setBrandName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [brief, setBrief] = useState('');
  
  // Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [campaignId, setCampaignId] = useState('');

  const objectives = [
    'Conversions & Sales',
    'Product Launch & Hype',
    'Brand Awareness',
    'UGC Content Library',
  ];

  const availableNiches = [
    'Fashion & Style',
    'Beauty & Skincare',
    'Fitness & Wellness',
    'Tech & Gadget',
    'Lifestyle & Home',
    'Food & Beverage',
  ];

  const budgetTiers = [
    '$2,500 - $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+',
  ];

  const toggleNiche = (niche: string) => {
    if (selectedNiches.includes(niche)) {
      if (selectedNiches.length > 1) {
        setSelectedNiches(selectedNiches.filter((n) => n !== niche));
      }
    } else {
      setSelectedNiches([...selectedNiches, niche]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setCampaignId(`BF-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setBrandName('');
    setContactName('');
    setEmail('');
    setWebsite('');
    setBrief('');
  };

  // Dynamic estimate calculation
  const getEstimatedCreators = () => {
    if (selectedBudget === '$2,500 - $5,000') return '2 - 4 Creators';
    if (selectedBudget === '$5,000 - $15,000') return '5 - 10 Creators';
    if (selectedBudget === '$15,000 - $50,000') return '12 - 25 Creators';
    return '30+ Creators (Full Roster)';
  };

  const getEstimatedReach = () => {
    if (selectedBudget === '$2,500 - $5,000') return '450K - 1.2M';
    if (selectedBudget === '$5,000 - $15,000') return '1.5M - 4.2M';
    if (selectedBudget === '$15,000 - $50,000') return '5.0M - 18M';
    return '25M+ Guaranteed Reach';
  };

  return (
    <div id="booking-form" className="mt-20 pt-16 border-t border-neutral-200">
      
      {/* Form Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-widest text-[#ff5600] uppercase font-sans">
          Direct Creator Matchmaking
        </span>
        <h3 className="font-tanker text-4xl sm:text-6xl text-[#111111] mt-2 tracking-normal leading-tight">
          LAUNCH YOUR CAMPAIGN
        </h3>
        <p className="mt-3 text-neutral-600 text-sm sm:text-base font-sans">
          Fill out your campaign parameters below. Our algorithm instantly matches you with verified influencers with transparent pricing.
        </p>
      </div>

      {isSubmitted ? (
        <div className="max-w-2xl mx-auto p-8 sm:p-12 bg-neutral-900 text-white rounded-3xl text-center shadow-2xl border border-white/10 animate-in fade-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-[#D4FBE5] text-black flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
          </div>
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            Match Proposal Generated
          </div>
          <h4 className="font-tanker text-4xl sm:text-5xl mt-2 tracking-wide text-white">
            CAMPAIGN BRIEF RECEIVED!
          </h4>
          <p className="text-sm text-neutral-300 mt-3 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{contactName}</strong> from <strong className="text-white">{brandName}</strong>. 
            We have generated a curated shortlist of <strong className="text-[#D4FBE5]">{getEstimatedCreators()}</strong> for your review.
          </p>

          {/* Reference Card */}
          <div className="my-6 p-4 bg-white/5 border border-white/10 rounded-xl text-left max-w-md mx-auto text-xs space-y-2 font-mono">
            <div className="flex justify-between">
              <span className="text-neutral-400">Campaign ID:</span>
              <span className="text-white font-bold">{campaignId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Budget Tier:</span>
              <span className="text-white">{selectedBudget}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Estimated Reach:</span>
              <span className="text-[#FFAEC0] font-bold">{getEstimatedReach()} impressions</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Confirmation Sent To:</span>
              <span className="text-white">{email}</span>
            </div>
          </div>

          <p className="text-xs text-neutral-400">
            A talent manager will email your private portal link and creator rate cards within 2 hours.
          </p>

          <button
            onClick={resetForm}
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black font-tanker text-xs rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>SUBMIT ANOTHER CAMPAIGN</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-neutral-50 border border-neutral-200/90 rounded-3xl p-6 sm:p-10 shadow-lg">
          
          <div className="space-y-8">
            
            {/* 1. Campaign Objective */}
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                1. Select Primary Objective
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {objectives.map((obj) => (
                  <button
                    key={obj}
                    type="button"
                    onClick={() => setSelectedObjective(obj)}
                    className={`py-3 px-3 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer border ${
                      selectedObjective === obj
                        ? 'bg-black text-white border-black shadow-sm'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    {obj}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Target Niches */}
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                2. Target Creator Niches (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {availableNiches.map((niche) => {
                  const isSelected = selectedNiches.includes(niche);
                  return (
                    <button
                      key={niche}
                      type="button"
                      onClick={() => toggleNiche(niche)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#FF5722] text-white border-[#FF5722] shadow-sm'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {niche} {isSelected && '✓'}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Budget & Platform */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                  3. Total Campaign Budget
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {budgetTiers.map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setSelectedBudget(tier)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer border ${
                        selectedBudget === tier
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                  4. Preferred Channels
                </label>
                <select
                  value={targetPlatform}
                  onChange={(e) => setTargetPlatform(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-xs font-semibold text-neutral-800 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="TikTok & Instagram Reels">TikTok & Instagram Reels (High Virality)</option>
                  <option value="Instagram Dedicated Posts & Stories">Instagram Dedicated Posts & Stories</option>
                  <option value="YouTube Long-Form Integration">YouTube Long-Form Integration</option>
                  <option value="Omnichannel (All Video Formats)">Omnichannel (All Video Formats)</option>
                </select>
              </div>
            </div>

            {/* Live Campaign Projection Bar */}
            <div className="p-4 bg-[#E8FBF4] border border-[#A7F3D0] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-[#D4FBE5]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-900 block">Instant Campaign Forecast</span>
                  <span className="text-xs text-neutral-600">
                    Est. {getEstimatedCreators()} · {getEstimatedReach()} organic impressions
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Escrow & Authenticity Guaranteed</span>
              </div>
            </div>

            {/* Contact Details Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Brand or Company Name *</label>
                <input
                  type="text"
                  required
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g. Acme Health"
                  className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Work Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Brand Website or Store URL</label>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://brand.com"
                  className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            {/* Campaign Notes */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Campaign Brief / Requirements (Optional)
              </label>
              <textarea
                rows={3}
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="Tell us about your upcoming launch, product details, or specific creator vibes you are looking for..."
                className="w-full bg-white border border-neutral-300 rounded-xl p-3.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#ff5600] hover:bg-[#e14c00] active:scale-[0.99] text-white font-tanker text-lg tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>ANALYZING CREATOR ROSTER...</span>
                  </>
                ) : (
                  <>
                    <span>MATCH WITH CREATORS NOW</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-neutral-400 text-center mt-3">
                No credit card required upfront. 100% money-back guarantee if deliverables do not meet brief standards.
              </p>
            </div>

          </div>

        </form>
      )}

    </div>
  );
};
