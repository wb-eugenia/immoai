"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const isHubPage = pathname === "/the-hub"
  const isPricingPage = pathname === "/pricing"
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
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
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900 z-50">
          <Sparkles className="h-5 w-5" />
          <span className="font-serif">immoai.</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/the-hub" className="hover:text-black transition-colors">The Hub</Link>
          <Link href={getPricingLink()} className="hover:text-black transition-colors">Tarifs</Link>
          <Link href={getLink("faq")} className="hover:text-black transition-colors">FAQ</Link>
          <Link href={getContactLink()} className="hover:text-black transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Connexion
          </Link>
          <Button variant="default" className="bg-black text-white hover:bg-gray-800" asChild>
            <Link href="/signup">Commencer</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden">
            <div className="flex flex-col items-center gap-6 text-lg font-medium text-gray-900">
              <Link href="/the-hub" onClick={() => setIsMobileMenuOpen(false)}>The Hub</Link>
              <Link href={getPricingLink()} onClick={() => setIsMobileMenuOpen(false)}>Tarifs</Link>
              <Link href={getLink("faq")} onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              <Link href={getContactLink()} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
              <Link href="/login" className="text-lg font-medium text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
                Connexion
              </Link>
              <Button variant="default" className="bg-black text-white hover:bg-gray-800 w-full px-8" asChild onClick={() => setIsMobileMenuOpen(false)}>
                <Link href="/signup">Commencer</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
