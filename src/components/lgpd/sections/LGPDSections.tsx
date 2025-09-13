
import React from 'react';
import MapeamentoSection from "@/components/MapeamentoSection";
import CookiesSection from "@/components/CookiesSection";
import AuditoriaSection from "@/components/AuditoriaSection";
import ConsentimentoSection from "@/components/ConsentimentoSection";
import VazamentoSection from "@/components/VazamentoSection";
import DocumentacaoSection from "@/components/DocumentacaoSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

interface LGPDSectionsProps {
  showConsentimento: boolean;
  showVazamento: boolean;
  showMapeamento: boolean;
  showCookies: boolean;
  showAuditoria: boolean;
  showDocumentacao: boolean;
}

const LGPDSections = ({
  showConsentimento,
  showVazamento,
  showMapeamento,
  showCookies,
  showAuditoria,
  showDocumentacao
}: LGPDSectionsProps) => {
  const hasAnySection = showConsentimento || showVazamento || showMapeamento || showCookies || showAuditoria || showDocumentacao;

  return (
    <div className="relative">
      {/* Consentimento Section */}
      <div data-consentimento-section>
        <ConsentimentoSection isVisible={showConsentimento} />
      </div>
      
      {/* Vazamento Section */}
      <div data-vazamento-section>
        <VazamentoSection isVisible={showVazamento} />
      </div>
      
      {/* Mapeamento Section */}
      <div data-mapeamento-section>
        <MapeamentoSection isVisible={showMapeamento} />
      </div>
      
      {/* Cookies Section */}
      <div data-cookies-section>
        <CookiesSection isVisible={showCookies} />
      </div>
      
      {/* Auditoria Section */}
      <div data-auditoria-section>
        <AuditoriaSection isVisible={showAuditoria} />
      </div>
      
      {/* Documentacao Section */}
      <div data-documentacao-section>
        <DocumentacaoSection isVisible={showDocumentacao} />
      </div>

      {/* Scroll to top button - só aparece quando há alguma seção LGPD ativa */}
      {hasAnySection && <ScrollToTopButton />}
    </div>
  );
};

export default LGPDSections;
