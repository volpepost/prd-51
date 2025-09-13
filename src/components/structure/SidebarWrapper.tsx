
import React from 'react';
import Sidebar from "@/components/Sidebar";
import DebugSection from "./DebugSection";

interface SidebarWrapperProps {
  handleQuestionClick: (questionTitle: string, question: string) => void;
  onDebugClick: (event: React.MouseEvent, title: string, description: string) => void;
}

const SidebarWrapper = ({ handleQuestionClick, onDebugClick }: SidebarWrapperProps) => {
  return (
    <DebugSection
      title="Sidebar"
      description="Barra lateral com consultas frequentes"
      onDebugClick={onDebugClick}
    >
      <Sidebar onQuestionClick={handleQuestionClick} />
    </DebugSection>
  );
};

export default SidebarWrapper;
