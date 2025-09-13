
import React from 'react';
import WelcomeSection from "@/components/WelcomeSection";
import AIChat from "@/components/AIChat";
import ServiceCards from "@/components/ServiceCards";
import SpecialSections from "@/components/SpecialSections";
import ConformidadeAlert from "@/components/shared/alerts/ConformidadeAlert";
import DiretoriaAlert from "@/components/shared/alerts/DiretoriaAlert";

interface IndexMainContentProps {
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
  
  // Event handlers
  handleServiceClick: (serviceName: string, serviceDescription: string) => void;

  // Mode information
  currentMode?: 'flash' | 'doneda' | 'pro';
  getModeTitle?: () => string;
}

const IndexMainContent = (props: IndexMainContentProps) => {
  return (
    <div className="lg:col-span-3 space-y-6">
      <WelcomeSection />
      {/* AlertSections apenas no mobile */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ConformidadeAlert onClick={props.handleServiceClick} />
          <DiretoriaAlert onClick={props.handleServiceClick} />
        </div>
      </div>
      <AIChat 
        query={props.query} 
        setQuery={props.setQuery} 
        response={props.response} 
        isLoading={props.isLoading} 
        isLoadingGeneral={props.isLoadingGeneral} 
        isLoadingDoneda={props.isLoadingDoneda} 
        isLoadingOtavIA={props.isLoadingOtavIA} 
        selectedContext={props.selectedContext} 
        isContextMode={props.isContextMode} 
        setIsContextMode={props.setIsContextMode} 
        setSelectedContext={props.setSelectedContext} 
        attachedFile={props.attachedFile} 
        handleSendQuery={props.handleSendQuery} 
        handleDonedaQuery={props.handleDonedaQuery} 
        handleOtavIAQuery={props.handleOtavIAQuery} 
        handleFileUpload={props.handleFileUpload} 
        removeAttachedFile={props.removeAttachedFile} 
        isReadingPDF={props.isReadingPDF} 
        pdfText={props.pdfText} 
        pdfMetadata={props.pdfMetadata} 
        previewText={props.previewText} 
        extractionProgress={props.extractionProgress} 
        pdfError={props.pdfError} 
        currentMode={props.currentMode}
        getModeTitle={props.getModeTitle}
      />
      
      <SpecialSections 
        showConsentimento={props.showConsentimento}
        showVazamento={props.showVazamento}
        showMapeamento={props.showMapeamento}
        showGestaoDeposito={props.showGestaoDeposito}
        showAuditoriaDeposito={props.showAuditoriaDeposito}
        showCookies={props.showCookies}
        showAuditoria={props.showAuditoria}
        showControleAcesso={props.showControleAcesso}
        showDocumentacao={props.showDocumentacao}
        showProcessos={props.showProcessos}
        showLegislacao={props.showLegislacao}
        showFiscalizacao={props.showFiscalizacao}
        showSobreOtavia={props.showSobreOtavia}
        showAgenda={props.showAgenda}
      />
      
      <ServiceCards onServiceClick={props.handleServiceClick} />
    </div>
  );
};

export default IndexMainContent;
