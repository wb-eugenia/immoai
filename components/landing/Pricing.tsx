"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Découverte",
    price: "0€",
    description: "Pour tester la puissance de notre IA.",
    features: [
      "1 projet offert / mois",
      "Rendu qualité Standard (720p)",
      "Délais standard",
      "Filigrane ImmoAI"
    ],
    cta: "Essayer gratuitement",
    popular: false
  },
  {
    name: "Professionnel",
    price: "49€",
    period: "/mois",
    description: "Idéal pour les agents indépendants.",
    features: [
      "15 projets / mois",
      "Rendu qualité HD (1080p)",
      "Traitement prioritaire",
      "Sans filigrane",
      "Export tous formats"
    ],
    cta: "Commencer",
    popular: true
  },
  {
    name: "Agence",
    price: "199€",
    period: "/mois",
    description: "Pour les agences à fort volume.",
    features: [
      "50 projets / mois",
      "Rendu qualité 4K",
      "Support prioritaire 24/7",
      "API Access",
      "Multi-utilisateurs"
    ],
    cta: "Choisir ce plan",
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
            Des tarifs simples et transparents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Commencez gratuitement, évoluez selon vos besoins. Aucun frais caché.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                tier.popular 
                  ? "bg-white border-black shadow-xl shadow-black/5" 
                  : "bg-white border-beige-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black text-sm font-medium text-white shadow-lg">
                  Le plus populaire
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-black">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-black">{tier.price}</span>
                  {tier.period && <span className="text-gray-600">{tier.period}</span>}
                </div>
                <p className="mt-4 text-gray-600 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-black shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.popular ? "default" : "outline"}
                className={`w-full ${tier.popular ? "bg-black hover:bg-gray-800 text-white" : "bg-white border-gray-200 hover:bg-gray-50 text-black"}`}
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
