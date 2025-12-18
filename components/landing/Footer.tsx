"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Box, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
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

  return (
    <footer className="border-t border-gray-200 bg-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="space-y-3 md:space-y-4 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl tracking-tight text-black">
              <Box className="h-5 w-5 md:h-6 md:w-6 text-black" />
              <span>ImmoAI</span>
            </Link>
            <p className="text-gray-600 text-xs md:text-sm font-light max-w-xs">
              La solution de modélisation 3D nouvelle génération pour les professionnels de l'immobilier.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-3 md:mb-4 text-black text-sm md:text-base">Produit</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600 font-light">
              <li><Link href="/the-hub" className="hover:text-black transition-colors">The Hub</Link></li>
              <li><Link href={getPricingLink()} className="hover:text-black transition-colors">Tarifs</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Fonctionnalités</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-3 md:mb-4 text-black text-sm md:text-base">Entreprise</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600 font-light">
              <li><Link href="#" className="hover:text-black transition-colors">À propos</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Carrières</Link></li>
              <li><Link href={getContactLink()} className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-3 md:mb-4 text-black text-sm md:text-base">Légal</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600 font-light">
              <li><Link href="#" className="hover:text-black transition-colors">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Confidentialité</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-gray-100 gap-4">
          <p className="text-xs md:text-sm text-gray-500 font-light text-center md:text-left">
            © 2025 ImmoAI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="#" className="text-gray-400 hover:text-black transition-colors">
              <Twitter className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-black transition-colors">
              <Instagram className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-black transition-colors">
              <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-black transition-colors">
              <Github className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
