import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Laura Gómez",
    role: "Paciente",
    content:
      "Excelente servicio. Pude encontrar un especialista rápidamente y agendar mi cita sin complicaciones. La atención médica fue de primera calidad.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Roberto Méndez",
    role: "Paciente",
    content:
      "La plataforma es muy intuitiva y fácil de usar. Encontré un cardiólogo cerca de mi casa y la consulta fue muy profesional. Totalmente recomendado.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "María Fernández",
    role: "Paciente",
    content:
      "Gracias a MediCita pude encontrar un pediatra para mi hijo en un momento de urgencia. El proceso de reserva fue rápido y la atención excelente.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
  },
]

export function Testimonials() {
  return (
    <section className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">Lo Que Dicen Nuestros Usuarios</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Experiencias reales de pacientes que han utilizado nuestra plataforma
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                  />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
              <div className="flex items-center gap-3">
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
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

