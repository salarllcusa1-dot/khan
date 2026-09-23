import React from 'react';
import { BLOG_POSTS, BlogPost } from '../data/creators';

interface StoriesSectionProps {
  onSelectPost?: (post: BlogPost) => void;
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({ onSelectPost }) => {
  return (
    <section id="stories" className="bg-white text-[#111111] py-24 sm:py-36 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title with Explore circular badge matching Framer */}
        <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20 relative">
          <div className="relative inline-flex items-center justify-center">
            <h2 className="font-tanker text-5xl sm:text-7xl lg:text-8xl tracking-normal text-[#111111] leading-none">
              Stories That<br />Inspire Influence
            </h2>

            {/* Circular "Explore" Scalloped Star Badge from Framer */}
            <div 
              className="absolute -right-8 sm:-right-14 -bottom-4 sm:-bottom-5 select-none cursor-pointer hover:rotate-45 transition-transform duration-500"
              title="Explore all stories"
            >
              <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full border-2 border-[#111111] bg-[#cbffed] flex items-center justify-center p-1 shadow-md">
                <img 
                  src="https://framerusercontent.com/images/dHVVs7ZQ8JbBsos1jCRlsXpVzE4.png?width=266&height=265" 
                  alt="Explore stories" 
                  className="w-10 h-10 sm:w-14 sm:h-14 object-cover"
                />
                <span className="absolute font-tanker text-[10px] sm:text-xs text-[#111111] -rotate-[30deg]">
                  Explore
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Blog Cards Grid matching exact Framer data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost && onSelectPost(post)}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image banner with 1.65 ratio */}
              <div className="relative aspect-[1.65] w-full rounded-lg overflow-hidden bg-neutral-200">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded text-[11px] font-sans font-semibold text-white">
                  {post.category}
                </div>
              </div>

              {/* Metadata and Title */}
              <div className="pt-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-sans text-[#747474]">
                  <span>{post.date}</span>
                  <span>-</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="font-tanker text-2xl sm:text-3xl text-[#111111] group-hover:text-[#ff5600] transition-colors mt-2 leading-tight">
                  {post.title}
                </h3>

                <p className="mt-2 text-sm font-sans text-black/70 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
