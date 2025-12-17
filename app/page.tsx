import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { Showcase } from "@/components/landing/Showcase"
import { Platforms } from "@/components/landing/Platforms"
import { Pricing } from "@/components/landing/Pricing"
import { Comparison } from "@/components/landing/Comparison"
import { FAQ } from "@/components/landing/FAQ"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900 selection:bg-gray-200 relative z-10">
      <Navbar />
      <Hero />
      <Showcase />
      <Platforms />
      <Pricing />
      <Comparison />
      <FAQ />
      <Footer />
    </main>
  )
}
