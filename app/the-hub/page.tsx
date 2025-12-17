import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { HubHeader } from "@/components/hub/HubHeader"
import { HubFilters } from "@/components/hub/HubFilters"
import { VisualizationGrid } from "@/components/hub/VisualizationGrid"

export default function TheHubPage() {
  return (
    <main className="min-h-screen text-gray-900 selection:bg-gray-200 relative z-10">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <HubHeader />
        <HubFilters />
        <VisualizationGrid />
      </div>
      <Footer />
    </main>
  )
}

