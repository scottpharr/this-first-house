'use client';

import { useState } from 'react';

const CATEGORIES = [
  'All Articles',
  'Home Buying',
  'Home Maintenance',
  'Interior Design',
  'Outdoor & Garden',
  'Finance & Budget',
  'DIY Projects',
];

const ARTICLES = [
  {
    id: 1,
    category: 'Home Buying',
    resourceType: 'How-To Guide',
    title: 'What To Look For During A Home Inspection',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    image: '/article1.jpg',
    featured: true,
  },
  {
    id: 2,
    category: 'Home Buying',
    resourceType: 'Tips',
    title: 'Making A Competitive Offer In A Hot Market',
    image: '/article2.jpg',
  },
  {
    id: 3,
    category: 'Home Buying',
    resourceType: 'Checklist',
    title: 'First-Time Buyer Documents You Will Need',
    image: '/article3.jpg',
  },
  {
    id: 4,
    category: 'Home Buying',
    resourceType: 'Guide',
    title: 'Understanding Mortgage Pre-Approval',
    image: '/article4.jpg',
  },
  {
    id: 5,
    category: 'Home Maintenance',
    resourceType: 'Seasonal Guide',
    title: 'Your Complete Fall Home Maintenance Checklist',
    excerpt: 'Get your home ready for colder months with this step-by-step seasonal guide. From gutters to furnaces, we cover everything a first-time homeowner needs to know.',
    image: '/article1.jpg',
    featured: true,
  },
  {
    id: 6,
    category: 'Home Maintenance',
    resourceType: 'How-To',
    title: 'How To Fix A Leaky Faucet In 30 Minutes',
    image: '/article2.jpg',
  },
  {
    id: 7,
    category: 'Home Maintenance',
    resourceType: 'Tips',
    title: 'Signs You Need To Replace Your Water Heater',
    image: '/article3.jpg',
  },
  {
    id: 8,
    category: 'Home Maintenance',
    resourceType: 'Checklist',
    title: 'Monthly Home Maintenance Tasks Every Owner Should Do',
    image: '/article4.jpg',
  },
  {
    id: 9,
    category: 'Interior Design',
    resourceType: 'Inspiration',
    title: 'Budget-Friendly Ways To Refresh Any Room',
    excerpt: 'You do not need a big budget to make a big impact. These designer-approved tricks will transform your space without breaking the bank.',
    image: '/article1.jpg',
    featured: true,
  },
  {
    id: 10,
    category: 'Interior Design',
    resourceType: 'How-To',
    title: 'Choosing The Right Paint Color For Small Spaces',
    image: '/article2.jpg',
  },
  {
    id: 11,
    category: 'Interior Design',
    resourceType: 'Guide',
    title: 'How To Arrange Furniture In An Open Floor Plan',
    image: '/article3.jpg',
  },
  {
    id: 12,
    category: 'Interior Design',
    resourceType: 'Tips',
    title: 'Lighting Tricks That Make Any Room Look Bigger',
    image: '/article4.jpg',
  },
  {
    id: 13,
    category: 'Outdoor & Garden',
    resourceType: 'Seasonal Guide',
    title: 'How To Start A Vegetable Garden From Scratch',
    excerpt: 'Growing your own food is one of the most rewarding things about homeownership. Here is everything you need to get started, even if you have never gardened before.',
    image: '/article1.jpg',
    featured: true,
  },
  {
    id: 14,
    category: 'Outdoor & Garden',
    resourceType: 'Tips',
    title: 'Low-Maintenance Landscaping Ideas For Busy Homeowners',
    image: '/article2.jpg',
  },
  {
    id: 15,
    category: 'Outdoor & Garden',
    resourceType: 'How-To',
    title: 'Building A Raised Garden Bed On A Weekend',
    image: '/article3.jpg',
  },
  {
    id: 16,
    category: 'Outdoor & Garden',
    resourceType: 'Guide',
    title: 'Summer Grilling Setup: From Deck To Plate',
    image: '/article4.jpg',
  },
  {
    id: 17,
    category: 'Finance & Budget',
    resourceType: 'Guide',
    title: 'How To Build An Emergency Home Repair Fund',
    excerpt: 'Unexpected repairs are part of homeownership. Learn how to prepare financially so a burst pipe or broken HVAC does not derail your budget.',
    image: '/article1.jpg',
    featured: true,
  },
  {
    id: 18,
    category: 'Finance & Budget',
    resourceType: 'Tips',
    title: 'Tax Deductions Every Homeowner Should Know About',
    image: '/article2.jpg',
  },
  {
    id: 19,
    category: 'Finance & Budget',
    resourceType: 'How-To',
    title: 'Understanding Home Equity And When To Use It',
    image: '/article3.jpg',
  },
  {
    id: 20,
    category: 'Finance & Budget',
    resourceType: 'Checklist',
    title: 'First Year Homeowner Budget Breakdown',
    image: '/article4.jpg',
  },
  {
    id: 21,
    category: 'DIY Projects',
    resourceType: 'Tutorial',
    title: 'How To Install A New Light Fixture Safely',
    excerpt: 'Swapping out a light fixture is one of the easiest DIY upgrades you can make. This step-by-step guide walks you through it from start to finish.',
    image: '/article1.jpg',
    featured: true,
  },
  {
    id: 22,
    category: 'DIY Projects',
    resourceType: 'How-To',
    title: 'Painting Your Kitchen Cabinets Like A Pro',
    image: '/article2.jpg',
  },
  {
    id: 23,
    category: 'DIY Projects',
    resourceType: 'Tutorial',
    title: 'Installing A Backsplash Tile In A Weekend',
    image: '/article3.jpg',
  },
  {
    id: 24,
    category: 'DIY Projects',
    resourceType: 'Tips',
    title: 'Essential Tools Every First-Time Homeowner Needs',
    image: '/article4.jpg',
  },
];

