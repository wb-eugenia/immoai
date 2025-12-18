import { SignUpForm } from "@/components/auth/SignUpForm"
import Link from "next/link"
import { Box } from "lucide-react"

export default function SignUpPage() {
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
              &ldquo;Grâce à ImmoAI, j'ai pu transformer mes simples plans 2D en véritables outils de vente. Mes clients adorent se projeter avant même la visite.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis, Agent Immobilier</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-black">
              Créer un compte
            </h1>
            <p className="text-sm text-gray-500">
              Entrez vos informations ci-dessous pour créer votre compte
            </p>
          </div>
          <SignUpForm />
          <p className="px-8 text-center text-sm text-gray-500">
            En cliquant sur continuer, vous acceptez nos{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-black"
            >
              Conditions d'utilisation
            </Link>{" "}
            et notre{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-black"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
