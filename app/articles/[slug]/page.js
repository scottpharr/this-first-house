import { getArticleBySlug, getAllArticles } from '@/lib/wordpress';
import HomeNav from '@/app/components/HomeNav';
import Footer from '@/app/components/Footer';

const articleStyles = `
  .article-content { color: #222; font-size: 15px; line-height: 1.65; }
  .article-content h1 { color: #050565; font-size: 36px; font-weight: 700; line-height: 1.1; letter-spacing: -0.01em; margin-top: 1.5em; margin-bottom: 0.75em; }
  .article-content h2 { color: #111; font-size: 20px; font-weight: 700; line-height: 1.2; margin-top: 2em; margin-bottom: 0.3em; }
  .article-content h3 { color: #111; font-size: 17px; font-weight: 700; line-height: 1.25; margin-top: 1.75em; margin-bottom: 0.3em; }
  .article-content h4 { color: #111; font-size: 15px; font-weight: 700; line-height: 1.3; margin-top: 1.5em; margin-bottom: 0.25em; }
  .article-content h5, .article-content h6 { color: #333; font-size: 14px; font-weight: 600; margin-top: 1.25em; margin-bottom: 0.25em; }
  .article-content > *:first-child { margin-top: 0; }
  .article-content p { margin-bottom: 1em; color: #222; }
  .article-content ul, .article-content ol { padding-left: 1.4em; margin-top: 0.5em; margin-bottom: 1em; color: #222; }
  .article-content ul { list-style-type: disc; }
  .article-content ol { list-style-type: decimal; }
  .article-content li { margin-bottom: 0.3em; line-height: 1.65; padding-left: 0.25em; }
  .article-content li::marker { color: #444; font-size: 0.85em; }
  .article-content h1 a:empty, .article-content h2 a:empty, .article-content h3 a:empty { display: none; }
  .article-content a { color: #393997; text-decoration: underline; text-underline-offset: 2px; }
  .article-content a:hover { color: #FF7100; }
  .article-content strong, .article-content b { font-weight: 700; color: #111; }
  .article-content em, .article-content i { font-style: italic; }
  .article-content img { width: 100%; height: auto; border-radius: 6px; margin: 1.5em 0; display: block; }
  .article-content blockquote { margin: 1.25em 0; padding: 0; border: none; color: #444; font-style: italic; font-size: 15px; line-height: 1.65; }
  .article-content blockquote p { margin-bottom: 0.5em; }
  .article-content hr { border: none; border-top: 1px solid #ddd; margin: 2em 0; }
  .article-content table { width: 100%; border-collapse: collapse; font-size: 14px; margin: 1.5em 0; }
  .article-content th { background: #050565; color: #fff; padding: 9px 12px; text-align: left; font-weight: 600; }
  .article-content td { padding: 8px 12px; border-bottom: 1px solid #eee; color: #333; }
  .article-content tr:nth-child(even) td { background: #f8f8fb; }
  .article-content figcaption { font-size: 12px; color: #999; text-align: center; margin-top: -0.5em; margin-bottom: 1.25em; }
  .article-content .aligncenter { display: block; margin-left: auto; margin-right: auto; }
  .article-content .alignleft { float: left; margin: 0 1.5em 1em 0; max-width: 50%; }
  .article-content .alignright { float: right; margin: 0 0 1em 1.5em; max-width: 50%; }

  /* Article page layout */
  .article-layout { display: flex; flex-direction: column; gap: 40px; }
  .article-main   { width: 100%; }
  .article-sidebar { width: 100%; }

  @media (min-width: 768px) {
    .article-layout  { flex-direction: row; gap: 60px; align-items: flex-start; width: 1102px; margin: 0 auto; }
    .article-main    { width: 742px; flex-shrink: 0; }
    .article-sidebar { width: 300px; flex-shrink: 0; }
  }
`;

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return {
    title: article?.title ?? 'Article | This First House',
  };
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: articleStyles }} />
        <HomeNav solid />
        <main className="bg-white min-h-screen flex items-center justify-center" style={{ color: '#222222', paddingTop: '100px' }}>
          <p className="text-gray-500 text-lg">Article not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  const category = article.categories?.nodes?.[0];
  const author = article.author?.node?.name;
  const featuredImage = article.featuredImage?.node;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: articleStyles }} />
      <HomeNav solid />

      <main className="bg-white" style={{ color: '#222222', paddingTop: '100px' }}>

        {/* Breadcrumb — 20px from nav, 40px above content */}
        <div className="px-5 md:px-8" style={{ paddingTop: '20px', paddingBottom: '0' }}>
          <div className="article-layout">
            <div className="article-main flex items-center gap-2 text-sm" style={{ color: '#999' }}>
              <a href="/" className="hover:text-[#FF7100] transition-colors">Home</a>
              <span>/</span>
              {category && (
                <>
                  <a href="#" className="hover:text-[#FF7100] transition-colors">{category.name}</a>
                  <span>/</span>
                </>
              )}
              <span style={{ color: '#bbb' }} className="truncate">{article.title}</span>
            </div>
          </div>
        </div>

        {/* Main content — 40px below breadcrumb */}
        <div className="px-5 md:px-8" style={{ paddingTop: '40px', paddingBottom: '60px' }}>

          {/* Two-column layout: 742px article + 60px gap + 300px sidebar */}
          <div className="article-layout">

            {/* ── Main article column ── */}
            <article className="article-main">

              {/* Category badge */}
              {category && (
                <div className="mb-4">
                  <span
                    className="inline-flex items-center"
                    style={{
                      padding: '5px 14px',
                      border: '0.5px solid #C85900',
                      borderRadius: '4px',
                      fontSize: '10.5px',
                      fontWeight: 400,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#C85900',
                    }}
                  >
                    {category.name}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1
                className="text-[#050565]"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                {article.title}
              </h1>

              {/* Meta row */}
              <div className="flex items-center gap-4 mt-4 mb-8" style={{ fontSize: '13px', color: '#999' }}>
                {author && <span>By <strong style={{ color: '#555' }}>{author}</strong></span>}
                {article.date && <span>{formatDate(article.date)}</span>}
              </div>

              {/* Featured image */}
              {featuredImage && (
                <div className="w-full rounded-[8px] overflow-hidden mb-8" style={{ maxHeight: '520px' }}>
                  <img
                    src={featuredImage.sourceUrl}
                    alt={featuredImage.altText || article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Body content */}
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

            </article>

            {/* ── Sidebar — 300px ── */}
            <aside className="article-sidebar">
              <div className="sticky top-8 flex flex-col gap-6">

                {/* Newsletter widget */}
                <div
                  className="flex flex-col gap-4 p-6"
                  style={{ background: '#11114A', borderRadius: '14px' }}
                >
                  <h3 className="text-white font-bold" style={{ fontSize: '20px', lineHeight: 1.2 }}>
                    Get Our Free Homeowner&apos;s Guide
                  </h3>
                  <p style={{ fontSize: '14px', color: '#B7B7FF', lineHeight: 1.55 }}>
                    Tips, tutorials, and product reviews delivered to your inbox weekly.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="outline-none w-full"
                    style={{
                      height: '48px',
                      borderRadius: '10px',
                      background: '#fff',
                      padding: '0 16px',
                      fontSize: '14px',
                      color: '#333',
                    }}
                  />
                  <button
                    className="w-full flex items-center justify-center text-white font-bold uppercase hover:opacity-90 transition-opacity"
                    style={{
                      height: '48px',
                      background: '#FF7100',
                      borderRadius: '10px',
                      fontSize: '13px',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Subscribe Free
                  </button>
                  <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                    By subscribing you agree to our{' '}
                    <a href="#" className="underline">Terms</a> and{' '}
                    <a href="#" className="underline">Privacy Policy</a>.
                  </p>
                </div>

                {/* Download guide widget */}
                <div
                  className="flex flex-col items-center gap-3 p-6 text-center"
                  style={{ background: '#F3F3F3', borderRadius: '14px' }}
                >
                  <img
                    src="/insider-guide.png"
                    alt="First-Time Homeowner's Guide"
                    className="w-[140px] h-auto object-contain"
                  />
                  <h4 className="font-bold" style={{ fontSize: '16px', color: '#050565', lineHeight: 1.3 }}>
                    First-Time Homeowner&apos;s Handbook
                  </h4>
                  <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>
                    Everything you need to know to buy, maintain, and improve your first home.
                  </p>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center font-bold uppercase hover:opacity-90 transition-opacity"
                    style={{
                      height: '44px',
                      background: '#11114A',
                      color: '#fff',
                      borderRadius: '10px',
                      fontSize: '12px',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Download Free
                  </a>
                </div>

              </div>
            </aside>

          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
