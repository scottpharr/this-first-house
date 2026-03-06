import { Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[700px] bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-05%20at%2011.46.22%E2%80%AFPM-cCS0sDvBfWCgbb1eS2oe4YHgmCWAdr.png"
          alt="Crystal and Jorge searching for their first house"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-navy via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[500px] lg:min-h-[700px] px-6 lg:px-20 pb-12 lg:pb-20">
        <div className="max-w-lg lg:max-w-xl lg:ml-auto lg:mr-12">
          <h1 className="text-2xl lg:text-5xl font-bold text-white leading-tight mb-4 lg:mb-6">
            Crystal & Jorge Search For Their First House
          </h1>
          <p className="text-light-purple text-sm lg:text-lg leading-relaxed mb-6 lg:mb-8">
            This First House follows two Millennial and/or Gen Z families as they navigate the
            process of buying their first home and learn essential skills for maintaining and
            improving their property.
          </p>
          <button className="flex items-center justify-center gap-3 bg-orange hover:bg-orange/90 text-white font-bold uppercase text-xs lg:text-sm px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-colors tracking-wide">
            <Play size={18} fill="white" />
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  )
}
