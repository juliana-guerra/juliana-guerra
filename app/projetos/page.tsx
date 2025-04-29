"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Project = {
  id: number
  title: string
  description: string
  categories: string[]
  image: string
}

export default function ProjetosPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Redesign de Plataforma E-commerce",
      description:
        "Liderado o redesign completo da plataforma de e-commerce, resultando em aumento de 40% na taxa de conversão e redução de 25% na taxa de abandono de carrinho.",
      categories: ["E-commerce", "UX/UI", "Redesign"],
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "App de Gestão Financeira",
      description:
        "Desenvolvimento de aplicativo mobile para gestão financeira pessoal, com foco em usabilidade e experiência do usuário. Crescimento de 200% na base de usuários em 6 meses.",
      categories: ["Fintech", "Mobile", "B2C"],
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Dashboard para Análise de Dados",
      description:
        "Criação de dashboard para visualização e análise de dados de performance de marketing, permitindo tomada de decisão mais ágil e baseada em dados.",
      categories: ["Analytics", "B2B", "Dashboard"],
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Plataforma de Educação Online",
      description:
        "Desenvolvimento de plataforma de cursos online com recursos interativos e gamificação, aumentando o engajamento dos alunos em 60%.",
      categories: ["Edtech", "Plataforma", "B2C"],
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Sistema de Gestão de Projetos",
      description:
        "Criação de sistema interno para gestão de projetos e recursos, otimizando processos e aumentando a produtividade das equipes em 35%.",
      categories: ["Produtividade", "B2B", "Sistema"],
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Marketplace de Serviços",
      description:
        "Desenvolvimento de marketplace conectando profissionais freelancers e clientes, com sistema de avaliação e pagamentos integrado.",
      categories: ["Marketplace", "Serviços", "B2B2C"],
      image: "/placeholder.svg",
    },
  ]

  const allCategories = Array.from(new Set(projects.flatMap((project) => project.categories))).sort()

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.categories.includes(selectedCategory))
    : projects

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projetos</h1>
          <p className="text-xl text-muted-foreground">
            Conheça os principais projetos em que atuei como Product Manager
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              Todos
            </Button>
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <div className="h-full w-full bg-muted" />
                </div>
                <div className="p-5">
                  <div className="mb-2 flex flex-wrap gap-1">
                    {project.categories.map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-semibold tracking-tight">{project.title}</h3>
                  <p className="line-clamp-3 text-sm text-muted-foreground">{project.description}</p>
                  <Link
                    href={`/projetos/${project.id}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                  >
                    Ver detalhes <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
