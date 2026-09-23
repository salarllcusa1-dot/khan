import React, { useState } from 'react';
import { Star, TrendingUp, Users, CheckCircle, Quote, ArrowUpRight, Award } from 'lucide-react';
import { IntegratedBookingForm } from './IntegratedBookingForm';

interface CaseStudy {
  id: string;
  tag: string;
  brand: string;
  headline: string;
  quote: string;
  author: string;
  title: string;
  metrics: {
    roas: string;
    views: string;
    cpa: string;
  };
  creatorsUsed: number;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lumina',
    tag: 'DTC Skincare Launch',
    brand: 'Lumina Labs',
    headline: 'Scaling from $0 to $340K in 30 Days via 22 Micro-Creators',
    quote: 'Brandfluencer completely transformed our launch economics. We bypassed bloated traditional agency retainers and directly booked 22 verified creators. Our CPA dropped 48% within week two.',
    author: 'Elena Vance',
    title: 'VP of Growth, Lumina Labs',
    metrics: {
      roas: '4.2x',
      views: '8.4M',
      cpa: '-48%',
    },
    creatorsUsed: 22,
  },
  {
    id: 'hypervibe',
    tag: 'Smart Hardware & Audio',
    brand: 'HyperVibe Audio',
    headline: '14.8M Viral Impressions for Smart Noise-Canceling Earbuds',
    quote: 'The talent vetting on Brandfluencer is unbeatable. Every creator was prompt, understood our audio engineering talking points, and provided Spark Ad authorization codes on day one.',
    author: 'David Zhao',
    title: 'Founder & CMO, HyperVibe Audio',
    metrics: {
      roas: '3.6x',
      views: '14.8M',
      cpa: '-35%',
    },
    creatorsUsed: 18,
  },
  {
    id: 'kora',
    tag: 'Sustainable Activewear',
    brand: 'Kora Activewear',
    headline: 'Sold Out Entire Spring Capsule Collection in 96 Hours',
    quote: 'We booked Sarah and Emma through the platform. Their organic try-on videos drove an instantaneous spike that crashed our checkout server (in the best way possible).',
    author: 'Camila Rossi',
    title: 'Brand Director, Kora Activewear',
    metrics: {
      roas: '5.1x',
      views: '6.2M',
      cpa: '-52%',
    },
    creatorsUsed: 14,
  },
];

export const ProofAndTestimonialsSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <section id="proof" className="bg-white text-slate-900 py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-semibold tracking-widest text-[#FF5722] uppercase mb-2">
            Verified Proof & Case Studies
          </div>
          <h2 className="font-tanker text-5xl sm:text-7xl lg:text-8xl tracking-tight text-black leading-none">
            PROOF & TESTIMONIALS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Real brands achieving outsized marketing return on investment with our verified creator roster.
          </p>
        </div>

        {/* Hero Case Study Feature Block */}
        <div className="bg-[#0C0C0E] text-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Generated High-Fidelity Campaign Proof Photography */}
            <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-full overflow-hidden bg-neutral-900">
              <img
                src="/src/assets/images/case_study_testimonial_proof_1790188014106.jpg"
                alt="Brandfluencer campaign performance command center"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-xs font-semibold text-white border border-white/20">
                  {selectedCase.tag}
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Case Study Data & Testimonial Quote */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              
              {/* Interactive Case Study Selectors */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {CASE_STUDIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCase(c)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                        selectedCase.id === c.id
                          ? 'bg-[#FF5722] text-white'
                          : 'bg-white/10 text-neutral-300 hover:bg-white/15'
                      }`}
                    >
                      {c.brand}
                    </button>
                  ))}
                </div>

                <h3 className="font-tanker text-3xl sm:text-4xl text-white tracking-wide leading-tight">
                  "{selectedCase.headline}"
                </h3>

                {/* Quantitative Impact Metrics */}
                <div className="grid grid-cols-3 gap-3 my-8 py-6 border-t border-b border-white/10 text-center">
                  <div>
                    <span className="font-tanker text-4xl sm:text-5xl text-[#D4FBE5] block leading-none">
                      {selectedCase.metrics.roas}
                    </span>
                    <span className="text-[11px] uppercase font-semibold text-neutral-400 mt-2 block tracking-wider">
                      Target ROAS
                    </span>
                  </div>
                  <div>
                    <span className="font-tanker text-4xl sm:text-5xl text-[#FFAEC0] block leading-none">
                      {selectedCase.metrics.views}
                    </span>
                    <span className="text-[11px] uppercase font-semibold text-neutral-400 mt-2 block tracking-wider">
                      Verified Reach
                    </span>
                  </div>
                  <div>
                    <span className="font-tanker text-4xl sm:text-5xl text-[#6DE3EB] block leading-none">
                      {selectedCase.metrics.cpa}
                    </span>
                    <span className="text-[11px] uppercase font-semibold text-neutral-400 mt-2 block tracking-wider">
                      Acquisition Cost
                    </span>
                  </div>
                </div>

                {/* Attributable Quote */}
                <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed">
                  "{selectedCase.quote}"
                </p>
              </div>

              {/* Author Attribution */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">
                    {selectedCase.author}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {selectedCase.title}
                  </div>
                </div>

                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-neutral-300 font-mono">
                  {selectedCase.creatorsUsed} Creators Activated
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Integrated Form at the bottom of Proof and Testimonials */}
        <IntegratedBookingForm initialNiche="Fashion & Style" />

      </div>
    </section>
  );
};
