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

const episodesStyles = `
  .ep-section { background: #fff; padding: 40px 0 56px; }
  .ep-inner   { max-width: 1280px; margin: 0 auto; padding: 0 32px; }
  .ep-heading { font-size: 36px; font-weight: 500; line-height: 39px; letter-spacing: -0.02em; color: #050565; margin-bottom: 24px; }

  /* Desktop: large card + sidebar list */
  .ep-desktop { display: flex; gap: 15px; height: 521px; }
  .ep-mobile  { display: none; }

  /* Large card */
  .ep-main { position: relative; flex: 1; border-radius: 6px; overflow: hidden; background: #000; }
  .ep-main img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ep-main-overlay {
    position: absolute; inset: 0; pointer-events: none;
    background: linear-gradient(180deg, rgba(255,255,255,0) 11.06%, rgba(102,102,102,0.3) 37.5%, rgba(0,0,0,0.55) 86.06%);
    mix-blend-mode: multiply;
  }
  .ep-main-info {
    position: absolute; bottom: 28px; left: 52px; right: 52px;
    display: flex; align-items: flex-end; justify-content: space-between;
  }
  .ep-main-title { color: #fff; font-size: 32px; font-weight: 700; line-height: 31px; text-transform: capitalize; }
  .ep-main-label { color: #fff; font-size: 13px; font-weight: 300; letter-spacing: 0.05em; margin-top: 8px; }
  .ep-watch-btn {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    width: 190px; height: 62px; border: 1px solid #fff; border-radius: 14px;
    background: transparent; color: #fff; font-size: 16px; font-weight: 700;
    letter-spacing: 0.02em; text-transform: uppercase; cursor: pointer; flex-shrink: 0;
  }
  .ep-watch-btn:hover { background: #fff; color: #000; }

  /* Sidebar episode list */
  .ep-list { display: flex; flex-direction: column; gap: 8px; width: 411px; }
  .ep-item {
    display: flex; align-items: center; text-align: left; border: none; cursor: pointer;
    border-radius: 8px; flex: 1; overflow: hidden; padding: 0 12px 0 6px;
    background: transparent; transition: background 0.15s;
  }
  .ep-item.active { background: #FFEBDB; }
  .ep-thumb {
    position: relative; flex-shrink: 0; border-radius: 6px; overflow: hidden;
    background: #000; width: 126px; height: 71px;
  }
  .ep-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ep-play {
    position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
    filter: drop-shadow(0px 0px 6px rgba(0,0,0,0.35));
  }
  .ep-play-circle {
    width: 37.5px; height: 37.5px; border-radius: 50%;
    background: rgba(255,255,255,0.8); display: flex; align-items: center; justify-content: center;
  }
  .ep-item-title { font-size: 18px; font-weight: 600; color: #000; line-height: 1.2; text-transform: capitalize; margin-left: 15px; }
  .ep-item-label { font-size: 12px; color: #666; margin-top: 4px; margin-left: 15px; }

  /* Mobile layout */
  @media (max-width: 767px) {
    .ep-desktop { display: none; }
    .ep-mobile  { display: flex; flex-direction: column; gap: 12px; }
    .ep-mobile-main {
      position: relative; width: 100%; border-radius: 6px; overflow: hidden;
      background: #000; height: 240px;
    }
    .ep-mobile-main img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .ep-mobile-overlay {
      position: absolute; inset: 0; pointer-events: none;
      background: linear-gradient(180deg, rgba(255,255,255,0) 30%, rgba(0,0,0,0.7) 100%);
      mix-blend-mode: multiply;
    }
    .ep-mobile-info {
      position: absolute; bottom: 16px; left: 16px; right: 16px;
      display: flex; align-items: flex-end; justify-content: space-between; gap: 8px;
    }
    .ep-mobile-title { color: #fff; font-size: 20px; font-weight: 700; line-height: 1.2; text-transform: capitalize; }
    .ep-mobile-label { color: rgba(255,255,255,0.8); font-size: 12px; font-weight: 300; margin-top: 4px; }
    .ep-mobile-btn {
      flex-shrink: 0; display: flex; align-items: center; justify-content: center; gap: 8px;
      height: 44px; padding: 0 12px; border: 1px solid #fff; border-radius: 10px;
      background: transparent; color: #fff; font-size: 12px; font-weight: 700;
      letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer;
    }
    .ep-scroll { display: flex; flex-direction: row; gap: 8px; overflow-x: auto; padding-bottom: 4px; }
    .ep-scroll::-webkit-scrollbar { display: none; }
    .ep-scroll-item {
      flex-shrink: 0; display: flex; align-items: center; gap: 8px;
      border-radius: 8px; overflow: hidden; width: 220px; height: 72px;
      padding: 0 8px 0 6px; border: none; cursor: pointer; transition: background 0.15s;
    }
    .ep-scroll-item.active { background: #FFEBDB; }
    .ep-scroll-item:not(.active) { background: #F5F5F5; }
    .ep-scroll-thumb {
      flex-shrink: 0; position: relative; border-radius: 6px; overflow: hidden;
      background: #000; width: 100px; height: 60px;
    }
    .ep-scroll-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .ep-scroll-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
    .ep-scroll-circle {
      width: 28px; height: 28px; border-radius: 50%;
      background: rgba(255,255,255,0.8); display: flex; align-items: center; justify-content: center;
    }
    .ep-scroll-title { font-size: 13px; font-weight: 600; color: #000; line-height: 1.2; text-transform: capitalize; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100px; }
    .ep-scroll-label { font-size: 11px; color: #666; margin-top: 2px; }
  }
`;

