import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { ContactSection } from "@/components/contact/ContactSection"

export default function ContactPage() {
  return (
    <main className="min-h-screen text-gray-900 selection:bg-gray-200 relative z-10">
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  )
}

