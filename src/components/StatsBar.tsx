import React, { useEffect, useState } from 'react';

interface StatCounter {
  end: number;
  suffix: string;
  label: string;
}

const STATS: StatCounter[] = [
  { end: 900, suffix: '+', label: 'Campaigns Launched' },
  { end: 2, suffix: 'k+', label: 'Verified Influencers' },
  { end: 350, suffix: '+', label: 'Happy Brand' },
  { end: 50, suffix: 'm+', label: 'Total Reach' },
];

export const StatsBar: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 1600;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // easeOutQuad
      const factor = 1 - (1 - progress) * (1 - progress);

      setCounts(STATS.map((s) => Math.floor(s.end * factor)));

      if (step >= steps) {
        clearInterval(timer);
        setCounts(STATS.map((s) => s.end));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#111111] text-white pt-6 pb-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center px-4 ${
                idx !== STATS.length - 1 ? 'md:border-r md:border-[#3e3c3d]' : ''
              }`}
            >
              {/* Number and Suffix */}
              <div className="flex items-baseline justify-center">
                <span className="font-tanker text-5xl sm:text-7xl lg:text-[100px] leading-[0.9] text-[#fefefe] tabular-nums select-none">
                  {counts[idx]}
                </span>
                <span className="font-tanker text-3xl sm:text-5xl lg:text-[70px] leading-[0.9] text-[#fefefe] ml-1 select-none">
                  {stat.suffix}
                </span>
              </div>

              {/* Dividing horizontal hairline matching Framer */}
              <div className="w-full max-w-[220px] h-[1px] bg-[#3e3c3d] my-3" />

              {/* Label */}
              <div className="text-sm sm:text-base font-sans font-normal text-[#a3a3a3]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
