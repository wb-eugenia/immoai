"use client"

import { motion } from "framer-motion"

export function Showcase() {
  return (
    <section id="showcase" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Tous les formats en un seul endroit
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Générez des visuels optimisés pour chaque besoin. Un seul upload, des possibilités infinies.
          </p>
        </div>

        {/* Video Placeholder - User will record this */}
        <div className="mb-16">
          <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border-2 border-gray-200 bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="text-6xl mb-4">🎥</div>
              <p className="text-gray-600 text-lg font-medium">
                Vidéo de démonstration à enregistrer
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Cette section affichera votre vidéo de démonstration
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Format 1: Vue Isométrique */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 p-6 shadow-lg hover:shadow-xl hover:border-gray-300 transition-all"
          >
            <div className="h-48 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 mb-6 flex items-center justify-center border border-gray-300">
               <span className="text-gray-500 font-mono text-sm">Aperçu Isométrique</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Vue Isométrique 3D</h3>
            <p className="text-gray-600 text-sm">
              Idéal pour visualiser l'agencement global et les volumes des pièces en un coup d'œil.
            </p>
            <div className="mt-4 inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
              16:9 • Desktop & Web
            </div>
          </motion.div>

          {/* Format 2: Visite Virtuelle */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 p-6 shadow-lg hover:shadow-xl hover:border-gray-300 transition-all"
          >
            <div className="h-48 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 mb-6 flex items-center justify-center border border-gray-300">
               <span className="text-gray-500 font-mono text-sm">Visite Immersive</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Visite Immersive</h3>
            <p className="text-gray-600 text-sm">
              Plongez vos clients au cœur du bien avec une vue à la première personne ultra-réaliste.
            </p>
            <div className="mt-4 inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
              9:16 • Mobile & Stories
            </div>
          </motion.div>

          {/* Format 3: Plan Masse */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 p-6 shadow-lg hover:shadow-xl hover:border-gray-300 transition-all"
          >
            <div className="h-48 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 mb-6 flex items-center justify-center border border-gray-300">
               <span className="text-gray-500 font-mono text-sm">Plan Masse 3D</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Plan Masse Texturé</h3>
            <p className="text-gray-600 text-sm">
              Une vue de dessus enrichie avec textures et mobilier pour mieux comprendre les surfaces.
            </p>
            <div className="mt-4 inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
              1:1 • Instagram & Social
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
