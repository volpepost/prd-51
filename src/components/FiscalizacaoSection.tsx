
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Eye, Ban, Trash2, Clock, XCircle, X } from 'lucide-react';

interface FiscalizacaoSectionProps {
  isVisible: boolean;
}

const FiscalizacaoSection = ({ isVisible }: FiscalizacaoSectionProps) => {
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Fechando seção de fiscalização');
    window.dispatchEvent(new CustomEvent('closeFiscalizacao'));
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
              <Shield className="w-10 h-10 text-pastel-blue-dark" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Fiscalização e Sanções</h2>
                <p className="text-sm text-gray-700">Fiscalização e Sanções na LGPD: O que o Inmetro precisa saber (Particularidades no Serviço Público)</p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                A Lei Geral de Proteção de Dados Pessoais (LGPD) estabelece um conjunto robusto de direitos para os titulares de dados e, em contrapartida, deveres para as organizações que tratam esses dados. Para garantir o cumprimento da lei, a Autoridade Nacional de Proteção de Dados (ANPD) é o órgão responsável pela fiscalização e aplicação das sanções administrativas em caso de descumprimento.
              </p>
            </CardContent>
          </Card>

          {/* O Papel da ANPD */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-pastel-blue-dark">
                <Eye className="w-6 h-6" />
                O Papel da ANPD na Fiscalização
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                A ANPD possui ampla autonomia para fiscalizar as operações de tratamento de dados pessoais, e isso inclui explicitamente os órgãos e entidades do Poder Público. A fiscalização pode ocorrer de diversas formas:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-pastel-blue-light/50 p-4 rounded-lg border border-pastel-blue-light">
                  <h4 className="font-semibold text-pastel-blue-dark mb-2">Fiscalização Preventiva</h4>
                  <p className="text-sm text-gray-700">
                    A ANPD pode realizar visitas, solicitar informações, documentos e relatórios para verificar a conformidade com a LGPD, mesmo sem a ocorrência de um incidente específico.
                  </p>
                </div>
                
                <div className="bg-pastel-blue-light/50 p-4 rounded-lg border border-pastel-blue-light">
                  <h4 className="font-semibold text-pastel-blue-dark mb-2">Fiscalização Reativa</h4>
                  <p className="text-sm text-gray-700">
                    Geralmente ocorre após uma denúncia de um titular de dados, de outras autoridades ou em decorrência de um incidente de segurança.
                  </p>
                </div>
                
                <div className="bg-pastel-blue-light/50 p-4 rounded-lg border border-pastel-blue-light">
                  <h4 className="font-semibold text-pastel-blue-dark mb-2">Fiscalização por Orientação</h4>
                  <p className="text-sm text-gray-700">
                    A ANPD também atua de forma orientativa, publicando guias, resoluções e recomendações para auxiliar as organizações.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-gray-700 text-sm">
                  <strong>Durante uma fiscalização:</strong> A ANPD pode solicitar acesso a registros de operações de tratamento, relatórios de impacto à proteção de dados (RIPD), documentos que comprovem a adoção de medidas de segurança e governança, e até mesmo entrevistar servidores envolvidos no tratamento de dados.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Sanções Administrativas */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-pastel-blue-dark">
                <AlertTriangle className="w-6 h-6" />
                As Sanções Administrativas da LGPD para o Poder Público
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Em caso de descumprimento das disposições da LGPD, o Inmetro, como órgão público, estará sujeito a diversas sanções administrativas aplicadas pela ANPD. Embora as multas pecuniárias diretas não se apliquem da mesma forma aos órgãos públicos, as demais sanções são plenamente aplicáveis:
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Advertência</h4>
                    <p className="text-sm text-gray-700">Com indicação de prazo para adoção de medidas corretivas. É a sanção mais branda, aplicada em casos de infrações de menor potencial ofensivo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <Eye className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Publicização da Infração</h4>
                    <p className="text-sm text-gray-700">A infração pode ser divulgada publicamente. Esta é uma sanção de grande impacto para órgãos públicos, pois pode gerar dano severo à imagem e credibilidade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-pastel-blue-light/50 rounded-lg border border-pastel-blue-light">
                  <Ban className="w-5 h-5 text-pastel-blue-dark mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-pastel-blue-dark mb-1">Bloqueio dos Dados Pessoais</h4>
                    <p className="text-sm text-gray-700">Os dados pessoais podem ser bloqueados até a regularização, impossibilitando o tratamento e podendo paralisar serviços essenciais.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-300">
                  <Trash2 className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Eliminação dos Dados Pessoais</h4>
                    <p className="text-sm text-gray-700">Em casos mais graves, pode ser determinada a eliminação dos dados, com consequências gravíssimas se os dados forem essenciais.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-1">Suspensão Parcial do Funcionamento</h4>
                    <p className="text-sm text-gray-700">Por um período máximo de 6 meses, prorrogável por igual período, até a regularização da infração.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-100 rounded-lg border border-red-300">
                  <XCircle className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Proibição Parcial ou Total</h4>
                    <p className="text-sm text-gray-700">Esta é a sanção mais severa, podendo inviabilizar completamente determinadas operações do Inmetro.</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="text-gray-700 text-sm">
                  <strong>⚠️ Atenção:</strong> Embora as multas diretas não se apliquem aos órgãos públicos, a ANPD tem o poder de determinar que as autoridades competentes apliquem sanções administrativas e disciplinares aos servidores públicos que derem causa ao descumprimento da lei. Isso significa que a responsabilização pessoal dos servidores é uma possibilidade real.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* A Importância da Conformidade */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-pastel-blue-dark">
                <Shield className="w-6 h-6" />
                A Importância da Conformidade para o Inmetro
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Para o Inmetro, estar em conformidade com a LGPD não é apenas uma questão legal, mas um imperativo para a confiança pública e a continuidade de suas operações. O descumprimento da lei pode resultar em:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 text-sm">Danos à Reputação</h4>
                      <p className="text-xs text-gray-700">Perda de credibilidade e confiança junto aos cidadãos e outras instituições.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <Ban className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-800 text-sm">Danos Operacionais</h4>
                      <p className="text-xs text-gray-700">Bloqueio ou eliminação de dados, suspensão de atividades essenciais.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-pastel-blue-light/50 rounded-lg border border-pastel-blue-light">
                    <XCircle className="w-4 h-4 text-pastel-blue-dark mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-pastel-blue-dark text-sm">Responsabilização de Servidores</h4>
                      <p className="text-xs text-gray-700">Possibilidade de processos administrativos disciplinares para servidores envolvidos.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-300">
                    <AlertTriangle className="w-4 h-4 text-red-700 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 text-sm">Risco de Processos Judiciais</h4>
                      <p className="text-xs text-gray-700">Ações civis movidas pelos titulares lesados buscando indenização.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-gray-700 text-sm">
                  <strong>✅ Conclusão:</strong> A atenção contínua à LGPD, a implementação de boas práticas de governança e segurança da informação, e a pronta resposta a incidentes são essenciais para evitar fiscalizações e sanções, garantindo a proteção dos dados pessoais sob a responsabilidade do Inmetro e a manutenção da confiança pública em suas atividades.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FiscalizacaoSection;
