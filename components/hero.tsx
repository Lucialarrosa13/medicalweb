import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
      <div className="container relative z-10 flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Encuentra al{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              médico ideal
            </span>{" "}
            para tu salud
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:mx-0">
            Conectamos pacientes con los mejores especialistas médicos. Agenda tu cita de forma rápida y sencilla, sin
            largas esperas ni complicaciones.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button size="lg">Buscar Médicos</Button>
            <Button variant="outline" size="lg">
              Conocer Más
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 pt-4 md:justify-start">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-3xl font-bold text-primary">2,000+</p>
              <p className="text-sm text-muted-foreground">Médicos Verificados</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Especialidades</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-3xl font-bold text-primary">100k+</p>
              <p className="text-sm text-muted-foreground">Pacientes Satisfechos</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto h-[400px] w-[300px] overflow-hidden rounded-2xl md:h-[500px] md:w-[400px]">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Doctor sonriendo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

