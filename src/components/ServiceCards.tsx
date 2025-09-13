
import React from 'react';
import LGPDServiceCards from "@/components/lgpd/LGPDServiceCards";
import DepositoServiceCards from "@/components/deposito/DepositoServiceCards";

interface ServiceCardsProps {
  onServiceClick: (serviceName: string, serviceDescription: string) => void;
}

const ServiceCards = ({ onServiceClick }: ServiceCardsProps) => {
  return (
    <div className="space-y-6">
      <LGPDServiceCards onServiceClick={onServiceClick} />
      <DepositoServiceCards onServiceClick={onServiceClick} />
    </div>
  );
};

export default ServiceCards;
