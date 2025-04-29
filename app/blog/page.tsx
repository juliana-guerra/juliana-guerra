import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Como implementar Product Discovery de forma efetiva",
      excerpt:
        "Aprenda as melhores práticas para conduzir um processo de discovery que gere insights valiosos e reduza riscos no desenvolvimento de produtos.",
      date: "10 Abr 2023",
      categories: ["Product Discovery", "Metodologias"],
    },
    {
      id: 2,
      title: "Métricas que todo Product Manager deve acompanhar",
      excerpt:
        "Conheça as principais métricas que ajudam a avaliar a saúde do seu produto e tomar decisões baseadas em dados.",
      date: "25 Mar 2023",
      categories: ["Métricas", "Dados"],
    },
    {
      id: 3,
      title: "O papel do Product Manager na transformação digital",
      excerpt:
        "Como PMs podem liderar iniciativas de transformação digital e criar uma cultura centrada no usuário nas organizações.",
      date: "12 Mar 2023",
      categories: ["Transformação Digital", "Liderança"],
    },
    {
      id: 4,
      title: "Construindo roadmaps efetivos: além do timeline",
      excerpt:
        "Aprenda a criar roadmaps orientados a resultados que comuniquem a estratégia do produto e alinhem stakeholders.",
      date: "28 Fev 2023",
      categories: ["Roadmap", "Estratégia"],
    },
    {
      id: 5,
      title: "Como conduzir workshops de ideação remotos",
      excerpt: "Técnicas e ferramentas para facilitar workshops de ideação efetivos em ambientes remotos ou híbridos.",
      date: "15 Fev 2023",
      categories: ["Workshops", "Trabalho Remoto"],
    },
    {
      id: 6,
      title: "A importância da acessibilidade no desenvolvimento de produtos",
      excerpt:
        "Por que acessibilidade deve ser uma prioridade desde o início do desenvolvimento e como implementá-la corretamente.",
      date: "30 Jan 2023",
      categories: ["Acessibilidade", "UX"],
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Artigos sobre gestão de produto, metodologias ágeis e experiência do usuário
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="group space-y-3 border-b pb-8">
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
              <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <p className="text-muted-foreground">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="inline-flex items-center text-sm font-medium text-primary">
                Ler artigo completo <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
