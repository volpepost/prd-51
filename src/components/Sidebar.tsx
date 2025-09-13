
import React from 'react';
import { Card } from "@/components/ui/card";
import QRCodeDownload from './QRCodeDownload';
import ConsentimentoQuestion from "@/components/lgpd/sidebar/ConsentimentoQuestion";
import VazamentoQuestion from "@/components/lgpd/sidebar/VazamentoQuestion";
import CookiesQuestion from "@/components/lgpd/sidebar/CookiesQuestion";
import AuditoriaQuestion from "@/components/lgpd/sidebar/AuditoriaQuestion";
import AgendaQuestion from "@/components/lgpd/sidebar/AgendaQuestion";

interface SidebarProps {
  onQuestionClick: (questionTitle: string, question: string) => void;
}

const Sidebar = ({ onQuestionClick }: SidebarProps) => {
  const handleAuditoriaClick = () => {
    window.dispatchEvent(new CustomEvent('showAuditoria'));
  };

  const handleAgendaClick = () => {
    console.log('Clique no botão Agenda - disparando evento showAgenda');
    window.dispatchEvent(new CustomEvent('showAgenda'));
  };

  return (
    <div className="space-y-4 lg:pl-2 xl:pl-8">
      <Card className="backdrop-blur-glass bg-imetro-glass border-imetro-glass-border p-4">
        <h3 className="font-bold text-pastel-blue-medium mb-4 text-lg">Consultas Frequentes</h3>
        
        <div className="space-y-3">
          <AgendaQuestion onClick={handleAgendaClick} />
          <ConsentimentoQuestion onClick={onQuestionClick} />
          <AuditoriaQuestion onClick={handleAuditoriaClick} />
          <VazamentoQuestion onClick={onQuestionClick} />
          <CookiesQuestion onClick={onQuestionClick} />
        </div>
      </Card>
      
      {/* QR Code Download */}
      <QRCodeDownload />
    </div>
  );
};

export default Sidebar;
