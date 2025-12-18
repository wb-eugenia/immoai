"use client"

import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function HubFilters() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-2xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Rechercher des visualisations par prompt ou site web..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none text-gray-900 shadow-md"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px] bg-white border-2 border-gray-200 text-gray-900 focus:border-gray-400 shadow-md">
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent className="bg-white border-2 border-gray-200 text-gray-900">
            <SelectItem value="all">Toutes</SelectItem>
            <SelectItem value="residential">Résidentiel</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
            <SelectItem value="luxury">Luxe</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-time">
          <SelectTrigger className="w-[140px] bg-white border-2 border-gray-200 text-gray-900 focus:border-gray-400 shadow-md">
            <SelectValue placeholder="Période" />
          </SelectTrigger>
          <SelectContent className="bg-white border-2 border-gray-200 text-gray-900">
            <SelectItem value="all-time">Tout le temps</SelectItem>
            <SelectItem value="today">Aujourd'hui</SelectItem>
            <SelectItem value="week">Cette semaine</SelectItem>
            <SelectItem value="month">Ce mois</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="trending">
          <SelectTrigger className="w-[160px] bg-white border-2 border-gray-200 text-gray-900 focus:border-gray-400 shadow-md">
            <SelectValue placeholder="Trier" />
          </SelectTrigger>
          <SelectContent className="bg-white border-2 border-gray-200 text-gray-900">
            <SelectItem value="trending">Tendance</SelectItem>
            <SelectItem value="recent">Récent</SelectItem>
            <SelectItem value="popular">Populaire</SelectItem>
            <SelectItem value="likes">Plus aimés</SelectItem>
          </SelectContent>
        </Select>

        <div className="ml-auto text-sm text-gray-600">
          Affichage de 1 à 12 sur 142 visualisations
        </div>
      </div>
    </div>
  )
}

