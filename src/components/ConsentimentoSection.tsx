import React from 'react';
import { Card } from "@/components/ui/card";
import { X, Shield, CheckCircle, AlertTriangle, FileText, Settings, Users, Eye, Lock, Bell, Database, User, Highlighter } from 'lucide-react';
interface ConsentimentoSectionProps {
  isVisible: boolean;
}
const ConsentimentoSection = ({
  isVisible
}: ConsentimentoSectionProps) => {
  const handleClose = () => {
    window.dispatchEvent(new CustomEvent('closeConsentimento'));
  };
  if (!isVisible) return null;
  return <div className="space-y-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/50 relative overflow-hidden">
        {/* Close button */}
        <button onClick={handleClose} className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg">
          <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        </button>

        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-light/10 via-pastel-blue-medium/5 to-pastel-gray-light/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pastel-blue-light via-pastel-blue-medium to-pastel-gray-medium"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="backdrop-blur-md bg-gradient-to-r from-pastel-blue-light/20 via-pastel-blue-medium/20 to-pastel-gray-medium/20 border-b border-white/30 p-6 -m-4 sm:-m-6 lg:-m-8 mb-6 lg:mb-8 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <Shield className="w-10 h-10 text-pastel-blue-dark" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Guia Definitivo para Implementar o Consentimento Válido LGPD</h2>
                
              </div>
            </div>
          </div>

          {/* Enhanced Intro Section */}
          <div className="mb-8 relative">
            <div className="bg-gradient-to-r from-pastel-blue-light/20 via-pastel-blue-medium/15 to-pastel-gray-light/20 p-6 rounded-xl border-2 border-pastel-blue-medium/50 shadow-lg backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-pastel-blue-dark to-pastel-blue-medium p-3 rounded-full shadow-lg">
                  <Highlighter className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-pastel-blue-light shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <span className="bg-gradient-to-r from-pastel-blue-dark to-pastel-blue-medium bg-clip-text text-transparent">
                        Por que o Consentimento é Tão Importante?
                      </span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Embora existam <strong>dez bases legais</strong> que autorizam o tratamento de dados pessoais, o <strong>consentimento</strong> é frequentemente a mais utilizada pelas organizações e, paradoxalmente, a que exige maior atenção aos detalhes técnicos e jurídicos.
                    </p>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-3 rounded-r-lg">
                      <p className="text-sm text-gray-700 font-medium">
                        <strong>Atenção:</strong> Um consentimento mal implementado pode invalidar todo o tratamento de dados, expondo sua organização a sanções da ANPD.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Os Pilares do Consentimento */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-pastel-blue-dark to-pastel-blue-medium text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900">Os Pilares do Consentimento Válido</h3>
            </div>

            <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
              <p className="text-gray-700 mb-4">Antes de qualquer implementação, sua equipe precisa entender profundamente o que a lei exige. O consentimento deve ser:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card className="p-4 border-l-4 border-green-400 bg-green-50">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Livre</h4>
                    <p className="text-sm text-gray-700">O usuário deve ter uma escolha real, sem ser pressionado ou coagido. Vincular o acesso a um serviço essencial ao consentimento para fins secundários (como marketing) invalida a "liberdade" da escolha.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-blue-400 bg-blue-50">
                <div className="flex items-start space-x-3">
                  <Eye className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Informado</h4>
                    <p className="text-sm text-gray-700">O titular precisa saber exatamente para que está consentindo. Informações genéricas não são suficientes. É preciso detalhar a finalidade específica, a duração do tratamento e como os dados serão usados.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-pastel-blue-medium bg-pastel-blue-light/50">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-pastel-blue-dark mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-pastel-blue-dark mb-2">Inequívoco</h4>
                    <p className="text-sm text-gray-700">A manifestação de vontade deve ser clara e positiva. O silêncio ou a inação do usuário não contam como consentimento. Caixas pré-marcadas (opt-out) são inválidas. O usuário deve realizar uma ação clara (opt-in).</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-orange-400 bg-orange-50">
                <div className="flex items-start space-x-3">
                  <FileText className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Para Finalidades Determinadas</h4>
                    <p className="text-sm text-gray-700">O consentimento deve ser coletado para cada finalidade específica. Um "consentimento geral" para "futuras ações de marketing" é vago e inválido. Se você quer usar o e-mail para nota fiscal e promoções, precisa de consentimentos distintos.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Section 2: Implementação Prática */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900">Passo a Passo da Implementação Prática</h3>
            </div>

            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
              <p className="text-gray-700">Siga estas etapas para construir um processo de consentimento robusto e em conformidade.</p>
            </div>

            {/* Etapa 1 */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Database className="w-5 h-5 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-900">Etapa 1: Mapeamento de Dados (Data Mapping)</h4>
              </div>
              
              <Card className="p-4 bg-gray-50 mb-4">
                <p className="text-gray-700 mb-3">Você não pode pedir consentimento se não souber o que está coletando. Faça um inventário completo:</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  <li><strong>Quais dados você coleta?</strong> (Nome, e-mail, telefone, CPF, dados de navegação, etc.)</li>
                  <li><strong>Onde você coleta?</strong> (Formulário de contato, checkout, cadastro de newsletter, cookies no site, etc.)</li>
                  <li><strong>Por que você coleta?</strong> (Qual a finalidade de cada dado? Envio do produto? Análise de perfil? Marketing direto?)</li>
                </ul>
                <div className="mt-3 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">Este mapeamento é a base de toda a sua estratégia de conformidade.</p>
                </div>
              </Card>
            </div>

            {/* Etapa 2 */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Settings className="w-5 h-5 text-pastel-blue-dark" />
                <h4 className="text-lg font-semibold text-gray-900">Etapa 2: Crie Camadas de Informação e Interfaces Claras (UI/UX)</h4>
              </div>
              
              <Card className="p-4 bg-gray-50 mb-4">
                <p className="text-gray-700 mb-3">A forma como você pede o consentimento é crucial. Evite textos jurídicos longos e confusos no momento da solicitação.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Design Centrado no Usuário</h5>
                    <p className="text-sm text-green-700">A interface deve ser limpa e fácil de entender.</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Consentimento Granular</h5>
                    <p className="text-sm text-blue-700">Ofereça opções separadas para finalidades diferentes.</p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-gray-300 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-3">Exemplo Prático de um Formulário de Cadastro:</h5>
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <h6 className="font-bold text-lg mb-4 text-center">Crie sua conta</h6>
                    <div className="space-y-3 mb-4">
                      <input type="text" placeholder="Nome Completo" className="w-full p-2 border rounded" disabled />
                      <input type="email" placeholder="Seu melhor e-mail" className="w-full p-2 border rounded" disabled />
                    </div>
                    <div className="border-t pt-4">
                      <h6 className="font-semibold mb-3">Comunicações e Privacidade</h6>
                      <div className="space-y-2 text-sm">
                        <label className="flex items-start space-x-2">
                          <input type="checkbox" className="mt-1" disabled />
                          <span>Eu li e concordo com a Política de Privacidade e os Termos de Uso. <span className="text-red-600">(Necessário para o serviço)</span></span>
                        </label>
                        <label className="flex items-start space-x-2">
                          <input type="checkbox" className="mt-1" disabled />
                          <span>Sim, eu gostaria de receber e-mails com promoções e novidades exclusivas. <span className="text-gray-600">(Marketing, opcional)</span></span>
                        </label>
                        <label className="flex items-start space-x-2">
                          <input type="checkbox" className="mt-1" disabled />
                          <span>Sim, autorizo o compartilhamento dos meus dados com parceiros para receber ofertas personalizadas. <span className="text-gray-600">(Compartilhamento com terceiros, opcional)</span></span>
                        </label>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 rounded mt-4" disabled>[CADASTRAR]</button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">Por que este exemplo funciona?</h5>
                  <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                    <li><strong>Opt-in:</strong> As caixas estão desmarcadas.</li>
                    <li><strong>Granularidade:</strong> Separa o consentimento para o serviço principal, para marketing e para compartilhamento com terceiros.</li>
                    <li><strong>Informado:</strong> Links claros para a Política de Privacidade, onde as finalidades são detalhadas.</li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Etapa 3 */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-emerald-600" />
                <h4 className="text-lg font-semibold text-gray-900">Etapa 3: Gestão e Registro do Consentimento</h4>
              </div>
              
              <Card className="p-4 bg-gray-50 mb-4">
                <p className="text-gray-700 mb-3">A LGPD exige que você seja capaz de provar que obteve o consentimento válido. Você precisa de um sistema para registrar e gerenciar cada consentimento.</p>
                
                <div className="p-3 bg-yellow-100 rounded-lg mb-4">
                  <h5 className="font-semibold text-yellow-800 mb-2">O registro deve conter:</h5>
                  <ul className="list-disc list-inside text-sm text-yellow-700 space-y-1">
                    <li><strong>Quem:</strong> Identificação do titular (nome, ID de usuário, e-mail).</li>
                    <li><strong>Quando:</strong> Data e hora exatas do consentimento (timestamp).</li>
                    <li><strong>O que:</strong> Para quais finalidades específicas ele consentiu.</li>
                    <li><strong>Como:</strong> Qual foi o texto exato apresentado ao usuário no momento do aceite.</li>
                    <li><strong>Prova:</strong> A versão dos documentos (Política de Privacidade, Termos de Uso) com os quais ele concordou.</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600">Isso pode ser feito através de um banco de dados, um software de CRM ou plataformas especializadas em gestão de consentimento (CMPs).</p>
              </Card>
            </div>

            {/* Etapa 4 */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-red-600" />
                <h4 className="text-lg font-semibold text-gray-900">Etapa 4: Facilite a Revogação (Retirada do Consentimento)</h4>
              </div>
              
              <Card className="p-4 bg-gray-50 mb-4">
                <p className="text-gray-700 mb-3">O titular tem o direito de retirar seu consentimento a qualquer momento. O processo para isso deve ser tão fácil quanto foi para consentir.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-1">Painel de Privacidade</h5>
                    <p className="text-xs text-blue-700">Um local centralizado onde o usuário pode ver para que consentiu e desmarcar as opções.</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-1">Link de Descadastro</h5>
                    <p className="text-xs text-green-700">Obrigatório e visível em todos os e-mails de marketing.</p>
                  </div>
                  <div className="p-3 bg-pastel-blue-light/50 rounded-lg">
                    <h5 className="font-semibold text-pastel-blue-dark mb-1">Processo Gratuito</h5>
                    <p className="text-xs text-pastel-blue-dark/80">Não crie barreiras ou passos desnecessários para a revogação.</p>
                  </div>
                </div>

                <div className="p-3 bg-red-100 rounded-lg">
                  <p className="text-sm text-red-800 font-medium">Quando o consentimento é revogado, o tratamento dos dados para aquela finalidade deve cessar imediatamente.</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Section 3: Consequências */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900">Consequências da Não Conformidade</h3>
            </div>

            <Card className="p-4 bg-red-50 border-l-4 border-red-400">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 mb-4">Tratar dados sem um consentimento válido (quando essa é a base legal exigida) pode resultar em sanções severas da Autoridade Nacional de Proteção de Dados (ANPD), que incluem:</p>
                  
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                    <li>Advertências e pedidos de adequação.</li>
                    <li><strong>Multas de até 2% do faturamento da empresa, limitadas a R$ 50 milhões por infração.</strong></li>
                    <li>Publicização da infração, o que causa grande dano à reputação da marca.</li>
                    <li>Bloqueio ou eliminação dos dados pessoais irregulares.</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Resumo Final */}
          <div className="bg-gradient-to-r from-pastel-blue-light/50 to-pastel-gray-light p-6 rounded-lg border border-pastel-blue-light">
            <div className="flex items-start space-x-3">
              <Shield className="w-8 h-8 text-pastel-blue-dark mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Resumo Final</h3>
                <p className="text-gray-700 leading-relaxed">
                  Implementar o consentimento válido é mais do que adicionar uma caixa de seleção. É um exercício de transparência e respeito pelo usuário, que envolve mapeamento de processos, design de interface inteligente, gestão de registros e garantia dos direitos do titular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ConsentimentoSection;