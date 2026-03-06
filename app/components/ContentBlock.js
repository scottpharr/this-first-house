'use client';

import { useState } from 'react';
import Link from 'next/link';

const PLACEHOLDER_COLORS = ['#C8D5C8', '#B8C4D4', '#D4C8B8', '#C4B8D4'];

function stripHtml(html) {
  return html ? html.replace(/<[^>]*>/g, '').trim() : '';
}

export default function ContentBlock({ articles = [] }) {
  const [activeCategory, setActiveCategory] = useState('All Articles');

  // Derive unique categories from real articles
  const categories = ['All Articles', ...Array.from(
    new Set(articles.flatMap((a) => a.categories?.nodes?.map((c) => c.name) ?? []))
  )];

  const filtered = activeCategory === 'All Articles'
    ? articles
    : articles.filter((a) => a.categories?.nodes?.some((c) => c.name === activeCategory));

  const featured = filtered[0];
  const smallCards = filtered.slice(1, 5);

  return (
    <section className="bg-white pt-6 pb-[60px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">

        {/* Filter bar */}
        <div className="flex flex-col gap-4 mb-8" style={{ paddingTop: '30px' }}>
          {/* Category tabs */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => {
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
            <Link href={`/articles/${featured.slug}`} className="w-full md:w-[48%] flex flex-col" style={{ textDecoration: 'none' }}>
              <div className="w-full rounded-[6px] overflow-hidden bg-gray-200" style={{ height: '320px' }}>
                {featured.featuredImage?.node?.sourceUrl ? (
                  <img
                    src={featured.featuredImage.node.sourceUrl}
                    alt={featured.featuredImage.node.altText || featured.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: PLACEHOLDER_COLORS[0] }} />
                )}
              </div>

              <div className="flex flex-col items-center text-center gap-3 mt-4 px-4">
                {featured.categories?.nodes?.[0] && (
                  <div
                    className="flex items-center justify-center"
                    style={{ padding: '6px 16px', border: '0.5px solid #C85900', borderRadius: '4px' }}
                  >
                    <span style={{ fontSize: '10.5px', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C85900' }}>
                      {featured.categories.nodes[0].name}
                    </span>
                  </div>
                )}
                <h3 className="text-black" style={{ fontSize: '28px', fontWeight: 500, lineHeight: '100%', letterSpacing: '-0.03em' }}>
                  {featured.title}
                </h3>
                {featured.excerpt && (
                  <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: '125%', color: '#666666' }}>
                    {stripHtml(featured.excerpt).slice(0, 160)}
                  </p>
                )}
              </div>
            </Link>

            {/* ── Small cards 2×2 grid (right) ── */}
            <div className="w-full md:w-[48%] grid grid-cols-2 gap-4">
              {smallCards.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="flex flex-col gap-0 hover:opacity-90 transition-opacity"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="w-full rounded-[6px] overflow-hidden" style={{ height: '178px', background: PLACEHOLDER_COLORS[i % 4] }}>
                    {article.featuredImage?.node?.sourceUrl && (
                      <img
                        src={article.featuredImage.node.sourceUrl}
                        alt={article.featuredImage.node.altText || article.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-[6px] pt-2 px-1">
                    {article.categories?.nodes?.[0] && (
                      <span style={{ fontSize: '10.5px', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C85900' }}>
                        {article.categories.nodes[0].name}
                      </span>
                    )}
                    <h4 className="text-black capitalize" style={{ fontSize: '19px', fontWeight: 600, lineHeight: '20px' }}>
                      {article.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        )}

        {/* View More button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/articles"
            className="flex items-center justify-center text-white font-bold uppercase hover:opacity-90 transition-opacity"
            style={{ width: '260px', height: '60px', background: '#FF7100', borderRadius: '14px', fontSize: '16px', letterSpacing: '0.02em' }}
          >
            View More Articles
          </Link>
        </div>

      </div>
    </section>
  );
}
