
import React from 'react';
import { Card } from "@/components/ui/card";
import { X, Cookie, Shield, Settings, Eye, FileText, Users, CheckCircle } from 'lucide-react';

interface CookiesSectionProps {
  isVisible: boolean;
}

const CookiesSection = ({ isVisible }: CookiesSectionProps) => {
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Fechando seção de cookies');
    window.dispatchEvent(new CustomEvent('closeCookies'));
  };

  if (!isVisible) return null;

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
              <Cookie className="w-10 h-10 text-pastel-blue-dark" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Política de Cookies</h2>
                <p className="text-sm text-gray-700">Gestão e controle de cookies e tecnologias similares</p>
              </div>
            </div>
          </div>

          {/* Intro text */}
          <div className="mb-6 p-4 bg-gradient-to-r from-amber-50 to-red-50 rounded-lg border border-orange-200">
            <p className="text-gray-700 leading-relaxed">
              Esta política de cookies descreve como utilizamos cookies e tecnologias similares para coletar e armazenar informações quando você visita nosso site.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-4 sm:space-y-6">
            {/* Section 1 */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-amber-500 to-red-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-red-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-amber-600 group-hover:to-red-600 transition-all duration-300">
                      Tipos de Cookies que Utilizamos
                    </h3>
                    <div className="space-y-2">
                      <ul className="space-y-1 sm:space-y-2">
                        <li className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                          <span className="inline-block w-2 h-2 bg-gradient-to-r from-amber-400 to-red-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Cookies Necessários: Essenciais para o funcionamento do site, como autenticação e segurança.
                        </li>
                        <li className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                          <span className="inline-block w-2 h-2 bg-gradient-to-r from-amber-400 to-red-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Cookies de Desempenho: Coletam informações sobre como você usa o site, como páginas visitadas e erros.
                        </li>
                        <li className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                          <span className="inline-block w-2 h-2 bg-gradient-to-r from-amber-400 to-red-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Cookies de Funcionalidade: Permitem que o site se lembre de suas escolhas, como idioma e região.
                        </li>
                        <li className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                          <span className="inline-block w-2 h-2 bg-gradient-to-r from-amber-400 to-red-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Cookies de Publicidade: Utilizados para exibir anúncios relevantes para você.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Card>

            {/* Section 2 */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-amber-500 to-red-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-red-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-amber-600 group-hover:to-red-600 transition-all duration-300">
                      Como Controlar Cookies
                    </h3>
                    <div className="space-y-2">
                      <ul className="space-y-1 sm:space-y-2">
                        <li className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                          <span className="inline-block w-2 h-2 bg-gradient-to-r from-amber-400 to-red-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Você pode controlar e/ou excluir cookies como desejar.
                        </li>
                        <li className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                          <span className="inline-block w-2 h-2 bg-gradient-to-r from-amber-400 to-red-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Para mais detalhes, consulte aboutcookies.org.
                        </li>
                        <li className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                          <span className="inline-block w-2 h-2 bg-gradient-to-r from-amber-400 to-red-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Você pode excluir todos os cookies que já estão no seu computador e configurar a maioria dos navegadores para impedir que os cookies sejam salvos.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Card>

            {/* Section 3 */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/80 hover:from-white hover:to-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>
              
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-amber-500 to-red-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-red-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-amber-600 group-hover:to-red-600 transition-all duration-300">
                      Mais Informações
                    </h3>
                    <div className="space-y-2">
                      <ul className="space-y-1 sm:space-y-2">
                        <li className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                          <span className="inline-block w-2 h-2 bg-gradient-to-r from-amber-400 to-red-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Esperamos que esta política tenha esclarecido as questões sobre o uso de cookies.
                        </li>
                        <li className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex items-start">
                          <span className="inline-block w-2 h-2 bg-gradient-to-r from-amber-400 to-red-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Se ainda houver dúvidas, entre em contato conosco.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-6 lg:mt-8 text-center animate-in fade-in-50 duration-700" style={{ animationDelay: "600ms" }}>
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-gradient-to-r from-amber-50 to-red-50 px-4 py-2 rounded-full border border-orange-200">
              <Cookie className="w-4 h-4 text-orange-600" />
              <span>Transparência e controle no uso de cookies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesSection;
