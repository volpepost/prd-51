
import React from 'react';
import LGPDSections from "@/components/lgpd/sections/LGPDSections";
import DepositoSections from "@/components/deposito/sections/DepositoSections";
import ProcessosSection from "@/components/ProcessosSection";
import LegislacaoSection from "@/components/LegislacaoSection";
import FiscalizacaoSection from "@/components/FiscalizacaoSection";
import SobreOtaviaSection from "@/components/SobreOtaviaSection";
import AgendaSection from "@/components/AgendaSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

interface SpecialSectionsProps {
  showConsentimento: boolean;
  showVazamento: boolean;
  showMapeamento: boolean;
  showGestaoDeposito: boolean;
  showAuditoriaDeposito: boolean;
  showCookies: boolean;
  showAuditoria: boolean;
  showControleAcesso: boolean;
  showDocumentacao: boolean;
  showProcessos: boolean;
  showLegislacao: boolean;
  showFiscalizacao: boolean;
  showSobreOtavia: boolean;
  showAgenda: boolean;
}

const SpecialSections = ({
  showConsentimento,
  showVazamento,
  showMapeamento,
  showGestaoDeposito,
  showAuditoriaDeposito,
  showCookies,
  showAuditoria,
  showControleAcesso,
  showDocumentacao,
  showProcessos,
  showLegislacao,
  showFiscalizacao,
  showSobreOtavia,
  showAgenda
}: SpecialSectionsProps) => {
  return (
    <div className="space-y-8">
      {/* LGPD Sections */}
      <LGPDSections 
        showConsentimento={showConsentimento}
        showVazamento={showVazamento}
        showMapeamento={showMapeamento}
        showCookies={showCookies}
        showAuditoria={showAuditoria}
        showDocumentacao={showDocumentacao}
      />
      
      {/* Depósito Sections */}
      <DepositoSections 
        showGestaoDeposito={showGestaoDeposito}
        showAuditoriaDeposito={showAuditoriaDeposito}
        showControleAcesso={showControleAcesso}
      />

      {/* Agenda Section */}
      <div data-agenda-section className="relative">
        <AgendaSection isVisible={showAgenda} />
        {showAgenda && <ScrollToTopButton />}
      </div>

      {/* Sobre a OtavIA Section */}
      <div data-sobre-otavia-section className="relative">
        <SobreOtaviaSection isVisible={showSobreOtavia} />
        {showSobreOtavia && <ScrollToTopButton />}
      </div>

      {/* Legislação Section */}
      <div data-legislacao-section className="relative">
        <LegislacaoSection isVisible={showLegislacao} />
        {showLegislacao && <ScrollToTopButton />}
      </div>

      {/* Processos Section */}
      <div data-processos-section className="relative">
        <ProcessosSection isVisible={showProcessos} />
        {showProcessos && <ScrollToTopButton />}
      </div>

      {/* Fiscalização Section */}
      <div data-fiscalizacao-section className="relative">
        <FiscalizacaoSection isVisible={showFiscalizacao} />
        {showFiscalizacao && <ScrollToTopButton />}
      </div>
    </div>
  );
};

export default SpecialSections;
