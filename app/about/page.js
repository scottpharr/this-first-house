import HomeNav from '@/app/components/HomeNav';
import NewsletterCallout from '@/app/components/NewsletterCallout';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'About | This First House',
};

export default function AboutPage() {
  return (
    <>
      <HomeNav active="About" />

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden" style={{ height: '564px', background: '#11114A' }}>

        {/* Background image */}
        <img
          src="/about-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
          style={{ objectPosition: 'right center' }}
        />

        {/* Gradient — fade to navy on left and right */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #11114A 0%, rgba(17,17,74,0.95) 38%, rgba(17,17,74,0.5) 48%, rgba(17,17,74,0) 58%, rgba(17,17,74,0) 75%, rgba(17,17,74,0.8) 88%, #11114A 98%)' }}
        />

        {/* Hero text — 129px from left, 60px from bottom */}
        <div className="absolute" style={{ left: '129px', bottom: '60px' }}>
          <h1 className="text-white font-bold" style={{ fontSize: '56px', lineHeight: 1.05 }}>
            About
          </h1>
          <p className="mt-3" style={{ fontSize: '20px', lineHeight: 1.35, color: '#B7B7FF', maxWidth: '380px' }}>
            <strong>This First House</strong> follows two Millennial and/or Gen Z families as they navigate the process of buying their first home and learn essential skills for maintaining and improving their property.
          </p>
          <p className="mt-5" style={{ fontSize: '15px', color: '#B0B0C3' }}>
            Streaming Exclusively on <strong style={{ color: '#ffffff' }}>Roku</strong>
          </p>
        </div>
      </section>

      {/* ── Hosts bio ── */}
      <main className="bg-white" style={{ color: '#222222' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Left: text */}
            <div style={{ flex: '0 0 360px', maxWidth: '360px' }}>
              <h2
                style={{ fontSize: '48px', fontWeight: 700, color: '#050565', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px' }}
              >
                Hosts
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#444444' }}>
                Guiding them through this journey will be the husband-and-wife team,{' '}
                <strong style={{ color: '#050565' }}>Zack and Camille Dettmore</strong>, alongside their experts from real estate, mortgage, legal, and construction sectors. Ut wisi enim ad minim veniam, quis nostrud exercitation ulliam corper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem veleum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel willum lunombro dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
              </p>
            </div>

            {/* Right: photo */}
            <div className="flex-1 min-w-0">
              <img
                src="/zack-camille.png"
                alt="Zack and Camille Dettmore"
                className="w-full object-cover"
                style={{ borderRadius: '16px', maxHeight: '520px', objectPosition: 'top center' }}
              />
            </div>

          </div>
        </div>

        {/* ── Supporting Cast ── */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-8" style={{ paddingBottom: '100px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#050565', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '32px' }}>
            Supporting Cast
          </h2>

          <div style={{ background: '#EEEEF6', borderRadius: '16px', padding: '48px 56px' }}>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '0' }}>
              {[
                [
                  { name: 'Yemily Lopes',     role: 'Real Estate Agent, Yemily Lopez Real Estate', social: 'IG @yemilyrealtor' },
                  { name: 'Caroline Figucia', role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Art Hays',         role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Jim Anderson',     role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Jordan Critz',     role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Mark Montalto',    role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                ],
                [
                  { name: 'Yemily Lopes',     role: 'Real Estate Agent, Yemily Lopez Real Estate', social: 'IG @yemilyrealtor' },
                  { name: 'Caroline Figucia', role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Art Hays',         role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Jim Anderson',     role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Jordan Critz',     role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Mark Montalto',    role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                ],
                [
                  { name: 'Yemily Lopes',     role: 'Real Estate Agent, Yemily Lopez Real Estate', social: 'IG @yemilyrealtor' },
                  { name: 'Caroline Figucia', role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Art Hays',         role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Jim Anderson',     role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Jordan Critz',     role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                  { name: 'Mark Montalto',    role: 'Job Title, Company Name',                      social: 'IG @socialhandle | TikTok @socialhandle' },
                ],
              ].map((column, colIdx) => (
                <div
                  key={colIdx}
                  className="flex flex-col gap-8"
                  style={{
                    padding: '0 40px',
                    borderLeft: colIdx > 0 ? '1px solid #C8C8DC' : 'none',
                  }}
                >
                  {column.map((person) => (
                    <div key={person.name + colIdx}>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#050565', marginBottom: '2px' }}>
                        {person.name}
                      </p>
                      <p style={{ fontSize: '13px', color: '#444444', marginBottom: '2px' }}>
                        {person.role}
                      </p>
                      <p style={{ fontSize: '13px', color: '#393997' }}>
                        {person.social}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <NewsletterCallout />
      </main>

      <Footer />
    </>
  );
}
