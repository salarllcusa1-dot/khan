import React from 'react';
import { ShieldCheck, DollarSign, Lock, Headphones } from 'lucide-react';

interface ValueCard {
  bgColor: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CARDS: ValueCard[] = [
  {
    bgColor: '#dfeef3', // token-d09e8a29
    icon: <ShieldCheck className="w-6 h-6 text-white stroke-[2.2]" />,
    title: 'Verified creators only',
    description: 'Every influencer is vetted for authenticity & engagement quality.',
  },
  {
    bgColor: '#cbffed', // token-329034d5
    icon: <DollarSign className="w-6 h-6 text-white stroke-[2.2]" />,
    title: 'Transparent pricing',
    description: 'No hidden fees or surprise. See clear pricing upfront before booking.',
  },
  {
    bgColor: '#fbe8f0', // token-17b3584d
    icon: <Lock className="w-6 h-6 text-white stroke-[2.2]" />,
    title: 'secure Payments',
    description: 'Every influencer is vetted for authenticity & engagement quality.',
  },
  {
    bgColor: '#fdfdcd', // token-a1870ecf
    icon: <Headphones className="w-6 h-6 text-white stroke-[2.2]" />,
    title: 'Start to end support',
    description: 'Dedicated support team ready to help. available throughout your camping.',
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="bg-[#111111] py-24 sm:py-36 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Title matching Framer: WHy Choose our marketplace */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-tanker text-5xl sm:text-7xl lg:text-8xl tracking-normal text-[#fefefe] leading-none">
            WHy Choose our marketplace
          </h2>
        </div>

        {/* 4 Pastel Cards matching Framer template */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CARDS.map((card, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: card.bgColor }}
              className="p-8 sm:p-10 rounded-lg flex flex-col justify-between min-h-[300px] transition-transform duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              {/* Black Rounded Square Icon Container */}
              <div className="w-14 h-14 rounded-lg bg-[#111111] flex items-center justify-center mb-8 shadow-sm">
                {card.icon}
              </div>

              {/* Title and Description */}
              <div>
                <h3 className="font-tanker text-2xl sm:text-[28px] tracking-normal text-[#111111] leading-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-sans font-normal text-black/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
