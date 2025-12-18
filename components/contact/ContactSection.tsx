"use client"

import { Mail, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"
import { CalComWidget } from "./CalComWidget"

export function ContactSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* Get in touch Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Prendre contact
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Vous avez une question ou un retour ? Nous serions ravis de vous entendre. Envoyez-nous un message et nous vous répondrons dès que possible.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <a
          href="mailto:hello@immoai.fr"
          className="flex items-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:border-gray-300 transition-all"
        >
          <Mail className="w-5 h-5 text-gray-600" />
          <span className="text-gray-900 font-medium">hello@immoai.fr</span>
        </a>
        
        <div className="flex items-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl shadow-md">
          <MapPin className="w-5 h-5 text-gray-600" />
          <span className="text-gray-900 font-medium">Paris</span>
        </div>
        
        <Link
          href="#faq"
          className="flex items-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:border-gray-300 transition-all"
        >
          <MessageCircle className="w-5 h-5 text-gray-600" />
          <span className="text-gray-900 font-medium">FAQ</span>
        </Link>
      </div>

      {/* Cal.com Widget */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg p-4">
          <CalComWidget />
        </div>
      </div>
    </div>
  )
}

