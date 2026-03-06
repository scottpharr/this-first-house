'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

function SocialIcon({ href, src, alt, width, height }) {
  return (
    <a href={href} aria-label={alt} className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
      <img src={src} alt={alt} width={width} height={height} />
    </a>
  );
}

const NAV_LINKS = [
  { label: 'Learn',             href: '/articles' },
  { label: "Homeowner's Guide", href: '/homeowners-guide' },
  { label: 'About',             href: '/about' },
];

export default function HomeNav({ active = '', solid = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  const isSolid = solid || scrolled || menuOpen;
  const basePad = isMobile ? '14px' : '28px';
  const scrolledPad = '12px';

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-5 md:px-8"
        style={{
          background: isSolid ? '#11114A' : 'transparent',
          paddingTop: isSolid ? scrolledPad : basePad,
          paddingBottom: isSolid ? scrolledPad : basePad,
          transition: 'background 0.3s, padding 0.3s',
        }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/">
            <img src="/flat-logo.svg" alt="This First House" className="w-[110px] md:w-[165px] h-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-[30px]">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[17px] font-medium tracking-[0.05em] hover:text-[#FF7100] transition-colors"
                style={{ color: active === label ? '#FF7100' : '#ffffff' }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop social icons */}
          <div className="hidden md:flex items-center gap-5">
            <SocialIcon href="#" src="/icon-youtube.png"   alt="YouTube"   width={24} height={24} />
            <SocialIcon href="#" src="/icon-instagram.png" alt="Instagram" width={24} height={24} />
            <SocialIcon href="#" src="/icon-tiktok.png"    alt="TikTok"    width={18} height={24} />
            <SocialIcon href="#" src="/icon-mail.png"      alt="Email"     width={28} height={24} />
          </div>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col justify-center gap-[5px] p-1"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              /* X icon */
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M2 2L20 20M20 2L2 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            ) : (
              /* Hamburger */
              <>
                <span className="block w-6 h-0.5 bg-white rounded" />
                <span className="block w-6 h-0.5 bg-white rounded" />
                <span className="block w-6 h-0.5 bg-white rounded" />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col px-8 md:hidden"
          style={{ background: '#11114A', paddingTop: '90px' }}
        >
          <div className="flex flex-col gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-white font-bold tracking-wide hover:text-[#FF7100] transition-colors"
                style={{ fontSize: '28px', color: active === label ? '#FF7100' : '#ffffff' }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social icons at bottom */}
          <div className="flex items-center gap-6 mt-12">
            <SocialIcon href="#" src="/icon-youtube.png"   alt="YouTube"   width={24} height={24} />
            <SocialIcon href="#" src="/icon-instagram.png" alt="Instagram" width={24} height={24} />
            <SocialIcon href="#" src="/icon-tiktok.png"    alt="TikTok"    width={18} height={24} />
            <SocialIcon href="#" src="/icon-mail.png"      alt="Email"     width={28} height={24} />
          </div>
        </div>
      )}
    </>
  );
}
