import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Star, MapPin, Calendar, Search, Filter } from "lucide-react"
import Image from "next/image"

const doctors = [
  {
    id: 1,
    name: "Dra. Ana Martínez",
    specialty: "Cardiología",
    rating: 4.9,
    reviews: 124,
    location: "Ciudad de México",
    price: 800,
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
    price: 950,
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
    price: 700,
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
    price: 850,
    available: true,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Dra. Patricia López",
    specialty: "Ginecología",
    rating: 4.8,
    reviews: 112,
    location: "Puebla",
    price: 900,
    available: true,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Dr. Javier Torres",
    specialty: "Oftalmología",
    rating: 4.6,
    reviews: 78,
    location: "Ciudad de México",
    price: 750,
    available: true,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function DoctoresPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-muted/30 py-8">
        <div className="container">
          <h1 className="mb-6 text-3xl font-bold">Encuentra a tu médico ideal</h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="text" placeholder="Buscar por nombre o especialidad" className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
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
            <Button>
              <Filter className="mr-2 h-4 w-4" />
              Filtrar
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-medium">Especialidades</h3>
              <div className="space-y-2">
                {["Cardiología", "Neurología", "Pediatría", "Dermatología", "Ginecología", "Oftalmología"].map(
                  (specialty) => (
                    <div key={specialty} className="flex items-center space-x-2">
                      <Checkbox id={`specialty-${specialty}`} />
                      <label
                        htmlFor={`specialty-${specialty}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {specialty}
                      </label>
                    </div>
                  ),
                )}
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="mb-4 text-lg font-medium">Precio</h3>
              <div className="space-y-4">
                <Slider defaultValue={[1000]} max={2000} step={100} />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">$0</span>
                  <span className="text-sm text-muted-foreground">$2,000</span>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="mb-4 text-lg font-medium">Calificación</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <Checkbox id={`rating-${rating}`} />
                    <label
                      htmlFor={`rating-${rating}`}
                      className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {Array(rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      {Array(5 - rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-muted" />
                        ))}
                      <span className="ml-1">y más</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="mb-4 text-lg font-medium">Disponibilidad</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="available-now" />
                  <label
                    htmlFor="available-now"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Disponible ahora
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="available-today" />
                  <label
                    htmlFor="available-today"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Disponible hoy
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="available-week" />
                  <label
                    htmlFor="available-week"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Disponible esta semana
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">Mostrando {doctors.length} médicos</p>
              <Select defaultValue="rating">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Mejor calificados</SelectItem>
                  <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                  <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                  <SelectItem value="reviews">Más reseñas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <div className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{doctor.location}</span>
                    </div>
                    <p className="text-sm font-medium text-primary">${doctor.price} MXN / consulta</p>
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
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="mx-1">
                1
              </Button>
              <Button variant="outline" className="mx-1">
                2
              </Button>
              <Button variant="outline" className="mx-1">
                3
              </Button>
              <Button variant="outline" className="mx-1">
                ...
              </Button>
              <Button variant="outline" className="mx-1">
                10
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

