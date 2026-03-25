import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { MissionHero } from "@/components/MissionHero"
import { HealingStories } from "@/components/HealingStories"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <PortfolioNavbar />
      <MissionHero />
      <HealingStories />
      <Footer />
    </>
  )
}
