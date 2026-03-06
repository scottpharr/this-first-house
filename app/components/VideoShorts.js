'use client';

import { useState, useRef, useEffect } from 'react';

const SHORTS = [
  { id: 1, title: 'Holiday Cheer Starts Here', thumb: '/short1-thumb.png' },
  { id: 2, title: 'Refresh For Fall',           thumb: '/short2-thumb.png' },
  { id: 3, title: 'Fall Prep Checklist',        thumb: '/short3-thumb.png' },
  { id: 4, title: 'Summer Grilling Tips',       thumb: '/short4-thumb.png' },
  { id: 5, title: 'Garage Storage Tips',        thumb: '/short5-thumb.png' },
  { id: 6, title: 'First Time Buyer Tips',      thumb: '/short6-thumb.png' },
  { id: 7, title: 'Budget Kitchen Refresh',     thumb: '/short7-thumb.png' },
];

export default function VideoShorts() {
  const [modalOpen, setModalOpen]   = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef  = useRef(null);
  const isDragging = useRef(false);
  const startX     = useRef(0);
  const scrollLeft = useRef(0);
  const dragMoved  = useRef(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  // Keyboard close
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setModalOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Scroll modal to active card whenever it opens or index changes
  const modalScrollRef = useRef(null);
  useEffect(() => {
    if (modalOpen && modalScrollRef.current) {
      modalScrollRef.current.scrollTo({ top: activeIndex * window.innerHeight, behavior: 'instant' });
    }
  }, [modalOpen, activeIndex]);

  /* ── Drag-to-scroll handlers ── */
  const onPointerDown = (e) => {
    isDragging.current = true;
    dragMoved.current  = false;
    startX.current     = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    const x    = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    if (Math.abs(walk) > 4) dragMoved.current = true;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onPointerUp = () => { isDragging.current = false; };

  const handleCardClick = (index) => {
    if (dragMoved.current) return; // was a drag, not a click
    setActiveIndex(index);
    setModalOpen(true);
  };

  const scrollCarousel = () => {
    scrollRef.current?.scrollBy({ left: 293, behavior: 'smooth' }); // card + gap
  };

  return (
    <>
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">

          {/* Heading */}
          <h2
            className="font-medium mb-8"
            style={{ fontSize: '36px', lineHeight: '39px', letterSpacing: '-0.02em', color: '#050565' }}
          >
            Video Shorts
          </h2>

          {/* Carousel + arrow */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-[40px] overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none"
              style={{ scrollSnapType: 'x mandatory' }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
            >
              {SHORTS.map((short, i) => (
                <button
                  key={short.id}
                  onClick={() => handleCardClick(i)}
                  className="relative flex-shrink-0 rounded-[6px] overflow-hidden bg-gray-800 focus:outline-none"
                  style={{ width: '253px', height: '450px', scrollSnapAlign: 'start' }}
                  draggable={false}
                >
                  {/* Thumbnail */}
                  <img
                    src={short.thumb}
                    alt={short.title}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />

                  {/* Bottom gradient */}
                  <div
                    className="absolute left-0 right-0 bottom-0 pointer-events-none"
                    style={{
                      height: '149px',
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)',
                    }}
                  />

                  {/* Play button — centered */}
                  <div
                    className="absolute rounded-full flex items-center justify-center pointer-events-none"
                    style={{
                      width: '75px', height: '75px',
                      top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M6 2L26 14L6 26V2Z" fill="black" />
                    </svg>
                  </div>

                  {/* Title */}
                  <div
                    className="absolute text-white font-bold capitalize pointer-events-none"
                    style={{
                      left: '20px', bottom: '20px', width: '214px',
                      fontSize: '24px', lineHeight: '26px',
                    }}
                  >
                    {short.title}
                  </div>
                </button>
              ))}

              {/* Trailing spacer so last card isn't flush against edge */}
              <div className="flex-shrink-0 w-8" />
            </div>

            {/* Right-edge fade to white */}
            <div
              className="absolute top-0 right-0 bottom-0 w-32 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, #ffffff 100%)' }}
            />

            {/* Right arrow */}
            <button
              onClick={scrollCarousel}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#11114A] hover:bg-gray-100 transition-colors z-10"
              aria-label="Scroll right"
            >
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path d="M1 1L9 8L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* ── Modal ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95">

          {/* Close */}
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-5 right-6 z-20 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Vertical snap-scroll stack */}
          <div
            ref={modalScrollRef}
            className="h-screen w-full overflow-y-scroll scrollbar-hide"
            style={{ scrollSnapType: 'y mandatory' }}
          >
            {SHORTS.map((short, i) => (
              <div
                key={short.id}
                className="h-screen w-full flex items-center justify-center"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Portrait video card */}
                <div
                  className="relative rounded-xl overflow-hidden bg-black"
                  style={{ height: '88vh', aspectRatio: '9/16', maxHeight: '780px' }}
                >
                  <img
                    src={short.thumb}
                    alt={short.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Bottom gradient */}
                  <div
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                      height: '180px',
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)',
                    }}
                  />

                  {/* Play button */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                    style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.85)' }}
                  >
                    <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
                      <path d="M2 2L26 16L2 30V2Z" fill="black" />
                    </svg>
                  </div>

                  {/* Title + counter */}
                  <div className="absolute bottom-8 left-6 right-6">
                    <div className="text-white font-bold text-2xl capitalize leading-tight">{short.title}</div>
                    <div className="text-white/60 text-sm mt-2">{i + 1} / {SHORTS.length}</div>
                  </div>
                </div>

                {/* Swipe hint (first card only) */}
                {i === 0 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase flex flex-col items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L8 14M3 9L8 14L13 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Scroll for next
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
