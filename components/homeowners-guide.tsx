export function HomeownersGuide() {
  return (
    <section id="guide" className="bg-navy py-12 lg:py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-row items-center gap-4 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-xl lg:text-4xl font-bold text-white leading-tight">
            Download Your
          </h2>
          <h2 className="text-xl lg:text-4xl font-bold leading-tight">
            <span className="text-orange">FREE</span>{" "}
            <span className="text-white">First-Time</span>
          </h2>
          <h2 className="text-xl lg:text-4xl font-bold text-white mb-4 lg:mb-8 leading-tight">
            Homeowner&apos;s Guide
          </h2>
          
          <button className="bg-orange hover:bg-orange/90 text-white font-bold uppercase text-xs lg:text-sm px-4 lg:px-8 py-2 lg:py-4 rounded-lg lg:rounded-xl transition-colors tracking-wide">
            Get Free Guide
          </button>
          
          <p className="hidden lg:block text-light-purple/60 text-xs mt-6 max-w-md">
            By downloading, you&apos;ll be subscribed to receive valuable homeownership tips and show updates. You can unsubscribe at any time.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <div className="relative w-28 lg:w-72">
            {/* Magazine/Guide Image */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=320&h=400&fit=crop"
                alt="Insider Homeowner's Guide"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4 right-2 lg:right-4">
                <span className="text-orange font-bold text-lg lg:text-2xl">Insider</span>
                <p className="text-white text-xs lg:text-sm hidden lg:block">First-Time Homeowner&apos;s Guide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