function thumbSrc(episode) {
  return episode.id === 1 ? '/ep1-thumb.png' : `/ep${episode.id}-thumb.jpg`;
}

export default function Episodes() {
  const [active, setActive] = useState(0);
  const ep = EPISODES[active];

  return (
    <section className="ep-section">
      <style dangerouslySetInnerHTML={{ __html: episodesStyles }} />
      <div className="ep-inner">

        <h2 className="ep-heading">Episodes</h2>

        {/* ── Desktop ── */}
        <div className="ep-desktop">

          {/* Large card */}
          <div className="ep-main">
            <img src={thumbSrc(ep)} alt={ep.title} />
            <div className="ep-main-overlay" />
            <div className="ep-main-info">
              <div>
                <div className="ep-main-title">{ep.title}</div>
                <div className="ep-main-label">{ep.label}</div>
              </div>
              <button className="ep-watch-btn">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M0 0L12 7L0 14V0Z" fill="currentColor" />
                </svg>
                Watch Now
              </button>
            </div>
          </div>

          {/* Episode list */}
          <div className="ep-list">
            {EPISODES.map((episode, i) => (
              <button
                key={episode.id}
                className={`ep-item${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="ep-thumb">
                  <img src={thumbSrc(episode)} alt={episode.title} />
                  <div className="ep-play">
                    <div className="ep-play-circle">
                      <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
                        <path d="M0 0L11 6.5L0 13V0Z" fill="black" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="ep-item-title">{episode.title}</div>
                  <div className="ep-item-label">{episode.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="ep-mobile">

          {/* Large card */}
          <div className="ep-mobile-main">
            <img src={thumbSrc(ep)} alt={ep.title} />
            <div className="ep-mobile-overlay" />
            <div className="ep-mobile-info">
              <div>
                <div className="ep-mobile-title">{ep.title}</div>
                <div className="ep-mobile-label">{ep.label}</div>
              </div>
              <button className="ep-mobile-btn">
                <svg width="10" height="12" viewBox="0 0 12 14" fill="none">
                  <path d="M0 0L12 7L0 14V0Z" fill="currentColor" />
                </svg>
                Watch
              </button>
            </div>
          </div>

          {/* Horizontal scroll list */}
          <div className="ep-scroll">
            {EPISODES.map((episode, i) => (
              <button
                key={episode.id}
                className={`ep-scroll-item${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="ep-scroll-thumb">
                  <img src={thumbSrc(episode)} alt={episode.title} />
                  <div className="ep-scroll-play">
                    <div className="ep-scroll-circle">
                      <svg width="9" height="11" viewBox="0 0 11 13" fill="none">
                        <path d="M0 0L11 6.5L0 13V0Z" fill="black" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="ep-scroll-title">{episode.title}</div>
                  <div className="ep-scroll-label">{episode.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
