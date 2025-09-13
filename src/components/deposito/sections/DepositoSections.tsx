
import React from 'react';
import GestaoDepositoSection from "@/components/GestaoDepositoSection";
import AuditoriaDepositoSection from "@/components/AuditoriaDepositoSection";
import ControleAcessoSection from "@/components/ControleAcessoSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

interface DepositoSectionsProps {
  showGestaoDeposito: boolean;
  showAuditoriaDeposito: boolean;
  showControleAcesso: boolean;
}

const DepositoSections = ({
  showGestaoDeposito,
  showAuditoriaDeposito,
  showControleAcesso
}: DepositoSectionsProps) => {
  const hasAnySection = showGestaoDeposito || showAuditoriaDeposito || showControleAcesso;

  return (
    <div className="relative">
      {/* Gestão Depósito Section */}
      <div data-gestao-deposito-section>
        <GestaoDepositoSection isVisible={showGestaoDeposito} />
      </div>
      
      {/* Auditoria Depósito Section */}
      <div data-auditoria-deposito-section>
        <AuditoriaDepositoSection isVisible={showAuditoriaDeposito} />
      </div>
      
      {/* Controle de Acesso Section */}
      <div data-controle-acesso-section>
        <ControleAcessoSection isVisible={showControleAcesso} />
      </div>

      {/* Scroll to top button - só aparece quando há alguma seção de depósito ativa */}
      {hasAnySection && <ScrollToTopButton />}
    </div>
  );
};

export default DepositoSections;
