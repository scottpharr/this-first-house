import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Episodes } from "@/components/episodes"
import { HomeownersGuide } from "@/components/homeowners-guide"
import { VideoShorts } from "@/components/video-shorts"
import { ContentBlock } from "@/components/content-block"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Episodes />
      <HomeownersGuide />
      <VideoShorts />
      <ContentBlock />
      <Newsletter />
      <Footer />
    </main>
  )
}
