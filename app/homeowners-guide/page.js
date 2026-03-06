import HomeNav from '@/app/components/HomeNav';
import NewsletterCallout from '@/app/components/NewsletterCallout';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Homeowner's Guide | This First House",
};

export default function HomeownersGuidePage() {
  return (
    <>
      <HomeNav active="Homeowner's Guide" />

      {/* ── Hero — matches homepage height ── */}
      <section className="relative w-full overflow-hidden bg-[#11114A]" style={{ height: '564px' }}>

        {/* Background image */}
        <img
          src="/guide-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Gradient: fade to navy on both sides */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #11114A 0%, #11114A 8%, rgba(17,17,74,0.85) 22%, rgba(17,17,74,0) 38%, rgba(17,17,74,0) 62%, rgba(17,17,74,0.85) 78%, #11114A 92%, #11114A 100%)' }}
        />

        {/* Gradient: top fade */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #11114A 0%, rgba(17,17,74,0.7) 15%, rgba(17,17,74,0) 35%)' }}
        />

        {/* Text — bottom right */}
        <div className="absolute" style={{ right: '64px', bottom: '48px', width: '340px' }}>
          <div className="flex flex-col gap-3">

            <h1
              className="text-white font-bold"
              style={{ fontSize: '28px', lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              Your Home, Made Simple: The Essential Guide Every Homeowner Needs
            </h1>

            <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#B7B7FF' }}>
              From The Experts At This First House: Get The{' '}
              <strong style={{ color: '#FF7100' }}>FREE GUIDE</strong>
              {' '}That Helps You Protect, Maintain, And Love Your Home From Day One.
            </p>

            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="outline-none w-full"
              style={{
                height: '48px',
                borderRadius: '12px',
                background: '#ffffff',
                padding: '0 16px',
                fontSize: '14px',
                color: '#333',
              }}
            />

            <button
              className="flex items-center justify-center text-white font-bold uppercase hover:opacity-90 transition-opacity"
              style={{
                width: '200px',
                height: '48px',
                background: '#FF7100',
                borderRadius: '12px',
                fontSize: '13px',
                letterSpacing: '0.06em',
              }}
            >
              Get My Free Guide
            </button>

            <p style={{ fontSize: '10px', color: 'rgba(183,183,255,0.5)', lineHeight: 1.5 }}>
              By Submitting Your E-Mail, You Agree To Receive Promotional E-Mails From This First
              House, And Agree To Our{' '}
              <a href="#" className="underline hover:text-white transition-colors">Terms</a>
              {' '}And{' '}
              <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
              {' '}You Can Opt Out At Any Time.
            </p>

          </div>
        </div>
      </section>

      <main className="bg-white" style={{ color: '#222222' }}>

        {/* ── What's Inside ── */}
        <div className="max-w-[1270px] mx-auto px-5 md:px-8" style={{ paddingTop: '80px', paddingBottom: '80px' }}>

          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#050565', lineHeight: 1.2, marginBottom: '32px' }}>
            What&apos;s Inside Your Free Homeowner&apos;s Guide
          </h2>

          <div
            className="flex flex-col md:flex-row items-center justify-center"
            style={{ background: '#EEEEF6', borderRadius: '16px' }}
          >
            {/* Left: feature list — max 400px */}
            <div
              className="flex flex-col min-w-0"
              style={{ width: '450px', flexShrink: 0, padding: '13px 50px 68px 40px', gap: '40px', justifyContent: 'center' }}
            >
              {[
                { title: 'First 30 Days Checklist',      desc: 'Everything you should do right after move-in' },
                { title: 'Safety Made Simple',            desc: 'Detectors, fire extinguishers, and emergency prep' },
                { title: 'Energy & Money Savers',         desc: 'Quick upgrades that lower bills and boost comfort' },
                { title: 'Routine Maintenance Guides',    desc: 'Seasonal checklists that keep your home in tip-top shape' },
                { title: 'Project Planning Tips',         desc: 'When to DIY, call a pro, and how to budget smart' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <img
                    src="/arrow-bullet.png"
                    alt=""
                    aria-hidden="true"
                    style={{ width: '36px', height: '36px', flexShrink: 0, marginTop: '4px' }}
                  />
                  <div>
                    <p style={{ fontSize: '24px', fontWeight: 700, color: '#050565', lineHeight: 'normal', textTransform: 'capitalize', marginBottom: '4px' }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: '14px', color: '#555555', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: booklet image — 480×547px */}
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{ padding: '48px 45px 45px 40px' }}
            >
              <img
                src="/insider-guide-book.png"
                alt="Insider: The Homeowner's Handbook"
                style={{ width: '480px', height: '547px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* ── Take The Stress Out CTA ── */}
        <section style={{ background: 'linear-gradient(135deg, #11114A 0%, #2D2D8F 50%, #11114A 100%)', padding: '80px 0' }}>
          <div className="max-w-[1270px] mx-auto px-5 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">

              {/* Left: text + form */}
              <div className="flex flex-col gap-6 w-full md:max-w-[560px]">
                <h2
                  style={{ color: '#FFF', fontFamily: 'Archivo, sans-serif', fontSize: '52px', fontWeight: 300, lineHeight: '53px', letterSpacing: '-0.52px', textTransform: 'capitalize' }}
                >
                  Take The Stress Out Of Homeownership.
                </h2>

                <p style={{ color: '#FFF', fontFamily: 'Archivo, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.16px', textTransform: 'capitalize' }}>
                  Get Expert-Backed Checklists, Maintenance Tips, And Money-Saving Strategies, All In One Easy-To-Use Online Guide.
                </p>

                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="outline-none"
                  style={{
                    width: '451px',
                    height: '60px',
                    borderRadius: '14px',
                    background: '#FFF',
                    padding: '0 20px',
                    fontSize: '15px',
                    color: '#333',
                  }}
                />

                <button
                  className="flex items-center justify-center text-white font-bold uppercase hover:opacity-90 transition-opacity"
                  style={{
                    width: '310px',
                    height: '60px',
                    background: '#FF7100',
                    borderRadius: '14px',
                    fontSize: '14px',
                    letterSpacing: '0.06em',
                  }}
                >
                  Yes, I Want My Free Guide
                </button>

                <p style={{ color: '#B0B0C3', fontFamily: 'Archivo, sans-serif', fontSize: '13px', fontWeight: 400, lineHeight: '18px', letterSpacing: '0.26px', textTransform: 'capitalize' }}>
                  By Submitting Your E-Mail, You Agree To Receive Promotional E-Mails From This First
                  House, And Agree To Our{' '}
                  <a href="#" style={{ color: '#FF7100', textDecoration: 'underline' }} className="hover:opacity-80 transition-opacity">Terms</a>
                  {' '}And{' '}
                  <a href="#" style={{ color: '#FF7100', textDecoration: 'underline' }} className="hover:opacity-80 transition-opacity">Privacy Policy</a>.
                  {' '}You Can Opt Out At Any Time.
                </p>
              </div>

              {/* Right: placeholder for 1,2,3 steps image */}
              <div
                className="flex-1 hidden md:flex items-center justify-center"
                style={{ minHeight: '360px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)' }}
              >
                <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '14px' }}>Image coming soon</p>
              </div>

            </div>
          </div>
        </section>

        <NewsletterCallout />
      </main>

      <Footer />
    </>
  );
}
