"use client"

import { motion } from "framer-motion"
import { LeadForm } from "./LeadForm"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center min-h-[80vh]">
      {/* Alert Banner */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-gray-800 text-gray-300 text-xs px-4 py-2 rounded-full shadow-lg">
          • Nous sommes en phase MVP ! Vous pourriez rencontrer quelques problèmes.
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          Automatisez vos <br />
          <span className="text-gray-600">visualisations immobilières</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Collez le lien de votre plan ou photo et notre IA génère une modélisation 3D professionnelle qui met en valeur votre bien. Rapide, simple et efficace.
        </p>

        {/* Waitlist Form */}
        <div className="w-full max-w-2xl mx-auto space-y-4">
          <LeadForm />
        </div>
      </motion.div>
    </section>
  )
}
