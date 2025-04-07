import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar } from "lucide-react"

const doctors = [
  {
    id: 1,
    name: "Dra. Ana Martínez",
    specialty: "Cardiología",
    rating: 4.9,
    reviews: 124,
    location: "Ciudad de México",
    available: true,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Dr. Carlos Rodríguez",
    specialty: "Neurología",
    rating: 4.8,
    reviews: 98,
    location: "Guadalajara",
    available: true,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Dra. Laura Sánchez",
    specialty: "Pediatría",
    rating: 4.9,
    reviews: 156,
    location: "Monterrey",
    available: false,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Dr. Miguel Hernández",
    specialty: "Dermatología",
    rating: 4.7,
    reviews: 87,
    location: "Ciudad de México",
    available: true,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function TopDoctors() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight">Médicos Destacados</h2>
            <p className="max-w-[700px] text-muted-foreground">
              Profesionales con las mejores calificaciones y experiencia comprobada
            </p>
          </div>
          <Button variant="outline">Ver Todos los Médicos</Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {doctor.specialty}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                    <span className="text-xs text-muted-foreground">({doctor.reviews})</span>
                  </div>
                </div>
                <h3 className="mb-1 text-lg font-medium">{doctor.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{doctor.location}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full"
                  variant={doctor.available ? "default" : "outline"}
                  disabled={!doctor.available}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {doctor.available ? "Agendar Cita" : "No Disponible"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

