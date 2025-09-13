
import React from 'react';
import IndexMainContent from "@/components/index/IndexMainContent";
import IndexSidebar from "@/components/index/IndexSidebar";

interface IndexLayoutGridProps {
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
  handleQuestionClick: (questionTitle: string, question: string) => void;

  // Mode information
  currentMode?: 'flash' | 'doneda' | 'pro';
  getModeTitle?: () => string;
}

const IndexLayoutGrid = (props: IndexLayoutGridProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <IndexMainContent
        showMapeamento={props.showMapeamento}
        showGestaoDeposito={props.showGestaoDeposito}
        showCookies={props.showCookies}
        showAuditoria={props.showAuditoria}
        showConsentimento={props.showConsentimento}
        showVazamento={props.showVazamento}
        showAuditoriaDeposito={props.showAuditoriaDeposito}
        showControleAcesso={props.showControleAcesso}
        showDocumentacao={props.showDocumentacao}
        showProcessos={props.showProcessos}
        showLegislacao={props.showLegislacao}
        showFiscalizacao={props.showFiscalizacao}
        showSobreOtavia={props.showSobreOtavia}
        showAgenda={props.showAgenda}
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
        handleServiceClick={props.handleServiceClick}
        currentMode={props.currentMode}
        getModeTitle={props.getModeTitle}
      />

      <IndexSidebar onQuestionClick={props.handleQuestionClick} />
    </div>
  );
};

export default IndexLayoutGrid;
