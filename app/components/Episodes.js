'use client';

import { useState } from 'react';

const EPISODES = [
  { id: 1, title: "First Timer's Club",        label: 'Season 1, Episode 1' },
  { id: 2, title: 'Reality Sets In',            label: 'Season 1, Episode 2' },
  { id: 3, title: 'Clear To Close',             label: 'Season 1, Episode 3' },
  { id: 4, title: 'Do It Right',                label: 'Season 1, Episode 4' },
  { id: 5, title: "Home Wasn't Built In A Day", label: 'Season 1, Episode 5' },
  { id: 6, title: 'Home Sweet Home',            label: 'Season 1, Episode 6' },
];

function PlayCircle({ size = 37.5 }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ filter: 'drop-shadow(0px 0px 6px rgba(0,0,0,0.35))' }}
    >
      <div
        className="rounded-full flex items-center justify-center"
        style={{ width: size, height: size, background: 'rgba(255,255,255,0.8)' }}
      >
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
          <path d="M0 0L11 6.5L0 13V0Z" fill="black" />
        </svg>
      </div>
    </div>
  );
}

export default function Episodes() {
  const [active, setActive] = useState(0);
  const ep = EPISODES[active];

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">

        {/* Heading */}
        <h2
          className="font-medium mb-5 md:mb-6"
          style={{ fontSize: '36px', lineHeight: '39px', letterSpacing: '-0.02em', color: '#050565' }}
        >
          Episodes
        </h2>

        {/* ── Desktop layout: side-by-side at fixed height ── */}
        <div className="hidden md:flex gap-[15px]" style={{ height: '521px' }}>

          {/* Large video */}
          <div className="relative flex-1 rounded-[6px] overflow-hidden bg-black">
            <img
              src={active === 0 ? '/ep1-thumb.png' : `/ep${active + 1}-thumb.jpg`}
              alt={ep.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0) 11.06%, rgba(102,102,102,0.7) 37.5%, #000000 86.06%)',
                mixBlendMode: 'multiply',
              }}
            />
            <div className="absolute bottom-7 left-[52px] right-[52px] flex items-end justify-between">
              <div>
                <div className="text-white font-bold capitalize" style={{ fontSize: '32px', lineHeight: '31px' }}>
                  {ep.title}
                </div>
                <div className="text-white mt-2" style={{ fontSize: '13px', fontWeight: 300, letterSpacing: '0.05em' }}>
                  {ep.label}
                </div>
              </div>
              <button
                className="flex items-center justify-center gap-[10px] text-white font-bold uppercase hover:bg-white hover:text-black transition-colors"
                style={{ width: '190px', height: '62px', border: '1px solid #FFFFFF', borderRadius: '14px', fontSize: '16px', letterSpacing: '0.02em' }}
              >
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M0 0L12 7L0 14V0Z" fill="currentColor" />
                </svg>
                Watch Now
              </button>
            </div>
          </div>

          {/* Episode list */}
          <div className="flex flex-col gap-[8px]" style={{ width: '411px' }}>
            {EPISODES.map((episode, i) => (
              <button
                key={episode.id}
                onClick={() => setActive(i)}
                className="flex items-center text-left transition-colors rounded-[8px] flex-1 overflow-hidden"
                style={{ background: i === active ? '#FFEBDB' : 'transparent', paddingLeft: '6px', paddingRight: '12px' }}
              >
                <div className="relative flex-shrink-0 rounded-[6px] overflow-hidden bg-black" style={{ width: '126px', height: '71px' }}>
                  <img
                    src={episode.id === 1 ? '/ep1-thumb.png' : `/ep${episode.id}-thumb.jpg`}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                  <PlayCircle />
                </div>
                <div className="ml-[15px]">
                  <div className="font-semibold capitalize leading-tight" style={{ fontSize: '18px', color: '#000000' }}>
                    {episode.title}
                  </div>
                  <div className="mt-1" style={{ fontSize: '12px', color: '#666666' }}>
                    {episode.label}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Mobile layout: stacked ── */}
        <div className="flex flex-col gap-3 md:hidden">

          {/* Large video */}
          <div className="relative w-full rounded-[6px] overflow-hidden bg-black" style={{ height: '240px' }}>
            <img
              src={active === 0 ? '/ep1-thumb.png' : `/ep${active + 1}-thumb.jpg`}
              alt={ep.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0) 30%, #000000 100%)',
                mixBlendMode: 'multiply',
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
              <div>
                <div className="text-white font-bold capitalize text-xl leading-tight">{ep.title}</div>
                <div className="text-white/80 text-xs mt-1" style={{ fontWeight: 300 }}>{ep.label}</div>
              </div>
              <button
                className="flex-shrink-0 flex items-center justify-center gap-2 text-white font-bold uppercase text-xs hover:bg-white hover:text-black transition-colors px-3"
                style={{ height: '44px', border: '1px solid #FFFFFF', borderRadius: '10px', letterSpacing: '0.05em' }}
              >
                <svg width="10" height="12" viewBox="0 0 12 14" fill="none">
                  <path d="M0 0L12 7L0 14V0Z" fill="currentColor" />
                </svg>
                Watch
              </button>
            </div>
          </div>

          {/* Episode list — horizontal scroll on mobile */}
          <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide pb-1">
            {EPISODES.map((episode, i) => (
              <button
                key={episode.id}
                onClick={() => setActive(i)}
                className="flex-shrink-0 flex items-center gap-2 rounded-[8px] overflow-hidden transition-colors"
                style={{
                  background: i === active ? '#FFEBDB' : '#F5F5F5',
                  width: '220px',
                  height: '72px',
                  paddingLeft: '6px',
                  paddingRight: '8px',
                }}
              >
                <div className="relative flex-shrink-0 rounded-[6px] overflow-hidden bg-black" style={{ width: '100px', height: '60px' }}>
                  <img
                    src={episode.id === 1 ? '/ep1-thumb.png' : `/ep${episode.id}-thumb.jpg`}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                  <PlayCircle size={28} />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold capitalize leading-tight text-[13px] truncate" style={{ color: '#000000' }}>
                    {episode.title}
                  </div>
                  <div className="mt-0.5 text-[11px]" style={{ color: '#666666' }}>
                    {episode.label}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
