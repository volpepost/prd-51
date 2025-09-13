import React from 'react';
import { Card } from "@/components/ui/card";
import { X, Scale, FileText, Shield, Package, AlertTriangle, Truck, Users } from 'lucide-react';

interface LegislacaoSectionProps {
  isVisible: boolean;
}

const LegislacaoSection = ({ isVisible }: LegislacaoSectionProps) => {
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Fechando seção de legislação');
    window.dispatchEvent(new CustomEvent('closeLegislacao'));
  };

  if (!isVisible) return null;

  const sections = [
    {
      title: "1. Recebimento e Identificação",
      icon: FileText,
      gradient: "from-blue-500 to-indigo-500",
      delay: "100ms",
      subsections: [
        {
          subtitle: "Registro Detalhado:",
          items: [
            "Ao receber os produtos apreendidos, devo realizar um registro minucioso, conforme o auto de apreensão, incluindo a descrição do item, quantidade, características (modelo, marca, número de série, etc.), e o motivo da apreensão."
          ]
        },
        {
          subtitle: "Sistema Informatizado:",
          items: [
            "É crucial ter um sistema informatizado para cadastrar os produtos, monitorar seu tratamento e garantir sua rastreabilidade até a destinação final. Isso facilita o acesso rápido às informações e o controle do fluxo."
          ]
        },
        {
          subtitle: "Documento de Recebimento:",
          items: [
            "Emitir um documento formal de recebimento que ateste o ingresso dos produtos no depósito."
          ]
        }
      ]
    },
    {
      title: "2. Armazenamento e Conservação",
      icon: Package,
      gradient: "from-green-500 to-emerald-500",
      delay: "200ms",
      subsections: [
        {
          subtitle: "Acesso Restrito:",
          items: [
            "O depósito deve ter acesso restrito a pessoas autorizadas para evitar extravios, danos ou manipulações indevidas."
          ]
        },
        {
          subtitle: "Localização Identificada:",
          items: [
            "Cada item ou lote deve ter sua localização de armazenamento claramente identificada, tanto fisicamente quanto no sistema."
          ]
        },
        {
          subtitle: "Condições Adequadas:",
          items: [
            "Os produtos não devem ter contato direto com paredes e chão e precisam ser protegidos contra intempéries (sol, chuva, umidade excessiva) e variações extremas de temperatura. Isso é crucial para preservar sua condição, especialmente se houver a possibilidade de perícia ou de destinação para outros fins (doação, etc., se permitido)."
          ]
        },
        {
          subtitle: "Separar Irregulares:",
          items: [
            "Produtos apreendidos por não conformidade devem ser mantidos em local separado e claramente identificados como irregulares, garantindo que não sejam confundidos com produtos regulares ou reintroduzidos no mercado de forma indevida."
          ]
        }
      ]
    },
    {
      title: "3. Nomeação de Responsável",
      icon: Users,
      gradient: "from-pastel-blue-dark to-pastel-blue-medium",
      delay: "300ms",
      subsections: [
        {
          subtitle: "Responsável Formal:",
          items: [
            "Deve haver um funcionário formalmente nomeado como responsável pelo depósito, com funções claras de recebimento, cadastro, controle de acesso e monitoramento."
          ]
        }
      ]
    },
    {
      title: "4. Destinação Final",
      icon: Truck,
      gradient: "from-orange-500 to-red-500",
      delay: "400ms",
      subsections: [
        {
          subtitle: "Vedação de Comercialização, Incorporação ou Doação Irregular:",
          items: [
            "A lei veda a comercialização de produtos apreendidos. Além disso, é proibida a incorporação ao patrimônio do Inmetro e a doação de produtos que apresentem qualquer suspeita quanto à não observância dos requisitos técnicos de segurança. A doação só é permitida para produtos certificados ou com laudo atestando a conformidade com as normas de segurança."
          ]
        },
        {
          subtitle: "Destruição:",
          items: [
            "A destruição é uma destinação comum para produtos que não atendem aos requisitos de segurança. É preciso seguir os procedimentos legais para a destruição, mantendo registros detalhados por um período mínimo de 5 anos."
          ]
        },
        {
          subtitle: "Transparência:",
          items: [
            "Promover a transparência e a responsabilidade nas atividades de gestão dos bens apreendidos, incluindo auditorias externas, quando aplicável."
          ]
        }
      ]
    }
  ];

  const logisticaSections = [
    {
      title: "Organização do Espaço Físico",
      icon: Package,
      items: [
        "Layout Eficiente: O layout do depósito deve ser planejado para otimizar o fluxo de entrada, armazenamento e saída dos produtos.",
        "Setorização: Dividir o depósito em setores para diferentes tipos de produtos (eletrônicos, têxteis, alimentos não perecíveis, etc.).",
        "Paletização e Empilhamento: Utilizar paletes e técnicas de empilhamento seguras para otimizar o espaço vertical e proteger os produtos."
      ]
    },
    {
      title: "Gestão de Estoque (Inventário)",
      icon: FileText,
      items: [
        "Controle Rigoroso: Manter um controle de inventário preciso e em tempo real através de sistemas de gerenciamento (WMS).",
        "Inventários Periódicos: Realizar contagens físicas regulares para garantir conformidade entre estoque físico e sistema.",
        "Auditoria de Registros: A Portaria Inmetro 70/2014 preconiza o registro de dados e auditoria dos processos."
      ]
    },
    {
      title: "Segurança e Recursos Humanos",
      icon: Shield,
      items: [
        "Física: Implementar sistemas robustos como controle de acesso biométrico, câmeras de vigilância e alarmes.",
        "Contra Incêndios: Dispor de equipamentos adequados (extintores, sprinklers) e manter rotas de fuga desobstruídas.",
        "Treinamento: A equipe deve ser bem treinada nas políticas, procedimentos e legislação do Inmetro."
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
          type="button"
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
              <Scale className="w-8 h-8 text-pastel-blue-dark" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Cuidados Essenciais Segundo a Legislação do Inmetro</h2>
                <p className="text-sm text-gray-700">(com base na Portaria Inmetro nº 70/2014, entre outras)</p>
              </div>
            </div>
          </div>

          {/* Intro text */}
          <div className="mb-6 p-4 bg-gradient-to-r from-pastel-blue-light/50 to-pastel-gray-light rounded-lg border border-pastel-blue-light">
            <p className="text-gray-700 leading-relaxed">
              A legislação do Inmetro, em especial a Portaria Inmetro nº 70/2014, estabelece diretrizes claras para o manejo de produtos apreendidos. Os principais pontos que devo observar são:
            </p>
          </div>

          {/* Main sections */}
          <div className="space-y-4 sm:space-y-6 mb-8">
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
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-orange-600 transition-all duration-300">
                          {section.title}
                        </h3>
                        
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="space-y-2">
                            <h4 className="font-semibold text-gray-800 text-sm">{subsection.subtitle}</h4>
                            <ul className="space-y-1 sm:space-y-2">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                                  <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
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

          {/* Logística Section */}
          <div className="mt-8 animate-in fade-in-50 duration-700" style={{ animationDelay: "500ms" }}>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Conhecimentos sobre Logística em Depósito</h2>
              <p className="text-gray-700 leading-relaxed">
                Além da legislação específica do Inmetro, a aplicação de boas práticas de logística é fundamental para a eficiência e segurança do depósito de produtos apreendidos:
              </p>
            </div>

            <div className="grid gap-4 md:gap-6">
              {logisticaSections.map((section, index) => (
                <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-green-50 to-blue-50 rounded-lg"></div>
                  
                  <div className="relative z-10 p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-300">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                              <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Conclusion section */}
          <div className="mt-8 animate-in fade-in-50 duration-700" style={{ animationDelay: "600ms" }}>
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-pastel-blue-light/50 to-pastel-gray-light shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue-medium to-pastel-blue-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-pastel-blue-light/50 to-pastel-gray-light rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-pastel-blue-dark to-pastel-blue-medium shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-pastel-blue-dark text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pastel-blue-dark group-hover:to-pastel-blue-medium transition-all duration-300">
                      Compromisso Legal e Técnico
                    </h3>
                    <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                      <p>
                        Ao integrar esses cuidados legais e logísticos, garanto que o depósito de produtos apreendidos funcione de forma eficiente, segura e em total conformidade com a legislação, protegendo os interesses públicos e a integridade dos bens sob minha responsabilidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-6 lg:mt-8 text-center animate-in fade-in-50 duration-700" style={{ animationDelay: "700ms" }}>
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-gradient-to-r from-pastel-blue-light/50 to-pastel-gray-light px-4 py-2 rounded-full border border-pastel-blue-light">
              <Scale className="w-4 h-4 text-blue-600" />
              <span>Conformidade legal e eficiência operacional</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegislacaoSection;
