import NewsletterCallout from '@/app/components/NewsletterCallout';
import HomeownersGuide from '@/app/components/HomeownersGuide';
import HomeNav from '@/app/components/HomeNav';
import Footer from '@/app/components/Footer';
import ArticleCarousel from './ArticleCarousel';

export const metadata = {
  title: 'Learn | This First House',
};

const CATEGORIES = [
  { id: 'house-hunting',   label: 'House Hunting',       description: 'Learn how to navigate today\'s market to find the perfect fit' },
  { id: 'buying-process',  label: 'The Buying Process',  description: 'Everything you need to know from offer to closing day' },
  { id: 'moving-settling', label: 'Moving & Settling In', description: 'Make your new house feel like home from day one' },
  { id: 'home-maintenance', label: 'Home Maintenance',   description: 'Keep your home running smoothly with expert tips and how-tos' },
];

const ARTICLES = {
  'house-hunting': [
    { id: 1,  type: 'Uncategorized',           title: 'Should You Buy That Fixer-Upper?',            image: '/article1.jpg', slug: 'how-to-change-a-toilet' },
    { id: 2,  type: 'Article',               title: "Just Want Some Space? Here's How to Find It", image: '/article2.jpg' },
    { id: 3,  type: "Homeowner's Handbook",  title: '10 Things to Look for in a Real Estate Agent', image: '/article3.jpg' },
    { id: 4,  type: 'Article',               title: 'How to Win a Bidding War in a Hot Market',    image: '/article4.jpg' },
    { id: 5,  type: 'Guide',                 title: 'Understanding Mortgage Pre-Approval',          image: '/article1.jpg' },
  ],
  'buying-process': [
    { id: 6,  type: 'Article',   title: 'What Happens at Closing?',                  image: '/article2.jpg' },
    { id: 7,  type: 'Guide',     title: 'Home Inspection 101',                        image: '/article3.jpg' },
    { id: 8,  type: 'Article',   title: 'How to Read a Home Disclosure Statement',   image: '/article4.jpg' },
    { id: 9,  type: 'Checklist', title: 'Documents You\'ll Need to Buy a Home',      image: '/article1.jpg' },
    { id: 10, type: 'Article',   title: 'Making a Competitive Offer in Any Market',  image: '/article2.jpg' },
  ],
  'moving-settling': [
    { id: 11, type: 'Article',   title: 'Your First Week in a New Home',                          image: '/article3.jpg' },
    { id: 12, type: 'Guide',     title: 'Setting Up Utilities: A Room-by-Room Checklist',         image: '/article4.jpg' },
    { id: 13, type: 'Tips',      title: '10 Things to Do Before You Unpack',                      image: '/article1.jpg' },
    { id: 14, type: 'Article',   title: 'How to Change the Locks on Your New Home',               image: '/article2.jpg' },
    { id: 15, type: 'Checklist', title: 'New Homeowner Setup Checklist',                           image: '/article3.jpg' },
  ],
  'home-maintenance': [
    { id: 16, type: 'Seasonal Guide', title: 'Your Complete Fall Home Maintenance Checklist',     image: '/article4.jpg' },
    { id: 17, type: 'How-To',         title: 'How to Fix a Leaky Faucet in 30 Minutes',           image: '/article1.jpg' },
    { id: 18, type: 'Article',        title: 'Signs You Need to Replace Your Water Heater',       image: '/article2.jpg' },
    { id: 19, type: 'Checklist',      title: 'Monthly Tasks Every Homeowner Should Do',           image: '/article3.jpg' },
    { id: 20, type: 'How-To',         title: 'How to Change a Toilet',                            image: '/article4.jpg', slug: 'how-to-change-a-toilet' },
  ],
};

export default function LearnPage() {
  return (
    <>
      <HomeNav active="Learn" />

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden" style={{ height: '450px', background: '#11114A' }}>

        {/* Background image */}
        <img
          src="/learn-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient — fade to navy on left and right */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #11114A 0%, rgba(17,17,74,0.8) 35%, rgba(17,17,74,0) 50%, rgba(17,17,74,0.8) 65%, #11114A 100%)' }}
        />

        {/* Hero text — 129px from left, 241px from top */}
        <div className="absolute" style={{ left: '129px', top: '241px' }}>
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
            {CATEGORIES.map((cat, i) => (
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
          {CATEGORIES.map((cat, i) => (
            <>
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
                  <ArticleCarousel articles={ARTICLES[cat.id]} />
                </div>
              </section>

              {/* HomeownersGuide between 2nd and 3rd sections */}
              {i === 1 && <div style={{ marginBottom: '40px' }}><HomeownersGuide compact /></div>}
            </>
          ))}
        </div>

        <NewsletterCallout />
      </main>

      <Footer />
    </>
  );
}
