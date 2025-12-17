"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles } from "lucide-react"

export function Footer() {
  const pathname = usePathname()
  const isHubPage = pathname === "/the-hub"
  const isPricingPage = pathname === "/pricing"
  const isContactPage = pathname === "/contact"
  
  // Si on est sur /the-hub, on doit rediriger vers la page d'accueil avec l'ancre
  // Si on est sur /pricing, on pointe vers /pricing
  // Sinon, on utilise l'ancre pour la page d'accueil
  const getPricingLink = () => {
    if (isPricingPage) return "/pricing"
    if (isHubPage) return "/pricing"
    return "#pricing"
  }
  
  const getContactLink = () => {
    return "/contact"
  }
  
  const getLink = (anchor: string) => {
    if (isHubPage) return `/${anchor}`
    return `#${anchor}`
  }

  return (
    <footer className="border-t border-gray-200 bg-white/95 backdrop-blur-sm py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Sparkles className="h-5 w-5 text-gray-900" />
            <span className="font-bold text-lg text-gray-900">ImmoAI</span>
          </div>
          
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 ImmoAI. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/the-hub" className="hover:text-gray-900 transition-colors">The Hub</Link>
            <Link href={getPricingLink()} className="hover:text-gray-900 transition-colors">Tarifs</Link>
            <Link href={getLink("faq")} className="hover:text-gray-900 transition-colors">FAQ</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Politique de confidentialité</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">CGV</Link>
            <Link href={getContactLink()} className="hover:text-gray-900 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
