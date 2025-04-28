import Link from "next/link"
import { Heart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfUsePage() {
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
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Início
              </Link>
              <Link
                href="/#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Recursos
              </Link>
              <Link
                href="/#pricing"
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
        <div className="container max-w-4xl py-12">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para a página inicial
            </Link>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">Termos de Uso</h1>
            <p className="mt-2 text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </div>

          <div className="prose prose-slate max-w-none dark:prose-invert">
            <div className="space-y-10">
              <section id="introduction">
                <h2 className="text-2xl font-bold">1. Introdução</h2>
                <p>
                  Bem-vindo aos Termos de Uso do MedQuiz ("Termos"). Estes Termos constituem um acordo legal entre você
                  e MedQuiz ("nós", "nosso" ou "MedQuiz") que rege o uso do aplicativo MedQuiz, website e serviços
                  relacionados (coletivamente, o "Serviço").
                </p>
                <p>
                  Ao acessar ou usar o Serviço, você concorda em cumprir e estar vinculado a estes Termos. Se você não
                  concordar com qualquer parte destes Termos, você não deve acessar ou usar o Serviço.
                </p>
              </section>

              <section id="service-description">
                <h2 className="text-2xl font-bold">2. Descrição do Serviço</h2>
                <p>
                  O MedQuiz é um aplicativo educacional que fornece quizzes, questões e material de estudo relacionados
                  à medicina. O Serviço é destinado a estudantes de medicina, médicos e profissionais de saúde que
                  desejam testar e aprimorar seus conhecimentos médicos.
                </p>
                <p>
                  Embora nos esforcemos para fornecer informações precisas e atualizadas, o conteúdo do MedQuiz é
                  fornecido apenas para fins educacionais e não substitui aconselhamento médico profissional,
                  diagnóstico ou tratamento.
                </p>
              </section>

              <section id="eligibility">
                <h2 className="text-2xl font-bold">3. Elegibilidade</h2>
                <p>
                  Para usar o Serviço, você deve ter pelo menos 18 anos de idade ou a maioridade legal em sua
                  jurisdição, o que for maior. Ao usar o Serviço, você declara e garante que tem idade legal para formar
                  um contrato vinculativo com o MedQuiz.
                </p>
                <p>
                  Se você estiver usando o Serviço em nome de uma organização, você declara e garante que tem autoridade
                  para vincular essa organização a estes Termos e concorda com estes Termos em nome dessa organização.
                </p>
              </section>

              <section id="accounts">
                <h2 className="text-2xl font-bold">4. Contas e Registro</h2>
                <p>
                  Para acessar determinados recursos do Serviço, você pode precisar criar uma conta. Você é responsável
                  por manter a confidencialidade de suas credenciais de conta e por todas as atividades que ocorrem sob
                  sua conta.
                </p>
                <p>
                  Você concorda em fornecer informações precisas, atuais e completas durante o processo de registro e em
                  atualizar essas informações para mantê-las precisas, atuais e completas. Se fornecermos um mecanismo
                  para atualizar suas informações, você deve atualizá-las prontamente para mantê-las precisas.
                </p>
                <p>
                  Reservamo-nos o direito de suspender ou encerrar sua conta se qualquer informação fornecida durante o
                  registro ou posteriormente se mostrar imprecisa, desatualizada ou incompleta.
                </p>
              </section>

              <section id="intellectual-property">
                <h2 className="text-2xl font-bold">5. Propriedade Intelectual</h2>
                <p>
                  O Serviço e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva
                  do MedQuiz e seus licenciadores. O Serviço é protegido por direitos autorais, marcas registradas e
                  outras leis de propriedade intelectual do Brasil e de outros países.
                </p>
                <p>
                  Nosso nome, logotipo e nomes relacionados, marcas, produtos e serviços descritos em nosso Serviço são
                  marcas registradas do MedQuiz ou de terceiros. Nada contido no Serviço deve ser interpretado como
                  concessão, por implicação, preclusão ou de outra forma, de qualquer licença ou direito de usar
                  qualquer marca registrada exibida no Serviço sem nossa permissão prévia por escrito.
                </p>
              </section>

              <section id="user-content">
                <h2 className="text-2xl font-bold">6. Conteúdo do Usuário</h2>
                <p>
                  Nosso Serviço pode permitir que você poste, vincule, armazene, compartilhe e disponibilize certas
                  informações, textos, gráficos, vídeos ou outros materiais ("Conteúdo do Usuário"). Você é responsável
                  pelo Conteúdo do Usuário que postar no ou através do Serviço, incluindo sua legalidade, confiabilidade
                  e adequação.
                </p>
                <p>Ao postar Conteúdo do Usuário no ou através do Serviço, você declara e garante que:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    O Conteúdo do Usuário é seu ou você tem o direito de usá-lo e conceder-nos os direitos e licença
                    conforme previsto nestes Termos.
                  </li>
                  <li>
                    A publicação de seu Conteúdo do Usuário no ou através do Serviço não viola os direitos de
                    privacidade, direitos de publicidade, direitos autorais, direitos contratuais ou quaisquer outros
                    direitos de qualquer pessoa.
                  </li>
                </ul>
              </section>

              <section id="restrictions">
                <h2 className="text-2xl font-bold">7. Restrições de Uso</h2>
                <p>Você concorda em não usar o Serviço:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>De qualquer maneira que viole qualquer lei ou regulamento aplicável.</li>
                  <li>
                    Para explorar, prejudicar ou tentar explorar ou prejudicar menores de qualquer forma expondo-os a
                    conteúdo inadequado ou de outra forma.
                  </li>
                  <li>
                    Para transmitir, ou procurar enviar, qualquer material publicitário ou promocional, incluindo
                    qualquer "lixo eletrônico", "spam" ou qualquer outra solicitação similar.
                  </li>
                  <li>
                    Para se passar por ou tentar se passar pelo MedQuiz, um funcionário do MedQuiz, outro usuário ou
                    qualquer outra pessoa ou entidade.
                  </li>
                  <li>
                    De qualquer maneira que possa desativar, sobrecarregar, danificar ou prejudicar o Serviço ou
                    interferir no uso do Serviço por qualquer outra parte.
                  </li>
                </ul>
              </section>

              <section id="disclaimer">
                <h2 className="text-2xl font-bold">8. Isenção de Responsabilidade</h2>
                <p>
                  O SERVIÇO É FORNECIDO "COMO ESTÁ" E "CONFORME DISPONÍVEL", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS
                  OU IMPLÍCITAS.
                </p>
                <p>
                  O MedQuiz não garante que o Serviço atenderá aos seus requisitos específicos, que o Serviço será
                  ininterrupto, oportuno, seguro ou livre de erros, que os resultados que podem ser obtidos do uso do
                  Serviço serão precisos ou confiáveis, ou que quaisquer erros no Serviço serão corrigidos.
                </p>
                <p>
                  O conteúdo médico fornecido através do Serviço é apenas para fins informativos e educacionais e não
                  constitui aconselhamento médico. O MedQuiz não é responsável por quaisquer ações tomadas com base nas
                  informações fornecidas através do Serviço.
                </p>
              </section>

              <section id="limitation-of-liability">
                <h2 className="text-2xl font-bold">9. Limitação de Responsabilidade</h2>
                <p>
                  EM NENHUM CASO O MEDQUIZ, SEUS DIRETORES, FUNCIONÁRIOS, PARCEIROS, AGENTES, FORNECEDORES OU AFILIADOS
                  SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS,
                  INCLUINDO, SEM LIMITAÇÃO, PERDA DE LUCROS, DADOS, USO, BOA VONTADE OU OUTRAS PERDAS INTANGÍVEIS,
                  RESULTANTES DE:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Seu acesso ou uso ou incapacidade de acessar ou usar o Serviço.</li>
                  <li>Qualquer conduta ou conteúdo de terceiros no Serviço.</li>
                  <li>Conteúdo obtido do Serviço.</li>
                  <li>Acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo.</li>
                </ul>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold">10. Alterações nos Termos</h2>
                <p>
                  Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a
                  qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias de
                  antecedência antes que quaisquer novos termos entrem em vigor.
                </p>
                <p>
                  O que constitui uma alteração material será determinado a nosso exclusivo critério. Ao continuar a
                  acessar ou usar nosso Serviço após essas revisões se tornarem efetivas, você concorda em estar
                  vinculado aos termos revisados. Se você não concordar com os novos termos, você não está mais
                  autorizado a usar o Serviço.
                </p>
              </section>

              <section id="governing-law">
                <h2 className="text-2xl font-bold">11. Lei Aplicável</h2>
                <p>
                  Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem levar em consideração
                  seus princípios de conflito de leis.
                </p>
                <p>
                  Nossa falha em fazer valer qualquer direito ou disposição destes Termos não será considerada uma
                  renúncia a esses direitos. Se qualquer disposição destes Termos for considerada inválida ou
                  inexequível por um tribunal, as disposições restantes destes Termos permanecerão em vigor.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold">12. Informações de Contato</h2>
                <p>Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Por e-mail: contato@medquiz.com.br</li>
                  <li>Por telefone: (11) 1234-5678</li>
                  <li>Por correio: Av. Paulista, 1000 - São Paulo, SP - CEP 01310-100</li>
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
            <Link
              href="/terms"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Termos
            </Link>
            <Link
              href="/privacy"
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
