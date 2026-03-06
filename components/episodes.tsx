import { Play } from "lucide-react"

const episodes = [
  {
    id: 1,
    title: "First Timers Club",
    episode: "Episode 01",
    image: "/placeholder-ep1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Reality Sinks In",
    episode: "Episode 02",
    image: "/placeholder-ep2.jpg",
  },
  {
    id: 3,
    title: "Don't Wait",
    episode: "Episode 03",
    image: "/placeholder-ep3.jpg",
  },
  {
    id: 4,
    title: "Cut High",
    episode: "Episode 04",
    image: "/placeholder-ep4.jpg",
  },
  {
    id: 5,
    title: "Curb Appeal Battles Buy-in",
    episode: "Episode 05",
    image: "/placeholder-ep5.jpg",
  },
  {
    id: 6,
    title: "News Renovator's Bite",
    episode: "Episode 06",
    image: "/placeholder-ep6.jpg",
  },
]

export function Episodes() {
  const featuredEpisode = episodes[0]
  const episodeList = episodes.slice(0, 6)

  return (
    <section id="episodes" className="py-12 lg:py-20 px-6 lg:px-20 bg-white">
      <h2 className="text-2xl lg:text-4xl font-medium text-dark-blue mb-4 lg:mb-8 tracking-tight">
        Episodes
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-3">
        {/* Featured Episode */}
        <div className="lg:w-[65%] relative rounded-xl overflow-hidden group cursor-pointer">
          <div className="aspect-video bg-navy relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=846&h=521&fit=crop"
              alt={featuredEpisode.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 flex items-end justify-between gap-3">
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-0.5">
                  {featuredEpisode.title}
                </h3>
                <p className="text-white/70 text-xs uppercase tracking-wider">
                  {featuredEpisode.episode}
                </p>
              </div>
              <button className="flex items-center gap-2 border border-white text-white font-semibold uppercase text-xs px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
                <Play size={12} fill="white" />
                Watch Now
              </button>
            </div>
          </div>
        </div>

        {/* Episode List - Hidden on mobile */}
        <div className="hidden lg:flex lg:w-1/3 flex-col gap-1">
          {episodeList.map((ep, index) => (
            <div
              key={ep.id}
              className={`flex items-center gap-3 p-1.5 pr-3 rounded-lg cursor-pointer hover:bg-light-orange/50 transition-colors ${
                index === 0 ? "bg-light-orange" : ""
              }`}
            >
              {/* Thumbnail */}
              <div className="relative w-24 aspect-video rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                <img
                  src={`https://images.unsplash.com/photo-156051888${index + 1}-ce09059eeffa?w=126&h=71&fit=crop`}
                  alt={ep.title}
                  className="w-full h-full object-cover"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow">
                    <Play size={12} fill="#11114A" className="text-navy ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-dark-blue text-sm leading-tight mb-0.5 line-clamp-2">
                  {ep.title}
                </h4>
                <p className="text-gray-400 text-xs">{ep.episode}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
