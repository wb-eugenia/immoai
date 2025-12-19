"use client"

import Image from "next/image"

export function Platforms() {
  const platforms = [
    { name: "Booking.com", logo: "/bookingcom-logo-svgrepo-com.svg" },
    { name: "Abritel HomeAway", logo: "/abritel-homeaway-seeklogo.com.svg" },
    { name: "Airbnb", logo: "/airbnb-ar21.svg" },
    { name: "LeBonCoin", logo: "/Leboncoin_Logo_(2016).svg.png" },
  ]

  // Dupliquer les plateformes pour un défilement continu
  const duplicatedPlatforms = [...platforms, ...platforms]

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Compatible avec toutes vos plateformes
        </h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-8 md:gap-12 animate-scroll">
            {duplicatedPlatforms.map((platform, index) => {
              const isBooking = platform.name === "Booking.com"
              return (
                <div
                  key={`${platform.name}-${index}`}
                  className={`flex items-center justify-center flex-shrink-0 transition-opacity hover:opacity-80 ${
                    isBooking ? "h-24 md:h-32" : "h-12 md:h-16"
                  }`}
                >
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={isBooking ? 240 : 120}
                    height={isBooking ? 128 : 64}
                    className={`object-contain h-full w-auto ${
                      isBooking 
                        ? "max-w-[240px] md:max-w-[320px]" 
                        : "max-w-[120px] md:max-w-[160px]"
                    }`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

