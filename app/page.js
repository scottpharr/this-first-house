import { getAllArticles } from '@/lib/wordpress';
import HomeNav from './components/HomeNav';
import HomeownersGuide from './components/HomeownersGuide';
import VideoShorts from './components/VideoShorts';
import ContentBlock from './components/ContentBlock';
import NewsletterCallout from './components/NewsletterCallout';
import Footer from './components/Footer';

function PlayIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
      <path d="M0 0L14 8L0 16V0Z" fill="white"/>
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#11114A]" style={{ height: '80vh' }}>

      {/* Hero photo */}
      <img
        src="/hero-photo-opt.jpg"
        alt="Crystal and Jorge"
        className="absolute inset-0 w-full h-full object-contain object-left"
      />

      {/* Gradient: right side fades photo to navy (reduced 50%) */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(17,17,74,0) 30%, rgba(17,17,74,0.15) 55%, rgba(17,17,74,0.25) 75%)',
        }}
      />

      {/* Gradient: bottom fades to navy */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(17,17,74,0) 0%, rgba(17,17,74,0.5) 60%, #11114A 95%)',
        }}
      />

      {/* Gradient: top fade for nav area */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #11114A 0%, rgba(17,17,74,0.6) 15%, rgba(17,17,74,0) 35%)',
        }}
      />

      {/* Gradient: subtle left edge darkening for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 40%)',
        }}
      />

      {/* Text overlay — flex-based so it scales with viewport
          Mobile:  full-width at the bottom
          Desktop: right ~40%, vertically centered */}
      <div className="absolute inset-0 flex flex-col justify-end pb-8 md:pb-20">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:pl-[58%] md:pr-16">
          <div className="flex flex-col gap-5 md:gap-[27px]">

            <h1
              className="text-white font-bold capitalize leading-tight
                text-[28px] md:text-[46px] md:leading-[48px]"
            >
              Crystal &amp; Jorge Search for Their First House
            </h1>

            <p
              className="text-[14px] leading-[135%] md:text-[20px]"
              style={{ color: '#B7B7FF', fontWeight: 400 }}
            >
              This First House follows two Millennial and/or Gen Z families as they navigate
              the process of buying their first home and learn essential skills for maintaining
              and improving their property.
            </p>

            <button
              className="flex items-center justify-center gap-[10px] text-white font-bold
                uppercase tracking-[0.02em] transition-opacity hover:opacity-90
                w-full h-[52px] md:w-[244px] md:h-[60px]"
              style={{ background: '#FF7100', borderRadius: '14px', fontSize: '16px' }}
            >
              <PlayIcon />
              Watch Trailer
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <main>
      <HomeNav />
      <Hero />
      <ContentBlock articles={articles} />
      <div style={{ height: '60px', background: '#fff' }} />
      <HomeownersGuide />
      <VideoShorts />

      <NewsletterCallout />
      <Footer />
    </main>
  );
}
