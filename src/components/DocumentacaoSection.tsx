
import React from 'react';
import { Card } from "@/components/ui/card";
import { X, FileText, AlertCircle, CheckCircle, Shield, Eye, Clock, Users } from 'lucide-react';

interface DocumentacaoSectionProps {
  isVisible: boolean;
}

const DocumentacaoSection = ({ isVisible }: DocumentacaoSectionProps) => {
  const handleClose = () => {
    window.dispatchEvent(new CustomEvent('closeDocumentacao'));
  };

  if (!isVisible) return null;

  const lembretes = [
    {
      numero: "1",
      titulo: "Tudo o que Você Faz com Dados Pessoais Deve Ser Escrito!",
      icon: AlertCircle,
      gradient: "from-red-500 to-orange-500",
      items: [
        {
          subtitulo: "Registro é Prova:",
          texto: "Não basta fazer o certo, é preciso registrar que você fez o certo. Em caso de fiscalização ou incidente, a documentação é sua principal defesa."
        },
        {
          subtitulo: "Clareza e Acessibilidade:",
          texto: "As políticas e relatórios devem ser escritos de forma clara, objetiva e acessível. Evite o \"juridiquês\" excessivo, especialmente para documentos destinados aos titulares dos dados."
        }
      ]
    },
    {
      numero: "2",
      titulo: "Políticas: As Regras do Jogo",
      icon: Shield,
      gradient: "from-blue-500 to-indigo-500",
      items: [
        {
          subtitulo: "Guia Interno e Externo:",
          texto: "Pense nas políticas como o \"manual de instruções\" da sua empresa sobre dados pessoais. Elas definem as regras para todos que lidam com dados (colaboradores, parceiros) e informam os titulares sobre como seus dados são tratados."
        },
        {
          subtitulo: "Consistência é Chave:",
          texto: "As políticas devem ser aplicadas de forma consistente em todas as áreas da empresa. Não adianta ter uma política de privacidade se ela não for seguida na prática."
        },
        {
          subtitulo: "Atualização Constante:",
          texto: "A LGPD é dinâmica, e sua empresa também. As políticas devem ser revisadas e atualizadas periodicamente para refletir mudanças na legislação, nos processos internos ou nas tecnologias utilizadas."
        }
      ]
    },
    {
      numero: "3",
      titulo: "Relatórios: O Diário de Bordo da Conformidade",
      icon: FileText,
      gradient: "from-pastel-blue-dark to-pastel-blue-medium",
      items: [
        {
          subtitulo: "Registro de Atividades:",
          texto: "O Registro das Operações de Tratamento de Dados Pessoais (ROTD) é como um diário detalhado. Ele lista cada tipo de dado coletado, sua finalidade, base legal, quem tem acesso, por quanto tempo é guardado, etc. É a espinha dorsal da sua documentação."
        },
        {
          subtitulo: "Avaliação de Riscos (DPIA/RIPD):",
          texto: "O Relatório de Impacto à Proteção de Dados Pessoais (RIPD ou DPIA - Data Protection Impact Assessment) é uma análise aprofundada de riscos para tratamentos de dados que podem gerar alto risco aos titulares. É como um \"check-up\" de segurança para operações mais sensíveis. Lembre-se: se a operação é nova ou envolve muitos dados sensíveis, um RIPD provavelmente será necessário."
        },
        {
          subtitulo: "Incidentes:",
          texto: "Todo incidente de segurança que envolva dados pessoais (vazamento, acesso indevido) deve ser documentado, incluindo as ações tomadas para mitigar o risco e a comunicação à ANPD e aos titulares, se aplicável."
        }
      ]
    },
    {
      numero: "4",
      titulo: "Treinamento e Conscientização: O Elo Humano",
      icon: Users,
      gradient: "from-emerald-500 to-teal-500",
      items: [
        {
          subtitulo: "Não é Só Papel:",
          texto: "A melhor documentação do mundo não serve de nada se as pessoas não a conhecem e não a aplicam. Treinamentos regulares são essenciais para garantir que todos os colaboradores entendam seu papel na proteção de dados."
        },
        {
          subtitulo: "Cultura de Privacidade:",
          texto: "A documentação é um pilar para construir uma cultura de privacidade na empresa, onde todos compreendem a importância de proteger os dados pessoais."
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
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pastel-blue-light via-pastel-blue-medium to-pastel-gray-medium"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="backdrop-blur-md bg-gradient-to-r from-pastel-blue-light/20 via-pastel-blue-medium/20 to-pastel-gray-medium/20 border-b border-white/30 p-6 -m-4 sm:-m-6 lg:-m-8 mb-6 lg:mb-8 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <FileText className="w-10 h-10 text-pastel-blue-dark" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Documentação e Políticas</h2>
                <p className="text-sm text-gray-700">O que você DEVE LEMBRAR TODOS OS DIAS para aplicar a Documentação</p>
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
                        A Documentação (Políticas e Relatórios) é a <strong>prova viva da sua conformidade</strong> com a LGPD, estabelecendo as <strong>regras claras</strong> para o tratamento de dados e <strong>registrando cada passo</strong>, garantindo sempre <strong>transparência</strong>, <strong>responsabilidade</strong> e a capacidade de <strong>demonstrar que você está no caminho certo</strong>.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-3 border border-green-300">
                      <p className="text-green-800 text-sm font-semibold text-center">
                        Mantenha a documentação sempre atualizada e acessível. Ela não é apenas burocracia, é sua segurança jurídica e operacional.
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
              <FileText className="w-4 h-4 text-pastel-blue-dark" />
              <span>Lembre-se diariamente: documentação é proteção e conformidade</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentacaoSection;
