export interface Creator {
  id: string;
  name: string;
  niche: string;
  nicheSlug: string;
  slug: string;
  handle: string;
  followers: string;
  engagement: string;
  avgViews: string;
  image: string;
  color: string;
  bio: string;
  platform: string;
  startingPrice: string;
  recentClients: string[];
}

export const TOP_INFLUENCERS: Creator[] = [
  {
    id: 'sarah-mitchellt',
    name: 'Sarah Mitchellt',
    niche: 'Fashion & Style',
    nicheSlug: 'fashion-style',
    slug: 'sarah-mitchellt',
    handle: '@sarahmitchellt',
    followers: '540K',
    engagement: '5.8%',
    avgViews: '210K',
    image: 'https://framerusercontent.com/images/bICCzMWCValDk5T82InAqjrbcE.png?width=770&height=740',
    color: '#dfeef3',
    bio: 'Contemporary street fashion & editorial styling curator. Trusted by luxury and DTC sustainable fashion labels.',
    platform: 'Instagram & TikTok',
    startingPrice: '$700',
    recentClients: ['Zara', 'Reformation', 'Aritzia'],
  },
  {
    id: 'jacob-reynolds',
    name: 'Jacob Reynolds',
    niche: 'Beauty & Skincare',
    nicheSlug: 'beauty-skincare',
    slug: 'jacob-reynolds',
    handle: '@jacob.glow',
    followers: '820K',
    engagement: '7.2%',
    avgViews: '450K',
    image: 'https://framerusercontent.com/images/6DF3U2KIXbGdsgJk068Ua8IdOY.png?width=770&height=740',
    color: '#cbffed',
    bio: 'Clinical ingredient breakdowns, non-toxic skincare routines, and aesthetic morning regimens.',
    platform: 'TikTok & YouTube',
    startingPrice: '$900',
    recentClients: ['CeraVe', 'The Ordinary', 'Glossier'],
  },
  {
    id: 'emma-carter',
    name: 'Emma Carter',
    niche: 'Fitness & Wellness',
    nicheSlug: 'fitness-wellness',
    slug: 'emma-carter',
    handle: '@emmacarterfit',
    followers: '680K',
    engagement: '6.4%',
    avgViews: '320K',
    image: 'https://framerusercontent.com/images/bEHfuZ3Ye8RkqNtfGa2wqVbv8uc.png?width=770&height=740',
    color: '#fbe8f0',
    bio: 'Certified strength trainer & functional wellness advocate. Creator of high-converting workout challenge series.',
    platform: 'Instagram & YouTube Shorts',
    startingPrice: '$700',
    recentClients: ['Gymshark', 'Athletic Greens', 'Whoop'],
  },
  {
    id: 'ava-mitchell',
    name: 'Ava Mitchell',
    niche: 'Tech & Gadget',
    nicheSlug: 'tech-gadget',
    slug: 'ava-mitchell',
    handle: '@ava.techlab',
    followers: '910K',
    engagement: '8.1%',
    avgViews: '620K',
    image: 'https://framerusercontent.com/images/7ElsSqJcSX6MWwhLdFutFELBU7U.png?width=770&height=740',
    color: '#fdfdcd',
    bio: 'Unfiltered hardware reviews, smartphone teardowns, and productivity workspace setups for discerning tech lovers.',
    platform: 'YouTube & TikTok',
    startingPrice: '$800',
    recentClients: ['Sony', 'Logitech', 'Anker'],
  },
  {
    id: 'noah-brooks',
    name: 'Noah Brooks',
    niche: 'Food & Cooking',
    nicheSlug: 'food-cooking',
    slug: 'noah-brooks',
    handle: '@noahbrooks_cooks',
    followers: '430K',
    engagement: '6.8%',
    avgViews: '290K',
    image: 'https://framerusercontent.com/images/6ZXYtAoDCSDrhzCTc0bI79F79s.png?width=770&height=740',
    color: '#ffe2ce',
    bio: 'Gourmet cooking made effortless with relatable home kitchen recipes, knife skills tutorials, and artisanal cookware reviews.',
    platform: 'TikTok & Instagram',
    startingPrice: '$900',
    recentClients: ['Our Place', 'HexClad', 'Whole Foods'],
  },
  {
    id: 'sofia-lane',
    name: 'Sofia Lane',
    niche: 'Travel & Lifestyle',
    nicheSlug: 'travel-lifestyle',
    slug: 'sofia-lane',
    handle: '@sofialane.journey',
    followers: '760K',
    engagement: '8.9%',
    avgViews: '510K',
    image: 'https://framerusercontent.com/images/SmGv5XGIFwZIRSuEs0knZivYL0.png?width=770&height=740',
    color: '#cafcff',
    bio: 'Capturing boutique hotels, bucket-list travel destinations, and slow-living aesthetic wanderlust around the globe.',
    platform: 'Instagram & Pinterest',
    startingPrice: '$750',
    recentClients: ['Airbnb', 'Away Luggage', 'Delta'],
  },
  {
    id: 'ethan-walker',
    name: 'Ethan Walker',
    niche: 'Fashion & Grooming',
    nicheSlug: 'fashion-grooming',
    slug: 'ethan-walker',
    handle: '@ethanwalker_style',
    followers: '520K',
    engagement: '6.1%',
    avgViews: '340K',
    image: 'https://framerusercontent.com/images/BO6qxGRbNmDd13CkacYEIPUoU.png?width=770&height=740',
    color: '#e9d7ff',
    bio: 'Modern minimalist menswear, elevated capsule wardrobes, and grooming essentials for ambitious creators.',
    platform: 'TikTok & Reels',
    startingPrice: '$800',
    recentClients: ['Uniqlo', 'Aesop', 'Seiko'],
  },
  {
    id: 'harper-collins',
    name: 'Harper Collins',
    niche: 'Gaming & Streaming',
    nicheSlug: 'gaming-streaming',
    slug: 'harper-collins',
    handle: '@harperplays',
    followers: '980K',
    engagement: '9.4%',
    avgViews: '720K',
    image: 'https://framerusercontent.com/images/sXF50kOu6zR2jbltUEq69Bdk0.png?width=770&height=740',
    color: '#dfffb2',
    bio: 'High-energy esports streamer, mechanical keyboard enthusiast, and next-gen gaming hardware reviewer.',
    platform: 'Twitch & YouTube',
    startingPrice: '$750',
    recentClients: ['Razer', 'SteelSeries', 'Red Bull'],
  },
];

