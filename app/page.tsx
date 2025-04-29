import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Transformando ideias em produtos de impacto
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Product Manager com foco em metodologias ágeis, experiência do usuário e resultados mensuráveis.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/projetos">
                  Ver projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/sobre">Sobre mim</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Abordagem</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Gestão de produto centrada no usuário</h2>
              <p className="text-muted-foreground md:text-lg">
                Combino metodologias ágeis, pesquisa de usuário e análise de dados para criar produtos que resolvem
                problemas reais e geram resultados de negócio.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button asChild>
                <Link href="/metodologias">
                  Metodologias <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contato">Contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Projetos em destaque</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Conheça alguns dos projetos em que atuei como Product Manager
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <div className="h-full w-full bg-muted" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold tracking-tight">Projeto {i}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      Descrição breve do projeto, destacando o problema resolvido e os resultados alcançados.
                    </p>
                    <Link
                      href={`/projetos/projeto-${i}`}
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                    >
                      Ver detalhes <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/projetos">Ver todos os projetos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
