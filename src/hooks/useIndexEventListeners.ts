import { useEffect } from 'react';

export const useIndexEventListeners = (
  setShowMapeamento: (show: boolean) => void,
  setShowGestaoDeposito: (show: boolean) => void,
  setShowCookies: (show: boolean) => void,
  setShowAuditoria: (show: boolean) => void,
  setShowConsentimento: (show: boolean) => void,
  setShowVazamento: (show: boolean) => void,
  setShowAuditoriaDeposito: (show: boolean) => void,
  setShowControleAcesso: (show: boolean) => void,
  setShowDocumentacao: (show: boolean) => void,
  showSection: (sectionName: string) => void
) => {
  useEffect(() => {
    const handleCloseMapeamento = () => setShowMapeamento(false);
    const handleCloseGestaoDeposito = () => setShowGestaoDeposito(false);
    const handleCloseCookies = () => setShowCookies(false);
    const handleCloseAuditoria = () => setShowAuditoria(false);
    const handleCloseConsentimento = () => setShowConsentimento(false);
    const handleCloseVazamento = () => setShowVazamento(false);
    const handleCloseAuditoriaDeposito = () => setShowAuditoriaDeposito(false);
    const handleCloseControleAcesso = () => setShowControleAcesso(false);
    const handleCloseDocumentacao = () => setShowDocumentacao(false);
    const handleCloseProcessos = () => {
      showSection(''); // Hide all sections
    };
    const handleCloseLegislacao = () => {
      showSection(''); // Hide all sections
    };
    const handleCloseFiscalizacao = () => {
      showSection(''); // Hide all sections
    };
    const handleCloseSobreOtavia = () => {
      showSection(''); // Hide all sections
    };
    const handleCloseAgenda = () => {
      showSection(''); // Hide all sections
    };
    
    const handleShowAuditoria = () => {
      showSection('auditoria');
      setTimeout(() => {
        const auditoriaSection = document.querySelector('[data-auditoria-section]');
        if (auditoriaSection) {
          auditoriaSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    };
    
    const handleShowDocumentacao = () => {
      showSection('documentacao');
      setTimeout(() => {
        const documentacaoSection = document.querySelector('[data-documentacao-section]');
        if (documentacaoSection) {
          documentacaoSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    };

    const handleShowProcessos = () => {
      showSection('processos');
      setTimeout(() => {
        const processosSection = document.querySelector('[data-processos-section]');
        if (processosSection) {
          processosSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    };

    const handleShowLegislacao = () => {
      showSection('legislacao');
      setTimeout(() => {
        const legislacaoSection = document.querySelector('[data-legislacao-section]');
        if (legislacaoSection) {
          legislacaoSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    };

    const handleShowFiscalizacao = () => {
      showSection('fiscalizacao');
      setTimeout(() => {
        const fiscalizacaoSection = document.querySelector('[data-fiscalizacao-section]');
        if (fiscalizacaoSection) {
          fiscalizacaoSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    };

    const handleShowSobreOtavia = () => {
      showSection('sobreOtavia');
      setTimeout(() => {
        const sobreOtaviaSection = document.querySelector('[data-sobre-otavia-section]');
        if (sobreOtaviaSection) {
          sobreOtaviaSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    };

    const handleShowAgenda = () => {
      showSection('agenda');
      setTimeout(() => {
        const agendaSection = document.querySelector('[data-agenda-section]');
        if (agendaSection) {
          agendaSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    };

    window.addEventListener('closeMapeamento', handleCloseMapeamento);
    window.addEventListener('closeGestaoDeposito', handleCloseGestaoDeposito);
    window.addEventListener('closeCookies', handleCloseCookies);
    window.addEventListener('closeAuditoria', handleCloseAuditoria);
    window.addEventListener('closeConsentimento', handleCloseConsentimento);
    window.addEventListener('closeVazamento', handleCloseVazamento);
    window.addEventListener('closeAuditoriaDeposito', handleCloseAuditoriaDeposito);
    window.addEventListener('closeControleAcesso', handleCloseControleAcesso);
    window.addEventListener('closeDocumentacao', handleCloseDocumentacao);
    window.addEventListener('closeProcessos', handleCloseProcessos);
    window.addEventListener('closeLegislacao', handleCloseLegislacao);
    window.addEventListener('closeFiscalizacao', handleCloseFiscalizacao);
    window.addEventListener('closeSobreOtavia', handleCloseSobreOtavia);
    window.addEventListener('closeAgenda', handleCloseAgenda);
    window.addEventListener('showAuditoria', handleShowAuditoria);
    window.addEventListener('showDocumentacao', handleShowDocumentacao);
    window.addEventListener('showProcessos', handleShowProcessos);
    window.addEventListener('showLegislacao', handleShowLegislacao);
    window.addEventListener('showFiscalizacao', handleShowFiscalizacao);
    window.addEventListener('showSobreOtavia', handleShowSobreOtavia);
    window.addEventListener('showAgenda', handleShowAgenda);

    return () => {
      window.removeEventListener('closeMapeamento', handleCloseMapeamento);
      window.removeEventListener('closeGestaoDeposito', handleCloseGestaoDeposito);
      window.removeEventListener('closeCookies', handleCloseCookies);
      window.removeEventListener('closeAuditoria', handleCloseAuditoria);
      window.removeEventListener('closeConsentimento', handleCloseConsentimento);
      window.removeEventListener('closeVazamento', handleCloseVazamento);
      window.removeEventListener('closeAuditoriaDeposito', handleCloseAuditoriaDeposito);
      window.removeEventListener('closeControleAcesso', handleCloseControleAcesso);
      window.removeEventListener('closeDocumentacao', handleCloseDocumentacao);
      window.removeEventListener('closeProcessos', handleCloseProcessos);
      window.removeEventListener('closeLegislacao', handleCloseLegislacao);
      window.removeEventListener('closeFiscalizacao', handleCloseFiscalizacao);
      window.removeEventListener('closeSobreOtavia', handleCloseSobreOtavia);
      window.removeEventListener('closeAgenda', handleCloseAgenda);
      window.removeEventListener('showAuditoria', handleShowAuditoria);
      window.removeEventListener('showDocumentacao', handleShowDocumentacao);
      window.removeEventListener('showProcessos', handleShowProcessos);
      window.removeEventListener('showLegislacao', handleShowLegislacao);
      window.removeEventListener('showFiscalizacao', handleShowFiscalizacao);
      window.removeEventListener('showSobreOtavia', handleShowSobreOtavia);
      window.removeEventListener('showAgenda', handleShowAgenda);
    };
  }, [setShowMapeamento, setShowGestaoDeposito, setShowCookies, setShowAuditoria, setShowConsentimento, setShowVazamento, setShowAuditoriaDeposito, setShowControleAcesso, setShowDocumentacao, showSection]);
};
