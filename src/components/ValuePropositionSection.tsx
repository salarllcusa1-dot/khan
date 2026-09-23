import React, { useState } from 'react';
import { Target, MousePointerClick, ClipboardCheck, Rocket, ChevronRight } from 'lucide-react';

interface StepData {
  number: string;
  title: string;
  desc: string;
  color: string;
  icon: React.ReactNode;
}

const STEPS: StepData[] = [
  {
    number: 'step 01',
    title: 'FInd Influencers',
    desc: 'Browse thousand of verified creators across all niches',
    color: '#fab3db', // Framer token-465f94bb
    icon: <Target className="w-8 h-8 sm:w-12 sm:h-12 text-[#111111] stroke-[2]" />,
  },
  {
    number: 'step 02',
    title: 'Reviews profiles',
    desc: 'Secure your booking and communicate directly with creators',
    color: '#c8fd83', // Framer token-c71d7b20
    icon: <MousePointerClick className="w-8 h-8 sm:w-12 sm:h-12 text-[#111111] stroke-[2]" />,
  },
  {
    number: 'step 03',
    title: 'book & collaborate',
    desc: 'Go live and track performance with real time  analytics',
    color: '#70e6ed', // Framer token-3675885b
    icon: <ClipboardCheck className="w-8 h-8 sm:w-12 sm:h-12 text-[#111111] stroke-[2]" />,
  },
  {
    number: 'step 04',
    title: 'Launch camping',
    desc: 'Go live and track performance with real time  analytics',
    color: '#ffecde', // Framer token-8ffeaae5
    icon: <Rocket className="w-8 h-8 sm:w-12 sm:h-12 text-[#111111] stroke-[2]" />,
  },
];

export const ValuePropositionSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="bg-white text-[#111111] py-24 sm:py-36 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header matching Framer exactly */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <h2 className="font-tanker text-5xl sm:text-7xl lg:text-8xl tracking-normal text-[#111111] leading-[0.95]">
            How We Find Your<br />Perfect Match
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black/70 font-sans max-w-xl mx-auto">
            Here’s how we turn ideas into impactful marketing campaigns.
          </p>
        </div>

        {/* 4-Step Vertical Timeline with connector track matching Framer template */}
        <div className="relative max-w-2xl mx-auto">
          
          {/* Vertical Track Line connecting Step 01 to Step 04 */}
          <div 
            className="absolute left-[29px] sm:left-[57px] top-12 bottom-12 w-[3px] bg-[#a3a3a3] -translate-x-1/2" 
            aria-hidden="true" 
          />

          <div className="space-y-16 sm:space-y-24 relative">
            {STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div key={idx} className="relative flex items-start gap-6 sm:gap-10 group">
                  
                  {/* Circular Step Badge with exact Framer pastel palette */}
                  <div 
                    onClick={() => setActiveStep(isSelected ? null : idx)}
                    className="relative z-10 w-[58px] h-[58px] sm:w-[115px] sm:h-[115px] rounded-full flex items-center justify-center shrink-0 cursor-pointer shadow-md transition-transform duration-300 hover:scale-105 active:scale-95"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.icon}
                  </div>

                  {/* Step Description Content */}
                  <div className="pt-1.5 sm:pt-4 flex-1">
                    <span className="font-tanker text-sm sm:text-base text-[#747474] uppercase tracking-wider block">
                      {step.number}
                    </span>
                    <h3 className="font-tanker text-3xl sm:text-5xl lg:text-6xl text-[#111111] mt-1 leading-[1]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-lg text-black/70 font-sans max-w-lg leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Interactive feature drawer */}
                    <button
                      onClick={() => setActiveStep(isSelected ? null : idx)}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff5600] hover:text-[#e14c00] transition-colors cursor-pointer"
                    >
                      <span>{isSelected ? 'Close details' : 'Explore step details'}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                    </button>

                    {isSelected && (
                      <div className="mt-3 p-4 bg-neutral-100 rounded-xl text-xs text-neutral-700 animate-in fade-in slide-in-from-top-1 font-sans">
                        {idx === 0 && 'Filter by verified engagement rates, past ROAS, geographic follower reach, and fraud-free authenticity.'}
                        {idx === 1 && 'Access audited media kits, historical conversion metrics, pricing packages, and direct chat.'}
                        {idx === 2 && 'Approve creative briefs, review video timestamps, and authorize Spark Ads directly.'}
                        {idx === 3 && 'Automated live link tracking, UTM attribution, pixel analytics, and seamless escrow payout.'}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
