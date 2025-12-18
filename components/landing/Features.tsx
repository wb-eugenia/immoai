"use client"

import { Building2, Home, PenTool } from "lucide-react"

export function Features() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-3 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 px-4">
            L'excellence pour chaque profession
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-light px-4">
            Une suite d'outils pensée pour sublimer vos projets et accélérer vos signatures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          <div className="group px-4">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-beige-50 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-beige-100 transition-colors">
              <Home className="w-7 h-7 md:w-8 md:h-8 text-gray-900 stroke-1" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-gray-900">Agents Immobiliers</h3>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
              Offrez une expérience de visite inégalée. Permettez à vos clients de se projeter instantanément et réduisez les délais de vente.
            </p>
          </div>

          <div className="group px-4">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-beige-50 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-beige-100 transition-colors">
              <PenTool className="w-7 h-7 md:w-8 md:h-8 text-gray-900 stroke-1" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-gray-900">Architectes d'Intérieur</h3>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
              Donnez vie à vos concepts en quelques minutes. Validez vos idées auprès de vos clients avant même de commencer les travaux.
            </p>
          </div>

          <div className="group px-4">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-beige-50 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-beige-100 transition-colors">
              <Building2 className="w-7 h-7 md:w-8 md:h-8 text-gray-900 stroke-1" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-gray-900">Promoteurs</h3>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
              Vendez sur plan avec une efficacité redoutable. Créez des visuels marketing haute définition qui captivent et convertissent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
