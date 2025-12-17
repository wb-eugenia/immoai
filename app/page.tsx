import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { Showcase } from "@/components/landing/Showcase"
import { Features } from "@/components/landing/Features"
import { Pricing } from "@/components/landing/Pricing"
import { FAQ } from "@/components/landing/FAQ"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
