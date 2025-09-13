
import React from 'react';
import GestaoDepositoCard from './cards/GestaoDepositoCard';
import AuditoriaDepositoCard from './cards/AuditoriaDepositoCard';
import ControleAcessoCard from './cards/ControleAcessoCard';
import LegislacaoCard from './cards/LegislacaoCard';

interface DepositoServiceCardsProps {
  onServiceClick: (serviceName: string, serviceDescription: string) => void;
}

const DepositoServiceCards = ({ onServiceClick }: DepositoServiceCardsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <GestaoDepositoCard onClick={onServiceClick} />
      <AuditoriaDepositoCard onClick={onServiceClick} />
      <ControleAcessoCard onClick={onServiceClick} />
      <LegislacaoCard onClick={onServiceClick} />
    </div>
  );
};

export default DepositoServiceCards;
