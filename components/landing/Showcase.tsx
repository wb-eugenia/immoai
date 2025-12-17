"use client"

import { motion } from "framer-motion"
import { Monitor, Smartphone, Layers } from "lucide-react"

export function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tous les formats en un seul endroit
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Générez des visuels optimisés pour chaque besoin. Un seul upload, des possibilités infinies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Format 1: Vue Isométrique */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-blue-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layers className="w-24 h-24" />
            </div>
            <div className="h-48 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 mb-6 flex items-center justify-center border border-white/5">
               {/* Placeholder for 3D Isometric Image */}
               <span className="text-gray-500 font-mono text-sm">Aperçu Isométrique</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Vue Isométrique 3D</h3>
            <p className="text-gray-400 text-sm">
              Idéal pour visualiser l'agencement global et les volumes des pièces en un coup d'œil.
            </p>
            <div className="mt-4 inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400">
              16:9 • Desktop & Web
            </div>
          </motion.div>

          {/* Format 2: Visite Virtuelle */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-purple-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Smartphone className="w-24 h-24" />
            </div>
            <div className="h-48 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 mb-6 flex items-center justify-center border border-white/5">
               {/* Placeholder for First Person View */}
               <span className="text-gray-500 font-mono text-sm">Visite Immersive</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Visite Immersive</h3>
            <p className="text-gray-400 text-sm">
              Plongez vos clients au cœur du bien avec une vue à la première personne ultra-réaliste.
            </p>
            <div className="mt-4 inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400">
              9:16 • Mobile & Stories
            </div>
          </motion.div>

          {/* Format 3: Plan Masse */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-green-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Monitor className="w-24 h-24" />
            </div>
            <div className="h-48 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 mb-6 flex items-center justify-center border border-white/5">
               {/* Placeholder for Top Down View */}
               <span className="text-gray-500 font-mono text-sm">Plan Masse 3D</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Plan Masse Texturé</h3>
            <p className="text-gray-400 text-sm">
              Une vue de dessus enrichie avec textures et mobilier pour mieux comprendre les surfaces.
            </p>
            <div className="mt-4 inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400">
              1:1 • Instagram & Social
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

