
import React from 'react';
import { Card } from "@/components/ui/card";
import { X, Shield, Key, FileCheck, AlertTriangle, Settings, Users, Eye } from 'lucide-react';

interface ControleAcessoSectionProps {
  isVisible: boolean;
}

const ControleAcessoSection = ({ isVisible }: ControleAcessoSectionProps) => {
  const handleClose = () => {
    window.dispatchEvent(new CustomEvent('closeControleAcesso'));
  };

  if (!isVisible) return null;

  const sections = [
    {
      title: "1. Níveis de Acesso",
      icon: Key,
      gradient: "from-pastel-blue-dark to-pastel-blue-medium",
      delay: "100ms",
      subsections: [
        {
          subtitle: "Nível 1 - Acesso Irrestrito:",
          items: [
            "Concedido exclusivamente ao responsável direto pelo depósito."
          ]
        },
        {
          subtitle: "Nível 2 - Acesso Autorizado:",
          items: [
            "Concedido a servidores das equipes de fiscalização para a entrega de materiais, sempre acompanhados pelo responsável do depósito.",
            "Auditores internos e externos, e autoridades competentes terão acesso mediante autorização prévia da direção do órgão delegado e acompanhamento integral."
          ]
        },
        {
          subtitle: "Nível 3 - Acesso Proibido:",
          items: [
            "Válido para todos os demais servidores e público externo."
          ]
        }
      ]
    },
    {
      title: "2. Procedimentos de Entrada e Saída",
      icon: FileCheck,
      gradient: "from-blue-500 to-indigo-500",
      delay: "200ms",
      subsections: [
        {
          subtitle: "Identificação Obrigatória:",
          items: [
            "Todo indivíduo que necessitar de acesso autorizado deverá ser previamente identificado e ter sua entrada registrada."
          ]
        },
        {
          subtitle: "Registro Detalhado (Log de Acesso):",
          items: [
            "Será mantido um livro de ocorrências ou sistema eletrônico para registrar data, hora de entrada e saída, nome completo, matrícula/documento e o motivo do acesso de todas as pessoas autorizadas."
          ]
        },
        {
          subtitle: "Acompanhamento Integral:",
          items: [
            "Nenhuma pessoa, à exceção do responsável pelo depósito, poderá permanecer desacompanhada nas instalações."
          ]
        },
        {
          subtitle: "Controle de Chaves e Senhas:",
          items: [
            "As chaves ou cartões de acesso ao depósito ficarão sob a responsabilidade exclusiva do gestor nomeado, em local seguro.",
            "Senhas de sistemas de controle, se houver, são pessoais e intransferíveis."
          ]
        }
      ]
    },
    {
      title: "3. Segurança Física do Ambiente",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500",
      delay: "300ms",
      subsections: [
        {
          subtitle: "Estrutura Segura:",
          items: [
            "O depósito deve possuir portas e trancas reforçadas, e o acesso deve ser restrito.",
            "A estrutura física deve proteger os bens das intempéries, umidade e luz solar direta, conforme estipula a normativa do Inmetro."
          ]
        },
        {
          subtitle: "Sistema de Monitoramento:",
          items: [
            "Recomenda-se a instalação de um sistema de Circuito Fechado de Televisão (CFTV) nas áreas de acesso e armazenamento, com gravação contínua."
          ]
        },
        {
          subtitle: "Alarmes:",
          items: [
            "A instalação de sistemas de alarme contra intrusão é uma camada adicional de segurança fundamental."
          ]
        }
      ]
    },
    {
      title: "4. Responsabilidades do Gestor",
      icon: Users,
      gradient: "from-orange-500 to-red-500",
      delay: "400ms",
      subsections: [
        {
          subtitle: "Recebimento e Armazenamento:",
          items: [
            "Conferência e Cadastro: Receber os produtos apreendidos pelas equipes de fiscalização, conferindo se a descrição e a quantidade correspondem ao discriminado no Auto de Apreensão.",
            "Armazenamento Adequado: Acondicionar os produtos de forma organizada, em prateleiras ou paletes, evitando contato direto com paredes e o chão.",
            "Segregação: Produtos de diferentes autos de apreensão devem ser mantidos separados e claramente identificados para evitar trocas ou misturas."
          ]
        },
        {
          subtitle: "Gestão de Inventário e Documentação:",
          items: [
            "Sistema de Controle Informatizado: Manter o sistema de gestão de estoque rigorosamente atualizado com todas as entradas, movimentações internas e saídas.",
            "Auditorias Periódicas: Realizar inventários rotativos e periódicos para verificar a correspondência entre o estoque físico e os registros do sistema.",
            "Arquivo de Documentação: Manter um arquivo organizado com todos os Autos de Apreensão, Termos de Depósito, e documentos relativos à destinação final dos produtos."
          ]
        },
        {
          subtitle: "Zelo e Conservação:",
          items: [
            "Inspeção Contínua: Inspecionar regularmente as condições de armazenamento para prevenir danos, deterioração ou perecimento dos bens.",
            "Comunicação Imediata: Reportar imediatamente à chefia qualquer irregularidade, como tentativa de acesso não autorizado, danos, extravios ou qualquer outra ocorrência."
          ]
        },
        {
          subtitle: "Destinação Final:",
          items: [
            "Cumprimento de Decisões: Acompanhar o andamento dos processos administrativos e, após decisão final, executar os procedimentos para a destinação determinada.",
            "Vedação à Incorporação ou Comercialização: É estritamente proibida a incorporação de produtos apreendidos ao patrimônio do Inmetro ou a sua comercialização, conforme o Art. 10 da Lei 9.933/1999."
          ]
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
              <Shield className="w-8 h-8 text-pastel-blue-dark" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Política de Controle de Acesso</h2>
                <p className="text-sm text-gray-700">Segurança e procedimentos para acesso ao depósito de apreensões</p>
              </div>
            </div>
          </div>

          {/* Intro text */}
          <div className="mb-6 p-4 bg-gradient-to-r from-pastel-blue-light/50 to-pastel-gray-light rounded-lg border border-pastel-blue-light">
            <p className="text-gray-700 leading-relaxed">
              O acesso ao depósito de apreensões é estritamente restrito e controlado. O objetivo é prevenir o acesso não autorizado, perdas, danos ou qualquer tipo de violação dos bens cautelarmente apreendidos.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-4 sm:space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="animate-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: section.delay }}
              >
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="absolute inset-[1px] bg-white rounded-lg"></div>
                  
                  {/* Card content */}
                  <div className="relative z-10 p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      {/* Icon container */}
                      <div className={`relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br ${section.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-3 sm:space-y-4">
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pastel-blue-dark group-hover:to-pastel-blue-medium transition-all duration-300">
                          {section.title}
                        </h3>
                        
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="space-y-2">
                            <h4 className="font-semibold text-gray-800 text-sm">{subsection.subtitle}</h4>
                            <ul className="space-y-1 sm:space-y-2">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                                  <span className="inline-block w-2 h-2 bg-gradient-to-r from-pastel-blue-medium to-pastel-gray-medium rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className={`mt-3 sm:mt-4 h-0.5 bg-gradient-to-r ${section.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Responsibility section */}
          <div className="mt-6 lg:mt-8 animate-in fade-in-50 duration-700" style={{ animationDelay: "500ms" }}>
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-red-50 to-orange-50 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-red-50 to-orange-50 rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-red-700 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-red-600 group-hover:to-orange-600 transition-all duration-300">
                      Responsabilidade Legal
                    </h3>
                    <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                      <p>
                        Como fiel depositário, estou ciente da minha responsabilidade civil e administrativa. A negligência, imprudência ou o dolo na guarda e conservação dos bens pode acarretar a obrigação de indenizar o Estado ou terceiros por eventuais prejuízos, sem prejuízo de sanções administrativas disciplinares.
                      </p>
                      <p>
                        O descumprimento dos deveres pode configurar o crime de peculato, caso haja apropriação ou desvio do bem público.
                      </p>
                      <p className="font-semibold text-gray-800">
                        A adoção estrita desta política de controle e responsabilidades é a base para uma gestão segura e eficiente do depósito de apreensões, assegurando a manutenção da atenção constante e o cumprimento das obrigações legais e institucionais perante o Inmetro e a sociedade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-6 lg:mt-8 text-center animate-in fade-in-50 duration-700" style={{ animationDelay: "600ms" }}>
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-gradient-to-r from-pastel-blue-light/50 to-pastel-gray-light px-4 py-2 rounded-full border border-pastel-blue-light">
              <Shield className="w-4 h-4 text-pastel-blue-dark" />
              <span>Segurança e conformidade em todos os processos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControleAcessoSection;
