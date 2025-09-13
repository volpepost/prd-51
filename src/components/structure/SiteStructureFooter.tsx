
import React from 'react';
import IndexFooter from "@/components/IndexFooter";
import DebugSection from "./DebugSection";

interface SiteStructureFooterProps {
  onDebugClick: (event: React.MouseEvent, title: string, description: string) => void;
}

const SiteStructureFooter = ({ onDebugClick }: SiteStructureFooterProps) => {
  return (
    <DebugSection
      title="Footer"
      description="Rodapé com navegação e informações"
      onDebugClick={onDebugClick}
    >
      <IndexFooter />
    </DebugSection>
  );
};

export default SiteStructureFooter;
