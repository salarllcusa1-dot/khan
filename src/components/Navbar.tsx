import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setHomeDropdownOpen(false);
    setPagesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 px-4 pointer-events-none transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Main Navbar Capsule matching Framer HTML Header Block */}
        <div className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-4 sm:px-7 py-3.5 flex items-center justify-between shadow-2xl backdrop-blur-md">
          
          {/* Exact Brand Mark SVG from Framer */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none"
          >
            <img 
              src="https://framerusercontent.com/images/mFMZndcq9cK1zGfs7xoz3B8VM.svg?width=179&height=34" 
              alt="Brandfluencer"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </a>

          {/* Navigation Links (Matches Framer navigation) */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-tanker tracking-wider text-[#878787]">
            
            {/* Home with dropdown */}
            <div className="relative" onMouseLeave={() => setHomeDropdownOpen(false)}>
              <button
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                onMouseEnter={() => setHomeDropdownOpen(true)}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer py-1"
              >
                <span>Home</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${homeDropdownOpen ? 'rotate-180 text-white' : ''}`} />
              </button>

              {homeDropdownOpen && (
                <div className="absolute top-full left-0 w-52 py-2 mt-1 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
                  <a
                    href="#hero"
                    onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                    className="block px-4 py-2.5 text-xs font-sans text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Marketplace Home
                  </a>
                  <a
                    href="#how-it-works"
                    onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
                    className="block px-4 py-2.5 text-xs font-sans text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Agency Matching
                  </a>
                  <a
                    href="#influencers"
                    onClick={(e) => { e.preventDefault(); scrollToSection('influencers'); }}
                    className="block px-4 py-2.5 text-xs font-sans text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Individual Creators
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('influencers')}
              className="hover:text-white transition-colors cursor-pointer capitalize"
            >
              influencers
            </button>

            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection('why-us')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Pricing
            </button>

            <button
              onClick={() => scrollToSection('stories')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Case Studies
            </button>

            {/* Pages dropdown */}
            <div className="relative" onMouseLeave={() => setPagesDropdownOpen(false)}>
              <button
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                onMouseEnter={() => setPagesDropdownOpen(true)}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer py-1 capitalize"
              >
                <span>pages</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${pagesDropdownOpen ? 'rotate-180 text-white' : ''}`} />
              </button>

              {pagesDropdownOpen && (
                <div className="absolute top-full left-0 w-48 py-2 mt-1 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
                  <a
                    href="#why-us"
                    onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }}
                    className="block px-4 py-2.5 text-xs font-sans text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Why Our Marketplace
                  </a>
                  <a
                    href="#trusted"
                    onClick={(e) => { e.preventDefault(); scrollToSection('trusted'); }}
                    className="block px-4 py-2.5 text-xs font-sans text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Brand Partners
                  </a>
                  <a
                    href="#reviews"
                    onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}
                    className="block px-4 py-2.5 text-xs font-sans text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    User Reviews
                  </a>
                  <a
                    href="#booking-form"
                    onClick={(e) => { e.preventDefault(); scrollToSection('booking-form'); }}
                    className="block px-4 py-2.5 text-xs font-sans text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Launch Campaign
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Primary Action Button matching Framer "Let's talk" */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="relative px-8 py-2 bg-[#ff5600] hover:bg-[#e14c00] active:scale-95 text-[#fefefe] font-tanker text-base tracking-wider rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(255,86,0,0.35)]"
            >
              Let’s talk
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-4 py-1.5 bg-[#ff5600] text-white font-tanker text-sm rounded-md sm:hidden"
            >
              Let’s talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded bg-[#ff5600] text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Menu Panel matching Framer Mobile Closed/Opened */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-[#1e1e1e] border border-white/10 rounded-lg p-5 space-y-4 pointer-events-auto shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3 font-tanker text-lg tracking-wider text-[#878787]">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left py-1 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('influencers')}
              className="text-left py-1 hover:text-white transition-colors capitalize"
            >
              influencers
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left py-1 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-left py-1 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('stories')}
              className="text-left py-1 hover:text-white transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-left py-1 hover:text-white transition-colors"
            >
              User Reviews
            </button>
          </div>
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#ff5600] text-white font-tanker text-base tracking-wider rounded-lg flex items-center justify-center gap-2"
            >
              <span>Let’s talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
