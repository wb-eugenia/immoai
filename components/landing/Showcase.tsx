"use client"

import { motion } from "framer-motion"
import { Monitor, Smartphone, Layers } from "lucide-react"

export function Showcase() {
  return (
    <section id="showcase" className="py-16 md:py-24 lg:py-32 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-3 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 px-4">
            Une plateforme, tous les formats
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-light px-4">
            Générez automatiquement tous les visuels dont vous avez besoin. Un seul plan suffit.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="relative w-full max-w-5xl mx-auto aspect-video bg-white flex items-center justify-center shadow-lg border border-gray-100 overflow-hidden">
            <div className="text-center px-4">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4 opacity-50">🎥</div>
              <p className="text-gray-900 text-base md:text-lg font-medium">
                Vidéo de démonstration à enregistrer
              </p>
              <p className="text-gray-500 text-xs md:text-sm mt-2 font-light">
                Cette section affichera votre vidéo de démonstration
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Format 1: Vue Isométrique */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden bg-white p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="h-48 md:h-56 bg-beige-50 mb-6 md:mb-8 flex items-center justify-center border border-beige-100 overflow-hidden">
               {/* Placeholder for 3D Isometric Image */}
               <Layers className="w-10 h-10 md:w-12 md:h-12 text-beige-300" />
            </div>
            <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-gray-900">Vue Isométrique 3D</h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-light">
              La vue parfaite pour comprendre les volumes. Idéal pour présenter l'agencement global d'un bien en un seul coup d'œil.
            </p>
            <div className="inline-flex items-center text-[10px] md:text-xs font-medium px-2.5 md:px-3 py-1 bg-gray-50 text-gray-600 uppercase tracking-wider">
              Desktop & Web
            </div>
          </motion.div>

          {/* Format 2: Visite Virtuelle */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden bg-white p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="h-48 md:h-56 bg-beige-50 mb-6 md:mb-8 flex items-center justify-center border border-beige-100 overflow-hidden">
               {/* Placeholder for First Person View */}
               <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-beige-300" />
            </div>
            <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-gray-900">Visite Immersive</h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-light">
              Une expérience à la première personne. Plongez vos clients au cœur de leur futur chez-eux avec un réalisme saisissant.
            </p>
            <div className="inline-flex items-center text-[10px] md:text-xs font-medium px-2.5 md:px-3 py-1 bg-gray-50 text-gray-600 uppercase tracking-wider">
              Mobile & Social
            </div>
          </motion.div>

          {/* Format 3: Plan Masse */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden bg-white p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="h-48 md:h-56 bg-beige-50 mb-6 md:mb-8 flex items-center justify-center border border-beige-100 overflow-hidden">
               {/* Placeholder for Top Down View */}
               <Monitor className="w-10 h-10 md:w-12 md:h-12 text-beige-300" />
            </div>
            <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-gray-900">Plan Masse Texturé</h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-light">
              Le plan technique réinventé. Une vue de dessus enrichie avec textures et mobilier pour une lisibilité parfaite.
            </p>
            <div className="inline-flex items-center text-[10px] md:text-xs font-medium px-2.5 md:px-3 py-1 bg-gray-50 text-gray-600 uppercase tracking-wider">
              Print & Dossiers
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
