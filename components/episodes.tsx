import { Play } from "lucide-react"

const episodes = [
  {
    id: 1,
    title: "First Timer's Club",
    episode: "Season 1, Episode 1",
    image: "/placeholder-ep1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Reality Sets In",
    episode: "Season 1, Episode 2",
    image: "/placeholder-ep2.jpg",
  },
  {
    id: 3,
    title: "Clear to Close",
    episode: "Season 1, Episode 3",
    image: "/placeholder-ep3.jpg",
  },
  {
    id: 4,
    title: "Do It Right",
    episode: "Season 1, Episode 4",
    image: "/placeholder-ep4.jpg",
  },
  {
    id: 5,
    title: "Home Wasn't Built in a Day",
    episode: "Season 1, Episode 5",
    image: "/placeholder-ep5.jpg",
  },
  {
    id: 6,
    title: "Move Masterclass",
    episode: "Season 1, Episode 6",
    image: "/placeholder-ep6.jpg",
  },
]

export function Episodes() {
  const featuredEpisode = episodes[0]
  const episodeList = episodes.slice(0, 6)

  return (
    <section id="episodes" className="py-16 lg:py-20 px-6 lg:px-20 bg-white">
      <h2 className="text-3xl lg:text-4xl font-medium text-dark-blue mb-6 lg:mb-8 capitalize tracking-tight">
        Episodes
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
        {/* Featured Episode */}
        <div className="lg:w-2/3 relative rounded-lg overflow-hidden group cursor-pointer">
          <div className="aspect-video lg:aspect-[846/521] bg-black relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=846&h=521&fit=crop"
              alt={featuredEpisode.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 flex items-end justify-between">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white capitalize mb-2">
                  {featuredEpisode.title}
                </h3>
                <p className="text-white/80 text-sm tracking-wide capitalize">
                  {featuredEpisode.episode}
                </p>
              </div>
              <button className="flex items-center gap-2 border border-white text-white font-bold uppercase text-sm px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                <Play size={16} fill="white" />
                Watch Now
              </button>
            </div>
          </div>
        </div>

        {/* Episode List */}
        <div className="lg:w-1/3 flex flex-col gap-3">
          {episodeList.map((ep, index) => (
            <div
              key={ep.id}
              className={`flex items-center gap-4 p-1.5 rounded-lg cursor-pointer hover:bg-light-orange/50 transition-colors ${
                index === 0 ? "bg-light-orange" : ""
              }`}
            >
              {/* Thumbnail */}
              <div className="relative w-28 lg:w-32 aspect-video rounded-md overflow-hidden flex-shrink-0 bg-black">
                <img
                  src={`https://images.unsplash.com/photo-156051888${index + 1}-ce09059eeffa?w=126&h=71&fit=crop`}
                  alt={ep.title}
                  className="w-full h-full object-cover"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
                    <Play size={14} fill="black" className="text-black ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-black text-base lg:text-lg capitalize truncate">
                  {ep.title}
                </h4>
                <p className="text-gray-500 text-xs capitalize">{ep.episode}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
