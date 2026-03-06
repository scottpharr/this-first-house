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

export default function HomeNav({ active = '', solid = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-5 md:px-8 py-5 md:py-7 transition-colors duration-300"
      style={{ background: solid || scrolled ? '#11114A' : 'transparent' }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link href="/">
          <img src="/flat-logo.svg" alt="This First House" className="w-[110px] md:w-[165px] h-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-[30px]">
          {[
            { label: 'Watch',             href: '#' },
            { label: 'Learn',             href: '/articles' },
            { label: "Homeowner's Guide", href: '#' },
            { label: 'About',             href: '#' },
          ].map(({ label, href }) => (
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

        <div className="hidden md:flex items-center gap-5">
          <SocialIcon href="#" src="/icon-youtube.png"   alt="YouTube"   width={24} height={24} />
          <SocialIcon href="#" src="/icon-instagram.png" alt="Instagram" width={24} height={24} />
          <SocialIcon href="#" src="/icon-tiktok.png"    alt="TikTok"    width={18} height={24} />
          <SocialIcon href="#" src="/icon-mail.png"      alt="Email"     width={28} height={24} />
        </div>

        <button className="flex md:hidden flex-col gap-[5px] p-1" aria-label="Menu">
          <span className="block w-6 h-0.5 bg-white rounded" />
          <span className="block w-6 h-0.5 bg-white rounded" />
          <span className="block w-6 h-0.5 bg-white rounded" />
        </button>
      </div>
    </nav>
  );
}
