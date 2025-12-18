"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Comment fonctionne ImmoAI ?",
    answer: "Notre intelligence artificielle analyse votre plan 2D ou photo, détecte les murs, fenêtres et portes, puis construit un modèle 3D. Elle applique ensuite des textures et du mobilier adaptés pour un rendu photoréaliste."
  },
  {
    question: "Puis-je essayer ImmoAI gratuitement ?",
    answer: "Oui, nous offrons un plan gratuit avec 2 projets par mois pour vous permettre de tester notre service sans engagement."
  },
  {
    question: "Combien de temps prend la génération ?",
    answer: "La plupart des projets sont générés en moins de 10 minutes. Les projets complexes ou en file d'attente gratuite peuvent prendre jusqu'à 15 minutes."
  },
  {
    question: "Puis-je personnaliser les visualisations générées ?",
    answer: "Oui, dans la version Pro et Enterprise, vous pouvez régénérer le style de décoration (Scandinave, Industriel, Moderne, etc.) sans frais supplémentaires."
  },
  {
    question: "Quelle qualité de rendu obtenez-vous ?",
    answer: "Nous proposons des rendus allant de la HD (720p) à la Full HD (1080p), avec un éclairage réaliste et des matériaux haute définition. Idéal pour l'impression ou le web."
  },
  {
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer: "Absolument. Vous pouvez annuler votre abonnement à tout moment sans frais ni engagement. Votre accès reste actif jusqu'à la fin de la période payée."
  },
  {
    question: "Offrez-vous des remboursements ?",
    answer: "Oui, nous offrons un remboursement complet dans les 30 premiers jours si vous n'êtes pas satisfait de notre service."
  },
  {
    question: "Que se passe-t-il si j'ai besoin de plus de projets que mon plan ne le permet ?",
    answer: "Vous pouvez soit passer à un plan supérieur, soit acheter des crédits supplémentaires à l'unité. Contactez notre support pour plus d'informations."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10 lg:mb-12 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-gray-900 px-4">
            Des questions ? Nous avons les réponses
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-light px-4">
            Tout ce que vous devez savoir pour commencer et grandir avec ImmoAI.
          </p>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12 px-4">
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
            <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-900" />
            <span>Aucune carte bancaire requise</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
            <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-900" />
            <span>Annulation à tout moment</span>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white border border-gray-100 rounded-none p-4 md:p-6 mb-12 md:mb-16 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-900 hover:text-black hover:no-underline py-3 md:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-xs md:text-sm pb-3 md:pb-4 font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-900 rounded-none p-8 md:p-10 lg:p-12 text-center text-white">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-3 md:mb-4 px-4">
            Prêt à créer votre première visualisation ?
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-light px-4">
            Commencez à créer des visualisations 3D professionnelles à partir de n'importe quel plan. Commencez gratuitement, aucune carte bancaire requise.
          </p>
          <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg mb-6 md:mb-8 rounded-none border-0" asChild>
            <a href="/signup">Commencer l'essai gratuit</a>
          </Button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 text-xs md:text-sm text-gray-400">
            <div className="text-center">
              <div className="font-semibold text-white mb-1">5-15min</div>
              <div>Génération</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="font-semibold text-white mb-1">Qualité HD</div>
              <div>Visualisations professionnelles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
