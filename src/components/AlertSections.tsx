
import React from 'react';
import ConformidadeAlert from "@/components/shared/alerts/ConformidadeAlert";
import DiretoriaAlert from "@/components/shared/alerts/DiretoriaAlert";

interface AlertSectionsProps {
  onServiceClick: (serviceName: string, serviceDescription: string) => void;
  onDebugClick?: (event: React.MouseEvent, title: string, description: string) => void;
}

const AlertSections = ({ onServiceClick, onDebugClick }: AlertSectionsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ConformidadeAlert onClick={onServiceClick} onDebugClick={onDebugClick} />
      <DiretoriaAlert onClick={onServiceClick} onDebugClick={onDebugClick} />
    </div>
  );
};

export default AlertSections;
