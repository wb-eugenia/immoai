"use client"

import { motion } from "framer-motion"
import { LeadForm } from "./LeadForm"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 pt-24 pb-12 md:py-32 text-center overflow-hidden bg-beige-50">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-beige-200 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 md:gap-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-beige-200 text-[10px] md:text-xs font-medium tracking-wide text-gray-600 shadow-sm">
          <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-gray-900" />
          Phase MVP disponible
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium tracking-tight text-gray-900 leading-[1.1] max-w-[90%] md:max-w-full">
          Révélez le potentiel <br />
          de vos espaces
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg md:max-w-2xl mx-auto font-light leading-relaxed px-4">
          Transformez instantanément vos plans 2D en visites 3D immersives. <br className="hidden md:block"/>
          Une technologie de pointe pour une mise en valeur d'exception.
        </p>

        <div className="w-full max-w-md mx-auto">
          <LeadForm />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-8 md:gap-y-4 text-xs md:text-sm text-gray-500 font-medium pt-2 md:pt-4">
          <span className="flex items-center gap-1.5 md:gap-2">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-beige-400" />
            Compatible tout format
          </span>
          <span className="flex items-center gap-1.5 md:gap-2">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-beige-400" />
            Qualité Phototréaliste
          </span>
          <span className="flex items-center gap-1.5 md:gap-2">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-beige-400" />
            Rendu &lt; 10min
          </span>
        </div>
      </motion.div>
    </section>
  )
}
