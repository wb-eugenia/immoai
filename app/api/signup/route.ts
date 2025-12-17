import { NextResponse } from "next/server"

const N8N_WEBHOOK_URL = "https://n8n.srv1057154.hstgr.cloud/webhook/9dab29aa-daa6-4a30-bb9c-fc5fc0ddf4f6"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    console.log("📤 Envoi au webhook n8n:", body)
    
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const responseText = await response.text()
    console.log("📥 Réponse n8n:", response.status, responseText)

    if (!response.ok) {
      let errorMessage = "Erreur lors de l'envoi au webhook"
      
      try {
        const errorData = JSON.parse(responseText)
        if (errorData.message) {
          errorMessage = errorData.message
        }
      } catch {
        // Si ce n'est pas du JSON, on garde le message par défaut
      }

      console.error("❌ Erreur webhook:", errorMessage)
      
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      )
    }

    console.log("✅ Webhook envoyé avec succès")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("❌ Erreur serveur:", error)
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    )
  }
}

