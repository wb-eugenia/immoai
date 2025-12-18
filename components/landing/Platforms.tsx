"use client"

export function Platforms() {
  const platforms = [
    { name: "YouTube", logo: "▶" },
    { name: "Instagram", logo: "📷" },
    { name: "LinkedIn", logo: "in" },
    { name: "Pinterest", logo: "P" },
    { name: "Shopify", logo: "🛍" },
    { name: "WooCommerce", logo: "Woo" },
    { name: "Wix", logo: "WIX" },
    { name: "WordPress", logo: "W" },
    { name: "Amazon", logo: "amazon" },
  ]

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Compatible avec toutes vos plateformes
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            >
              <div className="text-2xl md:text-3xl font-semibold text-gray-700">
                {platform.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

