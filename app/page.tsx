import { Button } from "@/components/ui/button"
import { Heart, Brain, Stethoscope, Award, BookOpen, Users, ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold text-primary">
            <Heart className="h-6 w-6 text-rose-500" />
            <span>MedQuiz</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Recursos
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Depoimentos
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Planos
              </Link>
              <Button size="sm">Começar Agora</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Aprenda medicina com quizzes interativos
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Estude para provas, residências e concursos com o MedQuiz. Milhares de questões atualizadas para
                    você dominar os conteúdos médicos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Baixar Aplicativo <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Saiba Mais
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" />
                    <span>+5.000 questões</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Atualizado constantemente</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Acesso offline</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl border bg-gradient-to-br from-teal-50 to-blue-50 p-2">
                  <Image
                    src="/placeholder.svg?height=550&width=450"
                    width={550}
                    height={450}
                    alt="Screenshot do aplicativo MedQuiz"
                    className="mx-auto h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Recursos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tudo que você precisa para se destacar nos estudos médicos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O MedQuiz foi desenvolvido por médicos para médicos e estudantes de medicina, com foco em conteúdo de
                  alta qualidade.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Especialidades Médicas</h3>
                <p className="text-center text-muted-foreground">
                  Questões separadas por especialidades médicas, desde clínica médica até cirurgia e pediatria.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Simulados Realistas</h3>
                <p className="text-center text-muted-foreground">
                  Simulados que reproduzem o formato das principais provas de residência e concursos médicos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Estatísticas de Desempenho</h3>
                <p className="text-center text-muted-foreground">
                  Acompanhe seu progresso com estatísticas detalhadas e identifique áreas para melhorar.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Explicações Detalhadas</h3>
                <p className="text-center text-muted-foreground">
                  Todas as questões possuem explicações completas com referências bibliográficas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Comunidade Médica</h3>
                <p className="text-center text-muted-foreground">
                  Participe de discussões e compartilhe conhecimento com outros estudantes e profissionais.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Modo Revisão</h3>
                <p className="text-center text-muted-foreground">
                  Revise questões que você errou anteriormente para reforçar o aprendizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center lg:order-last">
                <Image
                  src="/placeholder.svg?height=550&width=450"
                  width={550}
                  height={450}
                  alt="Demonstração do aplicativo MedQuiz"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Como o MedQuiz funciona
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Uma experiência de aprendizado personalizada que se adapta ao seu nível de conhecimento e objetivos.
                  </p>
                </div>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Escolha sua especialidade</h3>
                      <p className="text-muted-foreground">
                        Selecione entre diversas especialidades médicas ou opte por simulados completos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Responda as questões</h3>
                      <p className="text-muted-foreground">
                        Teste seus conhecimentos com questões de múltipla escolha, casos clínicos e imagens
                        diagnósticas.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Analise seu desempenho</h3>
                      <p className="text-muted-foreground">
                        Veja explicações detalhadas e acompanhe seu progresso com estatísticas personalizadas.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Experimentar Grátis</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">O que nossos usuários dizem</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Milhares de estudantes e médicos já melhoraram seus conhecimentos com o MedQuiz.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "O MedQuiz foi fundamental para minha aprovação na residência. As questões são muito semelhantes às
                    das provas reais."
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Dra. Ana Silva</p>
                    <p className="text-sm text-muted-foreground">Residente em Clínica Médica</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "As explicações detalhadas me ajudaram a entender conceitos complexos. Uso o app diariamente para me
                    manter atualizado."
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Dr. Carlos Oliveira</p>
                    <p className="text-sm text-muted-foreground">Cardiologista</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Como estudante do 5º ano, o MedQuiz tem sido essencial para me preparar para o internato e as
                    provas de residência."
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Mariana Santos</p>
                    <p className="text-sm text-muted-foreground">Estudante de Medicina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Planos simples e acessíveis</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Escolha o plano que melhor se adapta às suas necessidades de estudo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Básico</h3>
                  <p className="text-muted-foreground">Para quem está começando</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="text-4xl font-bold">Grátis</div>
                  <p className="text-muted-foreground">Acesso limitado</p>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>500 questões de múltipla escolha</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Acesso a 3 especialidades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Estatísticas básicas</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button size="lg" variant="outline" className="w-full">
                    Começar Grátis
                  </Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Premium</h3>
                  <p className="text-muted-foreground">Para estudantes dedicados</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="text-4xl font-bold">
                    R$29,90<span className="text-sm font-normal">/mês</span>
                  </div>
                  <p className="text-muted-foreground">Ou R$299/ano</p>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Acesso a 5.000+ questões</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Todas as especialidades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Simulados completos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Explicações detalhadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Estatísticas avançadas</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button size="lg" className="w-full">
                    Assinar Agora
                  </Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Institucional</h3>
                  <p className="text-muted-foreground">Para faculdades e hospitais</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="text-4xl font-bold">Personalizado</div>
                  <p className="text-muted-foreground">Contate para preços</p>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Tudo do plano Premium</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Painel administrativo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Questões personalizadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Relatórios detalhados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button size="lg" variant="outline" className="w-full">
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Pronto para elevar seus estudos médicos?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a milhares de estudantes e profissionais que já estão usando o MedQuiz.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Baixar Aplicativo <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Heart className="h-6 w-6 text-rose-500" />
            <span>MedQuiz</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} MedQuiz. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Termos
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
