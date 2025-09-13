
import { useState } from 'react';

export const useSectionVisibility = () => {
  const [showMapeamento, setShowMapeamento] = useState(false);
  const [showGestaoDeposito, setShowGestaoDeposito] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [showAuditoria, setShowAuditoria] = useState(false);
  const [showConsentimento, setShowConsentimento] = useState(false);
  const [showVazamento, setShowVazamento] = useState(false);
  const [showAuditoriaDeposito, setShowAuditoriaDeposito] = useState(false);
  const [showControleAcesso, setShowControleAcesso] = useState(false);
  const [showDocumentacao, setShowDocumentacao] = useState(false);
  const [showProcessos, setShowProcessos] = useState(false);
  const [showLegislacao, setShowLegislacao] = useState(false);
  const [showFiscalizacao, setShowFiscalizacao] = useState(false);
  const [showYoutubeBubble, setShowYoutubeBubble] = useState(false);
  const [showSobreOtavia, setShowSobreOtavia] = useState(false);
  const [showAgenda, setShowAgenda] = useState(false);

  const hideAllSections = () => {
    setShowMapeamento(false);
    setShowGestaoDeposito(false);
    setShowCookies(false);
    setShowAuditoria(false);
    setShowConsentimento(false);
    setShowVazamento(false);
    setShowAuditoriaDeposito(false);
    setShowControleAcesso(false);
    setShowDocumentacao(false);
    setShowProcessos(false);
    setShowLegislacao(false);
    setShowFiscalizacao(false);
    setShowYoutubeBubble(false);
    setShowSobreOtavia(false);
    setShowAgenda(false);
  };

  const showSection = (sectionName: string) => {
    hideAllSections();
    switch (sectionName) {
      case 'mapeamento':
        setShowMapeamento(true);
        break;
      case 'gestaoDeposito':
        setShowGestaoDeposito(true);
        break;
      case 'cookies':
        setShowCookies(true);
        break;
      case 'auditoria':
        setShowAuditoria(true);
        break;
      case 'consentimento':
        setShowConsentimento(true);
        break;
      case 'vazamento':
        setShowVazamento(true);
        break;
      case 'auditoriaDeposito':
        setShowAuditoriaDeposito(true);
        break;
      case 'controleAcesso':
        setShowControleAcesso(true);
        break;
      case 'documentacao':
        setShowDocumentacao(true);
        break;
      case 'processos':
        setShowProcessos(true);
        break;
      case 'legislacao':
        setShowLegislacao(true);
        break;
      case 'fiscalizacao':
        setShowFiscalizacao(true);
        break;
      case 'youtubeBubble':
        setShowYoutubeBubble(true);
        break;
      case 'sobreOtavia':
        setShowSobreOtavia(true);
        break;
      case 'agenda':
        setShowAgenda(true);
        break;
    }
  };

  return {
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
    setShowProcessos,
    setShowLegislacao,
    setShowFiscalizacao,
    setShowYoutubeBubble,
    setShowSobreOtavia,
    setShowAgenda,
    hideAllSections,
    showSection
  };
};
