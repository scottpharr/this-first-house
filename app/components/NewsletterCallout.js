export default function NewsletterCallout() {
  return (
    <section className="py-10 md:py-12" style={{ background: '#ffffff' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div
          className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16"
          style={{ background: '#EEEEF6', borderRadius: '16px', padding: '48px 56px' }}
        >
          {/* Left: text */}
          <div className="flex-1 min-w-0">
            <h2
              className="font-bold"
              style={{ fontSize: '24px', lineHeight: 1.2, color: '#050565' }}
            >
              Subscribe To Our Newsletter
            </h2>
            <p
              className="mt-3"
              style={{ fontSize: '14px', lineHeight: 1.55, color: '#444444', maxWidth: '420px' }}
            >
              From DIY tips to pro advice, discover the tools, project tutorials,
              and product reviews that keep your home running smoothly, plus get
              weekly updates from the This First House crew.
            </p>
          </div>

          {/* Right: form */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="outline-none w-full sm:w-[320px]"
                style={{
                  height: '56px',
                  borderRadius: '12px',
                  border: '1px solid #D8D8E8',
                  background: '#ffffff',
                  padding: '0 20px',
                  fontSize: '14px',
                  color: '#333',
                }}
              />
              <button
                className="flex items-center justify-center gap-3 text-white font-bold uppercase hover:opacity-90 transition-opacity flex-shrink-0"
                style={{
                  height: '56px',
                  padding: '0 32px',
                  background: '#11114A',
                  borderRadius: '12px',
                  fontSize: '13px',
                  letterSpacing: '0.07em',
                }}
              >
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <path d="M0 6H14M9 1L14 6L9 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Subscribe
              </button>
            </div>
            <p style={{ fontSize: '11px', color: '#888888', lineHeight: 1.5 }}>
              By submitting your email, you agree to our{' '}
              <a href="#" className="underline hover:text-gray-600 transition-colors">Terms</a>
              {' '}and{' '}
              <a href="#" className="underline hover:text-gray-600 transition-colors">Privacy Notice</a>.
              {' '}You can opt out at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