export interface OrbitAvatar {
  id: string;
  name: string;
  handle: string;
  niche: string;
  followers: string;
  engagement: string;
  bgColor: string;
  imgUrl: string;
  leftPercent: number;
  topPercent: number;
  size: number;
  animationClass: string;
}

// 8 exact avatars floating along the orbital curves from Brandfluencer Framer
export const ORBIT_AVATARS: OrbitAvatar[] = [
  {
    id: 'orbit-1',
    name: 'Sarah Mitchellt',
    handle: '@sarahmitchellt',
    niche: 'Fashion & Style',
    followers: '540K',
    engagement: '5.8%',
    bgColor: '#fab3db',
    imgUrl: 'https://framerusercontent.com/images/suIh7mMtgpn4HbpT6hkD5schfs.png?width=1000&height=1000',
    leftPercent: 21,
    topPercent: 26,
    size: 84,
    animationClass: 'animate-float-slow',
  },
  {
    id: 'orbit-2',
    name: 'Jacob Reynolds',
    handle: '@jacob.glow',
    niche: 'Beauty & Skincare',
    followers: '820K',
    engagement: '7.2%',
    bgColor: '#c8fd83',
    imgUrl: 'https://framerusercontent.com/images/vwuDsYC7NEW49IpmXh6wsOia0x4.png?width=1000&height=1000',
    leftPercent: 8,
    topPercent: 42,
    size: 120,
    animationClass: 'animate-float-delayed',
  },
  {
    id: 'orbit-3',
    name: 'Emma Carter',
    handle: '@emmacarterfit',
    niche: 'Fitness & Wellness',
    followers: '680K',
    engagement: '6.4%',
    bgColor: '#70e6ed',
    imgUrl: 'https://framerusercontent.com/images/7rHnpMQoXnuJ7NbtLu54qhVJ838.png?width=1000&height=1000',
    leftPercent: 18,
    topPercent: 51,
    size: 75,
    animationClass: 'animate-float-slow',
  },
  {
    id: 'orbit-4',
    name: 'Noah Brooks',
    handle: '@noahbrooks_cooks',
    niche: 'Food & Cooking',
    followers: '430K',
    engagement: '6.8%',
    bgColor: '#ffecde',
    imgUrl: 'https://framerusercontent.com/images/pxm80S6cGQTY7SNL37fs8nkLnM8.png?width=1000&height=1000',
    leftPercent: 22,
    topPercent: 78,
    size: 60,
    animationClass: 'animate-float-reverse',
  },
  {
    id: 'orbit-5',
    name: 'Ava Mitchell',
    handle: '@ava.techlab',
    niche: 'Tech & Gadget',
    followers: '910K',
    engagement: '8.1%',
    bgColor: '#fab3db',
    imgUrl: 'https://framerusercontent.com/images/OF9wWOnkVROTRwzgWeyZDXSHGo.png?width=1000&height=1000',
    leftPercent: 79,
    topPercent: 26,
    size: 84,
    animationClass: 'animate-float-slow',
  },
  {
    id: 'orbit-6',
    name: 'Sofia Lane',
    handle: '@sofialane.journey',
    niche: 'Travel & Lifestyle',
    followers: '760K',
    engagement: '8.9%',
    bgColor: '#70e6ed',
    imgUrl: 'https://framerusercontent.com/images/pekkov0TBWn7qLRwlqbvJhKhptE.png?width=1000&height=1000',
    leftPercent: 92,
    topPercent: 42,
    size: 120,
    animationClass: 'animate-float-delayed',
  },
  {
    id: 'orbit-7',
    name: 'Ethan Walker',
    handle: '@ethanwalker_style',
    niche: 'Fashion & Grooming',
    followers: '520K',
    engagement: '6.1%',
    bgColor: '#c8fd83',
    imgUrl: 'https://framerusercontent.com/images/DstdnMm9H8LLqLHqaTGJei4up5Q.png?width=1000&height=1000',
    leftPercent: 82,
    topPercent: 51,
    size: 75,
    animationClass: 'animate-float-reverse',
  },
  {
    id: 'orbit-8',
    name: 'Harper Collins',
    handle: '@harperplays',
    niche: 'Gaming & Streaming',
    followers: '980K',
    engagement: '9.4%',
    bgColor: '#ffecde',
    imgUrl: 'https://framerusercontent.com/images/fUO6qTuSqBsNLE554PUOBgK14.png?width=1000&height=1000',
    leftPercent: 78,
    topPercent: 78,
    size: 60,
    animationClass: 'animate-float-slow',
  },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'G9jpTH4_a',
    slug: 'influencers-that-drive-sales',
    title: 'Influencers That Drive Sales',
    date: 'Feb 26, 2026',
    readTime: '5 min read',
    image: 'https://framerusercontent.com/images/ZQOh3O8hUK4g8IJBrD8Jmxz94.png?width=2120&height=1280',
    excerpt: 'How data-backed creator selection outperforms follower vanity metrics in driving bottom-funnel conversions.',
    category: 'Campaign Strategy',
  },
  {
    id: 'aN2iTl4Yr',
    slug: 'how-youtube-review-bost-your-sales',
    title: 'How YouTube Review Bost Your Sales',
    date: 'Feb 26, 2026',
    readTime: '5 min read',
    image: 'https://framerusercontent.com/images/4t6wYq5sCzGEEJxTBGznhfm8.png?width=2120&height=1280',
    excerpt: 'Detailed product deep dives on YouTube build long-term SEO equity and persistent buyer trust for product launches.',
    category: 'Video Commerce',
  },
  {
    id: 'mQqhmENku',
    slug: 'tiktok-trends-brands-need',
    title: 'TikTok Trends Brands Need',
    date: 'Feb 26, 2026',
    readTime: '5 min read',
    image: 'https://framerusercontent.com/images/NmPfe1g5wVxoPyrNqMYTozIuU.png?width=2120&height=1280',
    excerpt: 'Leveraging algorithmic audio spikes and native spark advertising to scale viral velocity in 72 hours.',
    category: 'Virality & Spark Ads',
  },
];

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  bgColor: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    quote: 'Brandfulancer matched us with the perfect influencers. The campaign felt authentic and the results came faster than expected.',
    author: 'Adam Jampa',
    role: 'CEO ByteCart',
    avatar: 'https://framerusercontent.com/images/LWCHpgzfCJaVDjJEdac7406ziZo.png?width=200&height=200',
    bgColor: '#dfeef3', // token-d09e8a29
  },
  {
    id: 'rev-2',
    quote: 'We finally achieved consistent engagement and real customers, while their managed workflow reduced our workload.',
    author: 'Alex Neauta',
    role: 'Marketing Officer',
    avatar: 'https://framerusercontent.com/images/B87tugRjYnbyUPQrAE0q3XxzBc.png?width=200&height=200',
    bgColor: '#fbe8f0', // token-17b3584d
  },
  {
    id: 'rev-3',
    quote: 'From influencer selection to reporting, everything was easy. Our brand visibility increased across all platforms.',
    author: 'Robert Plant',
    role: 'Marketing Coordinator',
    avatar: 'https://framerusercontent.com/images/xtUJ9FR3AfWUr9v1dzeRuH9Mc.png?width=200&height=200',
    bgColor: '#cbffed', // token-329034d5
  },
  {
    id: 'rev-4',
    quote: 'Brandfulancer connected us with influencers, making the campaign feel authentic and delivering results faster than anticipated.',
    author: 'Liam Brooks',
    role: 'Product Director',
    avatar: 'https://framerusercontent.com/images/72E6I7HPVxQRWOMsM131RpF4Tw.png?width=200&height=200',
    bgColor: '#fdfdcd', // token-a1870ecf
  },
  {
    id: 'rev-5',
    quote: 'The entire process, from influencer selection to reporting, was effortless, and our brand expanded across all platforms.',
    author: 'Mia Turner',
    role: 'Creative Director',
    avatar: 'https://framerusercontent.com/images/bHJ851pit9bU4bsoiCR8sbzqc.png?width=200&height=200',
    bgColor: '#ffecde', // token-8ffeaae5
  },
];
