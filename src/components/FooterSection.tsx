import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 px-4 relative overflow-hidden border-t border-[#3e3c3d]/40">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 4 Cards Grid matching Framer Desktop footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Card 1: Quick Link */}
          <div className="bg-[#1e1e1e] p-8 sm:p-9 rounded-lg border border-white/5 flex flex-col justify-between">
            <div>
              <h5 className="font-tanker text-2xl tracking-normal text-[#fefefe] mb-6">
                Quick Link
              </h5>
              <ul className="space-y-3 font-sans text-sm text-[#b7b7b7]">
                <li>
                  <a href="#hero" className="hover:text-[#ff5600] transition-colors">Home for Agency</a>
                </li>
                <li>
                  <a href="#hero" className="hover:text-[#ff5600] transition-colors">Home for Individual</a>
                </li>
                <li>
                  <a href="#hero" className="text-[#ff5600] font-semibold">Home for Marketplace</a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-[#ff5600] transition-colors">Pricing Plan</a>
                </li>
                <li>
                  <a href="#booking-form" className="hover:text-[#ff5600] transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Services */}
          <div className="bg-[#1e1e1e] p-8 sm:p-9 rounded-lg border border-white/5 flex flex-col justify-between">
            <div>
              <h5 className="font-tanker text-2xl tracking-normal text-[#fefefe] mb-6">
                Services
              </h5>
              <ul className="space-y-3 font-sans text-sm text-[#b7b7b7]">
                <li>
                  <a href="#how-it-works" className="hover:text-[#ff5600] transition-colors">Influencer Discovery</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#ff5600] transition-colors">Campaign Strategy</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#ff5600] transition-colors">Content Creation</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#ff5600] transition-colors">Multi-Platfrom Camping</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#ff5600] transition-colors">Performance Tracking</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#ff5600] transition-colors">Core UCG Production</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Other pages */}
          <div className="bg-[#1e1e1e] p-8 sm:p-9 rounded-lg border border-white/5 flex flex-col justify-between">
            <div>
              <h5 className="font-tanker text-2xl tracking-normal text-[#fefefe] mb-6">
                Other pages
              </h5>
              <ul className="space-y-3 font-sans text-sm text-[#b7b7b7]">
                <li>
                  <a href="#influencers" className="hover:text-[#ff5600] transition-colors">Influencers</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#ff5600] transition-colors">Services</a>
                </li>
                <li>
                  <a href="#stories" className="hover:text-[#ff5600] transition-colors">Case Studies</a>
                </li>
                <li>
                  <a href="#stories" className="hover:text-[#ff5600] transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#trusted" className="hover:text-[#ff5600] transition-colors">Team</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: Support + Exact SVGs for Facebook, TikTok, Instagram */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#1e1e1e] p-8 sm:p-9 rounded-lg border border-white/5 flex-1">
              <h5 className="font-tanker text-2xl tracking-normal text-[#fefefe] mb-5">
                Support
              </h5>
              <div className="space-y-3 font-sans text-sm text-[#b7b7b7]">
                <p>
                  <span className="text-[#878787]">Email:</span>{' '}
                  <a href="mailto:info@example.com" className="hover:text-white transition-colors">
                    info@example.com
                  </a>
                </p>
                <p>
                  <span className="text-[#878787]">Phone:</span>{' '}
                  <a href="tel:(555)1234567" className="hover:text-white transition-colors">
                    (555) 123 4567
                  </a>
                </p>
                <p className="leading-relaxed">
                  <span className="text-[#878787]">HQ:</span> 410 Sandtown, California 94001, USA
                </p>
              </div>
            </div>

            {/* 3 Social Media Card Buttons with Framer Mask Icons */}
            <div className="grid grid-cols-3 gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/TNCFlow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-16 rounded-lg bg-[#1e1e1e] hover:bg-[#282828] border border-white/5 flex items-center justify-center transition-colors group cursor-pointer"
              >
                <span className="framer-8XGkX framer-5qr63x group-hover:scale-110 transition-transform" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@tncflow.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="h-16 rounded-lg bg-[#1e1e1e] hover:bg-[#282828] border border-white/5 flex items-center justify-center transition-colors group cursor-pointer"
              >
                <span className="framer-exKRB framer-5qr63x group-hover:scale-110 transition-transform" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tncflow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-16 rounded-lg bg-[#1e1e1e] hover:bg-[#282828] border border-white/5 flex items-center justify-center transition-colors group cursor-pointer"
              >
                <span className="framer-RZqej framer-5qr63x group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Giant Watermark Typography matching Framer Footer Watermark */}
        <div className="mt-16 sm:mt-24 pt-8 text-center select-none overflow-hidden">
          <div className="font-tanker text-[12vw] leading-none tracking-tight text-[#222222] hover:text-[#2a2a2a] transition-colors uppercase whitespace-nowrap">
            BRANDFLUENCER
          </div>
        </div>

        {/* Bottom Copyright Text matching Framer footer exactly */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-sans text-[#b7b7b7]">
          <span>Copyright © 2026 Brandfluencer</span>
          <span className="w-1 h-1 rounded-full bg-[#a3a3a3]" />
          <span>
            Designed by{' '}
            <a 
              href="https://tncflow.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#b7b7b7] hover:text-[#ff5600] underline underline-offset-4 transition-colors"
            >
              TNCFlow
            </a>
          </span>
          <span className="w-1 h-1 rounded-full bg-[#a3a3a3]" />
          <span>
            Powered by{' '}
            <a 
              href="https://www.framer.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#b7b7b7] hover:text-[#ff5600] underline underline-offset-4 transition-colors"
            >
              Framer
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
};
