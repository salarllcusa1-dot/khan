/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { TopInfluencersSection } from './components/TopInfluencersSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TrustedVisionariesSection } from './components/TrustedVisionariesSection';
import { StoriesSection } from './components/StoriesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FooterSection } from './components/FooterSection';
import { CreatorModal } from './components/CreatorModal';
import { Creator, OrbitAvatar, TOP_INFLUENCERS } from './data/creators';

export default function App() {
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [searchFilter, setSearchFilter] = useState<string>('');

  const handleOpenBooking = () => {
    const el = document.getElementById('booking-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.classList.add('ring-4', 'ring-[#ff5600]/40');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-[#ff5600]/40');
      }, 2000);
    }
  };

  const handleOrbitAvatarClick = (avatar: OrbitAvatar) => {
    const match = TOP_INFLUENCERS.find(c => c.name.toLowerCase().includes(avatar.name.toLowerCase()));
    if (match) {
      setSelectedCreator(match);
    } else {
      setSelectedCreator({
        id: avatar.id,
        name: avatar.name,
        niche: avatar.niche,
        nicheSlug: 'creators',
        slug: avatar.id,
        handle: avatar.handle,
        followers: avatar.followers,
        engagement: avatar.engagement,
        avgViews: '240K',
        image: avatar.imgUrl,
        color: avatar.bgColor,
        bio: `Authentic digital storyteller specialized in ${avatar.niche.toLowerCase()} content and high-retention commercial campaigns.`,
        platform: 'TikTok & Instagram',
        startingPrice: '$750',
        recentClients: ['Nike', 'Gymshark', 'Sephora'],
      });
    }
  };

  const handleBookFromModal = () => {
    handleOpenBooking();
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col selection:bg-[#ff5600] selection:text-white font-sans">
      {/* 1. Fixed Header Navigation matching Framer Desktop Capsule */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections corresponding exactly to the Framer Page */}
      <main className="flex-1">
        {/* 2. Hero Section: Authentic creators Real impact */}
        <HeroSection
          onSearch={(query) => setSearchFilter(query)}
          onSelectCreator={handleOrbitAvatarClick}
        />

        {/* 3. Hero Count / Stats Bar: 900+ Campaigns, 2k+ Influencers, 350+ Happy Brand, 50m+ Total Reach */}
        <StatsBar />

        {/* 4. Match Section: How We Find Your Perfect Match (4 Steps) */}
        <ValuePropositionSection />

        {/* 5. Influencers Section: Meet Our Top Influencers (8 Cards + Explore button) */}
        <TopInfluencersSection
          onSelectCreator={(c) => setSelectedCreator(c)}
          activeFilterQuery={searchFilter}
        />

        {/* 6. Neutral Section - Choose: WHy Choose our marketplace (4 Pastel Cards) */}
        <WhyChooseUsSection />

        {/* 7. Trusted Block: Trusted by the visionaries (11 Logos + Let's Talk CTA) */}
        <TrustedVisionariesSection onOpenBooking={handleOpenBooking} />

        {/* 8. Post Section: Stories That Inspire Influence (3 Blog Posts + Explore button) */}
        <StoriesSection />

        {/* 9. Review Section: Hear from our users + Interactive Campaign Launch form */}
        <ReviewsSection />
      </main>

      {/* 10. Footer Block: Quick Link, Services, Other pages, Support, Socials & Watermark */}
      <FooterSection />

      {/* Creator Detail Profile Modal */}
      <CreatorModal
        creator={selectedCreator}
        onClose={() => setSelectedCreator(null)}
        onBookCreator={handleBookFromModal}
      />
    </div>
  );
}
