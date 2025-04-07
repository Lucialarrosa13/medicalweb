import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Eye, Stethoscope, Baby, Bone } from "lucide-react"
import Link from "next/link"

const specialties = [
  {
    name: "Cardiología",
    description: "Especialistas en el corazón y sistema circulatorio",
    icon: Heart,
    href: "/especialidades/cardiologia",
  },
  {
    name: "Neurología",
    description: "Tratamiento de trastornos del sistema nervioso",
    icon: Brain,
    href: "/especialidades/neurologia",
  },
  {
    name: "Oftalmología",
    description: "Cuidado de la salud visual y ocular",
    icon: Eye,
    href: "/especialidades/oftalmologia",
  },
  {
    name: "Medicina General",
    description: "Atención médica primaria y preventiva",
    icon: Stethoscope,
    href: "/especialidades/medicina-general",
  },
  {
    name: "Pediatría",
    description: "Cuidado de la salud de niños y adolescentes",
    icon: Baby,
    href: "/especialidades/pediatria",
  },
  {
    name: "Traumatología",
    description: "Tratamiento de lesiones y trastornos óseos",
    icon: Bone,
    href: "/especialidades/traumatologia",
  },
]

export function PopularSpecialties() {
  return (
    <section className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">Especialidades Populares</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Encuentra especialistas médicos en las áreas más demandadas para cuidar de tu salud
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {specialties.map((specialty) => (
          <Link key={specialty.name} href={specialty.href}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <specialty.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium">{specialty.name}</h3>
                <p className="text-sm text-muted-foreground">{specialty.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

