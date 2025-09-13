
import React from 'react';
import { Card } from "@/components/ui/card";
import { X, Settings, FileText, Database, Share2, Archive, Trash2, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

interface ProcessosSectionProps {
  isVisible: boolean;
}

const ProcessosSection = ({ isVisible }: ProcessosSectionProps) => {
  const handleClose = () => {
    window.dispatchEvent(new CustomEvent('closeProcessos'));
  };

  if (!isVisible) return null;

  const fases = [
    {
      title: "Fase 1: Planejamento e Coleta",
      subtitle: "A Abertura do \"Processo\"",
      icon: FileText,
      gradient: "from-blue-500 to-indigo-500",
      delay: "100ms",
      description: "É a porta de entrada do dado em nossa instituição. Tudo começa aqui.",
      content: "É o momento em que solicitamos dados de um cidadão ou de um representante de empresa, seja para a verificação de um taxímetro, a autuação por uma irregularidade, o cadastro de um laboratório ou o processo de um servidor.",
      perguntas: [
        "Finalidade e Interesse Público: Por que precisamos deste dado? Ele é essencial para a execução de nossa competência institucional (poder de polícia administrativo, fiscalização, etc.)?",
        "Base Legal: Qual a nossa autorização legal? Diferente do setor privado, raramente usaremos o \"consentimento\".",
        "Necessidade: Estamos coletando o mínimo de dados necessários?"
      ],
      acoes: [
        "Justifique a Coleta: Em qualquer formulário ou sistema novo, o campo de dado pessoal deve ter sua finalidade documentada.",
        "Identifique a Base Legal Correta: Sempre associe a coleta de dados à nossa competência legal.",
        "Transparência: Nossos formulários e sites devem informar ao cidadão por que seus dados estão sendo pedidos."
      ]
    },
    {
      title: "Fase 2: Armazenamento e Uso",
      subtitle: "A Tramitação do \"Processo\"",
      icon: Database,
      gradient: "from-pastel-blue-dark to-pastel-blue-medium",
      delay: "200ms",
      description: "O dado está em nossos sistemas (SGPE, sistemas de gestão de frotas, rede interna) ou em nossos arquivos físicos.",
      content: "É o manuseio diário do dado para cumprir nossas funções.",
      perguntas: [
        "Segurança: Nossas redes, sistemas e armários de arquivos são seguros?",
        "Acesso Restrito: Quem tem acesso a esse processo ou a essa planilha?",
        "Uso Correto: O dado coletado para a verificação de uma balança está sendo usado apenas para essa finalidade?"
      ],
      acoes: [
        "Controle de Acesso: Garanta que seu login e senha não sejam compartilhados.",
        "Cuidado com o Manuseio: Evite imprimir documentos com dados pessoais desnecessariamente.",
        "Perfis de Acesso: Os perfis de acesso aos sistemas devem ser limitados à função de cada servidor."
      ]
    },
    {
      title: "Fase 3: Compartilhamento",
      subtitle: "A Comunicação entre Órgãos",
      icon: Share2,
      gradient: "from-pastel-blue-dark to-pastel-blue-medium",
      delay: "300ms",
      description: "Frequentemente, precisamos compartilhar dados com outros entes públicos ou, em alguns casos, com fornecedores.",
      content: "É o envio de dados para fora do IMETRO-SC.",
      perguntas: [
        "Enviar dados de um processo ao Tribunal de Contas do Estado (TCE/SC) ou ao Ministério Público.",
        "Compartilhar informações com o IPEM de outro estado para uma fiscalização conjunta.",
        "Publicar informações no Portal da Transparência, anonimizando os dados pessoais.",
        "Enviar dados a um fornecedor (operador), sempre com um contrato que garanta a segurança."
      ],
      acoes: [
        "Formalize o Compartilhamento: O envio de dados deve ser feito via sistemas oficiais e com a devida justificativa.",
        "Garanta a Finalidade: Ao compartilhar, devemos assegurar que o outro órgão também utilizará o dado para uma finalidade pública legítima."
      ]
    },
    {
      title: "Fase 4: Retenção",
      subtitle: "O Arquivamento do \"Processo\"",
      icon: Archive,
      gradient: "from-red-500 to-orange-500",
      delay: "400ms",
      description: "Dados públicos não podem ser guardados para sempre, nem apagados a qualquer hora. Seguimos regras de arquivologia.",
      content: "É o período que devemos manter um documento ou dado guardado.",
      perguntas: [
        "Tabela de Temporalidade de Documentos: Este é o documento oficial que define por quanto tempo cada tipo de processo deve ser guardado.",
        "Considera prazos legais e prescricionais para definição dos períodos de guarda."
      ],
      acoes: [
        "Consulte a Tabela de Temporalidade: Antes de pensar em eliminar qualquer documento, verifique o prazo de guarda definido.",
        "Não Guarde \"Para Sempre\": Evite manter cópias de trabalho em seu computador pessoal por tempo indeterminado."
      ]
    },
    {
      title: "Fase 5: Eliminação",
      subtitle: "O Descarte Formal do \"Processo\"",
      icon: Trash2,
      gradient: "from-red-500 to-orange-500",
      delay: "500ms",
      description: "Quando o prazo de guarda definido na Tabela de Temporalidade termina, o documento deve ser formalmente descartado.",
      content: "É a destruição segura e permanente de dados e documentos, seguindo os procedimentos arquivísticos.",
      perguntas: [],
      acoes: [
        "Siga o Procedimento Formal: A eliminação de documentos é um ato administrativo formal, geralmente realizado pela comissão responsável.",
        "Descarte Seguro: Documentos físicos devem ser fragmentados. Dados digitais devem ser apagados de forma que não possam ser recuperados."
      ]
    }
  ];

  const processosEssenciais = [
    {
      titulo: "Direitos do Cidadão",
      descricao: "As solicitações de acesso, correção ou informação sobre o tratamento de dados devem ser direcionadas à nossa Ouvidoria, que é o canal oficial para atender o cidadão."
    },
    {
      titulo: "Incidentes de Segurança",
      descricao: "Caso identifique um possível vazamento de dados, comunique imediatamente seu superior e o nosso Encarregado de Dados (DPO) para que as medidas cabíveis sejam tomadas."
    }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/50 relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        </button>

        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-light/10 via-pastel-blue-medium/5 to-pastel-gray-light/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pastel-blue-light via-pastel-blue-medium to-pastel-gray-medium"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="backdrop-blur-md bg-gradient-to-r from-pastel-blue-light/20 via-pastel-blue-medium/20 to-pastel-gray-medium/20 border-b border-white/30 p-6 -m-4 sm:-m-6 lg:-m-8 mb-6 lg:mb-8 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <Settings className="w-10 h-10 text-pastel-blue-dark" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">As 5 Fases do Ciclo de Vida do Dado Pessoal no IMETRO-SC</h2>
                <p className="text-sm text-gray-700">Fluxos de proteção e tratamento de dados pessoais</p>
              </div>
            </div>
          </div>

          {/* Intro text */}
          <div className="mb-6 p-4 bg-gradient-to-r from-pastel-blue-light/50 to-pastel-gray-light rounded-lg border border-pastel-blue-light">
            <p className="text-gray-700 leading-relaxed">
              Compreender o ciclo de vida dos dados pessoais é fundamental para garantir a conformidade com a LGPD em todas as atividades do IMETRO-SC. Cada fase possui características específicas e exige cuidados particulares.
            </p>
          </div>

          {/* Fases */}
          <div className="space-y-4 sm:space-y-6">
            {fases.map((fase, index) => (
              <div
                key={index}
                className="animate-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: fase.delay }}
              >
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${fase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="absolute inset-[1px] bg-white rounded-lg"></div>
                  
                  {/* Card content */}
                  <div className="relative z-10 p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      {/* Icon container */}
                      <div className={`relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br ${fase.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <fase.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${fase.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-3 sm:space-y-4">
                        <div>
                          <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pastel-blue-dark group-hover:to-pastel-blue-medium transition-all duration-300">
                            {fase.title}
                          </h3>
                          <h4 className="text-sm text-gray-600 font-medium italic">{fase.subtitle}</h4>
                        </div>
                        
                        <p className="text-gray-700 text-sm leading-relaxed font-medium">
                          {fase.description}
                        </p>
                        
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {fase.content}
                        </p>

                        {fase.perguntas.length > 0 && (
                          <div className="space-y-2">
                            <h5 className="font-semibold text-gray-800 text-sm">Perguntas-Chave:</h5>
                            <ul className="space-y-1">
                              {fase.perguntas.map((pergunta, perguntaIndex) => (
                                <li key={perguntaIndex} className="text-gray-600 text-sm leading-relaxed flex items-start">
                                  <span className="inline-block w-2 h-2 bg-gradient-to-r from-pastel-blue-medium to-pastel-gray-medium rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                  {pergunta}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {fase.acoes.length > 0 && (
                          <div className="space-y-2">
                            <h5 className="font-semibold text-gray-800 text-sm">Ações Práticas no IMETRO-SC:</h5>
                            <ul className="space-y-1">
                              {fase.acoes.map((acao, acaoIndex) => (
                                <li key={acaoIndex} className="text-gray-600 text-sm leading-relaxed flex items-start">
                                  <span className="inline-block w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                  {acao}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className={`mt-3 sm:mt-4 h-0.5 bg-gradient-to-r ${fase.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Processos Essenciais section */}
          <div className="mt-8 animate-in fade-in-50 duration-700" style={{ animationDelay: "600ms" }}>
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className="font-bold text-emerald-700 text-base sm:text-lg">
                      Processos Essenciais em nossa Rotina
                    </h3>
                    <div className="space-y-3">
                      {processosEssenciais.map((processo, index) => (
                        <div key={index} className="bg-white/60 rounded-lg p-3 border border-emerald-200">
                          <h4 className="font-semibold text-emerald-800 text-sm mb-2">{processo.titulo}</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{processo.descricao}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to action */}
          <div className="mt-6 lg:mt-8 animate-in fade-in-50 duration-700" style={{ animationDelay: "700ms" }}>
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-blue-700 text-base sm:text-lg">
                      Compromisso com a Proteção de Dados
                    </h3>
                    <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                      <p>
                        A aplicação rigorosa destes processos garante que o IMETRO-SC mantenha os mais altos padrões de proteção de dados pessoais, respeitando os direitos dos cidadãos e cumprindo integralmente a Lei Geral de Proteção de Dados.
                      </p>
                      <p className="font-semibold text-gray-800">
                        Cada servidor tem papel fundamental neste ciclo de proteção, contribuindo para a segurança e privacidade dos dados sob nossa responsabilidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-6 lg:mt-8 text-center animate-in fade-in-50 duration-700" style={{ animationDelay: "800ms" }}>
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-gradient-to-r from-pastel-blue-light/50 to-pastel-gray-light px-4 py-2 rounded-full border border-pastel-blue-light">
              <Settings className="w-4 h-4 text-pastel-blue-dark" />
              <span>Processos LGPD - IMETRO-SC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessosSection;
