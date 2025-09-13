
import React from 'react';
import Header from "@/components/Header";
import DebugSection from "./DebugSection";

interface SiteStructureHeaderProps {
  onDebugClick: (event: React.MouseEvent, title: string, description: string) => void;
  onServiceClick?: (serviceName: string, serviceDescription: string) => void;
}

const SiteStructureHeader = ({ onDebugClick, onServiceClick }: SiteStructureHeaderProps) => {
  return (
    <DebugSection
      title="Header"
      description="Seção do cabeçalho principal"
      onDebugClick={onDebugClick}
    >
      <Header onServiceClick={onServiceClick} onDebugClick={onDebugClick} />
    </DebugSection>
  );
};

export default SiteStructureHeader;
