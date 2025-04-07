import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, Star, Phone, CheckCircle, Award, ThumbsUp } from "lucide-react"
import Image from "next/image"

export default function DoctorDetailPage({ params }: { params: { id: string } }) {
  // En una aplicación real, obtendríamos los datos del doctor desde una API
  const doctor = {
    id: params.id,
    name: "Dra. Ana Martínez",
    specialty: "Cardiología",
    rating: 4.9,
    reviews: 124,
    location: "Av. Insurgentes Sur 1234, Col. Del Valle, Ciudad de México",
    price: 800,
    available: true,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Especialista en cardiología con más de 15 años de experiencia. Certificada por el Consejo Mexicano de Cardiología y miembro de la Sociedad Mexicana de Cardiología. Especializada en el diagnóstico y tratamiento de enfermedades cardiovasculares.",
    education: [
      {
        title: "Doctorado en Medicina",
        institution: "Universidad Nacional Autónoma de México",
        year: "2005",
      },
      {
        title: "Especialidad en Cardiología",
        institution: "Instituto Nacional de Cardiología",
        year: "2008",
      },
      {
        title: "Subespecialidad en Cardiología Intervencionista",
        institution: "Hospital General de México",
        year: "2010",
      },
    ],
    experience: [
      {
        position: "Cardióloga Senior",
        institution: "Hospital Ángeles",
        period: "2010 - Presente",
      },
      {
        position: "Investigadora Asociada",
        institution: "Instituto Nacional de Cardiología",
        period: "2008 - 2010",
      },
    ],
    services: [
      "Consulta cardiológica",
      "Electrocardiograma",
      "Ecocardiograma",
      "Prueba de esfuerzo",
      "Holter de ritmo cardíaco",
      "Monitoreo de presión arterial",
    ],
    schedule: [
      { day: "Lunes", hours: "9:00 AM - 2:00 PM" },
      { day: "Martes", hours: "9:00 AM - 2:00 PM" },
      { day: "Miércoles", hours: "3:00 PM - 8:00 PM" },
      { day: "Jueves", hours: "9:00 AM - 2:00 PM" },
      { day: "Viernes", hours: "3:00 PM - 8:00 PM" },
    ],
    testimonials: [
      {
        name: "Roberto Méndez",
        date: "15 de marzo, 2023",
        rating: 5,
        comment:
          "Excelente profesional. La Dra. Martínez me explicó detalladamente mi condición y las opciones de tratamiento. Muy recomendada.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Laura Gómez",
        date: "2 de febrero, 2023",
        rating: 5,
        comment:
          "Muy buena atención, puntual y dedicada. Resolvió todas mis dudas y el tratamiento que me recetó fue efectivo.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Carlos Vega",
        date: "10 de enero, 2023",
        rating: 4,
        comment: "Buena doctora, muy profesional y atenta. La consulta fue rápida pero completa. Recomendable.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="mb-8 flex flex-col gap-6 md:flex-row">
              <div className="relative h-64 w-64 overflow-hidden rounded-xl">
                <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {doctor.specialty}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                    <span className="text-xs text-muted-foreground">({doctor.reviews} reseñas)</span>
                  </div>
                </div>
                <h1 className="mb-2 text-3xl font-bold">{doctor.name}</h1>
                <div className="mb-4 flex items-start gap-1 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{doctor.location}</span>
                </div>
                <p className="mb-4 text-muted-foreground">{doctor.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar Cita
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-4 w-4" />
                    Contactar
                  </Button>
                </div>
              </div>
            </div>

            <Tabs defaultValue="info">
              <TabsList className="mb-4 grid w-full grid-cols-4">
                <TabsTrigger value="info">Información</TabsTrigger>
                <TabsTrigger value="services">Servicios</TabsTrigger>
                <TabsTrigger value="schedule">Horarios</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
              </TabsList>
              <TabsContent value="info" className="space-y-6">
                <div>
                  <h2 className="mb-4 text-xl font-semibold">Educación</h2>
                  <div className="space-y-4">
                    {doctor.education.map((edu, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{edu.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {edu.institution} • {edu.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="mb-4 text-xl font-semibold">Experiencia</h2>
                  <div className="space-y-4">
                    {doctor.experience.map((exp, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <ThumbsUp className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{exp.position}</h3>
                          <p className="text-sm text-muted-foreground">
                            {exp.institution} • {exp.period}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="services">
                <h2 className="mb-4 text-xl font-semibold">Servicios Ofrecidos</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {doctor.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-medium">Precio de consulta</h3>
                  <p className="text-2xl font-bold text-primary">${doctor.price} MXN</p>
                  <p className="text-sm text-muted-foreground">El precio puede variar según el tipo de servicio</p>
                </div>
              </TabsContent>
              <TabsContent value="schedule">
                <h2 className="mb-4 text-xl font-semibold">Horario de Atención</h2>
                <div className="space-y-3">
                  {doctor.schedule.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">{schedule.day}</span>
                      </div>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar Cita
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="reviews">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Reseñas de Pacientes</h2>
                  <Button>Escribir Reseña</Button>
                </div>
                <div className="space-y-4">
                  {doctor.testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                              <AvatarFallback>
                                {testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{testimonial.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Agendar Cita</h2>
                <div className="mb-4">
                  <p className="mb-1 text-sm font-medium">Precio de consulta</p>
                  <p className="text-2xl font-bold text-primary">${doctor.price} MXN</p>
                </div>
                <div className="mb-4 space-y-2">
                  <p className="text-sm font-medium">Selecciona una fecha</p>
                  <div className="grid grid-cols-7 gap-1">
                    {[...Array(7)].map((_, i) => {
                      const date = new Date()
                      date.setDate(date.getDate() + i)
                      const day = date.getDate()
                      const isToday = i === 0
                      return (
                        <Button key={i} variant={isToday ? "default" : "outline"} className="h-10 p-0">
                          <div className="flex flex-col items-center">
                            <span className="text-xs">
                              {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"][date.getDay()]}
                            </span>
                            <span className="text-sm">{day}</span>
                          </div>
                        </Button>
                      )
                    })}
                  </div>
                </div>
                <div className="mb-6 space-y-2">
                  <p className="text-sm font-medium">Horarios disponibles</p>
                  <div className="grid grid-cols-3 gap-2">
                    {["9:00", "10:00", "11:00", "12:00", "16:00", "17:00"].map((time) => (
                      <Button key={time} variant="outline" className="h-10">
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Confirmar Cita
                </Button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Puedes cancelar hasta 24 horas antes sin costo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

