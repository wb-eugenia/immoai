"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2, Sparkles } from "lucide-react"

const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  role: z.string({
    required_error: "Sélectionnez votre activité",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function LeadForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Erreur d'envoi" }))
        throw new Error(errorData.error || "Erreur d'envoi")
      }
      
      setIsSuccess(true)
      form.reset()
    } catch (error) {
      console.error("Erreur:", error)
      setError(error instanceof Error ? error.message : "Une erreur est survenue")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full max-w-lg mx-auto p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 backdrop-blur-md">
        <div className="flex flex-col items-center gap-2">
          <Sparkles className="w-8 h-8" />
          <p className="font-semibold text-lg">Demande reçue !</p>
          <p className="text-sm text-center text-green-400/80">
            Nous avons bien reçu vos informations. Nous vous contacterons très prochainement pour votre plan 3D.
          </p>
          <Button 
            variant="ghost" 
            className="mt-2 text-green-400 hover:text-green-300 hover:bg-green-500/10"
            onClick={() => {
              setIsSuccess(false)
              setError(null)
            }}
          >
            Envoyer une autre demande
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="space-y-1 text-left">
          <Input
            placeholder="Prénom"
            className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
            {...form.register("firstName")}
          />
          {form.formState.errors.firstName && (
            <p className="text-xs text-red-400 ml-1">{form.formState.errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-1 text-left">
          <Input
            placeholder="Nom"
            className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
            {...form.register("lastName")}
          />
          {form.formState.errors.lastName && (
            <p className="text-xs text-red-400 ml-1">{form.formState.errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className="space-y-1 text-left">
          <Input
            type="email"
            placeholder="Email professionnel"
            className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-xs text-red-400 ml-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1 text-left">
          <Select onValueChange={(value) => form.setValue("role", value)}>
            <SelectTrigger className="bg-black/20 border-white/10 text-white focus:border-blue-500 text-left">
              <SelectValue placeholder="Vous êtes ?" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
              <SelectItem value="agent">Agent Immobilier</SelectItem>
              <SelectItem value="particulier">Particulier</SelectItem>
              <SelectItem value="conciergerie">Conciergerie</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
            </SelectContent>
          </Select>
          {form.formState.errors.role && (
            <p className="text-xs text-red-400 ml-1">{form.formState.errors.role.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            "Recevoir mon exemple 3D"
          )}
        </Button>
      </div>
    </form>
  )
}

