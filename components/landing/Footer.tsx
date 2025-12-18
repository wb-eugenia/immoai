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
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-black">
              <Box className="h-6 w-6 text-black" />
              <span>ImmoAI</span>
            </Link>
            <p className="text-gray-600 text-sm font-light">
              La solution de modélisation 3D nouvelle génération pour les professionnels de l'immobilier.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4 text-black">Produit</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-light">
              <li><Link href="/the-hub" className="hover:text-black transition-colors">The Hub</Link></li>
              <li><Link href={getPricingLink()} className="hover:text-black transition-colors">Tarifs</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Fonctionnalités</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4 text-black">Entreprise</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-light">
              <li><Link href="#" className="hover:text-black transition-colors">À propos</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Carrières</Link></li>
              <li><Link href={getContactLink()} className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4 text-black">Légal</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-light">
              <li><Link href="#" className="hover:text-black transition-colors">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Confidentialité</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-light">
            © 2025 ImmoAI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-black transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-black transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-black transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-black transition-colors">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
