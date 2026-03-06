'use client';

import { useState } from 'react';
import Link from 'next/link';

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function stripHtml(html) {
  return html?.replace(/<[^>]*>/g, '').trim() ?? '';
}

export default function ArticlesGrid({ articles, categories }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? articles
    : articles.filter((a) => a.categories?.nodes?.some((c) => c.name === active));

  return (
    <>
      {/* Category filter tabs */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 mb-10">
        {['All', ...categories].map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="flex-shrink-0 flex items-center justify-center transition-colors"
              style={{
                padding: '8px 14px',
                borderRadius: '10px',
                background: isActive ? '#393997' : '#F3F3F3',
                fontSize: '13px',
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

      {/* Article grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center py-20">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          {filtered.map((article) => {
            const category = article.categories?.nodes?.[0];
            const image = article.featuredImage?.node;
            const excerpt = stripHtml(article.excerpt);

            return (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex flex-col gap-0 hover:opacity-95 transition-opacity"
              >
                {/* Image */}
                <div
                  className="w-full rounded-[8px] overflow-hidden bg-gray-100 flex-shrink-0"
                  style={{ height: '220px' }}
                >
                  {image ? (
                    <img
                      src={image.sourceUrl}
                      alt={image.altText || article.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#EEEEF6]" />
                  )}
                </div>

                {/* Card body */}
                <div className="flex flex-col gap-2 pt-4">
                  {category && (
                    <span
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 400,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#C85900',
                      }}
                    >
                      {category.name}
                    </span>
                  )}

                  <h2
                    className="text-[#050565] group-hover:text-[#393997] transition-colors"
                    style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.2', letterSpacing: '-0.01em' }}
                  >
                    {article.title}
                  </h2>

                  {excerpt && (
                    <p
                      className="line-clamp-3"
                      style={{ fontSize: '14px', color: '#666', lineHeight: 1.55 }}
                    >
                      {excerpt}
                    </p>
                  )}

                  {article.date && (
                    <span style={{ fontSize: '12px', color: '#AAAAAA', marginTop: '4px' }}>
                      {formatDate(article.date)}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
