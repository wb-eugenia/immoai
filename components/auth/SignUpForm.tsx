"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import Link from "next/link"

const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  role: z.string({
    required_error: "Veuillez sélectionner votre rôle",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

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
    
    try {
      // On passe par notre route API locale pour éviter les problèmes CORS
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'inscription")
      }

      // Optionnel : Gérer le succès (redirection ou message)
      console.log("Inscription réussie")
    } catch (error) {
      console.error("Erreur d'inscription:", error)
      // Optionnel : Afficher un message d'erreur à l'utilisateur
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstName">Prénom</Label>
              <Input
                id="firstName"
                placeholder="Jean"
                className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-black"
                {...form.register("firstName")}
              />
              {form.formState.errors.firstName && (
                <p className="text-xs text-red-500">{form.formState.errors.firstName.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Nom</Label>
              <Input
                id="lastName"
                placeholder="Dupont"
                className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-black"
                {...form.register("lastName")}
              />
              {form.formState.errors.lastName && (
                <p className="text-xs text-red-500">{form.formState.errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="jean.dupont@exemple.com"
              className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-black"
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label>Qui êtes-vous ?</Label>
            <Select 
              onValueChange={(value) => form.setValue("role", value)} 
              defaultValue={form.getValues("role")}
            >
              <SelectTrigger className="bg-white border-gray-200 text-black focus:border-black">
                <SelectValue placeholder="Sélectionnez votre activité" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200 text-black">
                <SelectItem value="agent">Agent Immobilier</SelectItem>
                <SelectItem value="particulier">Particulier</SelectItem>
                <SelectItem value="conciergerie">Conciergerie</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.role && (
              <p className="text-xs text-red-500">{form.formState.errors.role.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            S'inscrire
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">
            Déjà un compte ?
          </span>
        </div>
      </div>
      <Button variant="outline" className="w-full border-gray-200 text-black hover:bg-gray-50 hover:text-black" asChild>
        <Link href="/login">Se connecter</Link>
      </Button>
    </div>
  )
}
