"use client"

import { Building2, Home, PenTool } from "lucide-react"

export function Features() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            L'excellence pour chaque profession
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Une suite d'outils pensée pour sublimer vos projets et accélérer vos signatures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group">
            <div className="w-16 h-16 rounded-full bg-beige-50 flex items-center justify-center mb-8 group-hover:bg-beige-100 transition-colors">
              <Home className="w-8 h-8 text-gray-900 stroke-1" />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-gray-900">Agents Immobiliers</h3>
            <p className="text-gray-500 leading-relaxed font-light">
              Offrez une expérience de visite inégalée. Permettez à vos clients de se projeter instantanément et réduisez les délais de vente.
            </p>
          </div>

          <div className="group">
            <div className="w-16 h-16 rounded-full bg-beige-50 flex items-center justify-center mb-8 group-hover:bg-beige-100 transition-colors">
              <PenTool className="w-8 h-8 text-gray-900 stroke-1" />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-gray-900">Architectes d'Intérieur</h3>
            <p className="text-gray-500 leading-relaxed font-light">
              Donnez vie à vos concepts en quelques minutes. Validez vos idées auprès de vos clients avant même de commencer les travaux.
            </p>
          </div>

          <div className="group">
            <div className="w-16 h-16 rounded-full bg-beige-50 flex items-center justify-center mb-8 group-hover:bg-beige-100 transition-colors">
              <Building2 className="w-8 h-8 text-gray-900 stroke-1" />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-gray-900">Promoteurs</h3>
            <p className="text-gray-500 leading-relaxed font-light">
              Vendez sur plan avec une efficacité redoutable. Créez des visuels marketing haute définition qui captivent et convertissent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
