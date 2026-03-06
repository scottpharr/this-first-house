const LEGAL_LINKS = [
  'Press',
  'Contact',
  'Be On The Show',
  'Do Not Sell Or Share My Personal Information',
  'Terms Of Use',
  'Privacy Policy',
  'CA Privacy Notice',
];

export default function Footer() {
  return (
    <footer style={{ background: '#11114A' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pt-10 md:pt-12 pb-8 md:pb-10">

        {/* Top row: logo | nav | social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <img
            src="/flat-logo.svg"
            alt="This First House"
            className="w-[120px] md:w-[150px] h-auto"
          />

          {/* Nav links */}
          <div className="flex items-center gap-6 md:gap-8">
            {['Watch', 'Learn', "Homeowner's Guide", 'About'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white hover:text-[#FF7100] transition-colors"
                style={{ fontSize: '15px', fontWeight: 400 }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Email" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/icon-mail.png" alt="Email" width={28} height={24} />
            </a>
            <a href="#" aria-label="YouTube" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/icon-youtube.png" alt="YouTube" width={24} height={24} />
            </a>
            <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/icon-instagram.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" aria-label="TikTok" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/icon-tiktok.png" alt="TikTok" width={18} height={24} />
            </a>
          </div>
        </div>

        {/* Orange divider */}
        <div className="mt-8 md:mt-10" style={{ height: '1px', background: '#FF7100' }} />

        {/* Legal links */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {LEGAL_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-white transition-colors"
              style={{ fontSize: '10px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="mt-4 text-center"
          style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}
        >
          Copyright © 2026 This Old House Ventures, LLC. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
