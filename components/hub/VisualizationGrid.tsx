"use client"

import { ArrowUp, User } from "lucide-react"
import { motion } from "framer-motion"

interface Visualization {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
  region: string
  aspectRatio: string
  date: string
  creator: {
    name: string
    avatar?: string
  }
  likes: number
}

const mockVisualizations: Visualization[] = [
  {
    id: "1",
    title: "appartement-paris-15e.fr",
    description: "Appartement moderne 3 pièces avec vue panoramique sur Paris",
    thumbnail: "/placeholder-3d.jpg",
    category: "Résidentiel",
    region: "FR",
    aspectRatio: "16:9",
    date: "28 Nov",
    creator: {
      name: "Marie Dubois",
      avatar: undefined
    },
    likes: 12
  },
  {
    id: "2",
    title: "villa-cannes.fr",
    description: "Villa de luxe avec piscine et jardin méditerranéen",
    thumbnail: "/placeholder-3d.jpg",
    category: "Luxe",
    region: "FR",
    aspectRatio: "16:9",
    date: "3 Déc",
    creator: {
      name: "Jean Martin",
      avatar: undefined
    },
    likes: 8
  },
  {
    id: "3",
    title: "bureau-lyon.fr",
    description: "Espace de coworking moderne et design dans le centre-ville",
    thumbnail: "/placeholder-3d.jpg",
    category: "Commercial",
    region: "FR",
    aspectRatio: "16:9",
    date: "8 Déc",
    creator: {
      name: "Sophie Laurent",
      avatar: undefined
    },
    likes: 15
  },
  {
    id: "4",
    title: "maison-bordeaux.fr",
    description: "Maison familiale avec jardin et terrasse",
    thumbnail: "/placeholder-3d.jpg",
    category: "Résidentiel",
    region: "FR",
    aspectRatio: "16:9",
    date: "10 Déc",
    creator: {
      name: "Pierre Bernard",
      avatar: undefined
    },
    likes: 6
  },
  {
    id: "5",
    title: "loft-marseille.fr",
    description: "Loft industriel rénové avec hauteur sous plafond",
    thumbnail: "/placeholder-3d.jpg",
    category: "Résidentiel",
    region: "FR",
    aspectRatio: "16:9",
    date: "12 Déc",
    creator: {
      name: "Lucie Moreau",
      avatar: undefined
    },
    likes: 9
  },
  {
    id: "6",
    title: "boutique-nice.fr",
    description: "Boutique de mode avec vitrine sur la Promenade des Anglais",
    thumbnail: "/placeholder-3d.jpg",
    category: "Commercial",
    region: "FR",
    aspectRatio: "16:9",
    date: "15 Déc",
    creator: {
      name: "Thomas Petit",
      avatar: undefined
    },
    likes: 11
  },
  {
    id: "7",
    title: "penthouse-monaco.fr",
    description: "Penthouse de luxe avec vue sur la Méditerranée",
    thumbnail: "/placeholder-3d.jpg",
    category: "Luxe",
    region: "MC",
    aspectRatio: "16:9",
    date: "18 Déc",
    creator: {
      name: "Emma Rousseau",
      avatar: undefined
    },
    likes: 20
  },
  {
    id: "8",
    title: "studio-toulouse.fr",
    description: "Studio étudiant optimisé avec mezzanine",
    thumbnail: "/placeholder-3d.jpg",
    category: "Résidentiel",
    region: "FR",
    aspectRatio: "16:9",
    date: "20 Déc",
    creator: {
      name: "Alexandre Durand",
      avatar: undefined
    },
    likes: 5
  },
  {
    id: "9",
    title: "restaurant-lille.fr",
    description: "Restaurant gastronomique avec cuisine ouverte",
    thumbnail: "/placeholder-3d.jpg",
    category: "Commercial",
    region: "FR",
    aspectRatio: "16:9",
    date: "22 Déc",
    creator: {
      name: "Camille Lefebvre",
      avatar: undefined
    },
    likes: 7
  },
  {
    id: "10",
    title: "maison-normandie.fr",
    description: "Maison de campagne avec charme authentique",
    thumbnail: "/placeholder-3d.jpg",
    category: "Résidentiel",
    region: "FR",
    aspectRatio: "16:9",
    date: "25 Déc",
    creator: {
      name: "Nicolas Girard",
      avatar: undefined
    },
    likes: 13
  },
  {
    id: "11",
    title: "showroom-paris.fr",
    description: "Showroom automobile premium avec espace événementiel",
    thumbnail: "/placeholder-3d.jpg",
    category: "Commercial",
    region: "FR",
    aspectRatio: "16:9",
    date: "28 Déc",
    creator: {
      name: "Isabelle Mercier",
      avatar: undefined
    },
    likes: 18
  },
  {
    id: "12",
    title: "villa-saint-tropez.fr",
    description: "Villa de prestige avec accès direct à la plage",
    thumbnail: "/placeholder-3d.jpg",
    category: "Luxe",
    region: "FR",
    aspectRatio: "16:9",
    date: "30 Déc",
    creator: {
      name: "Olivier Blanc",
      avatar: undefined
    },
    likes: 25
  }
]

export function VisualizationGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVisualizations.map((viz) => (
          <VisualizationCard key={viz.id} visualization={viz} />
        ))}
      </div>
    </div>
  )
}

function VisualizationCard({ visualization }: { visualization: Visualization }) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 border-b-2 border-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">🏠</div>
            <p className="text-xs text-gray-500 font-mono">Visualisation 3D</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
            {visualization.category}
          </span>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
            {visualization.region}
          </span>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
            {visualization.aspectRatio}
          </span>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
            {visualization.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
          {visualization.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {visualization.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700">
              {visualization.creator.avatar ? (
                <img
                  src={visualization.creator.avatar}
                  alt={visualization.creator.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                getInitials(visualization.creator.name)
              )}
            </div>
            <span className="text-sm text-gray-600">
              {visualization.creator.name}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <ArrowUp className="w-4 h-4" />
            <span>{visualization.likes}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

