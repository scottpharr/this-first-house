import { Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[900px] bg-navy overflow-hidden">
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
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[600px] lg:min-h-[900px] px-6 lg:px-20 pb-16 lg:pb-24">
        <div className="max-w-xl ml-auto lg:mr-20">
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6 capitalize">
            Crystal & Jorge Search For Their First House
          </h1>
          <p className="text-light-purple text-base lg:text-xl font-bold leading-relaxed mb-8 capitalize">
            This First House follows two Millennial and/or Gen Z families as they navigate the
            process of buying their first home and learn essential skills for maintaining and
            improving their property.
          </p>
          <button className="flex items-center justify-center gap-3 bg-orange hover:bg-orange/90 text-white font-bold uppercase text-sm lg:text-base px-8 py-4 rounded-xl transition-colors tracking-wide">
            <Play size={20} fill="white" />
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  )
}
