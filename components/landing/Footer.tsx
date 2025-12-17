"use client"

import Link from "next/link"
import { Box, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <Box className="h-6 w-6 text-blue-500" />
              <span>ImmoAI</span>
            </Link>
            <p className="text-gray-400 text-sm">
              La solution de modélisation 3D nouvelle génération pour les professionnels de l'immobilier.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Fonctionnalités</Link></li>
              <li><Link href="#" className="hover:text-white">Tarifs</Link></li>
              <li><Link href="#" className="hover:text-white">Témoignages</Link></li>
              <li><Link href="#" className="hover:text-white">API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">À propos</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Carrières</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-white">Confidentialité</Link></li>
              <li><Link href="#" className="hover:text-white">CGV</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500">
            © 2024 ImmoAI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

