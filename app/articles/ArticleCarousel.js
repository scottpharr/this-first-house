'use client';

import { useRef } from 'react';
import Link from 'next/link';

export default function ArticleCarousel({ articles }) {
  const scrollRef = useRef(null);

  const scroll = () => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });

  return (
    <div className="relative overflow-hidden">
      {/* Card row */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex-shrink-0 flex flex-col"
            style={{ width: '400px', scrollSnapAlign: 'start' }}
          >
            {/* Image placeholder */}
            {(() => {
              const colors = ['#D9D9E8', '#C8D8E8', '#D8E4D0', '#E8DDD0', '#D0D8E8'];
              const href = article.slug ? `/articles/${article.slug}` : '#';
              return (
                <Link href={href} className="block hover:opacity-90 transition-opacity">
                  <div
                    className="w-full rounded-[6px]"
                    style={{ height: '225px', background: colors[article.id % colors.length] }}
                  />
                </Link>
              );
            })()}

            {/* Badge */}
            <div style={{ marginTop: '12px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  border: '0.5px solid #C85900',
                  borderRadius: '4px',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#C85900',
                }}
              >
                {article.type}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{ marginTop: '8px', fontSize: '17px', fontWeight: 700, lineHeight: '1.3', color: '#111111' }}
            >
              {article.title}
            </h3>

            {/* Read More */}
            <Link
              href={article.slug ? `/articles/${article.slug}` : '#'}
              style={{ display: 'inline-block', marginTop: '6px', fontSize: '13px', fontWeight: 500, color: '#393997', textDecoration: 'underline', textUnderlineOffset: '2px' }}
              className="hover:opacity-70 transition-opacity"
            >
              Read More
            </Link>
          </div>
        ))}

        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-4" />
      </div>

      {/* Right fade */}
      <div
        className="absolute top-0 right-0 bottom-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,0), #ffffff)' }}
      />

      {/* Arrow */}
      <button
        onClick={scroll}
        className="absolute right-0 top-[112px] -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        aria-label="Scroll right"
        style={{ color: '#11114A' }}
      >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
          <path d="M1 1L9 8L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
