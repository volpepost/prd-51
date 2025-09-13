
import React from 'react';
import YouTubeBubble from "@/components/YouTubeBubble";
import SiteStructureHeader from "./SiteStructureHeader";
import SiteStructureFooter from "./SiteStructureFooter";
import MainContentArea from "./MainContentArea";
import SidebarWrapper from "./SidebarWrapper";

interface SiteStructureContentProps {
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
  showYoutubeBubble: boolean;
  showSobreOtavia: boolean;
  showAgenda: boolean;

  // Event handlers
  handleServiceClick: (serviceName: string, serviceDescription: string) => void;
  handleQuestionClick: (questionTitle: string, question: string) => void;
  handleCloseYoutube: () => void;
  onDebugClick: (event: React.MouseEvent, title: string, description: string) => void;
}

const SiteStructureContent = (props: SiteStructureContentProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-pink-900 to-purple-700">
      <SiteStructureHeader 
        onDebugClick={props.onDebugClick} 
        onServiceClick={props.handleServiceClick}
      />

      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <MainContentArea
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
              handleServiceClick={props.handleServiceClick}
              onDebugClick={props.onDebugClick}
            />

            <SidebarWrapper
              handleQuestionClick={props.handleQuestionClick}
              onDebugClick={props.onDebugClick}
            />
          </div>
        </div>
      </div>

      <SiteStructureFooter onDebugClick={props.onDebugClick} />

      <YouTubeBubble 
        isVisible={props.showYoutubeBubble} 
        onClose={props.handleCloseYoutube} 
      />
    </div>
  );
};

export default SiteStructureContent;
