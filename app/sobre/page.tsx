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
            Product Manager com olhar estratégico, guiada por dados e com background em design. Conecto pessoas, negócios e tecnologia com foco em valor, visão integrada de produto e práticas de Business Agility.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Trajetória Profissional</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">FCx Labs</h3>
              <p className="text-muted-foreground">Tempo integral · 5 anos · Recife, Pernambuco, Brasil</p>

              <div className="mt-2 space-y-2">
                <div>
                  <h4 className="font-semibold">Agile Product Manager</h4>
                  <p className="text-sm text-muted-foreground">Jul de 2024 – o momento · 10 meses · Híbrida</p>
                  <p>Atuo como gerente de produto do projeto de Marketplace, liderando desde a concepção estratégica até a execução. Estou estruturando o projeto desde o início, com definição de métricas de desempenho e planejamento de entregas. Lidero uma equipe multidisciplinar com 25 profissionais, incluindo designers, desenvolvedores e QAs. Também facilito a adoção do framework ScrumKan e colaboro ativamente na gestão da equipe e no desenvolvimento das pessoas.</p>
                  <p className="text-sm text-muted-foreground">💎 Gestão de produto, Liderança de equipe, Definição de métricas, ScrumKan</p>
                </div>

                <div>
                  <h4 className="font-semibold">Product Designer Pleno</h4>
                  <p className="text-sm text-muted-foreground">Mai de 2022 – Set de 2024 · 2 anos 5 meses · Híbrida</p>
                  <p>Designer responsável pelo e-commerce da Ferreira Costa, desenvolvendo soluções que equilibram experiência do usuário (UX), design de interface (UI) e necessidades de negócio. Atuei na estruturação de jornadas, arquitetura da informação e melhorias contínuas da plataforma.</p>
                  <p className="text-sm text-muted-foreground">💎 UX Design, UI Design, Arquitetura da informação</p>
                </div>

                <div>
                  <h4 className="font-semibold">Product Designer Junior</h4>
                  <p className="text-sm text-muted-foreground">Abr de 2020 – Mai de 2022 · 2 anos 2 meses · Híbrida</p>
                  <p>Iniciei minha jornada na FCx Labs como Product Designer Junior, atuando em produtos digitais voltados para áreas de dados, logística e operações. Desenvolvi soluções com foco em performance, usabilidade e integração com múltiplas áreas da empresa.</p>
                  <p className="text-sm text-muted-foreground">💎 Prototipagem, Design de produtos digitais, Colaboração multidisciplinar</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">CESAR School</h3>
              <p className="text-muted-foreground">Estágio · Summer Internship · Jan de 2022 – Mai de 2022 · 5 meses · Recife, Pernambuco, Brasil</p>
              <p>Participei da Edição 2022.1 do CESAR Summer Job, um programa de estágio intensivo focado na resolução de desafios reais. Trabalhei em equipe para desenvolver uma proposta de AR/VR para a Ferreira Costa, voltada à criação e venda de ambientes arquitetônicos inovadores.</p>
              <p>Durante a experiência, recebi treinamentos especializados e tive acompanhamento de mentores em todas as etapas do projeto, desde a investigação do problema até a construção da solução final.</p>
              <p className="text-sm text-muted-foreground">💎 Arquitetura da informação, UX Design, Colaboração interdisciplinar, Inovação em AR/VR</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Formação Acadêmica</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">CESAR School</h3>
              <p className="text-muted-foreground">Bacharelado em Design de Artefatos Digitais • 2020 - 2024</p>
              <p>Formação voltada para a criação de produtos digitais com base em tecnologia, inovação e metodologias ágeis.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">AESO Barros Melo</h3>
              <p className="text-muted-foreground">Tecnólogo em Design Gráfico • Concluído em 2019</p>
              <p>Base criativa e técnica em design visual, comunicação e construção de interfaces centradas no usuário.</p>
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

