import React from 'react';
import { Card } from "@/components/ui/card";
import { X, Package, Clipboard, Archive, Tag, Search, Shield, Users, CheckCircle } from 'lucide-react';

interface GestaoDepositoSectionProps {
  isVisible: boolean;
}

const GestaoDepositoSection = ({ isVisible }: GestaoDepositoSectionProps) => {
  const handleClose = () => {
    window.dispatchEvent(new CustomEvent('closeGestaoDeposito'));
  };

  if (!isVisible) return null;

  const sections = [
    {
      title: "1. Recebimento e Registro de Produtos",
      icon: Clipboard,
      gradient: "from-blue-500 to-indigo-500",
      delay: "100ms",
      subsections: [
        {
          subtitle: "Conferência e Documentação:",
          items: [
            "Verificar se a descrição e a quantidade dos produtos apreendidos correspondem ao discriminado no Auto de Apreensão.",
            "Registrar no sistema de gestão de estoque todos os dados relevantes: número do Auto de Apreensão, data de entrada, descrição detalhada dos produtos, quantidade, estado de conservação e outros dados relevantes."
          ]
        },
        {
          subtitle: "Fotografias:",
          items: [
            "Anexar fotografias dos produtos ao registro no sistema, para documentar o estado em que foram recebidos."
          ]
        }
      ]
    },
    {
      title: "2. Armazenamento Adequado",
      icon: Archive,
      gradient: "from-pastel-blue-dark to-pastel-blue-medium",
      delay: "200ms",
      subsections: [
        {
          subtitle: "Organização e Identificação:",
          items: [
            "Acondicionar os produtos de forma organizada, em prateleiras ou paletes, evitando contato direto com paredes e o chão.",
            "Identificar cada lote de produtos com etiquetas contendo o número do Auto de Apreensão, a data de entrada e a descrição resumida dos produtos."
          ]
        },
        {
          subtitle: "Segregação:",
          items: [
            "Manter os produtos de diferentes Autos de Apreensão separados e claramente identificados para evitar trocas ou misturas."
          ]
        },
        {
          subtitle: "Condições Ambientais:",
          items: [
            "Garantir que o ambiente de armazenamento seja adequado para a conservação dos produtos, controlando a temperatura, a umidade e a iluminação."
          ]
        }
      ]
    },
    {
      title: "3. Gestão de Estoque e Inventário",
      icon: Tag,
      gradient: "from-emerald-500 to-teal-500",
      delay: "300ms",
      subsections: [
        {
          subtitle: "Sistema de Controle Informatizado:",
          items: [
            "Manter o sistema de gestão de estoque rigorosamente atualizado com todas as entradas, movimentações internas e saídas.",
            "Utilizar o sistema para gerar relatórios de estoque, controlar o tempo de permanência dos produtos no depósito e identificar os produtos que precisam ser destinados."
          ]
        },
        {
          subtitle: "Inventários Periódicos:",
          items: [
            "Realizar inventários rotativos e periódicos para verificar a correspondência entre o estoque físico e os registros do sistema.",
            "Investigar e corrigir as divergências encontradas."
          ]
        }
      ]
    },
    {
      title: "4. Destinação Final",
      icon: Search,
      gradient: "from-orange-500 to-red-500",
      delay: "400ms",
      subsections: [
        {
          subtitle: "Acompanhamento de Processos:",
          items: [
            "Acompanhar o andamento dos processos administrativos e judiciais relacionados aos produtos apreendidos.",
            "Manter contato com as autoridades competentes para obter informações sobre a destinação final dos produtos."
          ]
        },
        {
          subtitle: "Execução da Destinação:",
          items: [
            "Após a decisão final, executar os procedimentos para a destinação determinada: destruição, doação, leilão, etc.",
            "Documentar todos os procedimentos de destinação."
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
              <Package className="w-10 h-10 text-pastel-blue-dark" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Gestão do Depósito de Apreensões</h2>
                <p className="text-sm text-gray-700">Controle e organização de produtos apreendidos em fiscalizações</p>
              </div>
            </div>
          </div>

          {/* Intro text */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <p className="text-gray-700 leading-relaxed">
              Esta seção detalha os procedimentos para a gestão eficiente do depósito de apreensões, desde o recebimento e registro dos produtos até a sua destinação final, garantindo a segurança, a organização e o controle de estoque.
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
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                          {section.title}
                        </h3>
                        
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="space-y-2">
                            <h4 className="font-semibold text-gray-800 text-sm">{subsection.subtitle}</h4>
                            <ul className="space-y-1 sm:space-y-2">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                                  <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
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

          {/* Conclusion */}
          <div className="mt-6 lg:mt-8 animate-in fade-in-50 duration-700" style={{ animationDelay: "500ms" }}>
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-blue-700 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      Segurança e Conformidade
                    </h3>
                    <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                      <p>
                        A gestão eficiente do depósito de apreensões é fundamental para garantir a segurança dos produtos apreendidos, a conformidade com as normas legais e a transparência dos processos.
                      </p>
                      <p className="font-semibold text-gray-800">
                        Ao seguir os procedimentos detalhados nesta seção, o Inmetro assegura a correta destinação dos produtos apreendidos e a proteção dos interesses da sociedade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-6 lg:mt-8 text-center animate-in fade-in-50 duration-700" style={{ animationDelay: "600ms" }}>
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full border border-blue-200">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Processos seguros e transparentes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestaoDepositoSection;
