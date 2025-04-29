import { CheckCircle } from "lucide-react"

export default function SobrePage() {
  const skills = [
    "Gestão de Produto",
    "Metodologias Ágeis",
    "Scrum",
    "Kanban",
    "Product Discovery",
    "UX Research",
    "Análise de Dados",
    "Priorização de Backlog",
    "Roadmapping",
    "Facilitação de Workshops",
    "Storytelling",
    "Comunicação Efetiva",
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Mim</h1>
          <p className="text-xl text-muted-foreground">
            Product Manager com experiência em desenvolvimento de produtos digitais e metodologias ágeis.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Trajetória Profissional</h2>
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Senior Product Manager</h3>
              <p className="text-muted-foreground">Empresa XYZ • 2020 - Presente</p>
              <p>
                Liderei o desenvolvimento de produtos digitais com foco em experiência do usuário e resultados de
                negócio. Implementei metodologias ágeis e práticas de discovery que aumentaram a eficiência da equipe em
                30% e a satisfação dos usuários em 25%.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Product Manager</h3>
              <p className="text-muted-foreground">Empresa ABC • 2018 - 2020</p>
              <p>
                Responsável pelo ciclo de vida completo de produtos digitais, desde a concepção até o lançamento.
                Trabalhei diretamente com equipes multidisciplinares para entregar produtos alinhados às necessidades
                dos usuários e objetivos de negócio.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Product Owner</h3>
              <p className="text-muted-foreground">Empresa DEF • 2016 - 2018</p>
              <p>
                Atuei como ponte entre stakeholders e equipe de desenvolvimento, traduzindo necessidades de negócio em
                histórias de usuário e garantindo a entrega de valor contínua através de metodologias ágeis.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Diferenciais como PM</h2>
          <p>
            Minha abordagem combina pensamento estratégico com execução tática, sempre mantendo o foco no usuário e nos
            resultados de negócio. Acredito que produtos de sucesso são construídos através de:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary" />
              <span>Entendimento profundo das necessidades dos usuários</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary" />
              <span>Colaboração efetiva entre equipes multidisciplinares</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary" />
              <span>Tomada de decisão baseada em dados</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary" />
              <span>Iterações rápidas e feedback contínuo</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary" />
              <span>Comunicação clara e transparente</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Competências</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <div key={skill} className="rounded-full bg-muted px-3 py-1 text-sm font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
