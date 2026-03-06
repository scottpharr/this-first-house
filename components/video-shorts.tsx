import { Play } from "lucide-react"

const shorts = [
  {
    id: 1,
    title: "Holiday Cheer: End-to-End",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=200&h=350&fit=crop",
  },
  {
    id: 2,
    title: "Refresh Your Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=350&fit=crop",
  },
  {
    id: 3,
    title: "Fall Prep Checklist",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=350&fit=crop",
  },
  {
    id: 4,
    title: "Springtime Cleaning Tips",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&h=350&fit=crop",
  },
  {
    id: 5,
    title: "Garage Organization",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=350&fit=crop",
  },
]

export function VideoShorts() {
  return (
    <section className="py-12 lg:py-20 px-6 lg:px-20 bg-white">
      <h2 className="text-2xl lg:text-4xl font-medium text-dark-blue mb-4 lg:mb-8 tracking-tight">
        Video Shorts
      </h2>

      <div className="flex gap-3 lg:gap-4 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
        {shorts.map((short) => (
          <div
            key={short.id}
            className="relative flex-shrink-0 w-28 lg:w-44 aspect-[9/16] rounded-xl overflow-hidden cursor-pointer group"
          >
            <img
              src={short.image}
              alt={short.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play size={20} fill="black" className="text-black ml-1" />
              </div>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white text-sm font-medium leading-tight">{short.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
