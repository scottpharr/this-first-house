export function HomeownersGuide() {
  return (
    <section id="guide" className="bg-navy py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Download Your
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            <span className="text-orange">FREE</span>{" "}
            <span className="text-white">First-Time</span>
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Homeowner&apos;s Guide
          </h2>
          
          <button className="bg-orange hover:bg-orange/90 text-white font-bold uppercase text-sm px-8 py-4 rounded-xl transition-colors tracking-wide">
            Get Free Guide
          </button>
          
          <p className="text-light-purple/60 text-xs mt-6 max-w-md mx-auto lg:mx-0">
            By downloading, you&apos;ll be subscribed to receive valuable homeownership tips and show updates. You can unsubscribe at any time.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Magazine/Guide Image */}
            <div className="w-64 lg:w-80 rounded-lg overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=320&h=400&fit=crop"
                alt="Insider Homeowner's Guide"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-orange font-bold text-2xl">Insider</span>
                <p className="text-white text-sm">First-Time Homeowner&apos;s Guide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
