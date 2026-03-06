const categories = ["All Updates", "Show Updates", "DIY + Outdoor", "Home Trends", "Finances"]

const articles = [
  {
    id: 1,
    title: "Main Title of a Card will likely be two lines like this",
    category: "DIY + Outdoor",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Ways You'll Do It Card Will Span Two Lines",
    category: "Home Trends",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Start This DIY Card Will Span Two Lines",
    category: "DIY + Outdoor",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    title: "Ways You'll Do It Card Will Span Two Lines",
    category: "Finances",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
  },
  {
    id: 5,
    title: "Start This DIY Card Will Span Two Lines",
    category: "Show Updates",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&h=200&fit=crop",
  },
]

export function ContentBlock() {
  const featuredArticle = articles[0]
  const sideArticles = articles.slice(1)

  return (
    <section className="py-12 lg:py-20 px-6 lg:px-20 bg-white">
      <h2 className="text-2xl lg:text-4xl font-medium text-dark-blue mb-4 lg:mb-8 tracking-tight">
        Content Block
      </h2>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 lg:mb-8 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
        {categories.map((cat, index) => (
          <button
            key={cat}
            className={`flex-shrink-0 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-colors ${
              index === 0
                ? "bg-purple text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Featured Article (Left Column) */}
        <div className="lg:row-span-2">
          <article className="group cursor-pointer h-full">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full rounded-xl overflow-hidden bg-gray-100">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <h3 className="text-lg lg:text-2xl font-bold text-white leading-tight mb-3 lg:mb-4">
                  {featuredArticle.title}
                </h3>
                <button className="border border-white text-white text-xs lg:text-sm font-medium px-3 lg:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  Watch Latest Episode
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Side Articles (Right Columns) */}
        {sideArticles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-2 lg:mb-3">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-sm lg:text-base font-semibold text-dark-blue leading-snug group-hover:text-purple transition-colors">
              {article.title}
            </h3>
          </article>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-6 lg:mt-8 text-center">
        <button className="text-purple font-semibold text-sm hover:underline">
          View More
        </button>
      </div>
    </section>
  )
}
