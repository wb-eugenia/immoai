"use client"

import { useState } from "react"
import { LeadForm } from "./LeadForm"
import { motion } from "framer-motion"

export function Hero() {
  const [isGenerating, setIsGenerating] = useState(false)


  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[128px]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-[128px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-green-500" />
          Phase MVP disponible
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
          Transformez vos plans 2D <br />
          en <span className="text-blue-500">visites 3D immersives</span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Déposez votre plan ou photo et notre IA génère une modélisation 3D professionnelle qui met en valeur le potentiel de votre bien. Rapide, simple et efficace.
        </p>

        <LeadForm />

        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            Compatible tout format
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            Qualité 4K
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            Rendu &lt; 10min
          </span>
        </div>
      </motion.div>
    </section>
  )
}

