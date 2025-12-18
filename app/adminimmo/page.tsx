import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { AdminImmoInterface } from "@/components/admin/AdminImmoInterface"

export default function AdminImmoPage() {
  return (
    <main className="min-h-screen text-gray-900 selection:bg-gray-200 relative z-10">
      <Navbar />
      <AdminImmoInterface />
      <Footer />
    </main>
  )
}

