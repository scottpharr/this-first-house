import Link from 'next/link';

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

export default function Nav() {
  return (
    <nav style={{ background: '#11114A' }} className="px-5 md:px-8 py-5 md:py-7">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <TFHLogo />
        </Link>

        <div className="hidden md:flex items-center gap-[30px]">
          {[
            { label: 'Watch',             href: '#' },
            { label: 'Learn',             href: '/articles' },
            { label: "Homeowner's Guide", href: '#' },
            { label: 'About',             href: '#' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white text-[17px] font-medium tracking-[0.05em] hover:text-[#FF7100] transition-colors"
            >
              {label}
            </Link>
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
