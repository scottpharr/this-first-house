'use client';

import { useState } from 'react';
import HomeNav from '@/app/components/HomeNav';
import VideoShorts from '@/app/components/VideoShorts';
import NewsletterCallout from '@/app/components/NewsletterCallout';
import Footer from '@/app/components/Footer';

const EPISODES = [
  { id: 1, title: "First Timer's Club",          season: 1, episode: 1, color: '#2A2A5A' },
  { id: 2, title: 'Reality Sets In',             season: 1, episode: 2, color: '#1E3A4A' },
  { id: 3, title: 'Close to Close',              season: 1, episode: 3, color: '#2A3A2A' },
  { id: 4, title: 'Do It Right',                 season: 1, episode: 4, color: '#3A2A2A' },
  { id: 5, title: "Home Wasn't Built in a Day",  season: 1, episode: 5, color: '#2A2A3A' },
  { id: 6, title: 'Home Sweet Home',             season: 1, episode: 6, color: '#1A3A3A' },
];

function PlayIcon({ size = 14 }) {
  return (
    <svg width={size} height={size * 16 / 14} viewBox="0 0 14 16" fill="none">
      <path d="M0 0L14 8L0 16V0Z" fill="white"/>
    </svg>
  );
}

export default function WatchPage() {
  const [activeEp, setActiveEp] = useState(0);
  const ep = EPISODES[activeEp];

  return (
    <>
      <HomeNav active="Watch" />

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden bg-[#11114A]" style={{ height: '564px' }}>

        {/* Background photo — full height, contained */}
        <img
          src="/watch-hero.png"
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
          style={{ objectPosition: 'calc(50% - 100px) center', transform: 'scale(1.1)' }}
        />

        {/* Gradient: fade to navy on both sides */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #11114A 0%, #11114A 15%, rgba(17,17,74,0.9) 27%, rgba(17,17,74,0) 40%, rgba(17,17,74,0) 36%, rgba(17,17,74,0.9) 61%, #11114A 73%, #11114A 100%)' }}
        />

        {/* Gradient: top nav area */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #11114A 0%, rgba(17,17,74,0.6) 15%, rgba(17,17,74,0) 35%)' }}
        />

        {/* Gradient: bottom fade for episode text */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(17,17,74,0) 55%, rgba(17,17,74,0.9) 100%)' }}
        />

        {/* Episode info — bottom left */}
        <div className="absolute" style={{ left: '64px', bottom: '72px' }}>
          <h1 className="text-white font-bold" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.1 }}>
            {ep.title}
          </h1>
          <p style={{ marginTop: '6px', fontSize: '14px', color: '#B7B7FF' }}>
            Season {ep.season}, Episode {ep.episode}
          </p>
          <button
            className="flex items-center gap-3 text-white font-bold uppercase hover:opacity-90 transition-opacity"
            style={{ marginTop: '20px', height: '48px', padding: '0 24px', background: '#FF7100', borderRadius: '12px', fontSize: '13px', letterSpacing: '0.06em' }}
          >
            <PlayIcon />
            Watch Now
          </button>
        </div>

        {/* Episode list panel — right side, full hero height */}
        <div
          className="absolute hidden md:flex flex-col overflow-y-auto scrollbar-hide"
          style={{
            top: '90px',
            right: '0',
            bottom: '0',
            width: '280px',
            background: 'rgba(10,10,50,0.6)',
            backdropFilter: 'blur(12px)',
            padding: '12px 8px',
            gap: '2px',
          }}
        >
          {EPISODES.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setActiveEp(i)}
              className="flex items-center gap-3 text-left w-full transition-colors rounded-[8px]"
              style={{
                padding: '10px 12px',
                background: i === activeEp ? 'rgba(255,255,255,0.12)' : 'transparent',
              }}
            >
              {/* Thumbnail placeholder */}
              <div
                className="flex-shrink-0 rounded-[4px] flex items-center justify-center"
                style={{ width: '72px', height: '44px', background: e.color }}
              >
                <svg width="10" height="12" viewBox="0 0 14 16" fill="none">
                  <path d="M0 0L14 8L0 16V0Z" fill="rgba(255,255,255,0.6)"/>
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <p className="text-white font-semibold truncate" style={{ fontSize: '13px', lineHeight: 1.3 }}>
                  {e.title}
                </p>
                <p style={{ fontSize: '11px', color: '#B7B7FF', marginTop: '3px' }}>
                  Season {e.season}, Episode {e.episode}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Video Shorts + Newsletter + Footer ── */}
      <VideoShorts />
      <NewsletterCallout />
      <Footer />
    </>
  );
}
