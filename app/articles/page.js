import { getAllArticles } from '@/lib/wordpress';
import NewsletterCallout from '@/app/components/NewsletterCallout';
import HomeNav from '@/app/components/HomeNav';
import Footer from '@/app/components/Footer';
import ArticleCarousel from './ArticleCarousel';

export const metadata = {
  title: 'Learn | This First House',
};

export default async function LearnPage() {
  const allArticles = await getAllArticles();

  // Derive unique categories from real articles (preserving first-seen order)
  const seen = new Set();
  const categories = [];
  for (const article of allArticles) {
    for (const cat of article.categories?.nodes ?? []) {
      if (!seen.has(cat.slug)) {
        seen.add(cat.slug);
        categories.push({ id: cat.slug, label: cat.name, description: '' });
      }
    }
  }

  // Group articles by category slug
  const articlesByCategory = {};
  for (const cat of categories) {
    articlesByCategory[cat.id] = allArticles.filter((a) =>
      a.categories?.nodes?.some((c) => c.slug === cat.id)
    );
  }
  return (
    <>
      <HomeNav active="Learn" />

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden" style={{ height: '564px', background: '#11114A' }}>

        {/* Background image */}
        <img
          src="/learn-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient — fade to navy on left and right */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #11114A 0%, #11114A 8%, rgba(17,17,74,0.85) 22%, rgba(17,17,74,0) 38%, rgba(17,17,74,0) 62%, rgba(17,17,74,0.85) 78%, #11114A 92%, #11114A 100%)' }}
        />

        {/* Top fade */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #11114A 0%, rgba(17,17,74,0.7) 15%, rgba(17,17,74,0) 35%)' }}
        />

        {/* Hero text — 129px from left, 241px from top */}
        <div className="absolute" style={{ left: '129px', bottom: '60px' }}>
          <h1 className="text-white font-bold" style={{ fontSize: '56px', lineHeight: 1.05 }}>
            Learn
          </h1>
          <p className="mt-3" style={{ fontSize: '20px', lineHeight: 1.35, color: '#B7B7FF', maxWidth: '380px' }}>
            <strong>The best home buying knowledge, under one roof.</strong>{' '}
            <span style={{ color: '#B0B0C3' }}>This page is home to articles, guides, and everything you need to know about the home buying process from start to finish.</span>
          </p>
        </div>
      </section>

      <main className="bg-white" style={{ color: '#222222' }}>

        {/* ── Category jump links ── */}
        <div className="px-5 md:px-8" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <div className="max-w-[1280px] mx-auto flex gap-3 justify-center">
            {categories.map((cat, i) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center justify-center transition-colors text-center"
                style={{
                  width: '280px',
                  height: '25px',
                  flexShrink: 0,
                  borderRadius: '6px',
                  border: i === 0 ? '2px solid #11114A' : '1px solid #CCCCCC',
                  background: i === 0 ? '#11114A' : '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: i === 0 ? '#ffffff' : '#555555',
                  textDecoration: 'none',
                }}
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Article sections ── */}
        <div style={{ paddingTop: '36px', paddingBottom: '60px' }}>
          {categories.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              style={{ marginBottom: '52px' }}
            >
              <div className="px-5 md:px-8 max-w-[1280px] mx-auto">
                <h2
                  style={{ fontSize: '36px', fontWeight: 700, color: '#020259', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                >
                  {cat.label}
                </h2>
                <p style={{ marginTop: '6px', marginBottom: '18px', fontSize: '13px', color: '#888888' }}>
                  {cat.description}
                </p>
              </div>

              <div className="px-5 md:px-8 max-w-[1280px] mx-auto">
                <ArticleCarousel articles={articlesByCategory[cat.id] ?? []} />
              </div>
            </section>
          ))}
        </div>

        <NewsletterCallout />
      </main>

      <Footer />
    </>
  );
}