// Placeholder image colors for when article images are missing
const PLACEHOLDER_COLORS = ['#C8D5C8', '#B8C4D4', '#D4C8B8', '#C4B8D4'];

function ArticleImage({ src, alt, className }) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    </div>
  );
}

export default function ContentBlock() {
  const [activeCategory, setActiveCategory] = useState('All Articles');

  const filtered = activeCategory === 'All Articles'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory);

  const featured = filtered.find((a) => a.featured) || filtered[0];
  const smallCards = filtered.filter((a) => a.id !== featured?.id).slice(0, 4);

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">

        {/* Heading + filter bar */}
        <div className="flex flex-col gap-4 mb-8">
          <h2
            className="font-medium"
            style={{ fontSize: '36px', lineHeight: '39px', letterSpacing: '-0.02em', color: '#050565' }}
          >
            Content Block
          </h2>

          {/* Category tabs — horizontal scroll on mobile */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex-shrink-0 flex items-center justify-center transition-colors"
                  style={{
                    padding: '8px 12px',
                    borderRadius: '10px',
                    background: isActive ? '#393997' : '#F3F3F3',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: isActive ? '#FFFFFF' : '#393997',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Article grid */}
        {featured && (
          <div className="flex flex-col md:flex-row gap-6">

            {/* ── Featured card (left) ── */}
            <div className="w-full md:w-[48%] flex flex-col">
              <div className="w-full rounded-[6px] overflow-hidden bg-gray-200" style={{ height: '320px' }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Badge + title + excerpt */}
              <div className="flex flex-col items-center text-center gap-3 mt-4 px-4">
                <div
                  className="flex items-center justify-center"
                  style={{
                    padding: '6px 16px',
                    border: '0.5px solid #C85900',
                    borderRadius: '4px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 400,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#C85900',
                    }}
                  >
                    {featured.resourceType}
                  </span>
                </div>

                <h3
                  className="text-black"
                  style={{ fontSize: '28px', fontWeight: 500, lineHeight: '100%', letterSpacing: '-0.03em' }}
                >
                  {featured.title}
                </h3>

                {featured.excerpt && (
                  <p
                    style={{ fontSize: '16px', fontWeight: 300, lineHeight: '125%', color: '#666666' }}
                  >
                    {featured.excerpt}
                  </p>
                )}
              </div>
            </div>

            {/* ── Small cards 2×2 grid (right) ── */}
            <div className="w-full md:w-[48%] grid grid-cols-2 gap-4">
              {smallCards.map((article, i) => (
                <a
                  key={article.id}
                  href="#"
                  className="flex flex-col gap-0 hover:opacity-90 transition-opacity"
                >
                  {/* Image */}
                  <div
                    className="w-full rounded-[6px] overflow-hidden bg-gray-200"
                    style={{ height: '178px' }}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.parentElement.style.background = PLACEHOLDER_COLORS[i % 4];
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col gap-[6px] pt-2 px-1">
                    <span
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 400,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#C85900',
                      }}
                    >
                      {article.resourceType}
                    </span>
                    <h4
                      className="text-black capitalize"
                      style={{ fontSize: '19px', fontWeight: 600, lineHeight: '20px' }}
                    >
                      {article.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>

          </div>
        )}

        {/* View More button */}
        <div className="flex justify-center mt-12">
          <button
            className="flex items-center justify-center text-white font-bold uppercase hover:opacity-90 transition-opacity"
            style={{
              width: '260px',
              height: '60px',
              background: '#FF7100',
              borderRadius: '14px',
              fontSize: '16px',
              letterSpacing: '0.02em',
            }}
          >
            View More Articles
          </button>
        </div>

      </div>
    </section>
  );
}
