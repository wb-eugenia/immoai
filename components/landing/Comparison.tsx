"use client"

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Comparison() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-4">
          <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600 mb-4">
            La vraie comparaison
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Agences vs ImmoAI
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="text-5xl font-bold text-gray-900 mb-2">99.7%</div>
            <div className="text-sm font-medium text-gray-600">LIVRAISON PLUS RAPIDE</div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="text-5xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-sm font-medium text-gray-600">ÉCONOMIES</div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="text-5xl font-bold text-gray-900 mb-2">∞</div>
            <div className="text-sm font-medium text-gray-600">MODIFICATIONS GRATUITES</div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-3 gap-0">
            {/* Header */}
            <div className="p-6 border-b-2 border-gray-200">
              <div className="font-semibold text-gray-900">Fonctionnalités</div>
            </div>
            <div className="p-6 border-b-2 border-l-2 border-gray-200">
              <div className="font-semibold text-gray-900">Agence Traditionnelle</div>
              <div className="text-sm text-gray-600 mt-1">Excelle en stratégie</div>
            </div>
            <div className="p-6 border-b-2 border-l-2 border-gray-200">
              <div className="font-semibold text-gray-900">ImmoAI</div>
              <div className="text-sm text-gray-600 mt-1">Gagne en vitesse & coût</div>
            </div>

            {/* Rows */}
            {[
              {
                feature: "Délai de livraison",
                traditional: "2-4 semaines",
                immoai: "< 10 min",
                badge: "99.7% plus rapide"
              },
              {
                feature: "Coût par projet",
                traditional: "2 000€ - 10 000€+",
                immoai: "0€ - 40€/mois",
                badge: "Économisez 23 940€/an"
              },
              {
                feature: "Modifications",
                traditional: "Limitées, +500€ chacune",
                immoai: "Illimitées",
                badge: "100% gratuit"
              },
              {
                feature: "Disponibilité 24/7",
                traditional: false,
                immoai: true
              },
              {
                feature: "Optimisation IA",
                traditional: false,
                immoai: true
              },
              {
                feature: "Analytics de site",
                traditional: false,
                immoai: true
              }
            ].map((row, index) => (
              <div key={index} className="contents">
                <div className={`p-6 ${index < 5 ? 'border-b border-gray-200' : ''} font-medium text-gray-900`}>
                  {row.feature}
                </div>
                <div className={`p-6 border-l-2 border-gray-200 ${index < 5 ? 'border-b border-gray-200' : ''}`}>
                  {typeof row.traditional === 'boolean' ? (
                    row.traditional ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <X className="w-6 h-6 text-red-500" />
                    )
                  ) : (
                    <div className="text-gray-700">{row.traditional}</div>
                  )}
                </div>
                <div className={`p-6 border-l-2 border-gray-200 ${index < 5 ? 'border-b border-gray-200' : ''}`}>
                  {typeof row.immoai === 'boolean' ? (
                    row.immoai ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <X className="w-6 h-6 text-red-500" />
                    )
                  ) : (
                    <div>
                      <div className="text-gray-900 font-medium">{row.immoai}</div>
                      {row.badge && (
                        <div className="text-xs text-gray-500 mt-1">{row.badge}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="p-6 border-t-2 border-gray-200" />
            <div className="p-6 border-l-2 border-t-2 border-gray-200">
              <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
                <a href="#pricing">Voir les tarifs détaillés</a>
              </Button>
            </div>
            <div className="p-6 border-l-2 border-t-2 border-gray-200">
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800" asChild>
                <a href="/signup">Essayer gratuitement</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            <span className="font-semibold text-gray-900">QT G 2 3 0</span> créent des visualisations en minutes au lieu de semaines.
          </p>
          <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-lg" asChild>
            <a href="/signup">Commencer gratuitement</a>
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Aucune carte bancaire requise • Plan gratuit disponible à vie
          </p>
        </div>
      </div>
    </section>
  )
}

