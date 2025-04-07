import { Search, Calendar, CheckCircle } from "lucide-react"

const steps = [
  {
    title: "Busca un médico",
    description: "Encuentra al especialista ideal utilizando filtros por especialidad, ubicación o disponibilidad.",
    icon: Search,
  },
  {
    title: "Agenda tu cita",
    description:
      "Selecciona el día y horario que mejor se adapte a tu agenda con nuestro sistema de reservas en tiempo real.",
    icon: Calendar,
  },
  {
    title: "Recibe atención médica",
    description: "Asiste a tu consulta o conéctate por videollamada para recibir la atención médica que necesitas.",
    icon: CheckCircle,
  },
]

export function HowItWorks() {
  return (
    <section className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">¿Cómo Funciona?</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Agendar una cita médica nunca fue tan fácil. Sigue estos simples pasos
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <step.icon className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-medium">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
            {index < steps.length - 1 && (
              <div
                className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-x-1/2 bg-border md:block"
                style={{ left: "75%" }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

