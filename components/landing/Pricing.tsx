"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const monthlyTiers = [
  {
    name: "Gratuit",
    price: "0€",
    period: "/mois",
    description: "Pour tester la puissance de notre IA.",
    features: [
      "2 projets / mois",
      "Qualité 720p",
      "Filigrane inclus",
    ],
    cta: "Commencer",
    popular: false,
    dark: false
  },
  {
    name: "Starter",
    price: "24€",
    period: "/mois",
    description: "Idéal pour les agents indépendants.",
    features: [
      "20 projets / mois",
      "Qualité HD 720p",
      "Sans filigrane",
      "Tous les thèmes inclus",
    ],
    cta: "Commencer",
    popular: true,
    dark: false
  },
  {
    name: "Pro",
    price: "89€",
    period: "/mois",
    description: "Pour les professionnels exigeants.",
    features: [
      "100 projets / mois",
      "Qualité Full HD 1080p",
      "Sans filigrane",
      "Traitement prioritaire",
    ],
    cta: "Commencer",
    popular: false,
    dark: false
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    period: "",
    description: "Pour les agences à fort volume.",
    features: [
      "Projets illimités",
      "Support dédié",
      "Options white-label",
      "Intégrations personnalisées",
    ],
    cta: "Contacter les ventes",
    popular: false,
    dark: true
  }
]

const yearlyTiers = monthlyTiers.map(tier => ({
  ...tier,
  price: tier.price === "0€" ? "0€" : tier.price === "Sur mesure" ? "Sur mesure" : `${Math.round(parseInt(tier.price) * 10 * 0.8)}€`,
  period: tier.period === "" ? "" : "/an",
}))

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const tiers = isYearly ? yearlyTiers : monthlyTiers

  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12 lg:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-gray-900 px-4">
            Tarifs simples et transparents
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
            Choisissez le plan qui correspond à vos besoins. Tous les plans incluent des modélisations 3D professionnelles générées par IA.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
          <span className={`text-xs md:text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
            Mensuel
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-12 h-6 md:w-14 md:h-7 rounded-full transition-colors ${
              isYearly ? 'bg-gray-900' : 'bg-gray-200'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 md:top-1 md:left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                isYearly ? 'translate-x-6 md:translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-xs md:text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
            Annuel <span className="text-green-600 font-bold ml-1">-20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col p-5 md:p-6 rounded-none border transition-all hover:shadow-lg ${
                tier.dark
                  ? "bg-gray-900 text-white border-gray-900"
                  : tier.popular
                  ? "bg-white border-black shadow-md"
                  : "bg-white border-gray-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-2.5 md:-top-3 left-1/2 -translate-x-1/2 px-2.5 md:px-3 py-0.5 md:py-1 rounded-full bg-black text-[10px] md:text-xs font-medium text-white shadow-sm">
                  Populaire
                </div>
              )}

              <div className="mb-5 md:mb-6">
                <h3 className={`text-lg md:text-xl font-serif font-semibold mb-2 ${tier.dark ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-2xl md:text-3xl font-bold ${tier.dark ? 'text-white' : 'text-gray-900'}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-xs md:text-sm ${tier.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className={`mt-2 md:mt-3 text-xs md:text-sm font-light ${tier.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-2.5 md:space-y-3 mb-5 md:mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-2 text-xs md:text-sm font-light ${tier.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <Check className={`w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 mt-0.5 ${tier.dark ? 'text-white' : 'text-gray-900'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-none font-medium border-0 text-sm md:text-base h-10 md:h-11 ${
                  tier.dark
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : tier.popular
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
                asChild
              >
                <a href="/signup">{tier.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
