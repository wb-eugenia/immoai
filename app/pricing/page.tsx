import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { Pricing } from "@/components/landing/Pricing"

export default function PricingPage() {
  return (
    <main className="min-h-screen text-gray-900 selection:bg-gray-200 relative z-10">
      <Navbar />
      <Pricing />
      <Footer />
    </main>
  )
}

