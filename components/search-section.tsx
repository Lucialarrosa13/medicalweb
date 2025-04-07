"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin } from "lucide-react"

export function SearchSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [specialty, setSpecialty] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ searchTerm, location, specialty })
    // Implementar lógica de búsqueda
  }

  return (
    <section className="container py-12">
      <div className="mx-auto max-w-5xl rounded-xl border bg-card p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">Encuentra a tu médico en segundos</h2>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Nombre del doctor o especialidad"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Ubicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cdmx">Ciudad de México</SelectItem>
                  <SelectItem value="guadalajara">Guadalajara</SelectItem>
                  <SelectItem value="monterrey">Monterrey</SelectItem>
                  <SelectItem value="puebla">Puebla</SelectItem>
                  <SelectItem value="tijuana">Tijuana</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Buscar
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <p className="mb-2 text-sm font-medium">Búsquedas populares:</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              Cardiología
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Pediatría
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Dermatología
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Ginecología
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Oftalmología
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

