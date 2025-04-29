import Link from "next/link"
import { Heart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EulaPage() {
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
              <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Início</Link>
              <Link href="/#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Recursos</Link>
              <Link href="/#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Planos</Link>
              <Button size="sm">Começar Agora</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-4xl py-12">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Voltar para a página inicial
            </Link>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">Contrato de Licença de Usuário Final</h1>
            <p className="mt-2 text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </div>

          <div className="prose prose-slate max-w-none dark:prose-invert">
            <div className="space-y-10">
              <section id="introduction">
                <h2 className="text-2xl font-bold">1. Introdução</h2>
                <p>
                  Este Contrato de Licença de Usuário Final ("EULA") é um contrato legal entre você e o MedQuiz ("nós", "nosso").
                  Ao instalar, copiar ou utilizar o aplicativo MedQuiz ("Software"), você concorda em ficar vinculado aos termos deste EULA.
                  Se você não concordar com os termos deste EULA, não instale ou use o Software.
                </p>
              </section>

              <section id="license-grant">
                <h2 className="text-2xl font-bold">2. Concessão de Licença</h2>
                <p>
                  Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para usar o Software
                  exclusivamente para fins pessoais e não comerciais, de acordo com os termos deste EULA.
                </p>
              </section>

              <section id="restrictions">
                <h2 className="text-2xl font-bold">3. Restrições</h2>
                <p>Você concorda em não:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modificar, traduzir, adaptar ou criar obras derivadas do Software;</li>
                  <li>Copiar, distribuir, sublicenciar, alugar, vender ou transferir o Software a terceiros;</li>
                  <li>Fazer engenharia reversa, descompilar ou desmontar o Software;</li>
                  <li>Usar o Software para fins ilegais ou não autorizados.</li>
                </ul>
              </section>

              <section id="ownership">
                <h2 className="text-2xl font-bold">4. Propriedade</h2>
                <p>
                  O Software é licenciado, não vendido. O MedQuiz e seus licenciadores retêm todos os direitos, títulos e interesses sobre o Software,
                  incluindo todos os direitos autorais, marcas comerciais e outros direitos de propriedade intelectual.
                </p>
              </section>

              <section id="updates">
                <h2 className="text-2xl font-bold">5. Atualizações</h2>
                <p>
                  Podemos fornecer atualizações, upgrades ou correções para o Software a nosso critério. Este EULA regerá qualquer atualização,
                  salvo se tal atualização for acompanhada por um EULA separado.
                </p>
              </section>

              <section id="termination">
                <h2 className="text-2xl font-bold">6. Rescisão</h2>
                <p>
                  Este EULA permanecerá em vigor até ser rescindido. Seus direitos sob esta licença terminarão automaticamente se você não cumprir
                  qualquer termo deste EULA. Ao término, você deve cessar todo uso do Software e excluir todas as cópias em sua posse.
                </p>
              </section>

              <section id="disclaimer">
                <h2 className="text-2xl font-bold">7. Isenção de Garantias</h2>
                <p>
                  O SOFTWARE É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA" E "CONFORME DISPONÍVEL", SEM GARANTIAS DE QUALQUER TIPO,
                  EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM DETERMINADO FIM
                  OU NÃO VIOLAÇÃO.
                </p>
              </section>

              <section id="limitation-of-liability">
                <h2 className="text-2xl font-bold">8. Limitação de Responsabilidade</h2>
                <p>
                  Em nenhuma circunstância o MedQuiz será responsável por quaisquer danos indiretos, incidentais, consequenciais ou punitivos,
                  decorrentes do uso ou incapacidade de usar o Software, mesmo se tivermos sido avisados da possibilidade de tais danos.
                </p>
              </section>

              <section id="governing-law">
                <h2 className="text-2xl font-bold">9. Lei Aplicável</h2>
                <p>
                  Este EULA será regido e interpretado de acordo com as leis da República Federativa do Brasil, sem consideração aos seus conflitos de princípios legais.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold">10. Contato</h2>
                <p>Se você tiver qualquer dúvida sobre este EULA, entre em contato conosco:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Por e-mail: marcelov.job@gmail.com</li>
                  <li>Por telefone: +595 993279335</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
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
            <Link href="/terms" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Termos</Link>
            <Link href="/privacy" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Privacidade</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
