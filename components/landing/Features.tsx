"use client"

import { Building2, Home, PenTool } from "lucide-react"

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Des solutions sur mesure pour chaque métier
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nous avons optimisé nos modèles pour répondre aux besoins spécifiques des professionnels de l'immobilier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
              <Home className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Agents Immobiliers</h3>
            <p className="text-gray-400">
              Accélérez vos ventes en aidant les acheteurs à se projeter. Démarquez vos annonces avec des visuels haut de gamme.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
              <PenTool className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Architectes d'Intérieur</h3>
            <p className="text-gray-400">
              Validez vos concepts rapidement. Montrez le potentiel d'une rénovation avant même le début des travaux.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Promoteurs</h3>
            <p className="text-gray-400">
              Commercialisez vos biens sur plan plus efficacement. Créez des supports marketing attractifs en quelques clics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

