export default function HomeownersGuide({ compact = false }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: '#393997' }}
    >
      {/* Shadow overlays */}
      <img
        src="/shadow-top-left.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
      />
      <img
        src="/shadow-top-right.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Content
          Mobile:  stacked, auto height, padded
          Desktop: side-by-side, fixed 594px height */}
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8
        flex flex-col md:flex-row items-center gap-8 md:gap-16
        py-12 md:py-0" style={{ height: compact ? '380px' : '594px' }}>

        {/* Left: text + form */}
        <div className="flex flex-col w-full md:flex-1 md:min-w-0">
          <h2
            className="text-white"
            style={{
              fontSize: compact ? 'clamp(22px, 4vw, 36px)' : 'clamp(30px, 6vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              textTransform: 'capitalize',
            }}
          >
            Download Your{' '}
            <span style={{ color: '#FF7100' }}>FREE</span>{' '}
            First-Time Homeowner&apos;s Guide
          </h2>

          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="rounded-[14px] px-6 outline-none w-full md:max-w-[451px]"
            style={{
              marginTop: compact ? '28px' : '61px',
              height: compact ? '48px' : '60px',
              background: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '0.02em',
              color: '#919191',
            }}
          />

          <button
            className="flex items-center justify-center text-white font-bold uppercase hover:opacity-90 transition-opacity"
            style={{
              marginTop: compact ? '12px' : '20px',
              width: compact ? '200px' : '240px',
              height: compact ? '48px' : '60px',
              background: '#FF7100',
              borderRadius: '14px',
              fontSize: compact ? '14px' : '16px',
              letterSpacing: '0.02em',
            }}
          >
            Get My Free Guide
          </button>

          {!compact && (
            <p
              className="mt-6 md:mt-[54px]"
              style={{
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '18px',
                letterSpacing: '0.02em',
                textTransform: 'capitalize',
                color: '#B0B0C3',
                maxWidth: '517px',
              }}
            >
              By Submitting Your E-Mail, You Agree To Receive Promotional E-Mails From This First
              House, And Agree To Our{' '}
              <a href="#" className="underline hover:text-white transition-colors">Terms</a>
              {' '}And{' '}
              <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
              {' '}You Can Opt Out At Any Time.
            </p>
          )}
        </div>

        {/* Right: guide image
            Mobile: smaller, centered; Desktop: right column */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-[40%]">
          <img
            src="/insider-guide.png"
            alt="Insider: The Homeowner's Handbook"
            className="object-contain w-[260px] md:w-full"
            style={{ height: 'auto', maxWidth: compact ? '320px' : '480px', maxHeight: compact ? '340px' : '547px' }}
          />
        </div>

      </div>
    </section>
  );
}
