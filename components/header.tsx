"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-white"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-primary">MediCita</span>
          </Link>
        </div>

        {isDesktop ? (
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <Link href="/doctores" className="text-sm font-medium hover:text-primary">
              Doctores
            </Link>
            <Link href="/especialidades" className="text-sm font-medium hover:text-primary">
              Especialidades
            </Link>
            <Link href="/como-funciona" className="text-sm font-medium hover:text-primary">
              Cómo Funciona
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
        ) : null}

        <div className="flex items-center gap-4">
          {isDesktop ? (
            <>
              <Button variant="outline" size="sm">
                Iniciar Sesión
              </Button>
              <Button size="sm">Registrarse</Button>
            </>
          ) : (
            <Button variant="ghost" size="icon" aria-label="Toggle Menu" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "container overflow-hidden transition-all duration-300 md:hidden",
          isMenuOpen ? "max-h-[500px] py-4" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-4">
          <Link href="/" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </Link>
          <Link
            href="/doctores"
            className="text-sm font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Doctores
          </Link>
          <Link
            href="/especialidades"
            className="text-sm font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Especialidades
          </Link>
          <Link
            href="/como-funciona"
            className="text-sm font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Cómo Funciona
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="outline" size="sm" className="justify-start">
              <User className="mr-2 h-4 w-4" />
              Iniciar Sesión
            </Button>
            <Button size="sm">Registrarse</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

