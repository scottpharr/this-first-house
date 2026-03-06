import Link from 'next/link';
import { getAllArticles } from '@/lib/wordpress';
import Episodes from './components/Episodes';
import HomeownersGuide from './components/HomeownersGuide';
import VideoShorts from './components/VideoShorts';
import ContentBlock from './components/ContentBlock';

function TFHLogo() {
  return (
    <img src="/flat-logo.svg" alt="This First House" className="w-[110px] md:w-[165px] h-auto" />
  );
}

function SocialIcon({ href, src, alt, width, height }) {
  return (
    <a href={href} aria-label={alt} className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
      <img src={src} alt={alt} width={width} height={height} />
    </a>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
      <path d="M0 0L14 8L0 16V0Z" fill="white"/>
    </svg>
  );
}

function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 px-5 md:px-8 py-5 md:py-7">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <TFHLogo />
        </div>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-[30px]">
          {['Watch', 'Learn', "Homeowner's Guide", 'About'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-white text-[17px] font-medium tracking-[0.05em] hover:text-[#FF7100] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social icons — hidden on mobile */}
        <div className="hidden md:flex items-center gap-5">
          <SocialIcon href="#" src="/icon-youtube.png"   alt="YouTube"   width={24} height={24} />
          <SocialIcon href="#" src="/icon-instagram.png" alt="Instagram" width={24} height={24} />
          <SocialIcon href="#" src="/icon-tiktok.png"    alt="TikTok"    width={18} height={24} />
          <SocialIcon href="#" src="/icon-mail.png"      alt="Email"     width={28} height={24} />
        </div>

        {/* Hamburger — mobile only */}
        <button className="flex md:hidden flex-col gap-[5px] p-1" aria-label="Menu">
          <span className="block w-6 h-0.5 bg-white rounded" />
          <span className="block w-6 h-0.5 bg-white rounded" />
          <span className="block w-6 h-0.5 bg-white rounded" />
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#11114A] h-[600px] md:h-[900px]">
      <Nav />

      {/* Hero photo */}
      <img
        src="/hero-photo-opt.jpg"
        alt="Crystal and Jorge"
        className="absolute inset-0 w-full h-full object-cover object-left"
      />

      {/* Gradient: right side fades photo to navy (where text lives) */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(17,17,74,0) 30%, rgba(17,17,74,0.7) 55%, #11114A 75%)',
        }}
      />

      {/* Gradient: bottom fades to navy */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(17,17,74,0) 0%, rgba(17,17,74,0.5) 60%, #11114A 95%)',
        }}
      />

      {/* Gradient: subtle left edge darkening for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 40%)',
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
      <Hero />
      <Episodes />
      <HomeownersGuide />
      <VideoShorts />
      <ContentBlock />

      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-16">
        {articles.map((article) => (
          <div key={article.slug}>
            <Link href={`/articles/${article.slug}`}>
              <h2>{article.title}</h2>
            </Link>
            <p>{article.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
