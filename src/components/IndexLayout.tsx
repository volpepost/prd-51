import React from 'react';
import IndexHeader from "@/components/index/IndexHeader";
import IndexLayoutGrid from "@/components/index/IndexLayoutGrid";
import IndexFooter from "@/components/IndexFooter";

interface IndexLayoutProps {
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
  handleShowSobreOtavia: () => void;

  // Mode information
  currentMode?: 'flash' | 'doneda' | 'pro';
  getModeTitle?: () => string;
}

const IndexLayout = (props: IndexLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue-dark via-pastel-blue-dark to-pastel-blue-medium">
      <IndexHeader onServiceClick={props.handleServiceClick} />

      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <IndexLayoutGrid {...props} />
        </div>
      </div>

      <IndexFooter />
    </div>
  );
};

export default IndexLayout;
