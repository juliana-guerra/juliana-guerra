import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MetodologiasPage() {
  const methodologies = [
    {
      title: "Scrum",
      description: "Framework ágil para gestão e planejamento de projetos de software.",
      practices: ["Sprint Planning", "Daily Standup", "Sprint Review", "Sprint Retrospective", "Backlog Refinement"],
    },
    {
      title: "Kanban",
      description: "Sistema de gestão visual que ajuda a controlar o fluxo de trabalho.",
      practices: [
        "Visualização do Fluxo de Trabalho",
        "Limitação do Trabalho em Progresso (WIP)",
        "Gestão do Fluxo",
        "Políticas Explícitas",
        "Loops de Feedback",
      ],
    },
    {
      title: "Product Discovery",
      description: "Processo para validar ideias e reduzir riscos antes do desenvolvimento.",
      practices: [
        "Entrevistas com Usuários",
        "Testes de Usabilidade",
        "Prototipagem",
        "Teste A/B",
        "MVP (Minimum Viable Product)",
      ],
    },
    {
      title: "Working Backwards",
      description: "Metodologia que começa com o cliente e trabalha de trás para frente.",
      practices: [
        "Press Release Interno",
        "FAQ Antecipado",
        "Definição da Experiência do Cliente",
        "Métricas de Sucesso",
        "Roadmap Reverso",
      ],
    },
  ]

  const tools = [
    {
      category: "Gestão de Projetos",
      items: ["Jira", "Trello", "Asana", "Monday", "ClickUp"],
    },
    {
      category: "Design e Prototipagem",
      items: ["Figma", "Sketch", "Adobe XD", "InVision", "Balsamiq"],
    },
    {
      category: "Colaboração e Documentação",
      items: ["Confluence", "Notion", "Google Workspace", "Microsoft 365", "Coda"],
    },
    {
      category: "Pesquisa e Análise",
      items: ["Hotjar", "Google Analytics", "Mixpanel", "Amplitude", "Pendo"],
    },
    {
      category: "Ideação e Workshops",
      items: ["Miro", "FigJam", "MURAL", "Lucidspark", "Whimsical"],
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Metodologias e Ferramentas</h1>
          <p className="text-xl text-muted-foreground">
            Conheça as práticas e ferramentas que utilizo para criar produtos de impacto
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Metodologias</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {methodologies.map((methodology) => (
              <Card key={methodology.title}>
                <CardHeader>
                  <CardTitle>{methodology.title}</CardTitle>
                  <CardDescription>{methodology.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {methodology.practices.map((practice) => (
                      <li key={practice} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Ferramentas</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {tools.map((toolCategory) => (
              <Card key={toolCategory.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{toolCategory.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {toolCategory.items.map((tool) => (
                      <div key={tool} className="rounded-full bg-muted px-3 py-1 text-sm font-medium">
                        {tool}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
