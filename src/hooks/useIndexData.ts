
import { useState } from 'react';
import { useSectionVisibility } from '@/hooks/useSectionVisibility';
import { useOtaviaQueries } from '@/hooks/useOtaviaQueries';
import { usePdfExtraction } from '@/hooks/usePdfExtraction';
import { useIndexEventListeners } from '@/hooks/useIndexEventListeners';

export const useIndexData = () => {
  const sectionVisibility = useSectionVisibility();
  const otaviaQueries = useOtaviaQueries();
  const pdfExtraction = usePdfExtraction();
  
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  // Add event listeners for section management
  useIndexEventListeners(
    sectionVisibility.setShowMapeamento,
    sectionVisibility.setShowGestaoDeposito,
    sectionVisibility.setShowCookies,
    sectionVisibility.setShowAuditoria,
    sectionVisibility.setShowConsentimento,
    sectionVisibility.setShowVazamento,
    sectionVisibility.setShowAuditoriaDeposito,
    sectionVisibility.setShowControleAcesso,
    sectionVisibility.setShowDocumentacao,
    sectionVisibility.showSection
  );

  return {
    ...sectionVisibility,
    ...otaviaQueries,
    ...pdfExtraction,
    // Map 'error' to 'pdfError' to match IndexLayout interface
    pdfError: pdfExtraction.error,
    attachedFile,
    setAttachedFile
  };
};
