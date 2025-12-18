"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const isHubPage = pathname === "/the-hub"
  const isPricingPage = pathname === "/pricing"
  
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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
          <Sparkles className="h-5 w-5" />
          <span className="font-serif">immoai.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/the-hub" className="hover:text-black transition-colors">The Hub</Link>
          <Link href={getPricingLink()} className="hover:text-black transition-colors">Tarifs</Link>
          <Link href={getLink("faq")} className="hover:text-black transition-colors">FAQ</Link>
          <Link href={getContactLink()} className="hover:text-black transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-black transition-colors hidden sm:block">
            Connexion
          </Link>
          <Button variant="default" className="bg-black text-white hover:bg-gray-800" asChild>
            <Link href="/signup">Commencer</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
