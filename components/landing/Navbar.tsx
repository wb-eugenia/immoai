"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const isHubPage = pathname === "/the-hub"
  const isPricingPage = pathname === "/pricing"
  
  // Si on est sur /the-hub, on doit rediriger vers la page d'accueil avec l'ancre
  // Si on est sur /pricing, on pointe vers /pricing
  // Sinon, on utilise l'ancre pour la page d'accueil
  const getPricingLink = () => {
    if (isPricingPage) return "/pricing"
    if (isHubPage) return "/pricing"
    return "#pricing"
  }
  
  const getLink = (anchor: string) => {
    if (isHubPage) return `/${anchor}`
    return `#${anchor}`
  }

  return (
    <nav className="relative z-10 border-b border-gray-200 bg-transparent">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
          <Sparkles className="h-6 w-6" />
          <span>immoai.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/the-hub" className="hover:text-gray-900 transition-colors">The Hub</Link>
          <Link href={getPricingLink()} className="hover:text-gray-900 transition-colors">Tarifs</Link>
          <Link href={getLink("faq")} className="hover:text-gray-900 transition-colors">FAQ</Link>
          <Link href={getLink("contact")} className="hover:text-gray-900 transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
            Connexion
          </Link>
          <Button variant="default" className="bg-gray-900 text-white hover:bg-gray-800" asChild>
            <Link href="/signup">Commencer</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
