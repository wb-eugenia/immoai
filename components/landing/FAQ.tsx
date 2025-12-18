"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Comment fonctionne ImmoAI ?",
    answer: "Notre intelligence artificielle analyse votre plan 2D ou photo, détecte les murs, fenêtres et portes, puis construit un modèle 3D. Elle applique ensuite des textures et du mobilier adaptés pour un rendu photoréaliste."
  },
  {
    question: "Quelle est la qualité des rendus ?",
    answer: "Nous proposons des rendus allant de la HD (1920x1080) à la 4K, avec un éclairage réaliste et des matériaux haute définition. Idéal pour l'impression ou le web."
  },
  {
    question: "Puis-je modifier le mobilier généré ?",
    answer: "Oui, dans la version Pro et Agence, vous pouvez régénérer le style de décoration (Scandinave, Industriel, Moderne, etc.) sans frais supplémentaires."
  },
  {
    question: "Combien de temps prend la génération ?",
    answer: "La plupart des projets sont générés en moins de 10 minutes. Les projets complexes ou en file d'attente gratuite peuvent prendre jusqu'à 15 minutes."
  },
  {
    question: "Puis-je utiliser les images à des fins commerciales ?",
    answer: "Absolument. Vous possédez 100% des droits commerciaux sur les images générées avec nos plans payants."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600">
            Tout ce que vous devez savoir pour commencer.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
              <AccordionTrigger className="text-left text-lg hover:text-black hover:no-underline text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
