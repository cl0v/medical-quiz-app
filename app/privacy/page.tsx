import Link from "next/link"
import { Heart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
            <h1 className="mt-4 text-4xl font-bold tracking-tight">Política de Privacidade</h1>
            <p className="mt-2 text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </div>

          <div className="prose prose-slate max-w-none dark:prose-invert">
            <div className="space-y-10">
              <section id="introduction">
                <h2 className="text-2xl font-bold">1. Introdução</h2>
                <p>
                  A MedQuiz ("nós", "nosso" ou "MedQuiz") está comprometida em proteger sua privacidade. Esta Política
                  de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você
                  utiliza nosso aplicativo móvel, website e serviços relacionados (coletivamente, o "Serviço").
                </p>
                <p>
                  Por favor, leia esta Política de Privacidade cuidadosamente. Se você não concordar com os termos desta
                  Política de Privacidade, por favor não acesse ou use nosso Serviço. Ao acessar ou usar o Serviço, você
                  concorda com esta Política de Privacidade.
                </p>
              </section>

              <section id="data-collection">
                <h2 className="text-2xl font-bold">2. Informações que Coletamos</h2>
                <h3 className="text-xl font-semibold mt-4">2.1 Informações Pessoais</h3>
                <p>
                  Podemos coletar informações pessoais que você nos fornece diretamente, como quando você cria uma
                  conta, preenche um formulário, faz uma compra, ou se comunica conosco. Estas informações podem
                  incluir:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Número de telefone</li>
                  <li>Informações de pagamento (processadas por nossos provedores de pagamento terceirizados)</li>
                  <li>Informações profissionais (como especialidade médica ou instituição de ensino)</li>
                  <li>Foto de perfil (se fornecida)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">2.2 Informações de Uso</h3>
                <p>
                  Quando você utiliza nosso Serviço, podemos coletar automaticamente certas informações sobre seu
                  dispositivo e como você interage com nosso Serviço. Estas informações podem incluir:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tipo de dispositivo, sistema operacional e versão do navegador</li>
                  <li>Endereço IP e identificadores de dispositivo</li>
                  <li>Páginas visitadas e recursos utilizados</li>
                  <li>Tempo gasto no aplicativo e padrões de uso</li>
                  <li>Desempenho em quizzes e respostas a questões</li>
                  <li>Dados de localização (se você permitir)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">2.3 Cookies e Tecnologias Similares</h3>
                <p>
                  Utilizamos cookies, web beacons e tecnologias similares para coletar informações sobre como você
                  interage com nosso Serviço e para melhorar sua experiência. Você pode configurar seu navegador para
                  recusar todos ou alguns cookies, ou para alertá-lo quando websites definem ou acessam cookies.
                </p>
              </section>

              <section id="data-use">
                <h2 className="text-2xl font-bold">3. Como Usamos Suas Informações</h2>
                <p>Utilizamos as informações que coletamos para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer, manter e melhorar nosso Serviço</li>
                  <li>Processar e gerenciar sua conta e assinaturas</li>
                  <li>Personalizar sua experiência de aprendizado</li>
                  <li>Analisar como nosso Serviço é usado para melhorá-lo</li>
                  <li>Comunicar-nos com você sobre atualizações, promoções e novos recursos</li>
                  <li>Responder às suas perguntas e solicitações de suporte</li>
                  <li>Detectar, prevenir e resolver problemas técnicos e de segurança</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section id="data-sharing">
                <h2 className="text-2xl font-bold">4. Compartilhamento de Informações</h2>
                <p>Podemos compartilhar suas informações nas seguintes circunstâncias:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Provedores de Serviços:</strong> Compartilhamos informações com terceiros que nos ajudam a
                    operar, fornecer, melhorar, integrar, personalizar e dar suporte aos nossos serviços, como
                    provedores de hospedagem, processamento de pagamentos e análise de dados.
                  </li>
                  <li>
                    <strong>Conformidade Legal:</strong> Podemos divulgar suas informações quando acreditarmos, de boa
                    fé, que a divulgação é necessária para cumprir uma obrigação legal, proteger nossos direitos,
                    proteger sua segurança ou a segurança de outros, investigar fraudes ou responder a uma solicitação
                    governamental.
                  </li>
                  <li>
                    <strong>Transferências de Negócios:</strong> Se estivermos envolvidos em uma fusão, aquisição ou
                    venda de todos ou parte de nossos ativos, suas informações podem ser transferidas como parte desse
                    processo. Notificaremos você sobre qualquer mudança de controle ou uso de suas informações pessoais.
                  </li>
                  <li>
                    <strong>Com Seu Consentimento:</strong> Podemos compartilhar suas informações com terceiros quando
                    tivermos seu consentimento para fazê-lo.
                  </li>
                </ul>
                <p>
                  Não vendemos suas informações pessoais a terceiros para fins de marketing ou publicidade sem seu
                  consentimento explícito.
                </p>
              </section>

              <section id="data-security">
                <h2 className="text-2xl font-bold">5. Segurança de Dados</h2>
                <p>
                  A segurança de suas informações é importante para nós. Implementamos medidas técnicas e
                  organizacionais apropriadas para proteger suas informações contra acesso não autorizado, alteração,
                  divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou método de
                  armazenamento eletrônico é 100% seguro, e não podemos garantir sua segurança absoluta.
                </p>
                <p>
                  Mantemos procedimentos de segurança e práticas de proteção de dados consistentes com os padrões do
                  setor, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Criptografia de dados sensíveis</li>
                  <li>Controles de acesso rigorosos para informações pessoais</li>
                  <li>Monitoramento regular de sistemas para detectar vulnerabilidades</li>
                  <li>Treinamento de funcionários sobre práticas de segurança de dados</li>
                </ul>
              </section>

              <section id="data-retention">
                <h2 className="text-2xl font-bold">6. Retenção de Dados</h2>
                <p>
                  Retemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta
                  Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por
                  lei. Quando não tivermos mais necessidade legítima de processar suas informações pessoais, as
                  excluiremos ou anonimizaremos.
                </p>
                <p>
                  Se você solicitar a exclusão de sua conta, excluiremos ou anonimizaremos suas informações pessoais
                  dentro de um período razoável após a solicitação, sujeito a quaisquer obrigações legais de retenção.
                </p>
              </section>

              <section id="user-rights">
                <h2 className="text-2xl font-bold">7. Seus Direitos de Privacidade</h2>
                <p>
                  Dependendo da sua localização, você pode ter certos direitos relacionados às suas informações
                  pessoais. Estes podem incluir:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Direito de acessar as informações pessoais que temos sobre você</li>
                  <li>Direito de corrigir informações imprecisas ou incompletas</li>
                  <li>Direito de excluir suas informações pessoais</li>
                  <li>Direito de restringir ou opor-se ao processamento de suas informações</li>
                  <li>Direito à portabilidade de dados</li>
                  <li>Direito de retirar o consentimento a qualquer momento</li>
                </ul>
                <p>
                  Para exercer qualquer um desses direitos, entre em contato conosco através das informações de contato
                  fornecidas no final desta política. Responderemos à sua solicitação dentro do prazo exigido pelas leis
                  aplicáveis.
                </p>

                <h3 className="text-xl font-semibold mt-4">7.1 Lei Geral de Proteção de Dados (LGPD)</h3>
                <p>
                  Se você é residente no Brasil, a Lei Geral de Proteção de Dados (LGPD) concede a você certos direitos
                  em relação às suas informações pessoais. Estamos comprometidos em respeitar esses direitos e
                  proporcionar a você controle sobre suas informações pessoais.
                </p>
                <p>
                  Além dos direitos listados acima, a LGPD também garante o direito de ser informado sobre as entidades
                  públicas e privadas com as quais o controlador compartilhou seus dados e o direito de ser informado
                  sobre a possibilidade de não fornecer consentimento e as consequências dessa negativa.
                </p>
              </section>

              <section id="children-privacy">
                <h2 className="text-2xl font-bold">8. Privacidade de Crianças</h2>
                <p>
                  Nosso Serviço não se destina a pessoas menores de 18 anos. Não coletamos intencionalmente informações
                  pessoais de crianças menores de 18 anos. Se tomarmos conhecimento de que coletamos informações
                  pessoais de uma criança menor de 18 anos, tomaremos medidas para remover essas informações de nossos
                  servidores.
                </p>
                <p>
                  Se você é pai/mãe ou responsável legal e acredita que seu filho nos forneceu informações pessoais,
                  entre em contato conosco para que possamos tomar as medidas necessárias.
                </p>
              </section>

              <section id="international-transfers">
                <h2 className="text-2xl font-bold">9. Transferências Internacionais de Dados</h2>
                <p>
                  Suas informações podem ser transferidas e mantidas em computadores localizados fora do seu estado,
                  província, país ou outra jurisdição governamental, onde as leis de proteção de dados podem ser
                  diferentes das da sua jurisdição.
                </p>
                <p>
                  Se você está localizado fora do Brasil e escolhe nos fornecer informações, observe que transferimos os
                  dados, incluindo informações pessoais, para o Brasil e os processamos lá. Seu consentimento com esta
                  Política de Privacidade, seguido pelo envio de tais informações, representa sua concordância com essa
                  transferência.
                </p>
                <p>
                  Tomaremos todas as medidas razoavelmente necessárias para garantir que seus dados sejam tratados com
                  segurança e de acordo com esta Política de Privacidade, e nenhuma transferência de suas informações
                  pessoais ocorrerá para uma organização ou país, a menos que existam controles adequados, incluindo a
                  segurança de seus dados e outras informações pessoais.
                </p>
              </section>

              <section id="changes-to-policy">
                <h2 className="text-2xl font-bold">10. Alterações nesta Política de Privacidade</h2>
                <p>
                  Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer
                  alterações publicando a nova Política de Privacidade nesta página e, se as alterações forem
                  significativas, enviaremos uma notificação por e-mail ou através de um aviso em nosso Serviço.
                </p>
                <p>
                  Recomendamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As
                  alterações a esta Política de Privacidade são efetivas quando publicadas nesta página.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold">11. Entre em Contato Conosco</h2>
                <p>
                  Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas de
                  privacidade, entre em contato conosco:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Por e-mail: privacidade@medquiz.com.br</li>
                  <li>Por telefone: (11) 1234-5678</li>
                  <li>Por correio: Av. Paulista, 1000 - São Paulo, SP - CEP 01310-100</li>
                </ul>
                <p>
                  Nosso Encarregado de Proteção de Dados (DPO) pode ser contatado diretamente em: dpo@medquiz.com.br
                </p>
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
