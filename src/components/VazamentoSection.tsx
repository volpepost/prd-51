
import React from 'react';
import { Card } from "@/components/ui/card";
import { X, AlertTriangle, Shield, Clock, FileText, Phone, Users, CheckCircle, Eye, Bell, Lock, Search, BookOpen, Mail } from 'lucide-react';

interface VazamentoSectionProps {
  isVisible: boolean;
}

const VazamentoSection = ({ isVisible }: VazamentoSectionProps) => {
  const handleClose = () => {
    window.dispatchEvent(new CustomEvent('closeVazamento'));
  };

  if (!isVisible) return null;

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
              <AlertTriangle className="w-10 h-10 text-pastel-blue-dark" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Protocolo de Vazamento de Dados</h2>
                <p className="text-sm text-gray-700">Procedimentos para detecção, contenção e resposta a incidentes de segurança</p>
              </div>
            </div>
          </div>

          {/* Intro text */}
          <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              Um incidente de segurança é qualquer evento adverso — confirmado ou sob suspeita — relacionado à violação da confidencialidade, integridade ou disponibilidade de dados pessoais, tais como:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Vazamento de dados por e-mail, redes sociais ou sistemas;
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Acesso não autorizado a dados pessoais;
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Perda ou roubo de dispositivos com informações pessoais;
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Exclusão acidental ou indevida de dados.
              </li>
            </ul>
          </div>

          {/* Emergency Alert */}
          <div className="mb-6 p-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg border-2 border-red-300">
            <div className="flex items-center space-x-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-700">🚨 Etapas imediatas em caso de incidente</h3>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-4 sm:space-y-6">
            {/* Section 1: Detecção e registro */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-red-600 group-hover:to-orange-600 transition-all duration-300">
                      1. Detecção e registro
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Identifique o tipo de incidente e registre imediatamente:
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Data e hora do ocorrido;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Sistemas ou arquivos afetados;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Quem detectou;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Descrição resumida da situação.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Card>

            {/* Section 2: Notificação interna */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-600 group-hover:to-yellow-600 transition-all duration-300">
                      2. Notificação interna
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Comunique imediatamente:
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        A Coordenação de Segurança da Informação (CSI);
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        O Encarregado de Dados (DPO) do Inmetro;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        A área técnica responsável pelos dados afetados.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Card>

            {/* Section 3: Conter o incidente */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-lime-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-lime-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-yellow-600 group-hover:to-lime-600 transition-all duration-300">
                      3. Conter o incidente
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Solicite apoio técnico para:
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-yellow-400 to-lime-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Interromper acessos indevidos;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-yellow-400 to-lime-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Isolar os sistemas afetados;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-yellow-400 to-lime-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Evitar novos vazamentos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-yellow-500 to-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Card>

            {/* Section 4: Avaliar riscos */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-lime-500 to-green-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-500 to-green-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-lime-600 group-hover:to-green-600 transition-all duration-300">
                      4. Avaliar riscos
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Avaliamos os seguintes pontos:
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-lime-400 to-green-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Que tipos de dados foram expostos? (pessoais ou sensíveis);
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-lime-400 to-green-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        A quem pertencem os dados? (cidadãos, servidores, empresas);
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-lime-400 to-green-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Pode haver danos aos titulares? (discriminação, fraude, constrangimento);
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-lime-400 to-green-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        O incidente ainda está em curso?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-lime-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Card>

            {/* Section 5: Ação corretiva */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-600 group-hover:to-teal-600 transition-all duration-300">
                      5. Ação corretiva
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Corrigir a vulnerabilidade identificada;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Reforçar controles de acesso ou backups;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Atualizar sistemas de segurança, se aplicável.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-green-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Card>

            {/* Section 6: Comunicação à ANPD e aos titulares */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-teal-600 group-hover:to-blue-600 transition-all duration-300">
                      6. Comunicação à ANPD e aos titulares
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Se o incidente for significativo, o Encarregado do Inmetro deve:
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Notificar a Autoridade Nacional de Proteção de Dados (ANPD) em até 2 dias úteis;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Informar os titulares de dados afetados, com linguagem clara e acessível.
                      </p>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-semibold text-blue-800 mb-2">Critérios de significância:</p>
                      <div className="space-y-1">
                        <p className="text-xs text-blue-700 flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          Risco relevante aos direitos dos titulares;
                        </p>
                        <p className="text-xs text-blue-700 flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          Envolvimento de dados sensíveis ou em larga escala.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Card>

            {/* Section 7: Registro e lições aprendidas */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue-medium to-pastel-blue-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-pastel-blue-dark to-pastel-blue-medium shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-dark to-pastel-blue-medium rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pastel-blue-dark group-hover:to-pastel-blue-medium transition-all duration-300">
                      7. Registro e lições aprendidas
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-pastel-blue-medium to-pastel-blue-light rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Documente todo o processo em um Relatório de Incidente;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-pastel-blue-medium to-pastel-blue-light rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Adote ações preventivas para evitar reincidência;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-pastel-blue-medium to-pastel-blue-light rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Atualize rotinas e o Manual com aprendizados do caso.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-pastel-blue-medium to-pastel-blue-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Card>
          </div>

          {/* Modelo de registro */}
          <div className="mt-6 lg:mt-8 animate-in fade-in-50 duration-700" style={{ animationDelay: "400ms" }}>
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-gray-50 to-blue-50 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue-dark to-pastel-blue-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-pastel-blue-dark to-pastel-blue-medium shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-blue-700 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pastel-blue-dark group-hover:to-pastel-blue-medium transition-all duration-300">
                      📂 Modelo de registro de incidente (anexo ao manual)
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-blue-100">
                            <th className="border border-blue-200 p-2 text-left font-semibold text-blue-800">Item</th>
                            <th className="border border-blue-200 p-2 text-left font-semibold text-blue-800">Informação</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="border border-blue-200 p-2 font-medium">Data e hora do incidente</td>
                            <td className="border border-blue-200 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-blue-200 p-2 font-medium">Quem identificou</td>
                            <td className="border border-blue-200 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-blue-200 p-2 font-medium">Tipo de dado afetado</td>
                            <td className="border border-blue-200 p-2">( ) Pessoal / ( ) Sensível / ( ) Ambos</td>
                          </tr>
                          <tr>
                            <td className="border border-blue-200 p-2 font-medium">Quantidade de titulares</td>
                            <td className="border border-blue-200 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-blue-200 p-2 font-medium">Riscos identificados</td>
                            <td className="border border-blue-200 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-blue-200 p-2 font-medium">Medidas adotadas</td>
                            <td className="border border-blue-200 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-blue-200 p-2 font-medium">Responsável pelo tratamento</td>
                            <td className="border border-blue-200 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-blue-200 p-2 font-medium">Foi comunicado à ANPD?</td>
                            <td className="border border-blue-200 p-2">( ) Sim / ( ) Não – Justifique</td>
                          </tr>
                          <tr>
                            <td className="border border-blue-200 p-2 font-medium">Titulares foram informados?</td>
                            <td className="border border-blue-200 p-2">( ) Sim / ( ) Não – Justifique</td>
                          </tr>
                          <tr>
                            <td className="border border-blue-200 p-2 font-medium">Status do incidente</td>
                            <td className="border border-blue-200 p-2">( ) Em apuração / ( ) Resolvido / ( ) Monitoramento contínuo</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Boas práticas */}
          <div className="mt-6 lg:mt-8 animate-in fade-in-50 duration-700" style={{ animationDelay: "500ms" }}>
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-green-700 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                      ✅ Boas práticas para evitar incidentes
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Evite enviar dados pessoais por e-mail sem criptografia;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Não compartilhe senhas ou credenciais de acesso;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Bloqueie a tela do computador ao se ausentar;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Faça backups periódicos;
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Denuncie imediatamente qualquer suspeita de incidente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-6 lg:mt-8 text-center animate-in fade-in-50 duration-700" style={{ animationDelay: "600ms" }}>
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-gradient-to-r from-red-50 to-orange-50 px-4 py-2 rounded-full border border-red-200">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Protocolo de resposta a incidentes - Inmetro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VazamentoSection;
