
import React from 'react';
import { Card } from "@/components/ui/card";
import { X, Search, CheckCircle, AlertTriangle, FileText, Shield, Users, Settings } from 'lucide-react';

interface AuditoriaSectionProps {
  isVisible: boolean;
}

const AuditoriaSection = ({ isVisible }: AuditoriaSectionProps) => {
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Fechando seção de auditoria');
    window.dispatchEvent(new CustomEvent('closeAuditoria'));
  };

  if (!isVisible) return null;

  const sections = [
    {
      title: "1. Preparação da Auditoria",
      icon: Settings,
      gradient: "from-green-500 to-emerald-500",
      delay: "100ms",
      items: [
        "Definir escopo e objetivos da auditoria",
        "Formar equipe multidisciplinar (TI, Jurídico, Compliance)",
        "Elaborar cronograma detalhado",
        "Preparar checklist baseado na LGPD",
        "Comunicar início da auditoria às áreas envolvidas"
      ]
    },
    {
      title: "2. Inventário de Dados",
      icon: FileText,
      gradient: "from-blue-500 to-indigo-500",
      delay: "200ms",
      items: [
        "Mapear todos os dados pessoais coletados",
        "Identificar bases legais para cada tratamento",
        "Verificar categorias de titulares",
        "Documentar fluxos de dados",
        "Avaliar dados sensíveis e de menores"
      ]
    },
    {
      title: "3. Análise de Processos",
      icon: Users,
      gradient: "from-pastel-blue-dark to-pastel-blue-medium",
      delay: "300ms",
      items: [
        "Revisar políticas de privacidade",
        "Verificar procedimentos de coleta",
        "Analisar controles de acesso",
        "Avaliar medidas de segurança",
        "Examinar processos de exclusão"
      ]
    },
    {
      title: "4. Verificação de Conformidade",
      icon: CheckCircle,
      gradient: "from-emerald-500 to-teal-500",
      delay: "400ms",
      items: [
        "Validar consentimentos obtidos",
        "Verificar atendimento aos direitos dos titulares",
        "Analisar relatórios de impacto",
        "Revisar contratos com operadores",
        "Avaliar notificações à ANPD"
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
              <Search className="w-10 h-10 text-pastel-blue-dark" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Auditoria de Conformidade LGPD</h2>
                <p className="text-sm text-gray-700">Verificação e validação do cumprimento das normas de proteção de dados</p>
              </div>
            </div>
          </div>

          {/* Intro text */}
          <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <p className="text-gray-700 leading-relaxed">
              A auditoria de conformidade LGPD é um processo sistemático de verificação do cumprimento das obrigações legais relacionadas à proteção de dados pessoais, identificando gaps e oportunidades de melhoria.
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
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                          {section.title}
                        </h3>
                        
                        <ul className="space-y-1 sm:space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                              <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className={`mt-3 sm:mt-4 h-0.5 bg-gradient-to-r ${section.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Results section */}
          <div className="mt-6 lg:mt-8 animate-in fade-in-50 duration-700" style={{ animationDelay: "500ms" }}>
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-green-700 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                      Relatório de Auditoria
                    </h3>
                    <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                      <p>
                        <strong>Documentação dos Achados:</strong> Registrar todas as não conformidades identificadas, classificando por nível de criticidade e impacto potencial.
                      </p>
                      <p>
                        <strong>Plano de Ação:</strong> Desenvolver cronograma detalhado para correção das não conformidades, definindo responsáveis e prazos.
                      </p>
                      <p>
                        <strong>Monitoramento Contínuo:</strong> Estabelecer indicadores de conformidade e cronograma de auditorias periódicas para garantir melhoria contínua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-6 lg:mt-8 text-center animate-in fade-in-50 duration-700" style={{ animationDelay: "600ms" }}>
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-200">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Conformidade contínua com a LGPD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditoriaSection;
