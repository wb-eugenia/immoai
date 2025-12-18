import Link from "next/link"
import { Box } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex border-r border-gray-200">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="flex items-center gap-2">
            <Box className="h-6 w-6 text-white" />
            <span>ImmoAI</span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Cette plateforme a révolutionné ma façon de présenter des biens. Simple, rapide et le résultat est bluffant.&rdquo;
            </p>
            <footer className="text-sm">Thomas Martin, Architecte d'intérieur</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-serif font-semibold tracking-tight text-gray-900">
              Bon retour parmi nous
            </h1>
            <p className="text-sm text-gray-500">
              Connectez-vous à votre espace membre
            </p>
          </div>
          
          <div className="grid gap-6">
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="nom@exemple.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400 focus:border-black"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-gray-500 hover:text-black hover:underline underline-offset-4"
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400 focus:border-black"
                  />
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  Se connecter
                </Button>
              </div>
            </form>
          </div>

          <p className="px-8 text-center text-sm text-gray-500">
            Pas encore de compte ?{" "}
            <Link
              href="/signup"
              className="underline underline-offset-4 hover:text-black font-medium"
            >
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

