
import React from 'react';

interface DebugSectionProps {
  children: React.ReactNode;
  title: string;
  description: string;
  onDebugClick: (event: React.MouseEvent, title: string, description: string) => void;
}

const DebugSection = ({ children, title, description, onDebugClick }: DebugSectionProps) => {
  const handleClick = (e: React.MouseEvent) => {
    // Previne que cliques em elementos filhos interfiram
    e.stopPropagation();
    onDebugClick(e, title, description);
  };

  return (
    <div 
      onClick={handleClick}
      className="relative cursor-pointer"
      style={{ 
        outline: '1px dashed transparent',
        transition: 'outline-color 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.outlineColor = 'rgba(59, 130, 246, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.outlineColor = 'transparent';
      }}
    >
      {children}
    </div>
  );
};

export default DebugSection;
