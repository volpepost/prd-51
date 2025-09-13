
import React from 'react';
import WelcomeSection from "@/components/WelcomeSection";
import AIChat from "@/components/AIChat";
import ServiceCards from "@/components/ServiceCards";
import SpecialSections from "@/components/SpecialSections";
import DebugSection from "./DebugSection";
import ConformidadeAlert from "@/components/shared/alerts/ConformidadeAlert";
import DiretoriaAlert from "@/components/shared/alerts/DiretoriaAlert";

interface MainContentAreaProps {
  // AI Chat props
  query: string;
  setQuery: (query: string) => void;
  response: string;
  isLoading: boolean;
  isLoadingGeneral: boolean;
  isLoadingDoneda: boolean;
  isLoadingOtavIA: boolean;
  selectedContext: string;
  isContextMode: boolean;
  setIsContextMode: (mode: boolean) => void;
  setSelectedContext: (context: string) => void;
  
  // File handling
  attachedFile: File | null;
  handleSendQuery: () => Promise<void>;
  handleDonedaQuery: () => Promise<void>;
  handleOtavIAQuery: () => Promise<void>;
  handleFileUpload: (file: File) => Promise<void>;
  removeAttachedFile: () => void;
  
  // PDF extraction
  isReadingPDF: boolean;
  pdfText: string | null;
  pdfMetadata: any;
  previewText: string;
  extractionProgress: number;
  pdfError: string | null;

  // Special sections visibility
  showMapeamento: boolean;
  showGestaoDeposito: boolean;
  showCookies: boolean;
  showAuditoria: boolean;
  showConsentimento: boolean;
  showVazamento: boolean;
  showAuditoriaDeposito: boolean;
  showControleAcesso: boolean;
  showDocumentacao: boolean;
  showProcessos: boolean;
  showLegislacao: boolean;
  showFiscalizacao: boolean;
  showSobreOtavia: boolean;
  showAgenda: boolean;

  // Event handlers
  handleServiceClick: (serviceName: string, serviceDescription: string) => void;
  onDebugClick: (event: React.MouseEvent, title: string, description: string) => void;
}

const MainContentArea = ({
  query,
  setQuery,
  response,
  isLoading,
  isLoadingGeneral,
  isLoadingDoneda,
  isLoadingOtavIA,
  selectedContext,
  isContextMode,
  setIsContextMode,
  setSelectedContext,
  attachedFile,
  handleSendQuery,
  handleDonedaQuery,
  handleOtavIAQuery,
  handleFileUpload,
  removeAttachedFile,
  isReadingPDF,
  pdfText,
  pdfMetadata,
  previewText,
  extractionProgress,
  pdfError,
  showMapeamento,
  showGestaoDeposito,
  showCookies,
  showAuditoria,
  showConsentimento,
  showVazamento,
  showAuditoriaDeposito,
  showControleAcesso,
  showDocumentacao,
  showProcessos,
  showLegislacao,
  showFiscalizacao,
  showSobreOtavia,
  showAgenda,
  handleServiceClick,
  onDebugClick
}: MainContentAreaProps) => {
  return (
    <div className="lg:col-span-3 space-y-6">
      <DebugSection
        title="Welcome Section"
        description="Seção de boas-vindas com título principal"
        onDebugClick={onDebugClick}
      >
        <WelcomeSection />
      </DebugSection>

      {/* AlertSections apenas no mobile */}
      <div className="lg:hidden">
        <DebugSection
          title="Alert Sections (Mobile Only)"
          description="Cards de alerta exibidos apenas no mobile"
          onDebugClick={onDebugClick}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ConformidadeAlert onClick={handleServiceClick} onDebugClick={onDebugClick} />
            <DiretoriaAlert onClick={handleServiceClick} onDebugClick={onDebugClick} />
          </div>
        </DebugSection>
      </div>

      <DebugSection
        title="AI Chat Section"
        description="Seção do chat com IA - formulário e contexto com resposta simulada"
        onDebugClick={onDebugClick}
      >
        <AIChat 
          query={query} 
          setQuery={setQuery} 
          response={response} 
          isLoading={isLoading} 
          isLoadingGeneral={isLoadingGeneral} 
          isLoadingDoneda={isLoadingDoneda} 
          isLoadingOtavIA={isLoadingOtavIA} 
          selectedContext={selectedContext} 
          isContextMode={isContextMode} 
          setIsContextMode={setIsContextMode} 
          setSelectedContext={setSelectedContext} 
          attachedFile={attachedFile} 
          handleSendQuery={handleSendQuery} 
          handleDonedaQuery={handleDonedaQuery} 
          handleOtavIAQuery={handleOtavIAQuery} 
          handleFileUpload={handleFileUpload} 
          removeAttachedFile={removeAttachedFile} 
          isReadingPDF={isReadingPDF} 
          pdfText={pdfText} 
          pdfMetadata={pdfMetadata} 
          previewText={previewText} 
          extractionProgress={extractionProgress} 
          pdfError={pdfError} 
        />
      </DebugSection>

      <DebugSection
        title="Special Sections"
        description="Seções especiais condicionais"
        onDebugClick={onDebugClick}
      >
        <SpecialSections 
          showConsentimento={showConsentimento}
          showVazamento={showVazamento}
          showMapeamento={showMapeamento}
          showGestaoDeposito={showGestaoDeposito}
          showAuditoriaDeposito={showAuditoriaDeposito}
          showCookies={showCookies}
          showAuditoria={showAuditoria}
          showControleAcesso={showControleAcesso}
          showDocumentacao={showDocumentacao}
          showProcessos={showProcessos}
          showLegislacao={showLegislacao}
          showFiscalizacao={showFiscalizacao}
          showSobreOtavia={showSobreOtavia}
          showAgenda={showAgenda}
        />
      </DebugSection>

      <DebugSection
        title="Service Cards"
        description="Grid de cards de serviços LGPD e Depósito"
        onDebugClick={onDebugClick}
      >
        <ServiceCards onServiceClick={handleServiceClick} />
      </DebugSection>
    </div>
  );
};

export default MainContentArea;
