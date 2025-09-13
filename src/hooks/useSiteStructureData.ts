
import { usePdfExtraction } from "@/hooks/usePdfExtraction";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";
import { useOtaviaQueries } from "@/hooks/useOtaviaQueries";
import { useIndexState } from "@/hooks/useIndexState";
import { useIndexEventListeners } from "@/hooks/useIndexEventListeners";
import { useDebugBubble } from "@/hooks/useDebugBubble";

export const useSiteStructureData = () => {
  const { attachedFile, setAttachedFile } = useIndexState();

  const {
    debugBubble,
    debugHighlight,
    showDebugBubble,
    closeDebugBubble
  } = useDebugBubble();

  const sectionVisibility = useSectionVisibility();
  const {
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
    showYoutubeBubble,
    showSobreOtavia,
    showAgenda,
    setShowMapeamento,
    setShowGestaoDeposito,
    setShowCookies,
    setShowAuditoria,
    setShowConsentimento,
    setShowVazamento,
    setShowAuditoriaDeposito,
    setShowControleAcesso,
    setShowDocumentacao,
    setShowYoutubeBubble,
    showSection
  } = sectionVisibility;

  const otaviaQueries = useOtaviaQueries();
  const {
    query,
    setQuery,
    response,
    setResponse,
    isLoadingGeneral,
    setIsLoadingGeneral,
    isLoadingDoneda,
    setIsLoadingDoneda,
    isLoadingOtavIA,
    setIsLoadingOtavIA,
    selectedContext,
    setSelectedContext,
    isContextMode,
    setIsContextMode,
    sendQueryToOtavia,
    buildFinalQuery,
    isLoading
  } = otaviaQueries;

  const pdfExtraction = usePdfExtraction();
  const {
    isReadingPDF,
    pdfText,
    pdfMetadata,
    previewText,
    extractionProgress,
    error: pdfError,
    extractTextFromPDF,
    reset: resetPdfState
  } = pdfExtraction;

  useIndexEventListeners(
    setShowMapeamento,
    setShowGestaoDeposito,
    setShowCookies,
    setShowAuditoria,
    setShowConsentimento,
    setShowVazamento,
    setShowAuditoriaDeposito,
    setShowControleAcesso,
    setShowDocumentacao,
    showSection
  );

  return {
    // Debug
    debugBubble,
    debugHighlight,
    showDebugBubble,
    closeDebugBubble,
    
    // File handling
    attachedFile,
    setAttachedFile,
    
    // Section visibility
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
    showYoutubeBubble,
    showSobreOtavia,
    showAgenda,
    setShowYoutubeBubble,
    
    // Queries
    query,
    setQuery,
    response,
    setResponse,
    isLoadingGeneral,
    setIsLoadingGeneral,
    isLoadingDoneda,
    setIsLoadingDoneda,
    isLoadingOtavIA,
    setIsLoadingOtavIA,
    selectedContext,
    setSelectedContext,
    isContextMode,
    setIsContextMode,
    sendQueryToOtavia,
    buildFinalQuery,
    isLoading,
    
    // PDF
    isReadingPDF,
    pdfText,
    pdfMetadata,
    previewText,
    extractionProgress,
    pdfError,
    extractTextFromPDF,
    resetPdfState,
    
    // Utils
    showSection
  };
};
