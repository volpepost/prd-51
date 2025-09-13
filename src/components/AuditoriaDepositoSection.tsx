
import React from 'react';
import { Card } from "@/components/ui/card";
import { X, Search, CheckCircle, AlertTriangle, FileText, Shield, Users, Settings, Eye, Clock } from 'lucide-react';

interface AuditoriaDepositoSectionProps {
  isVisible: boolean;
}

const AuditoriaDepositoSection = ({ isVisible }: AuditoriaDepositoSectionProps) => {
  const handleClose = () => {
    window.dispatchEvent(new CustomEvent('closeAuditoriaDeposito'));
  };

  if (!isVisible) return null;

  const lembretes = [
    {
      numero: "1",
      titulo: "Ver Para Crer: A Prática é o Teste Final",
      icon: Eye,
      gradient: "from-blue-500 to-indigo-500",
      items: [
        {
          subtitulo: "Olhar Crítico Diário:",
          texto: "Não aceite apenas que algo \"está sendo feito\". Pergunte-se: \"Como posso verificar isso? Há um registro? Alguém pode me mostrar na prática?\"."
        },
        {
          subtitulo: "LGPD na Ponta do Lápis:",
          texto: "No depósito, isso significa checar se os procedimentos para identificar e segregar bens com dados pessoais (celulares, notebooks, HDs) estão sendo rigorosamente seguidos."
        }
      ]
    },
    {
      numero: "2",
      titulo: "Os Dados Pessoais em Bens Apreendidos: Uma Atenção Redobrada",
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      items: [
        {
          subtitulo: "Risco Elevado:",
          texto: "Lembre-se que bens apreendidos podem conter uma riqueza de dados pessoais (fotos, documentos, contatos, dados financeiros). O tratamento desses dados exige um cuidado exponencialmente maior."
        },
        {
          subtitulo: "Procedimentos Específicos:",
          texto: "Verifique se existem e se são aplicados procedimentos claros para: Identificação (como os bens com dados pessoais são identificados na entrada), Isolamento/Segregação (armazenamento em áreas seguras e separadas), Acesso Restrito (controle rigoroso de quem acessa), e Anonimização/Eliminação (processo para anonimizar ou eliminar dados antes do descarte)."
        }
      ]
    },
    {
      numero: "3",
      titulo: "Conformidade Documental e Operacional",
      icon: FileText,
      gradient: "from-pastel-blue-medium to-pastel-gray-medium",
      items: [
        {
          subtitulo: "Dupla Checagem:",
          texto: "A auditoria não olha apenas os documentos (suas políticas e registros). Ela compara os documentos com a realidade. Se a política diz que só pessoas autorizadas acessam a área de dados, a auditoria vai verificar os registros de acesso e, se possível, a rotina no local."
        },
        {
          subtitulo: "Rastreabilidade Total:",
          texto: "Você precisa ser capaz de rastrear o ciclo de vida do bem apreendido desde a sua entrada até a sua saída, e, mais importante, o que aconteceu com os dados pessoais contidos nele. Isso envolve registros detalhados de cada etapa."
        }
      ]
    },
    {
      numero: "4",
      titulo: "Prevenção e Resposta a Incidentes",
      icon: AlertTriangle,
      gradient: "from-orange-500 to-red-500",
      items: [
        {
          subtitulo: "Ameaças Constantes:",
          texto: "Depósitos são alvos potenciais para incidentes. Pense em riscos como furto, extravio, acesso não autorizado."
        },
        {
          subtitulo: "Plano de Resposta:",
          texto: "A auditoria verifica se existe um plano claro para responder a incidentes (vazamento de dados, extravio de bens com dados) e se a equipe está treinada para agir. O tempo de resposta é crucial para mitigar danos."
        },
        {
          subtitulo: "Câmeras e Monitoramento:",
          texto: "Há sistemas de monitoramento adequados? Os registros são mantidos por tempo suficiente?"
        }
      ]
    },
    {
      numero: "5",
      titulo: "Melhoria Contínua: O Ciclo Que Nunca Para",
      icon: Settings,
      gradient: "from-emerald-500 to-teal-500",
      items: [
        {
          subtitulo: "Não é Punição:",
          texto: "A auditoria não é para encontrar culpados, mas para identificar oportunidades de aprimoramento."
        },
        {
          subtitulo: "Ação Corretiva:",
          texto: "Cada achado da auditoria deve gerar um plano de ação claro, com responsáveis e prazos. As deficiências identificadas devem ser corrigidas."
        },
        {
          subtitulo: "Cultura de Vigilância:",
          texto: "Incorpore a mentalidade de auditoria no dia a dia. Encoraje a equipe a identificar e reportar possíveis falhas ou melhorias nos processos de tratamento de dados nos bens apreendidos."
        }
      ]
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
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pastel-blue-light via-pastel-blue-medium to-pastel-gray-light"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="backdrop-blur-md bg-gradient-to-r from-pastel-blue-light/20 via-pastel-blue-medium/20 to-pastel-gray-light/20 border-b border-white/30 p-6 -m-4 sm:-m-6 lg:-m-8 mb-6 lg:mb-8 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <Search className="w-10 h-10 text-pastel-blue-dark" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Auditoria do Depósito</h2>
                <p className="text-sm text-gray-700">O que você DEVE LEMBRAR TODOS OS DIAS para aplicar a Auditoria no Depósito de Apreensões</p>
              </div>
            </div>
          </div>

          {/* Lembretes diários */}
          <div className="space-y-6">
            {lembretes.map((lembrete, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                <div className={`absolute inset-0 bg-gradient-to-r ${lembrete.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute inset-[1px] bg-white rounded-lg"></div>
                
                <div className="relative z-10 p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br ${lembrete.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <lembrete.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${lembrete.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    </div>
                    
                    <div className="flex-1 space-y-3 sm:space-y-4">
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pastel-blue-dark group-hover:to-pastel-blue-medium transition-all duration-300">
                        {lembrete.numero}. {lembrete.titulo}
                      </h3>
                      
                      <div className="space-y-3">
                        {lembrete.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="bg-gray-50/60 rounded-lg p-3 border border-gray-200/50">
                            <h4 className="font-semibold text-gray-800 text-sm mb-2">{item.subtitulo}</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{item.texto}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`mt-3 sm:mt-4 h-0.5 bg-gradient-to-r ${lembrete.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </Card>
            ))}
          </div>

          {/* Resumo final */}
          <div className="mt-8 animate-in fade-in-50 duration-700">
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-green-700 text-base sm:text-lg">
                      Resumo Final em Uma Frase:
                    </h3>
                    <div className="bg-white/60 rounded-lg p-4 border border-green-200">
                      <p className="text-gray-800 text-sm leading-relaxed font-medium">
                        A Auditoria é o seu <strong>check-up de saúde da LGPD no depósito</strong>, validando que as políticas são seguidas na prática, os dados em bens apreendidos são tratados com <strong>máxima segurança</strong> e que a sua organização está pronta para <strong>proteger e responder</strong> a qualquer desafio, garantindo a <strong>melhoria contínua</strong> da sua conformidade.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-3 border border-green-300">
                      <p className="text-green-800 text-sm font-semibold text-center">
                        Lembre-se diariamente: auditoria é vigilância constante e melhoria contínua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-6 lg:mt-8 text-center animate-in fade-in-50 duration-700">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-gradient-to-r from-pastel-blue-light/50 to-pastel-gray-light px-4 py-2 rounded-full border border-pastel-blue-light">
              <Shield className="w-4 h-4 text-pastel-blue-dark" />
              <span>Auditoria contínua: verificação, validação e melhoria constante</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditoriaDepositoSection;
