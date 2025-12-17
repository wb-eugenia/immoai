"use client"

import { useState, useRef } from "react"
import { Upload, Image as ImageIcon, Sparkles, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AdminImmoInterface() {
  const [uploadedImages, setUploadedImages] = useState<File[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [hasGenerated, setHasGenerated] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setUploadedImages((prev) => [...prev, ...files])
  }

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleGenerate = () => {
    if (uploadedImages.length === 0) return
    
    setIsGenerating(true)
    // Simuler la génération (2 secondes)
    setTimeout(() => {
      setIsGenerating(false)
      setHasGenerated(true)
    }, 2000)
  }

  const handleReset = () => {
    setUploadedImages([])
    setHasGenerated(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Admin ImmoAI
        </h1>
        <p className="text-lg text-gray-600">
          Uploadez vos photos de listings et générez une visualisation 3D isométrique
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="space-y-6">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Photos de listing
            </h2>
            
            {/* Upload Zone */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium mb-2">
                Cliquez pour uploader ou glissez-déposez
              </p>
              <p className="text-sm text-gray-500">
                PNG, JPG, WEBP jusqu'à 10MB
              </p>
            </div>

            {/* Uploaded Images Preview */}
            {uploadedImages.length > 0 && (
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Photos uploadées ({uploadedImages.length})
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {uploadedImages.map((file, index) => (
                    <div
                      key={index}
                      className="relative group aspect-square rounded-lg overflow-hidden border-2 border-gray-200"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                      >
                        ×
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 truncate">
                        {file.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Generate Button */}
            <div className="mt-6">
              <Button
                onClick={handleGenerate}
                disabled={uploadedImages.length === 0 || isGenerating}
                className="w-full bg-gray-900 text-white hover:bg-gray-800 py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Générer la vue isométrique 3D
                  </>
                )}
              </Button>
            </div>

            {hasGenerated && (
              <Button
                onClick={handleReset}
                variant="outline"
                className="w-full mt-3 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Réinitialiser
              </Button>
            )}
          </div>
        </div>

        {/* Result Section */}
        <div className="space-y-6">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vue isométrique 3D générée
            </h2>
            
            {!hasGenerated ? (
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">
                    La visualisation 3D apparaîtra ici
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Uploadez des photos et cliquez sur "Générer"
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="aspect-video rounded-xl overflow-hidden border-2 border-gray-200 bg-white shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop"
                    alt="Vue isométrique 3D générée"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Visualisation générée avec succès
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Qualité HD • Format 16:9
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-white"
                  >
                    Télécharger
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

