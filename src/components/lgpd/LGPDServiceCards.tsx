
import React from 'react';
import DocumentacaoCard from './cards/DocumentacaoCard';
import MapeamentoCard from './cards/MapeamentoCard';
import ProcessosCard from './cards/ProcessosCard';
import IncidentesCard from './cards/IncidentesCard';

interface LGPDServiceCardsProps {
  onServiceClick: (serviceName: string, serviceDescription: string) => void;
}

const LGPDServiceCards = ({ onServiceClick }: LGPDServiceCardsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <DocumentacaoCard onClick={onServiceClick} />
      <MapeamentoCard onClick={onServiceClick} />
      <ProcessosCard onClick={onServiceClick} />
      <IncidentesCard onClick={onServiceClick} />
    </div>
  );
};

export default LGPDServiceCards;
