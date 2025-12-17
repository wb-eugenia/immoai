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
    popular: false
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
    popular: true
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
    popular: false
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
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Tarifs simples et transparents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins. Tous les plans incluent des modélisations 3D professionnelles générées par IA.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
            Mensuel
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                isYearly ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
            Annuel
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col p-6 rounded-2xl border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
                tier.dark
                  ? "bg-gray-900 text-white border-gray-900 shadow-lg"
                  : tier.popular
                  ? "bg-white border-gray-900 shadow-lg"
                  : "bg-white border-gray-200 shadow-md"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gray-900 text-xs font-medium text-white">
                  Populaire
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${tier.dark ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${tier.dark ? 'text-white' : 'text-gray-900'}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-sm ${tier.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className={`mt-3 text-sm ${tier.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-2 text-sm ${tier.dark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${tier.dark ? 'text-white' : 'text-gray-900'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-lg font-medium ${
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
