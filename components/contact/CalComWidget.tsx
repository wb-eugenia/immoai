"use client"

import { useEffect, useState } from "react"

export function CalComWidget() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="w-full flex items-center justify-center" style={{ minHeight: '700px' }}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Chargement du calendrier...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full" style={{ minHeight: '700px' }}>
      <iframe
        src="https://app.cal.eu/immoai/30min"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          minHeight: '700px',
          display: 'block'
        }}
        title="Cal.com - Réserver un rendez-vous"
        loading="lazy"
        allow="camera; microphone; geolocation"
      />
    </div>
  )
}
