"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Box } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Box className="h-6 w-6 text-blue-500" />
          <span>ImmoAI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          <Link href="#showcase" className="hover:text-white transition-colors">Démo</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Tarifs</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors hidden sm:block">
            Connexion
          </Link>
          <Button variant="default" className="bg-white text-black hover:bg-gray-200" asChild>
            <Link href="/signup">Commencer</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

